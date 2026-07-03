# Cómo Organizar Vuelve en GitHub

## Estructura del Repositorio

```
vuelve/  (root repo)
├── README.md          ← Inicio aquí, explica todo
├── QUICKSTART.md      ← Para devs: setup en 5 min
├── package.json       ← Root (scripts compartidos)
├── .gitignore
│
├── backend/           ← API (Node.js + Express)
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   └── middleware/
│   └── ...
│
├── web/               ← Dashboard (React)
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── ...
│
├── mobile/            ← App (React Native)
│   ├── src/
│   ├── app.json
│   ├── package.json
│   └── ...
│
└── docs/
    ├── API.md
    ├── DATABASE.md
    ├── ARCHITECTURE.md
    └── ...
```

---

## Paso 1: Crear Repositorio en GitHub

1. Ir a https://github.com/new
2. Nombre: `vuelve`
3. Descripción: "Plataforma de fidelización digital para comercios independientes"
4. Visibilidad: **Public** (para evento/aceleradoras)
5. README: Sí (lo reemplazaremos)
6. .gitignore: Node
7. Licencia: MIT (opcional)
8. **Create repository**

---

## Paso 2: Clonar y Agregar Archivos

```bash
git clone https://github.com/yourusername/vuelve.git
cd vuelve

# Copiar archivos creados
# Backend
mkdir -p backend/{src/{controllers,routes,models,middleware,utils,config},docs}
cp backend-server.js backend/server.js
cp backend-package.json backend/package.json
cp backend-env.example backend/.env.example

# Web
mkdir -p web/{src/{pages,components,services,styles},public}
cp web-dashboard.jsx web/src/App.jsx
cp web-dashboard.css web/src/styles/App.css
cp web-package.json web/package.json

# Documentación
cp README.md .
cp ARCHITECTURE.md docs/
cp API.md docs/
cp DATABASE.md docs/
cp QUICKSTART.md .
cp .gitignore .
cp root-package.json package.json
```

---

## Paso 3: Estructura de Carpetas (Crear manualmente)

### Backend

```bash
mkdir -p backend/src/{controllers,routes,models,middleware,utils,config}

# Crear archivos vacíos de ejemplo
touch backend/src/controllers/authController.js
touch backend/src/controllers/pointsController.js
touch backend/src/routes/auth.js
touch backend/src/routes/qr.js
touch backend/src/models/User.js
touch backend/src/middleware/authMiddleware.js
```

### Web

```bash
mkdir -p web/src/{pages,components,services,styles,hooks,utils}
mkdir -p web/public

# Crear componentes base
touch web/src/pages/Dashboard.jsx
touch web/src/components/Header.jsx
touch web/src/services/api.js
```

### Mobile

```bash
mkdir -p mobile/src/{screens,components,services,hooks,utils,styles}

# Solo estructura, no código aún
```

---

## Paso 4: Commit Inicial

```bash
git add .
git commit -m "Initial commit: Vuelve MVP architecture

- Backend: Express API con autenticación JWT
- Web: React dashboard para tiendas
- Documentación: API, DB schema, arquitectura
- Ready for local development"

git push origin main
```

---

## Paso 5: Crear README Presentable

El README.md ya está optimizado, pero asegúrate de que contenga:

✅ Logo/nombre proyecto  
✅ Descripción corta  
✅ "El Problema" + "La Solución"  
✅ Screenshot/demo  
✅ Stack tecnológico  
✅ Quick start (3 comandos)  
✅ Roadmap  
✅ Estructura del proyecto  

---

## Paso 6: GitHub Pages (Opcional)

Para que tu README se vea bonito:

1. Settings → Pages
2. Source: Deploy from branch
3. Branch: main, folder: /root
4. Visit: https://yourusername.github.io/vuelve

---

## Para el Evento de Aceleradoras

### En tu perfil de GitHub:

- ✅ **Bio**: "Building Vuelve - Loyalty platform for independent stores 🇨🇱"
- ✅ **Website**: Link a vuelve.cl (cuando exista)
- ✅ **Location**: Santiago, Chile

### En el README principal:

```markdown
# 🚀 Status: MVP en desarrollo

Vuelve es una plataforma de fidelización digital para comercios independientes.

**Viendo en el evento?** Echa un vistazo a:
- [Quick Start](./QUICKSTART.md) - Setup en 5 minutos
- [Documentación Técnica](./docs/ARCHITECTURE.md)
- [Roadmap](#roadmap)

**¿Preguntas?** [@VuelveApp](https://twitter.com/VuelveApp) | info@vuelve.cl
```

---

## Estructura de Ramas (Recomendado)

```
main (producción)
  ├── develop (desarrollo)
  │   ├── feature/auth
  │   ├── feature/points-system
  │   ├── feature/qr-validation
  │   └── bugfix/cors-issues
  └── staging
```

**Comando para crear rama:**

```bash
git checkout develop
git pull origin develop
git checkout -b feature/tu-feature
# ... hacer cambios ...
git push origin feature/tu-feature
# Pull request en GitHub
```

---

## Badges en el README

Para verse profesional, agrega badges:

```markdown
# Vuelve 🔄

[![Status](https://img.shields.io/badge/status-MVP_Development-yellow)]()
[![License](https://img.shields.io/badge/license-PRIVATE-red)]()
[![Node](https://img.shields.io/badge/Node.js-18%2B-green)]()
[![React](https://img.shields.io/badge/React-18.2%2B-blue)]()
```

Resultado:  
![Status](https://img.shields.io/badge/status-MVP_Development-yellow) ![License](https://img.shields.io/badge/license-PRIVATE-red) ![Node](https://img.shields.io/badge/Node.js-18+-green) ![React](https://img.shields.io/badge/React-18.2+-blue)

---

## .gitignore en cada carpeta

```bash
# backend/.gitignore
node_modules/
.env
.env.local
dist/
npm-debug.log

# web/.gitignore
node_modules/
.env.local
dist/
.vite/

# mobile/.gitignore
node_modules/
.env
dist/
.expo/
```

---

## Issues & Discussions

Para el evento, pre-llena algunos issues:

```markdown
### Issue: Auth System Implementation

Implementar autenticación JWT:
- [ ] Login endpoint
- [ ] Register endpoint
- [ ] Token refresh
- [ ] Middleware de protección

Assignee: @yourusername
Labels: backend, auth, good-first-issue
```

---

## GitHub Actions (CI/CD)

Crear `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main, develop]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install-all
      - run: npm test
```

---

## Checklist antes del Evento

- [ ] README.md está completo y claro
- [ ] QUICKSTART.md tiene instrucciones de setup
- [ ] Código en main está limpio y comentado
- [ ] .gitignore configurado
- [ ] Archivos sensibles (.env) están en .env.example
- [ ] Documentación (API.md, DATABASE.md) existe
- [ ] Al menos 1 commit inicial está hecho
- [ ] Perfil de GitHub está actualizado
- [ ] Descripción del repo es clara

---

## Tips para Impresionar en el Evento

1. **README profesional** - Gente lee esto primero
2. **Code limpio** - Comentarios, estructura clara
3. **Documentación técnica** - Muestra que pensaste en arquitectura
4. **Setup fácil** - QUICKSTART.md con 3 comandos
5. **Roadmap visible** - Plan claro para los próximos meses
6. **Commits limpios** - Historia legible del proyecto

---

## Después del Evento

1. Seguir desarrollando en rama `develop`
2. Hacer PRs hacia `main` cuando termine feature
3. Implementar CI/CD
4. Agregar tests
5. Documentación viva (mantenerla actualizada)

---

**Ready to push? 🚀**

```bash
git remote add origin https://github.com/yourusername/vuelve.git
git branch -M main
git push -u origin main
```

Luego ve a https://github.com/yourusername/vuelve y verifica que todo está.
