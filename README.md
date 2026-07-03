# Vuelve 🔄

**Plataforma de fidelización digital multi-rubro para comercios independientes en Chile.**

Vuelve conecta usuarios que buscan ahorrar dinero con comercios locales que necesitan clientes recurrentes. Los usuarios acumulan puntos en cada compra, ascienden en niveles y canajan descuentos. Las tiendas obtienen tráfico recurrente, datos de consumo y herramientas de fidelización automáticas.

## 🎯 El Problema

Las tiendas independientes en Santiago pierden clientes cada mes porque no tienen forma de fidelizarlos digitalmente. Competencia como Puntos Cencosud (solo cadenas) y Welcome Back (solo gastronomía) dejan desatendido al comercio de barrio.

## 💡 La Solución

Vuelve es una app multi-rubro en español, gratuita para usuarios iniciales, con recordatorios inteligentes que ningún competidor local ofrece.

### Para usuarios:
- Acumular puntos en tiendas favoritas (1 pto por $100 gastado)
- Niveles progresivos (Bronze, Silver, Gold)
- Canjear descuentos validados con QR único por transacción
- Notificaciones inteligentes sobre ofertas relevantes

### Para tiendas:
- Plan gratis: perfil básico, hasta 2 ofertas, 100 clientes
- Plan Pro ($29.990/mes): ilimitado + recordatorios inteligentes + métricas
- Plan Premium ($59.990/mes): Pro + banner en home + push masivas + integraciones

## 🏗️ Arquitectura

```
vuelve/
├── backend/                 # API Node.js + Express
│   ├── src/
│   │   ├── controllers/    # Lógica de negocio
│   │   ├── models/         # Esquemas BD
│   │   ├── routes/         # Endpoints
│   │   ├── middleware/      # Auth, validación
│   │   └── utils/          # Helpers
│   ├── .env.example
│   └── package.json
├── web/                     # Dashboard tiendas (React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/       # API calls
│   │   └── App.jsx
│   └── package.json
├── docs/                    # Documentación
│   ├── API.md
│   ├── DATABASE.md
│   └── ARCHITECTURE.md
└── .github/workflows/       # CI/CD
```

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Razón |
|------|-----------|-------|
| **Backend** | Node.js + Express | Rápido, escalable, low-ceremony |
| **Database** | PostgreSQL | ACID compliance, relaciones complejas |
| **Cache** | Redis | Sesiones, QR temporales, notificaciones |
| **Auth** | JWT | Stateless, funciona con mobile + web |
| **Mobile** | React Native (Expo) | Code sharing iOS/Android |
| **Terceros** | Firebase (push), SendGrid (email), Khipu (pagos) | No reinventar rueda |

## 🚀 Inicio Rápido

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Configura Supabase en .env
npm run dev
```

El API corre en `http://localhost:3000`

### Frontend (Dashboard tiendas)

```bash
cd web
npm install
npm run dev
```

Corre en `http://localhost:5173`

## 📊 Modelo de Negocio

### Ingresos lado usuarios (Freemium)
- **Plan Gratis**: Ver ofertas, acumular 1x puntos, 3 canjes/mes, niveles Bronze/Silver
- **Vuelve Plus** ($4.990/mes): Puntos 2x, nivel Gold, canjes ilimitados, sin anuncios

### Ingresos lado tiendas (SaaS)
- **Plan Gratis**: 2 ofertas, 100 clientes máximo
- **Plan Pro** ($29.990/mes): Ilimitado + recordatorios + métricas
- **Plan Premium** ($59.990/mes): Pro + banner + push masivas + integraciones

### Ingresos adicionales
- Notificaciones patrocinadas: $19.990 por campaña (hasta 5K usuarios segmentados)
- Destacado en home: $14.990/día
- Informes de inteligencia: $24.990/mes

## 💰 Proyecciones Financieras (18 meses)

| Mes | Usuarios | Tiendas | Revenue/mes | Costo | Margen |
|-----|----------|---------|-------------|-------|--------|
| 3 | 200 | 60 | $1M | $6M | -83% |
| 6 | 1.500 | 120 | $9M | $6.5M | +38% |
| 12 | 6.000 | 250 | $35M | $12M | +66% |
| 18 | 15.000 | 500 | $95M | $28M | +71% |

**Breakeven estimado**: Mes 7–9 con financiamiento de $25M.

## 🎯 Roadmap

### MVP (Mes 1–4)
- [x] Arquitectura backend
- [ ] Autenticación usuario + tienda
- [ ] Sistema de puntos (acumular, niveles)
- [ ] QR generator + validador
- [ ] API CRUD (usuarios, tiendas, ofertas)
- [ ] Push notifications (Firebase)
- [ ] Dashboard tienda (básico)

### v1.0 (Mes 5–8)
- [ ] Mobile app (React Native)
- [ ] Recordatorios inteligentes (Claude API)
- [ ] Métricas avanzadas
- [ ] Integraciones POS
- [ ] Lanzamiento App Store + Play Store

### v1.1+ (Mes 9+)
- [ ] Machine learning para perfiles
- [ ] Análisis predictivo (quién se va)
- [ ] A/B testing de ofertas
- [ ] Expansión a otras ciudades

## 🔐 Seguridad

- JWT con refresh tokens
- HTTPS obligatorio
- Rate limiting en endpoints públicos
- Validación de input en todas partes
- Hashing de passwords (bcrypt)
- CORS configurado

## 📈 Métricas Clave

- **DAU** (Daily Active Users)
- **Retención** por día 7, 30
- **CAC** (Costo de adquisición por usuario)
- **LTV** (Lifetime value del usuario)
- **Churn rate** (% usuarios que se van)
- **NPS** (Net Promoter Score)

## 🤝 Contribciones

Este es un proyecto de startup en construcción. Si quieres colaborar o tienes feedback, abre un issue.

## 📝 Licencia

Privado (startup)

## 📧 Contacto

info@vuelve.cl | [@VuelveApp](https://twitter.com/VuelveApp)

---

**Estado del proyecto**: MVP en desarrollo (inicio 2024)  
**Última actualización**: Enero 2025
