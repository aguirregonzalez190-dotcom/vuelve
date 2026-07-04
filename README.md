# Vuelve 🔄

**Plataforma de fidelización digital para comercios independientes en Chile.**

> Conecta usuarios que quieren ahorrar con tiendas que necesitan clientes recurrentes.

---

## 📌 El Pitch (30 segundos)

Vuelve es el Rappi Rewards de Chile pero para comercios pequeños. Los usuarios acumulan puntos en sus tiendas favoritas, ascienden en niveles (Bronze/Silver/Gold) y canajan descuentos. Las tiendas obtienen tráfico recurrente + datos de consumo + recordatorios inteligentes.

**Diferenciador**: Recordatorios IA que detectan cuándo un cliente está a punto de dejar de venir y lo trae de vuelta automáticamente.

---

## 🎯 Problema + Solución

### Problema
- **Para Usuarios**: No hay forma de ahorrar en tiendas locales de barrio. Competencia (Welcome Back) solo cubre gastronomía, Puntos Cencosud solo cadenas grandes.
- **Para Tiendas**: Pierden clientes cada mes. No tienen herramientas de fidelización digital. Comprar software de CRM es caro ($3K+/mes).

### Solución
- **App Usuario**: Acumular puntos (1 pto = $100 gastado), ver ofertas, generar QR para pagar, nivel Gold con beneficios
- **App Tienda**: Dashboard con métricas, crear ofertas, ver clientes, recordatorios automáticos, validar compras con QR

---

## 🏗️ Estructura del Proyecto

```
vuelve/
├── backend/                 # API Node.js + Express (puerto 3000)
│   ├── server.js           # Servidor principal
│   ├── package.json
│   └── .env.example
│
├── web/                     # Dashboard Tiendas (React, puerto 5173)
│   ├── src/
│   │   ├── App.jsx         # Componente principal
│   │   ├── pages/
│   │   │   └── PlanesPage.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── user/                    # App Usuario (React, puerto 5174)
│   ├── src/
│   │   ├── App.jsx         # Componente principal
│   │   ├── pages/
│   │   │   └── PlanesPage.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── landing/                 # Landing Page (React, puerto 5175)
│   ├── src/
│   │   └── App.jsx         # Landing profesional
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── docs/
    ├── README.md           # Este archivo
    ├── QUICKSTART.md       # Cómo correr todo
    ├── ESTRUCTURA_ACTUAL.md    # Detalles técnicos
    └── PARA_EL_EVENTO_PLATANUS.md  # Info para Platanus
```

---

## 🚀 Inicio Rápido (2 minutos)

### Requisitos
- Node.js 18+
- npm

### Opción A: Correr TODO (3 terminales)

**Terminal 1 - Backend**
```bash
cd ~/Developer/vuelve/backend
npm install
npm run dev
# Corre en http://localhost:3000
```

**Terminal 2 - App Tienda**
```bash
cd ~/Developer/vuelve/web
npm install
npm run dev
# Corre en http://localhost:5173
```

**Terminal 3 - App Usuario**
```bash
cd ~/Developer/vuelve/user
npm install
npm run dev
# Corre en http://localhost:5174
```

**Terminal 4 - Landing Page (opcional)**
```bash
cd ~/Developer/vuelve/landing
npm install
npm run dev
# Corre en http://localhost:5175
```

### Opción B: Acceder a URLs locales
- **Landing**: http://localhost:5175
- **Dashboard Tienda**: http://localhost:5173
- **App Usuario**: http://localhost:5174
- **API Backend**: http://localhost:3000

---

## 📱 Features Implementadas (MVP)

### ✅ App Tienda (Dashboard)
- Login/logout
- Dashboard con 4 métricas (transacciones, clientes, revenue, promedio)
- Crear y gestionar ofertas
- Ver lista de clientes (con niveles)
- Recordatorios inteligentes para contactar clientes
- Escáner QR simulado
- **Planes**: Gratis, Pro, Premium (con validación de códigos de promo)
- Botón "Mejorar Plan" con cálculo de descuentos

### ✅ App Usuario
- Login/registro
- Home con tiendas cercanas
- Ver ofertas disponibles
- Generar QR para pagar (válido 2 min)
- Panel de puntos + nivel (Bronze/Silver/Gold)
- Historial de transacciones
- **Planes**: Gratis, Plus (con validación de códigos de promo)
- Botón "Mejorar a Plus" con cálculo de descuentos

### ✅ Landing Page
- Hero section
- 6 feature cards
- Planes comparativos (4 tarjetas)
- Stats section
- Email signup
- Footer

### ✅ Códigos de Promo (Mock)
- `LAUNCH50`: 50% off primeros 30 días
- `BLACK40`: 40% off anual (Black Friday)
- `REFERRAL`: 1 mes gratis (por cada 3 referidos)
- `UPGRADE50`: 50% off upgrade (3 meses + 1 mes gratis)

---

## 🔄 Flujos Principales

### Flujo Usuario
```
Login/Registro
    ↓
Home (tiendas cercanas + puntos)
    ↓
Click "Mejorar a Plus" → Modal de planes
    ↓
Ingresar código de promo (opcional)
    ↓
Ver precio con descuento
    ↓
Click "Suscribirse" → Alert de confirmación
```

### Flujo Tienda
```
Login
    ↓
Dashboard (métricas + clientes)
    ↓
Click "Mejorar Plan" → Página de planes
    ↓
Seleccionar Gratis/Pro/Premium
    ↓
Ingresar código de promo (opcional)
    ↓
Ver precio con descuento
    ↓
Click "Suscribirse" → Alert de confirmación
```

---

## 💰 Planes y Precios

### Para Tiendas
| Plan | Precio | Features |
|------|--------|----------|
| **Gratis** | $0/mes | 2 ofertas, 100 clientes, dashboard básico |
| **Pro** | $29.990/mes | Ilimitado + Recordatorios IA + Analytics |
| **Premium** | $59.990/mes | Pro + A/B Testing + POS + Banner destacado |

### Para Usuarios
| Plan | Precio | Features |
|------|--------|----------|
| **Gratis** | $0 | 1x puntos, 3 canjes/mes, Bronze/Silver |
| **Plus** | $4.990/mes | 2x puntos, ilimitado, Gold, referral, sin ads |

### Códigos de Promo
- **Lanzamiento**: 50% off x 30 días
- **Referral**: 1 mes gratis cada 3 referidos
- **Black Friday**: 40% off contratación anual
- **Upgrade**: 3 meses a precio reducido + 1 mes gratis

---

## 🛠️ Stack Tecnológico

| Capa | Tech | Puerto |
|------|------|--------|
| **Backend** | Node.js + Express | 3000 |
| **App Tienda** | React + Vite | 5173 |
| **App Usuario** | React + Vite | 5174 |
| **Landing** | React + Vite | 5175 |
| **Database** | PostgreSQL (Supabase) | - |
| **Auth** | JWT | - |
| **Cache** | Redis | - |

---

## 📊 Estado del Proyecto

### Completado (MVP) ✅
- [x] Estructura base de 3 apps
- [x] Planes y precios definidos
- [x] Códigos de promo funcionales
- [x] UI responsive móvil
- [x] Landing page profesional

### En Progreso 🔄
- [ ] Backend conectado a Supabase real
- [ ] Sistema de pago (Khipu)
- [ ] Recordatorios IA reales (Claude API)
- [ ] Notificaciones push (Firebase)

### Pendiente 🔮
- [ ] A/B Testing de ofertas
- [ ] Análisis predictivo (churn)
- [ ] Integración POS
- [ ] Expansión a ciudades

---

## 🎯 Próximos Pasos

1. **Backend Real**: Conectar con Supabase, implementar autenticación real
2. **Sistema de Pago**: Integrar Khipu para transacciones
3. **Recordatorios**: Usar Claude API para generar mensajes personalizados
4. **Push Notifications**: Firebase para notificaciones en tiempo real
5. **Deploy**: Vercel (frontend), Railway/Render (backend)

---

## 🤝 Cómo Empezar

1. Clone el repo
2. Siga las instrucciones en [QUICKSTART.md](./QUICKSTART.md)
3. Abra 3-4 terminales y corra los servidores
4. Visite las URLs locales

Para asistentes de **Platanus**, ver [PARA_EL_EVENTO_PLATANUS.md](./PARA_EL_EVENTO_PLATANUS.md)

---

## 📧 Contacto

**Creador**: Jose Aguirre  
**Email**: joseaguirre@vuelve.cl  
**GitHub**: https://github.com/aguirregonzalez190-dotcom/vuelve

---

**Estado**: MVP en desarrollo (Enero 2025)  
**Última actualización**: 3 de Julio 2025
