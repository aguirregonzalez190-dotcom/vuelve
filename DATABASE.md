# Vuelve Database Schema

## Overview

Base de datos PostgreSQL con las siguientes tablas principales:
- `users` - Usuarios de la app
- `stores` - Tiendas registradas
- `offers` - Ofertas de las tiendas
- `transactions` - Historial de compras y puntos
- `qr_codes` - QR codes generados

---

## Table: users

Tabla de usuarios de la app Vuelve.

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL (hashed con bcrypt),
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  puntos INTEGER DEFAULT 0,
  nivel VARCHAR(50) DEFAULT 'bronze', -- bronze, silver, gold
  plan VARCHAR(50) DEFAULT 'gratis', -- gratis, plus
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  activo BOOLEAN DEFAULT true
);
```

### Columnas

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | UUID | Identificador único |
| `email` | VARCHAR | Email (único) |
| `password` | VARCHAR | Contraseña hasheada |
| `name` | VARCHAR | Nombre completo |
| `phone` | VARCHAR | Teléfono (opcional) |
| `puntos` | INTEGER | Puntos acumulados (1 pto = $100 gastado) |
| `nivel` | VARCHAR | bronze (0-999), silver (1000-2999), gold (3000+) |
| `plan` | VARCHAR | gratis o plus ($4.990/mes) |
| `created_at` | TIMESTAMP | Fecha de creación |
| `updated_at` | TIMESTAMP | Última actualización |
| `activo` | BOOLEAN | Cuenta activa o no |

### Niveles

- **Bronze** (0–999 puntos): Nivel inicial
- **Silver** (1000–2999 puntos): Requiere suscripción Plus para Gold
- **Gold** (3000+): Solo con Plus

---

## Table: stores

Tabla de tiendas registradas.

```sql
CREATE TABLE stores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL (hashed),
  nombre VARCHAR(255) NOT NULL,
  categoria VARCHAR(100) NOT NULL, -- gastronomía, mascotas, moda, etc
  phone VARCHAR(20),
  ubicacion VARCHAR(255),
  plan VARCHAR(50) DEFAULT 'gratis', -- gratis, pro, premium
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Planes

| Plan | Precio | Ofertas | Clientes | Recordatorios | Métricas |
|------|--------|---------|----------|---------------|---------
| Gratis | $0 | 2 | 100 | No | Básicas |
| Pro | $29.990 | Ilimitadas | Ilimitados | Sí | Completas |
| Premium | $59.990 | Ilimitadas | Ilimitados | Sí | Completas + Push masivas |

---

## Table: offers

Tabla de ofertas creadas por las tiendas.

```sql
CREATE TABLE offers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  store_id UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
  titulo VARCHAR(255) NOT NULL,
  descripcion TEXT,
  descuento INTEGER NOT NULL, -- porcentaje (1-100)
  valido_hasta TIMESTAMP,
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_offers_store_id ON offers(store_id);
CREATE INDEX idx_offers_activo ON offers(activo);
```

### Ejemplo

| store_id | titulo | descuento | valido_hasta |
|----------|--------|-----------|--------------|
| store-123 | 20% descuento en café | 20 | 2025-02-15 |
| store-456 | Sándwich + café a $5.990 | 15 | 2025-02-20 |

---

## Table: transactions

Historial de todas las transacciones (compras + puntos otorgados).

```sql
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  store_id UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
  monto INTEGER NOT NULL, -- en pesos CLP
  puntos_obtenidos INTEGER NOT NULL,
  qr_code VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_transactions_user_id ON transactions(user_id);
CREATE INDEX idx_transactions_store_id ON transactions(store_id);
CREATE INDEX idx_transactions_created_at ON transactions(created_at);
```

### Ejemplo

| user_id | store_id | monto | puntos_obtenidos | created_at |
|---------|----------|-------|------------------|------------|
| user-123 | store-123 | 8500 | 85 | 2025-01-15 10:00:00 |
| user-456 | store-123 | 12000 | 120 | 2025-01-15 10:15:00 |

---

## Table: qr_codes

Tabla de QR codes generados por usuarios.

```sql
CREATE TABLE qr_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code VARCHAR(255) UNIQUE NOT NULL,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  usado BOOLEAN DEFAULT false,
  usado_en TIMESTAMP,
  expira_en TIMESTAMP NOT NULL, -- +2 minutos desde creación
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_qr_codes_code ON qr_codes(code);
CREATE INDEX idx_qr_codes_user_id ON qr_codes(user_id);
CREATE INDEX idx_qr_codes_usado ON qr_codes(usado);
```

### Flujo QR

1. Usuario genera QR (POST /qr/generate)
2. `qr_codes.code` = generado (ej: QR-a1b2c3d4-1705352800000)
3. `qr_codes.expira_en` = ahora + 2 minutos
4. Usuario muestra QR en caja
5. Tienda valida (POST /transactions/validate-qr)
6. `qr_codes.usado` = true, `qr_codes.usado_en` = timestamp

---

## Relaciones

```
users
  ├── 1 : N → transactions (user_id)
  ├── 1 : N → qr_codes (user_id)
  └── N : M → stores (vía transactions)

stores
  ├── 1 : N → offers (store_id)
  ├── 1 : N → transactions (store_id)
  └── N : M → users (vía transactions)

offers
  └── N : 1 → stores (store_id)

transactions
  ├── N : 1 → users (user_id)
  └── N : 1 → stores (store_id)

qr_codes
  └── N : 1 → users (user_id)
```

---

## Queries Comunes

### Obtener puntos totales de un usuario

```sql
SELECT puntos, nivel FROM users WHERE id = 'user-123';
```

### Últimas transacciones de una tienda

```sql
SELECT t.*, u.name, u.email
FROM transactions t
JOIN users u ON t.user_id = u.id
WHERE t.store_id = 'store-123'
ORDER BY t.created_at DESC
LIMIT 20;
```

### Clientes únicos por tienda

```sql
SELECT COUNT(DISTINCT user_id) as clientes_unicos
FROM transactions
WHERE store_id = 'store-123';
```

### Revenue total de una tienda

```sql
SELECT SUM(monto) as revenue_total
FROM transactions
WHERE store_id = 'store-123'
AND created_at >= NOW() - INTERVAL '30 days';
```

### QR codes expirados (cleanup)

```sql
DELETE FROM qr_codes
WHERE expira_en < NOW() AND usado = false;
```

### Usuarios con más compras (leaderboard)

```sql
SELECT u.id, u.name, COUNT(*) as compras, SUM(t.monto) as gasto_total
FROM transactions t
JOIN users u ON t.user_id = u.id
GROUP BY u.id, u.name
ORDER BY compras DESC
LIMIT 10;
```

---

## Índices

Para optimizar queries comunes:

```sql
-- Ya creados arriba, pero resumen:
CREATE INDEX idx_users_nivel ON users(nivel);
CREATE INDEX idx_offers_store_id ON offers(store_id);
CREATE INDEX idx_offers_activo ON offers(activo);
CREATE INDEX idx_transactions_user_id ON transactions(user_id);
CREATE INDEX idx_transactions_store_id ON transactions(store_id);
CREATE INDEX idx_transactions_created_at ON transactions(created_at);
CREATE INDEX idx_qr_codes_code ON qr_codes(code);
CREATE INDEX idx_qr_codes_usado ON qr_codes(usado);
```

---

## Migrations (Supabase)

Si usas Supabase, puedes correr estos scripts en la SQL Console:

1. Copiar todo el SQL de este documento
2. Ir a Supabase Dashboard → SQL Editor
3. Pegar y ejecutar

---

## Data Size Estimation

Con 10.000 usuarios y 1.000 tiendas:

- `users`: ~2 MB
- `stores`: ~100 KB
- `offers`: ~500 KB
- `transactions`: ~50–100 MB (si hay 50K transacciones)
- `qr_codes`: ~5 MB (con cleanup diario)

**Total estimado: ~150 MB** (bien bajo para PostgreSQL)

---

## Backup Strategy

- **Daily backups**: Supabase lo hace automáticamente
- **Retention**: 7 days minimum
- **Recovery**: < 1 hora

---

## Seguridad

- Todas las contraseñas están hasheadas (bcryptjs)
- JWT tokens para autenticación stateless
- CORS configurado
- Rate limiting en API
- Índices para prevenir queries lentas

---

## Escalabilidad

Con este schema:
- **Hasta 1M usuarios**: Sin problemas
- **Hasta 100K tiendas**: Sin problemas
- **Hasta 1B transacciones**: Con sharding (futuro)

Para la V1.0 (primeros 12 meses) esto es más que suficiente.
