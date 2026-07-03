# Vuelve Architecture

## System Design

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT LAYER                            │
├─────────────────┬──────────────────┬──────────────────────┤
│   Mobile App    │   Web Admin       │    Marketing Site    │
│  (React Native) │  (React)          │     (Next.js)        │
│  iOS + Android  │  Dashboard        │     vuelve.cl        │
└────────┬────────┴────────┬─────────┴──────────────┬────────┘
         │                 │                        │
         │                 │                        │
┌────────▼─────────────────▼────────────────────────▼────────┐
│                    API GATEWAY                             │
│              Node.js + Express                             │
│         (http://localhost:3000)                            │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  Autenticación (JWT) │  Rate Limiting │  CORS         │ │
│  └───────────────────────────────────────────────────────┘ │
└────────┬──────────────────────────────────────────────────┘
         │
         │
┌────────▼──────────────────────────────────────────────────┐
│              BUSINESS LOGIC LAYER                         │
├──────────┬──────────┬────────────┬──────────┬─────────────┤
│  Auth    │  Points  │  QR        │  Offers  │ Metrics     │
│ Service  │ Service  │ Service    │ Service  │ Service     │
└──────┬───┴────┬─────┴──────┬─────┴────┬─────┴──────┬──────┘
       │        │            │          │            │
       │        │            │          │            │
┌──────▼────────▼────────────▼──────────▼────────────▼──────┐
│           DATABASE LAYER                                  │
│  PostgreSQL (Supabase)                                    │
│  ┌────────┬──────┬────────┬───────────┬──────────────┐   │
│  │ users  │ qr   │ stores │  offers   │ transactions │   │
│  │        │ code │        │           │              │   │
│  └────────┴──────┴────────┴───────────┴──────────────┘   │
└────────────────────────────────────────────────────────────┘
         │
         │
┌────────▼──────────────────────────────────────────────────┐
│          EXTERNAL SERVICES                                │
├──────────┬──────────┬────────────┬───────────┬────────────┤
│ Firebase │ SendGrid │   Khipu    │  Google   │   Claude   │
│ (Push)   │ (Email)  │ (Payments) │ (Maps)    │ (AI)       │
└──────────┴──────────┴────────────┴───────────┴────────────┘
```

---

## Directory Structure

```
vuelve/
├── README.md                      # Overview del proyecto
├── ARCHITECTURE.md               # Este archivo
├── API.md                        # Documentación endpoints
├── DATABASE.md                   # Schema PostgreSQL
│
├── backend/
│   ├── package.json             # Dependencies
│   ├── server.js                # Entry point (Express)
│   ├── .env.example             # Environment variables
│   │
│   └── src/
│       ├── controllers/         # Lógica de negocio
│       │   ├── authController.js
│       │   ├── pointsController.js
│       │   ├── qrController.js
│       │   ├── offerController.js
│       │   └── storeController.js
│       │
│       ├── models/              # Schemas BD
│       │   ├── User.js
│       │   ├── Store.js
│       │   ├── Offer.js
│       │   ├── Transaction.js
│       │   └── QRCode.js
│       │
│       ├── routes/              # Endpoints
│       │   ├── auth.js
│       │   ├── transactions.js
│       │   ├── stores.js
│       │   └── qr.js
│       │
│       ├── middleware/          # Autenticación, validación
│       │   ├── auth.js          # JWT verification
│       │   ├── errorHandler.js
│       │   └── rateLimiter.js
│       │
│       ├── utils/               # Helpers
│       │   ├── database.js      # Supabase client
│       │   ├── jwt.js           # Token generation
│       │   └── validation.js
│       │
│       └── config/
│           └── env.js           # Environment config
│
├── web/
│   ├── package.json
│   ├── vite.config.js           # Vite bundler
│   ├── index.html
│   │
│   └── src/
│       ├── App.jsx              # Root component
│       ├── main.jsx             # Entry point
│       │
│       ├── components/
│       │   ├── Header.jsx
│       │   ├── Navigation.jsx
│       │   └── ...
│       │
│       ├── pages/
│       │   ├── Dashboard.jsx    # Main dashboard
│       │   ├── Offers.jsx
│       │   ├── Customers.jsx
│       │   └── Settings.jsx
│       │
│       ├── services/
│       │   └── api.js           # API calls
│       │
│       ├── hooks/
│       │   ├── useAuth.js
│       │   └── useMetrics.js
│       │
│       ├── styles/
│       │   └── Dashboard.css
│       │
│       └── utils/
│           ├── localStorage.js
│           └── formatters.js
│
├── docs/
│   ├── DEPLOYMENT.md            # Deploy guide
│   ├── TESTING.md               # Testing strategy
│   ├── PERFORMANCE.md           # Performance tips
│   └── TROUBLESHOOTING.md       # Common issues
│
└── .github/
    └── workflows/
        ├── deploy.yml           # CI/CD
        └── tests.yml
```

---

## Technology Stack

| Layer | Technology | Version | Why |
|-------|-----------|---------|-----|
| **Frontend** | React | 18.2+ | Component-based, large ecosystem |
| **Mobile** | React Native | 0.72+ | Cross-platform (iOS/Android) |
| **Backend** | Node.js + Express | 18+ LTS | JavaScript everywhere, async-first |
| **Database** | PostgreSQL | 15+ | ACID, relational, scalable |
| **Auth** | JWT | n/a | Stateless, mobile-friendly |
| **Hashing** | bcryptjs | 2.4+ | Secure password hashing |
| **Cloud** | Supabase | (hosted) | PostgreSQL + Auth + Realtime |
| **Deployment** | Railway/Heroku | n/a | Easy, free tier available |
| **Notifications** | Firebase | (hosted) | Push, reliable, free tier |
| **Email** | SendGrid | (hosted) | Transactional, good deliverability |
| **Payments** | Khipu | (Chile) | Local payment gateway |
| **Maps** | Google Maps API | (hosted) | Location search |
| **AI** | Claude API | (Anthropic) | Intelligent reminders |

---

## Data Flow

### User Registration Flow

```
1. User submits email/password
   └─→ Frontend: POST /auth/register
       │
2. Backend validates input
   └─→ Hash password (bcryptjs)
       │
3. Create user in database
   └─→ PostgreSQL: INSERT into users
       │
4. Generate JWT token
   └─→ JWT encode with user.id
       │
5. Return token + user data
   └─→ Frontend stores in localStorage
       │
6. User is logged in, can use app
   └─→ All future requests include Authorization header
```

### Purchase + Points Flow

```
1. User at store generates QR
   └─→ Frontend: POST /qr/generate (with JWT)
       │
2. QR code created (expires in 2 min)
   └─→ PostgreSQL: INSERT into qr_codes
       │
3. QR displayed on mobile screen
   └─→ Countdown timer starts (120 seconds)
       │
4. Store scans QR at checkout
   └─→ Store backend: POST /transactions/validate-qr
       │
5. Backend calculates points (1 pto per $100)
   └─→ Formula: floor(monto / 100)
       │
6. Update user puntos + determine nivel
   └─→ PostgreSQL: UPDATE users
       │
7. Record transaction
   └─→ PostgreSQL: INSERT into transactions
       │
8. Mark QR as used
   └─→ PostgreSQL: UPDATE qr_codes
       │
9. Return confirmation
   └─→ "85 puntos otorgados, tienes 2425 totales"
```

### Offer Creation + Notification Flow

```
1. Store manager creates offer
   └─→ Web dashboard: POST /offers
       │
2. Store validates (login required)
   └─→ Middleware: check JWT + role=store
       │
3. Offer saved to database
   └─→ PostgreSQL: INSERT into offers
       │
4. (Future) Send push notification to relevant users
   └─→ Firebase: POST /message (batch)
       │
5. (Future) Claude generates smart reminder text
   └─→ Claude API: generate reminder copy
       │
6. Users see offer in app
   └─→ Frontend: GET /offers/:storeId
```

---

## Authentication Flow

```
┌─────────────────────────────────────────────────────────┐
│ User sends email + password                             │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
        ┌─────────────────────────────────────────┐
        │ Middleware: authMiddleware (optional)   │
        │ → Extracts Authorization header        │
        │ → Decodes JWT                          │
        │ → Sets req.user = decoded payload      │
        └─────────────────┬───────────────────────┘
                          │
                ┌─────────┴─────────┐
                │                   │
                ▼                   ▼
        ┌──────────────────┐ ┌──────────────────┐
        │ Token valid?     │ │ Token invalid?   │
        │ → Continue       │ │ → 401 response   │
        └──────────────────┘ └──────────────────┘
```

**Token Structure (JWT):**
```
{
  "id": "user-uuid",
  "email": "user@example.com",
  "role": "user", // or "store"
  "iat": 1705352800
}
```

---

## Scalability Plan

### Phase 1: MVP (Months 1–4)
- 100–1.000 users
- Single server (Railway)
- Supabase for DB
- No caching

### Phase 2: Growth (Months 5–12)
- 1.000–10.000 users
- AWS with load balancing
- Redis cache layer
- CloudFront CDN
- Monitoring (DataDog)

### Phase 3: Scale (Month 12+)
- 10.000–100.000+ users
- Multi-region deployment
- Database replication
- Elasticsearch for search
- Message queue (RabbitMQ/SQS)
- Microservices (optional)

---

## Security Considerations

### Input Validation
- Email format validation
- Password strength (min 8 chars)
- QR code format validation
- Amount (monto) must be positive

### Password Security
- Hashed with bcryptjs (10 rounds)
- Never stored in plain text
- Salted hash

### Token Security
- JWT signed with secret key
- 24-hour expiration
- Refresh token strategy (optional v2)
- Stored in localStorage (mobile) or sessionStorage (web)

### Database Security
- PostgreSQL with default auth
- Supabase handles SSL/TLS
- No raw SQL (use parameterized queries)
- Row-level security (RLS) policies

### API Security
- CORS restricted to allowed origins
- Rate limiting (100 req/min per IP)
- Input sanitization
- Error messages don't leak info

---

## Monitoring & Observability

### Logs
```
[2025-01-15 15:30:45] [INFO] User registered: user-123
[2025-01-15 15:31:12] [INFO] QR generated: QR-a1b2c3d4
[2025-01-15 15:32:00] [INFO] Transaction validated: 85 points
[2025-01-15 15:35:45] [ERROR] Database connection lost
```

### Metrics
- Active users (DAU, MAU)
- API response time (p50, p95, p99)
- Database query time
- Error rate (5xx responses)
- Uptime percentage

### Alerts
- API down (response time > 5s)
- Error rate > 5%
- Database slow queries
- Disk usage > 80%

---

## Deployment

### Development
```bash
# Backend
cd backend && npm install && npm run dev

# Frontend
cd web && npm install && npm run dev
```

### Production (Railway)
```bash
# Just push to GitHub
# Railway auto-deploys on push
```

See `DEPLOYMENT.md` for detailed guide.

---

## Cost Breakdown (Monthly)

| Service | Free Tier | Production Cost |
|---------|-----------|-----------------|
| Supabase | Yes (good) | $25–100 |
| Railway | Yes (good) | $50–300 |
| Firebase | Yes (10K msgs) | $10–50 |
| SendGrid | Yes (100 emails) | $20–50 |
| Claude API | No | $50–200 (AI features) |
| Google Maps | Partially | $50–100 |
| **TOTAL** | ~$200 | **$205–800** |

With MVP (100 users): **~$200/month**
With scale (10K users): **~$600/month**

---

## Future Enhancements

1. **Recommendation Engine** - ML model to suggest stores
2. **Loyalty Tiers** - More granular levels
3. **Social Features** - Share referral codes
4. **Analytics** - More advanced dashboards
5. **Mobile App** - iOS + Android native versions
6. **Payment Integration** - Direct checkout in app
7. **Inventory Sync** - POS system integration
8. **Geolocation** - "Nearby stores" feature
9. **A/B Testing** - Test offer effectiveness
10. **Multi-currency** - Support other countries

---

## Useful Links

- **Repository**: https://github.com/yourusername/vuelve
- **Supabase Docs**: https://supabase.com/docs
- **Express Docs**: https://expressjs.com
- **React Docs**: https://react.dev
- **JWT.io**: https://jwt.io (decode/verify tokens)

---

**Last updated:** January 2025  
**Maintained by:** Vuelve Team
