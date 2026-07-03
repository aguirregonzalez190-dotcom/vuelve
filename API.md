# Vuelve API Documentation

## Base URL

```
http://localhost:3000
```

## Authentication

Todos los endpoints protegidos requieren un JWT token en el header:

```
Authorization: Bearer <token>
```

---

## 🔐 Authentication Endpoints

### POST /auth/register

Registrar un nuevo usuario.

**Body:**
```json
{
  "email": "usuario@example.com",
  "password": "securePassword123",
  "phone": "+56912345678",
  "name": "Juan Pérez"
}
```

**Response (201):**
```json
{
  "token": "eyJhbGc...",
  "user": {
    "id": "uuid",
    "email": "usuario@example.com",
    "name": "Juan Pérez",
    "puntos": 0,
    "nivel": "bronze"
  }
}
```

---

### POST /auth/login

Ingresar con email y contraseña.

**Body:**
```json
{
  "email": "usuario@example.com",
  "password": "securePassword123"
}
```

**Response (200):**
```json
{
  "token": "eyJhbGc...",
  "user": {
    "id": "uuid",
    "email": "usuario@example.com",
    "name": "Juan Pérez",
    "puntos": 2340,
    "nivel": "silver"
  }
}
```

---

### POST /auth/store-register

Registrar una nueva tienda.

**Body:**
```json
{
  "email": "admin@cafevuelve.cl",
  "password": "storePassword123",
  "storeName": "Café Vuelve",
  "category": "Gastronomía",
  "phone": "+56912345678",
  "ubicacion": "Providencia, Santiago"
}
```

**Response (201):**
```json
{
  "token": "eyJhbGc...",
  "store": {
    "id": "uuid",
    "email": "admin@cafevuelve.cl",
    "nombre": "Café Vuelve",
    "categoria": "Gastronomía",
    "plan": "gratis"
  }
}
```

---

## 💰 Transaction Endpoints

### POST /transactions/validate-qr

Validar un QR y otorgar puntos al usuario.

**Headers:**
```
Authorization: Bearer <token>
```

**Body:**
```json
{
  "qrCode": "QR-12a3b4cd-1705352800000",
  "storeId": "store-uuid",
  "monto": 8500
}
```

**Response (200):**
```json
{
  "success": true,
  "puntosOtorgados": 85,
  "puntosTotales": 2425,
  "nuevoNivel": "silver",
  "mensaje": "¡85 puntos otorgados! Tienes 2425 puntos totales."
}
```

---

### POST /qr/generate

Generar un nuevo QR para el usuario.

**Headers:**
```
Authorization: Bearer <token>
```

**Body:** (vacío)

**Response (200):**
```json
{
  "qrCode": "QR-a1b2c3d4-1705352800000",
  "expiraEn": "2025-01-15T15:35:00Z",
  "segundosRestantes": 120
}
```

**Notas:**
- El QR expira después de 2 minutos
- Solo puede usarse una vez
- Timer recomienda regenerar antes de que expire

---

## 🏪 Store Endpoints

### GET /stores

Obtener lista de tiendas disponibles.

**Query Parameters:**
- `limit` (opcional): Cantidad máxima de resultados (default: 50)
- `offset` (opcional): Para paginación
- `category` (opcional): Filtrar por categoría

**Response (200):**
```json
[
  {
    "id": "store-123",
    "nombre": "Café Vuelve",
    "categoria": "Gastronomía",
    "ubicacion": "Providencia, Santiago",
    "created_at": "2025-01-01T10:00:00Z"
  },
  {
    "id": "store-456",
    "nombre": "Pet Shop Vuelve",
    "categoria": "Mascotas",
    "ubicacion": "Ñuñoa, Santiago",
    "created_at": "2025-01-05T14:30:00Z"
  }
]
```

---

### POST /offers

Crear una nueva oferta (requiere ser tienda).

**Headers:**
```
Authorization: Bearer <token-tienda>
```

**Body:**
```json
{
  "titulo": "20% descuento en café",
  "descripcion": "Válido para cualquier bebida caliente",
  "descuento": 20,
  "validoHasta": "2025-02-15T23:59:59Z"
}
```

**Response (201):**
```json
{
  "id": "offer-123",
  "store_id": "store-123",
  "titulo": "20% descuento en café",
  "descripcion": "Válido para cualquier bebida caliente",
  "descuento": 20,
  "valido_hasta": "2025-02-15T23:59:59Z",
  "activo": true,
  "created_at": "2025-01-15T10:00:00Z"
}
```

---

### GET /offers/:storeId

Obtener ofertas de una tienda específica.

**Response (200):**
```json
[
  {
    "id": "offer-123",
    "store_id": "store-123",
    "titulo": "20% descuento en café",
    "descuento": 20,
    "activo": true,
    "created_at": "2025-01-15T10:00:00Z"
  }
]
```

---

## 📊 Store Dashboard Endpoints

### GET /store/metrics

Obtener métricas de la tienda (requiere ser tienda).

**Headers:**
```
Authorization: Bearer <token-tienda>
```

**Response (200):**
```json
{
  "totalTransacciones": 1243,
  "clientesUnicos": 342,
  "revenueTotal": 8650000,
  "promedioTransaccion": 6950,
  "tasaRetorno": "27.4%"
}
```

---

## ❌ Error Responses

### 400 Bad Request
```json
{
  "error": "Campos requeridos faltando"
}
```

### 401 Unauthorized
```json
{
  "error": "Token requerido"
}
```

### 404 Not Found
```json
{
  "error": "Endpoint no encontrado"
}
```

### 500 Internal Server Error
```json
{
  "error": "Error en servidor"
}
```

---

## 🔄 Workflow Ejemplo

### Flujo usuario registrándose y haciendo compra:

1. **Registro**
   ```bash
   POST /auth/register
   ```
   → Recibe token + usuario (0 puntos, nivel bronze)

2. **Obtener tiendas disponibles**
   ```bash
   GET /stores
   ```
   → Recibe lista de tiendas

3. **Ver ofertas de una tienda**
   ```bash
   GET /offers/store-123
   ```
   → Recibe ofertas activas

4. **Generar QR antes de comprar**
   ```bash
   POST /qr/generate
   Authorization: Bearer <token>
   ```
   → Recibe QR con 2 minutos de validez

5. **Validar QR en caja (tienda)**
   ```bash
   POST /transactions/validate-qr
   Authorization: Bearer <token-tienda>
   Body: { qrCode, storeId, monto }
   ```
   → Usuario recibe puntos, sube nivel si corresponde

---

## 📱 Mobile App Integration Example

```javascript
// Login
const loginResponse = await fetch('http://localhost:3000/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123'
  })
});

const { token } = await loginResponse.json();

// Generate QR
const qrResponse = await fetch('http://localhost:3000/qr/generate', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});

const { qrCode } = await qrResponse.json();
// Mostrar QR en pantalla (barcode/qrcode library)
```

---

## Rate Limiting

- 100 requests por minuto por IP
- 1000 requests por hora por usuario autenticado

---

## CORS

Enabled en: `http://localhost:3000,http://localhost:5173,https://vuelve.cl`

---

## Status Check

```bash
GET /health
```

**Response (200):**
```json
{
  "status": "ok",
  "timestamp": "2025-01-15T15:30:00Z"
}
```
