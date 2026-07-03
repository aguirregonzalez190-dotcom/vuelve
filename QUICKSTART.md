# Vuelve Quick Start Guide

Guía para empezar a desarrollar Vuelve en tu máquina local en 5 minutos.

---

## Prerequisites

Asegúrate de tener instalado:
- **Node.js** (v18 o superior): https://nodejs.org/
- **Git**: https://git-scm.com/

Verifica:
```bash
node --version    # v18.x.x
npm --version     # 9.x.x
git --version     # 2.x.x
```

---

## 1. Clone el Repositorio

```bash
git clone https://github.com/yourusername/vuelve.git
cd vuelve
```

---

## 2. Setup Supabase (Database)

### Opción A: Usar Supabase gratuito (Recomendado)

1. Ir a https://supabase.com/ y hacer sign up
2. Crear nuevo proyecto
3. En Settings → API, copiar:
   - `SUPABASE_URL` (Project URL)
   - `SUPABASE_KEY` (anon key)
4. Copiar la URL a un lugar seguro

### Opción B: PostgreSQL local (Avanzado)

```bash
# macOS con Homebrew
brew install postgresql
brew services start postgresql

# Linux
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql

# Verificar
psql --version
```

---

## 3. Setup Backend

```bash
cd backend

# Copiar environment
cp .env.example .env

# Editar .env con tus credenciales
# nano .env  (o usa tu editor favorito)
# Pega estos valores:
# PORT=3000
# JWT_SECRET=tu-secret-super-seguro
# SUPABASE_URL=https://xxxxx.supabase.co
# SUPABASE_KEY=eyJhbGc...

# Instalar dependencias
npm install

# Iniciar servidor
npm run dev
```

**Salida esperada:**
```
🚀 Vuelve API corriendo en http://localhost:3000
📚 Documentación: http://localhost:3000/docs
```

**Verificar:**
```bash
curl http://localhost:3000/health
# {"status":"ok","timestamp":"2025-01-15T..."}
```

---

## 4. Setup Frontend

En una **nueva terminal**:

```bash
cd web

# Instalar dependencias
npm install

# Iniciar dev server
npm run dev
```

**Salida esperada:**
```
VITE v5.0.8  ready in 123 ms

➜  Local:   http://localhost:5173/
➜  Press h to show help
```

Abre http://localhost:5173 en tu navegador.

---

## 5. Test the API

### Registrar un usuario

```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Password123!",
    "name": "Test User"
  }'
```

**Respuesta esperada:**
```json
{
  "token": "eyJhbGc...",
  "user": {
    "id": "uuid",
    "email": "test@example.com",
    "name": "Test User",
    "puntos": 0,
    "nivel": "bronze"
  }
}
```

Copia el `token` para los siguientes requests.

### Generar QR

```bash
curl -X POST http://localhost:3000/qr/generate \
  -H "Authorization: Bearer <PASTE_TOKEN_HERE>" \
  -H "Content-Type: application/json"
```

### Ver status del API

```bash
curl http://localhost:3000/health
```

---

## 6. File Structure

```
vuelve/
├── README.md
├── backend/              ← API (Node.js)
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── web/                  ← Dashboard (React)
│   ├── src/
│   ├── package.json
│   └── vite.config.js
└── docs/
    ├── API.md
    ├── DATABASE.md
    └── ARCHITECTURE.md
```

---

## 7. Common Commands

### Backend

```bash
cd backend

npm run dev      # Start dev server (con hot reload)
npm start        # Start production server
npm test         # Run tests (cuando existan)
```

### Frontend

```bash
cd web

npm run dev      # Start Vite dev server
npm run build    # Build para producción
npm run preview  # Preview la build
```

---

## 8. Environment Variables

### Backend (.env)

```env
PORT=3000
JWT_SECRET=your-super-secret-key-here
NODE_ENV=development

# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key

# Opcionales (agregar cuando implementes)
FIREBASE_API_KEY=...
SENDGRID_API_KEY=...
CLAUDE_API_KEY=...
```

### Frontend (.env)

```env
REACT_APP_API_URL=http://localhost:3000
```

---

## 9. Troubleshooting

### "Port 3000 already in use"

```bash
# macOS/Linux
lsof -i :3000
kill -9 <PID>

# O cambiar puerto en .env:
PORT=3001
```

### "Cannot find module 'express'"

```bash
cd backend
npm install
```

### "ECONNREFUSED on Supabase"

1. Verifica `SUPABASE_URL` y `SUPABASE_KEY` en `.env`
2. Confirma que el proyecto existe en https://supabase.com
3. Prueba conectar directamente:
   ```bash
   psql "postgresql://[user]:[password]@[host]:5432/[database]"
   ```

### "CORS Error in browser"

Asegúrate de que `ALLOWED_ORIGINS` en backend incluya `http://localhost:5173`

---

## 10. Next Steps

1. **Crear tu rama de desarrollo:**
   ```bash
   git checkout -b feature/mi-feature
   ```

2. **Hacer cambios** y commitear:
   ```bash
   git add .
   git commit -m "Feat: describe lo que hiciste"
   git push origin feature/mi-feature
   ```

3. **Crear Pull Request** en GitHub

4. **Leer la documentación:**
   - `API.md` - Endpoints disponibles
   - `DATABASE.md` - Schema SQL
   - `ARCHITECTURE.md` - Cómo funciona todo

---

## 11. VSCode Extensions (Recomendado)

Para mejor experiencia de desarrollo:

- **REST Client** - Testear API dentro de VSCode
- **Thunder Client** - Cliente HTTP alternativo
- **Postman** - Colección de requests

---

## 12. Database Setup (Supabase)

Una vez que tienes Supabase configurado, corre estas queries en el SQL editor:

1. Ve a Supabase Dashboard → SQL Editor
2. Crea una nueva query
3. Copia el contenido de `DATABASE.md`
4. Ejecuta

---

## Useful Resources

- **Supabase Docs**: https://supabase.com/docs
- **Express.js**: https://expressjs.com/
- **React**: https://react.dev/
- **API Testing**: https://www.postman.com/
- **Database Tool**: https://dbeaver.io/

---

## Getting Help

- Abre un issue en GitHub
- Check existing issues first
- Describe el problema con:
  - Qué intentaste hacer
  - Qué error recibiste
  - Tu setup (Node version, OS, etc)

---

**Ready? Start with `npm run dev` in both folders! 🚀**
