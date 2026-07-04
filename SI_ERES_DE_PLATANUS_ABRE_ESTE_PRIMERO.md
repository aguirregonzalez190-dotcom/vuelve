# 🚀 Vuelve - Guía para Asistentes de Platanus

Hola! 👋

Este archivo es solo para Platanus AI Native Startups

---

## 📱 ¿Qué es Vuelve en 60 segundos?

**Vuelve** = Rappi Rewards pero para comercios pequeños de barrio en Chile.

Los usuarios acumulan puntos en cafés, almacenes, peluquerías, etc a cambio de descuentos. Las tiendas obtienen tráfico recurrente + datos + recordatorios inteligentes.


---


## 🏃 Cómo Explorar en 5 Minutos

### Opción 1: Online (sin instalar nada)

1. Vayan a: https://github.com/aguirregonzalez190-dotcom/vuelve
2. Lean [README.md](./README.md) (visión general)
3. El código está público, exploren `web/` y `user/`

### Opción 2: Local (instalar y probar)

**Requisitos**: Node 18+ (2 min de instalación)

```bash
# Terminal 1 - Backend
cd ~/Developer/vuelve/backend
npm install && npm run dev

# Terminal 2 - Tienda
cd ~/Developer/vuelve/web
npm install && npm run dev

# Terminal 3 - Usuario  
cd ~/Developer/vuelve/user
npm install && npm run dev
```

Luego abre:
- **App Tienda**: http://localhost:5173 (login: cualquier email)
- **App Usuario**: http://localhost:5174 (registro: cualquier email)

Ver [QUICKSTART.md](./QUICKSTART.md) para detalles completos.

---

## 📊 Qué Está Completado

### ✅ MVP Funcional
- [x] 3 apps (tienda, usuario, landing) corriendo
- [x] UI responsive móvil
- [x] Planes y precios definidos (Gratis, Pro, Premium para tiendas)
- [x] Códigos de promo (LAUNCH50, BLACK40, REFERRAL)
- [x] Cálculo dinámico de descuentos
- [x] Landing page profesional

### ❌ Lo que Falta 
- [ ] Backend conectado a Supabase real
- [ ] Sistema de pago (Khipu)
- [ ] Base de datos funcional
- [ ] Autenticación real (ahora es mock)
- [ ] Notificaciones push (Firebase)
- [ ] Recordatorios IA (Claude API)

---

## 💼 Casos de Uso para Platanus

### 1. **IA + Recordatorios Inteligentes**
Usar Claude API para generar mensajes personalizados:
```
"Hola Juan, hace 5 días no compras café. 
Ven hoy y lleva 2, paga 1 ☕"
```

### 2. **Análisis Predictivo**
Detectar qué clientes se van a ir (churn prediction) y enviar oferta antes de que se vayan.

### 3. **A/B Testing de Ofertas**
Probar 2 ofertas simultáneamente y ver cuál vende más.

### 4. **Segmentación Avanzada**
Usar datos de compra para enviar notificaciones solo a clientes relevantes.

### 5. **Fraud Detection**
Detectar QRs falsos o transacciones sospechosas.


---

## 📁 Estructura Técnica (para devs)

```
vuelve/
├── backend/          Node.js + Express (puerto 3000)
├── web/              React + Vite (Dashboard tienda, 5173)
├── user/             React + Vite (App usuario, 5174)
└── landing/          React + Vite (Landing, 5175)
```

**Stack**:
- Frontend: React + Vite (todo en JS)
- Backend: Express.js
- Database: PostgreSQL (Supabase)
- Auth: JWT
- Payments: Khipu
- IA: Claude API
- Push: Firebase

---

## 🎮 Demo en 3 Clics

### Para Tiendas
1. Abre http://localhost:5173
2. Login (cualquier email)
3. Click en "🚀 Mejorar Plan"
4. Ingresa código: `LAUNCH50`
5. Ve el descuento aplicado ✨

### Para Usuarios
1. Abre http://localhost:5174
2. Registro (cualquier email)
3. Click en "⭐ Mejorar a Plus"
4. Ingresa código: `LAUNCH50`
5. Ve los beneficios + precio con descuento ✨

---

## 🤔 Preguntas Comunes

### P: ¿Es viable competir con Welcome Back?
**R**: Welcome Back es solo gastronomía. Nosotros somos multi-rubro (almacén, peluquería, farmacia, etc). Además, ellos no tienen recordatorios IA.

### P: ¿Por qué es difícil que las tiendas lo adopten?
**R**: Gratis al principio, luego Pro ($30K/mes) cuando ven valor. Es cheap vs competitors que cobran $3-5K.

### P: ¿Cómo monetizas los usuarios?
**R**: Plan Plus ($5K/mes) con 2x puntos, ilimitado, sin ads. Además, notificaciones patrocinadas.

### P: ¿Quién es la competencia principal?
**R**: Welcome Back (gastronomía), Puntos Cencosud (cadenas), pero nadie hace multi-rubro + IA.

### P: ¿Cuál es el diferenciador vs Rappi Rewards?
**R**: Rappi es un marketplace (compras directas). Nosotros somos fidelización pura (cliente va a tienda física).

---

## 📞 Contacto

**Si quieren:**
- Invertir
- Colaborar técnicamente
- Hacer partnership
- Contratar a Jose

**Contacto:**
- **Email**: aguirregonzalez190@gmail.com
- **GitHub**: https://github.com/aguirregonzalez190-dotcom/vuelve
- **LinkedIn**: in/jose-aguirre-gonzalez/
- **Whatsapp**: +56942386840

---


## 📚 Documentación Adicional

Si quieren profundizar:
- [README.md](./README.md) - Visión general
- [QUICKSTART.md](./QUICKSTART.md) - Cómo instalarlo
- [ESTRUCTURA_ACTUAL.md](./ESTRUCTURA_ACTUAL.md) - Detalles técnicos

---

*Creado para Platanus AI Native Startups*
