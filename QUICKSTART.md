# Quickstart - Cómo Correr Vuelve Localmente

## ⚡ TL;DR (2 minutos)

Abre 4 terminales y ejecuta esto en cada una:

**Terminal 1 - Backend**
```bash
cd ~/Developer/vuelve/backend && npm install && npm run dev
```

**Terminal 2 - App Tienda**
```bash
cd ~/Developer/vuelve/web && npm install && npm run dev
```

**Terminal 3 - App Usuario**
```bash
cd ~/Developer/vuelve/user && npm install && npm run dev
```

**Terminal 4 - Landing (opcional)**
```bash
cd ~/Developer/vuelve/landing && npm install && npm run dev
```

Luego abre en navegador:
- Landing: http://localhost:5175
- App Tienda: http://localhost:5173
- App Usuario: http://localhost:5174

---

## 📋 Requisitos

- **Node.js** 18+ (https://nodejs.org)
- **npm** (viene con Node)
- **Terminal** (Terminal.app en Mac, PowerShell en Windows, cualquiera en Linux)

Verifica:
```bash
node --version  # debe ser v18+
npm --version   # debe ser 8+
```

---

## 🚀 Paso a Paso

### Paso 1: Clona o descarga el proyecto

Si ya lo tienes en `~/Developer/vuelve`, salta al Paso 2.

Si no:
```bash
cd ~/Developer
git clone https://github.com/aguirregonzalez190-dotcom/vuelve.git
cd vuelve
```

### Paso 2: Abre 4 terminales nuevas

En Mac: **Cmd + N** para cada una  
En Windows: **Ctrl + Shift + +** (PowerShell) o abre 4 ventanas de Terminal

### Paso 3: Ejecuta en la Terminal 1 (Backend)

```bash
cd ~/Developer/vuelve/backend
npm install
npm run dev
```

**Espera hasta ver:**
```
Server running on port 3000
```

### Paso 4: Ejecuta en la Terminal 2 (App Tienda)

```bash
cd ~/Developer/vuelve/web
npm install
npm run dev
```

**Espera hasta ver:**
```
Local:   http://localhost:5173/
```

### Paso 5: Ejecuta en la Terminal 3 (App Usuario)

```bash
cd ~/Developer/vuelve/user
npm install
npm run dev
```

**Espera hasta ver:**
```
Local:   http://localhost:5174/
```

### Paso 6: (Opcional) Ejecuta en la Terminal 4 (Landing)

```bash
cd ~/Developer/vuelve/landing
npm install
npm run dev
```

**Espera hasta ver:**
```
Local:   http://localhost:5175/
```

### Paso 7: Abre en navegador

Abre un navegador y ve a:

1. **Landing Page**: http://localhost:5175
   - Hero section
   - Features
   - Planes
   - Email signup

2. **Dashboard Tienda**: http://localhost:5173
   - Login: cualquier email + contraseña
   - Dashboard con métricas
   - Botón "🚀 Mejorar Plan"
   - Validar códigos: LAUNCH50, BLACK40, REFERRAL

3. **App Usuario**: http://localhost:5174
   - Registro/Login: cualquier email + contraseña
   - Home con puntos
   - Botón "⭐ Mejorar a Plus"
   - Validar códigos: LAUNCH50, REFERRAL, FRIEND20

---

## 🔐 Credenciales Demo

No hay credenciales específicas. Usa cualquiera:

**Tienda:**
- Email: `cafe@vuelve.cl` (o cualquiera)
- Contraseña: `123456` (o cualquiera)

**Usuario:**
- Email: `juan@vuelve.cl` (o cualquiera)
- Contraseña: `123456` (o cualquiera)

---

## 🎯 Qué Probar

### App Tienda
1. ✅ Login
2. ✅ Ver dashboard con 4 métricas
3. ✅ Click en "Mejorar Plan"
4. ✅ Seleccionar Pro o Premium
5. ✅ Ingresar código: `LAUNCH50`
6. ✅ Ver descuento aplicado
7. ✅ Ver precio final calculado

### App Usuario
1. ✅ Registro
2. ✅ Ver puntos + nivel
3. ✅ Click en "Mejorar a Plus"
4. ✅ Ingresar código: `LAUNCH50`
5. ✅ Ver beneficios (2x puntos, desafíos, etc)
6. ✅ Ver precio con descuento
7. ✅ Generar QR (pestaña QR)

### Landing
1. ✅ Scroll por hero, features, planes
2. ✅ Ingresar email en CTA
3. ✅ Ver respuesta

---

## 🎮 Códigos de Promo para Probar

### Para Tiendas (App en 5173)
- `LAUNCH50` → 50% off
- `BLACK40` → 40% off
- `REFERRAL` → 100% off (1 mes gratis)
- `UPGRADE50` → 50% off

### Para Usuarios (App en 5174)
- `LAUNCH50` → 50% off primeros 3 meses
- `REFERRAL` → 1 mes gratis
- `FRIEND20` → 20% off

Ingresa cualquier código en el campo de promo y haz click en "Validar" (tienda) o "Usar" (usuario).

---

## 🛑 Troubleshooting

### Puerto ya en uso
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solución**: Cambia el puerto en `vite.config.js` o `.env`:
```javascript
// vite.config.js
server: {
  port: 3001  // cambio de 3000 a 3001
}
```

### Node no encontrado
```
command not found: node
```

**Solución**: Instala Node.js en https://nodejs.org

### npm install lento
```
npm notice slow request
```

**Solución**: Usa npm v9+ o instala dependencias sin optional:
```bash
npm install --no-optional
```

### Vite no recarga cambios
```bash
# Presiona Ctrl + C en la terminal
# Luego:
npm run dev
```

O borra caché:
```bash
rm -rf node_modules/.vite
npm run dev
```

---

## 📁 Estructura de Carpetas

```
backend/
  server.js          ← Servidor Express
  package.json
  
web/
  src/App.jsx        ← Dashboard tienda
  src/pages/PlanesPage.jsx  ← Página de planes
  vite.config.js
  
user/
  src/App.jsx        ← App usuario
  src/pages/PlanesPage.jsx  ← Modal de Plus
  vite.config.js
  
landing/
  src/App.jsx        ← Landing profesional
  vite.config.js
```

---

## 🔄 Flujo Típico de Desarrollo

1. **Abre 4 terminales**
2. **Corre npm install** una sola vez en cada carpeta
3. **npm run dev** para iniciar servidores
4. **Edita código** en Visual Studio (los cambios se recargan automáticamente)
5. **Ctrl + R** en navegador si necesitas limpiar caché

---

## 🚀 Próximas Fases

Para el **evento**, esto está 100% funcional.

Para **después del evento**:
- Conectar a Supabase real
- Implementar sistema de pago (Khipu)
- Recordatorios con IA (Claude API)
- Push notifications (Firebase)

---

## 📞 Ayuda

Si algo no funciona:

1. Verifica que tengas Node 18+: `node --version`
2. Borra `node_modules` e instala de nuevo: `rm -rf node_modules && npm install`
3. Mata todos los servidores (Ctrl + C) y reinicia
4. Abre issue en GitHub: https://github.com/aguirregonzalez190-dotcom/vuelve/issues

---

**¡Listo! Disfruta explorando Vuelve 🔄**
