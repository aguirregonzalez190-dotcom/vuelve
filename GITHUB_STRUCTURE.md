# 📁 Estructura Actual del Proyecto Vuelve

Este documento explica en detalle la arquitectura, carpetas y código del proyecto.

---

## 🏗️ Árbol Completo

```
vuelve/
├── backend/
│   ├── server.js           # Servidor Express (puerto 3000)
│   ├── package.json        # Dependencias
│   ├── .env.example        # Variables de entorno
│   └── .gitignore
│
├── web/                    # Dashboard para Tiendas (puerto 5173)
│   ├── src/
│   │   ├── App.jsx         # Componente principal con lógica
│   │   ├── pages/
│   │   │   └── PlanesPage.jsx    # Página de planes/suscripción
│   │   ├── main.jsx        # Entry point React
│   │   └── styles/         # (vacío, estilos inline)
│   ├── index.html          # HTML base con div#root
│   ├── vite.config.js      # Config Vite
│   ├── package.json        # Dependencias
│   └── .gitignore
│
├── user/                   # App para Usuarios (puerto 5174)
│   ├── src/
│   │   ├── App.jsx         # Componente principal
│   │   ├── pages/
│   │   │   └── PlanesPage.jsx    # Modal de Plus
│   │   ├── main.jsx        # Entry point
│   │   └── styles/         # (vacío)
│   ├── index.html          # HTML base
│   ├── vite.config.js      # Config Vite
│   ├── package.json        # Dependencias
│   └── .gitignore
│
├── landing/                # Landing Page (puerto 5175)
│   ├── src/
│   │   ├── App.jsx         # Componente landing
│   │   ├── main.jsx        # Entry point
│   ├── index.html          # HTML base
│   ├── vite.config.js      # Config Vite
│   ├── package.json        # Dependencias
│   └── .gitignore
│
├── docs/                   # Documentación
│   ├── README.md           # (este archivo)
│   ├── QUICKSTART.md       # Setup inicial
│   ├── ESTRUCTURA_ACTUAL.md    # Detalles técnicos
│   ├── PARA_EL_EVENTO_PLATANUS.md
│   ├── API.md              # Documentación API
│   ├── DATABASE.md         # Schema base de datos
│   └── ARCHITECTURE.md     # Decisiones técnicas
│
├── .gitignore             # Archivos ignorados por Git
├── README.md              # Overview del proyecto
└── (otros archivos de raíz)
```

---

## 📱 Frontend - App Tienda (web/)

### Puerto: 5173
### Tech: React 18 + Vite

### App.jsx (Componente Principal)

**Estados principales:**
```javascript
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [storeName, setStoreName] = useState('');
const [password, setPassword] = useState('');
const [activeTab, setActiveTab] = useState('dashboard');
const [qrGenerated, setQrGenerated] = useState(null);
const [showQRModal, setShowQRModal] = useState(false);
const [showPlanes, setShowPlanes] = useState(false);  // ← Nuevo
```

**Flujo principal:**
```
NOT LOGGED IN → Login Screen
    ↓
LOGGED IN + !showPlanes → Dashboard App
    - Tabs: dashboard, scanner, ofertas, clientes, recordatorios
    - Bottom navigation (5 botones)
    - Botón "🚀 Mejorar Plan" en dashboard
    ↓
showPlanes === true → PlanesPage (full screen)
    - Selector de planes (Gratis, Pro, Premium)
    - Validación de códigos de promo
    - Cálculo de descuentos
    - Botones de suscripción
```

### PlanesPage.jsx (Componente de Planes)

**Responsabilidades:**
- Mostrar 3 planes (Gratis, Pro, Premium)
- Campo de código de promo con validación
- Cálculo de precio final con descuentos
- Tabla comparativa de features
- Botones de acción

**Mock data de códigos:**
```javascript
const promoCodes = {
  'LAUNCH50': { discount: 50, message: '50% off lanzamiento' },
  'BLACK40': { discount: 40, message: '40% off Black Friday' },
  'REFERRAL': { discount: 100, message: '1 mes gratis' },
  'UPGRADE50': { discount: 50, message: '50% off upgrade' },
};
```

**Features comparadas:**
- Ofertas activas (2 vs ilimitado)
- Clientes máximo (100 vs ilimitado)
- Dashboard (básico vs avanzado)
- Recordatorios IA (no vs sí)
- Notificaciones push (no vs sí)
- Análisis avanzado (no vs sí)
- A/B Testing (no vs no vs sí)
- Integración POS (no vs no vs sí)

---

## 📱 Frontend - App Usuario (user/)

### Puerto: 5174
### Tech: React 18 + Vite

### App.jsx (Componente Principal)

**Estados principales:**
```javascript
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [isRegister, setIsRegister] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [name, setName] = useState('');
const [activeTab, setActiveTab] = useState('home');
const [qrTimer, setQrTimer] = useState(null);
const [currentQR, setCurrentQR] = useState(null);
const [showPlanes, setShowPlanes] = useState(false);  // ← Nuevo
```

**Flujo principal:**
```
NOT LOGGED IN → Login/Register Screen
    ↓
LOGGED IN + !showPlanes → App Completa
    - Tabs: home, ofertas, qr, historial
    - Bottom navigation (4 botones)
    - Card de puntos + "⭐ Mejorar a Plus"
    ↓
showPlanes === true → PlanesPage Modal
    - Hero con ⭐ Desbloquea Plus
    - Grid 2x2 de beneficios
    - Card con precio ($2.495 con 50% off)
    - Lista de features incluidas
    - FAQ section
    - Botones de acción
```

### PlanesPage.jsx (Modal de Plus)

**Responsabilidades:**
- Mostrar propuesta de Plus
- Grid 2x2 de beneficios (2x puntos, desafíos, canjes, referral)
- Validación de códigos de promo
- Cálculo de precio + ahorro
- Tabla comparativa Gratis vs Plus
- FAQ con 3 preguntas comunes

**Mock data de códigos:**
```javascript
const promoCodes = {
  'LAUNCH50': { discount: 50, message: '50% off primeros 3 meses' },
  'REFERRAL': { discount: 100, message: '1 mes gratis' },
  'FRIEND20': { discount: 20, message: 'Referral 20% off' },
};
```

**Beneficios de Plus:**
- 2x puntos en todas las compras
- Desafíos semanales con premios
- Canjes ilimitados (vs 3/mes en gratis)
- Referral program (gana sin límite)
- Recomendaciones personalizadas
- Sin publicidad
- Acceso a features beta

---

## 🌐 Frontend - Landing (landing/)

### Puerto: 5175
### Tech: React 18 + Vite

### App.jsx (Landing Page)

**Secciones:**
1. **Navigation** - Logo, links, botón CTA
2. **Hero** - Título grande, subtítulo, 2 botones (Comenzar, Ver Demo)
3. **Features** - 6 cards (App usuario, Dashboard, IA, Puntos, Para todos, Setup rápido)
4. **Plans** - 4 cards (Gratis, Pro, Plus, Premium)
5. **Stats** - 4 números (342 tiendas, 8K+ usuarios, $12.9M, 98% satisfacción)
6. **CTA** - Email signup con validación
7. **Footer** - Copyright, links

**Paleta de colores:**
- Principal: `#6C3FE0` (púrpura)
- Secundario: `#0F6E56` (verde)
- Background: `#f7f7f7` (gris claro)
- Text: `#1a1a1a` (casi negro)

---

## 🔧 Backend (backend/)

### Puerto: 3000
### Tech: Node.js + Express

### server.js (Componente Principal)

**Endpoints mock (sin BD real aún):**

```javascript
// POST /auth/register
// Retorna: { token, user: { id, puntos, nivel } }

// POST /auth/login
// Retorna: { token, user: { id, puntos, nivel } }

// POST /tiendas/crear-oferta
// Body: { tiendaId, titulo, descuento }
// Retorna: { success, ofertaId }

// GET /tiendas/:id/clientes
// Retorna: [ { id, name, puntos, compras } ]

// POST /transacciones/validar-qr
// Body: { qrCode, tiendaId, monto }
// Retorna: { success, puntosOtorgados, nuevoTotal }
```

**Estructura (para después del evento):**

```
backend/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── storeController.js
│   │   ├── userController.js
│   │   └── transactionController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Store.js
│   │   ├── Offer.js
│   │   └── Transaction.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── stores.js
│   │   ├── users.js
│   │   └── transactions.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── validation.js
│   └── server.js
```

---

## 📊 Base de Datos (Supabase PostgreSQL)

### Tablas Principales

#### users
```sql
id UUID PRIMARY KEY
email VARCHAR UNIQUE NOT NULL
password_hash VARCHAR NOT NULL
name VARCHAR
puntos INTEGER DEFAULT 0
nivel VARCHAR (bronze/silver/gold)
plan VARCHAR (gratis/plus)
created_at TIMESTAMP
```

#### stores
```sql
id UUID PRIMARY KEY
email VARCHAR UNIQUE NOT NULL
password_hash VARCHAR NOT NULL
name VARCHAR NOT NULL
plan VARCHAR (gratis/pro/premium)
metrics_transacciones INTEGER
metrics_clientes INTEGER
metrics_revenue DECIMAL
created_at TIMESTAMP
```

#### offers
```sql
id UUID PRIMARY KEY
store_id UUID REFERENCES stores(id)
titulo VARCHAR NOT NULL
descripcion TEXT
descuento INTEGER
active BOOLEAN
created_at TIMESTAMP
```

#### transactions
```sql
id UUID PRIMARY KEY
user_id UUID REFERENCES users(id)
store_id UUID REFERENCES stores(id)
monto DECIMAL NOT NULL
puntos_otorgados INTEGER
qr_code VARCHAR
validated_at TIMESTAMP
created_at TIMESTAMP
```

#### subscription_plans (futuro)
```sql
id UUID PRIMARY KEY
name VARCHAR (gratis/pro/premium/plus)
price DECIMAL
features JSONB
created_at TIMESTAMP
```

---

## 🔐 Autenticación (Futuro)

### JWT Strategy
```javascript
// Header
{
  "alg": "HS256",
  "typ": "JWT"
}

// Payload
{
  "sub": "user-123",
  "email": "juan@vuelve.cl",
  "tipo": "usuario",  // o "tienda"
  "plan": "gratis",
  "iat": 1234567890,
  "exp": 1234571490
}

// Signature
HMACSHA256(header + payload, secret)
```

---

## 📦 Dependencias Principales

### Frontend (web + user + landing)
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "vite": "^5.0.8"
}
```

### Backend
```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "@supabase/supabase-js": "^2.38.4",
  "jwt-simple": "^0.5.6",
  "bcryptjs": "^2.4.3",
  "uuid": "^9.0.0"
}
```

---

## 🚀 Flujos de Datos

### Flujo de Login/Registro (Usuario)

```
1. Usuario ingresa email + password en Form
2. onClick(handleRegister) / onClick(handleLogin)
3. Se valida que ambos campos están llenos
4. Se setea isLoggedIn = true
5. UI renderiza App (tabs + navigation)
6. Mock data de tiendas, ofertas, transacciones aparece
```

### Flujo de Upgrade a Plus

```
1. Usuario hace click en "⭐ Mejorar a Plus"
2. showPlanes = true
3. PlanesPage se renderiza (modal)
4. Usuario ingresa código de promo (ej: LAUNCH50)
5. onClick(handlePromoValidate)
6. Si válido: discount = 50, muestra ✅ Descuento aplicado
7. Precio se recalcula: $4.990 × 0.5 = $2.495
8. Usuario hace click en "Suscribirse"
9. Alert confirma la suscripción
```

### Flujo de Generación de QR (Usuario)

```
1. Usuario abre pestaña "QR"
2. Ve botón "Generar QR"
3. onClick(handleGenerateQR)
4. Se genera QR único: QR-USER-{timestamp}
5. Timer comienza en 120 segundos
6. QR aparece en pantalla con contador
7. Cada segundo: setQrTimer(t - 1)
8. Cuando timer = 0: QR desaparece, currentQR = null
9. Usuario puede generar otro QR
```

---

## 🎨 Design System

### Colores
- **Primary**: `#6C3FE0` (Púrpura)
- **Secondary**: `#0F6E56` (Verde)
- **Background**: `#f7f7f7` (Gris)
- **Text Dark**: `#1a1a1a`
- **Text Light**: `#666`
- **Border**: `#e0e0e0`

### Tipografía
- **Font-family**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Headings**: Bold (700)
- **Body**: Regular (400)

### Spacing
- **Small**: 8px
- **Medium**: 16px
- **Large**: 24px
- **XL**: 32px+

### Radius
- **Buttons**: 8px
- **Cards**: 12px
- **Large elements**: 16px

---

## 🔄 Git Workflow

### Commits recientes
```
Feat: Add subscription plans UI for stores and users
Feat: Add landing page for Vuelve
Feat: Add subscription plans page for users
Feat: Add subscription plans page for stores
```

### Cómo pushear cambios
```bash
cd ~/Developer/vuelve
git add .
git commit -m "Feat: [descripción corta]"
git push origin main
```

---

## 📈 Métricas & Tracking (Futuro)

### Event tracking (con Mixpanel/Plausible)
```
- user_signup
- user_login
- plan_upgrade_viewed
- plan_upgrade_completed
- qr_generated
- qr_scanned
- offer_viewed
- offer_applied
```

### Performance metrics
```
- Lighthouse score
- Core Web Vitals
- Page load time
- API response time
```

---

## 🛠️ Herramientas de Desarrollo

### Debugging
- **Browser DevTools** (F12 o Cmd+Option+I)
- **Console.log** en código
- **Network tab** para ver requests

### Performance
- **Lighthouse** (chrome://inspect)
- **React DevTools** extension
- **Vite Dashboard** (cuando corre con --debug)

---

## 📝 Próximos Pasos Técnicos

1. **Conectar a Supabase real**
   - Crear tablas
   - Importar datos seed
   - Ajustar queries

2. **Implementar autenticación JWT real**
   - Validar credenciales contra BD
   - Generar tokens reales
   - Validar tokens en requests

3. **Integración de Pagos (Khipu)**
   - Crear endpoint POST /pagos/crear
   - Recibir webhooks de Khipu
   - Actualizar plan en BD

4. **Notificaciones Push (Firebase)**
   - Registrar device tokens
   - Enviar push desde backend
   - Manejar clicks en notificaciones

5. **IA (Claude API)**
   - Generar mensajes de recordatorio
   - Detectar churn
   - Sugerencias de ofertas

---

## 🎯 Conclusión

Este documento resume la estructura actual (MVP). Todos los componentes están funcionales localmente, listos para el evento.

Para el **después del evento**, necesitamos conectar el backend real + BD + pagos + IA.

---

*Última actualización: 3 de Julio 2025*
