import React, { useState } from 'react';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  el.classList.remove('pulse-target');
  // eslint-disable-next-line no-unused-expressions
  el.offsetWidth; // reflow para poder re-disparar la animación
  el.classList.add('pulse-target');
  setTimeout(() => el.classList.remove('pulse-target'), 1000);
}

function LogoMark({ size = 34 }) {
  return (
    <div className="brand__mark" style={{ width: size, height: size }}>
      <svg width={size * 0.56} height={size * 0.56} viewBox="0 0 24 24" fill="none">
        <path d="M4 12a8 8 0 0 1 8-8c2.5 0 4.7 1.2 6 3" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M20 12a8 8 0 0 1-8 8c-2.5 0-4.7-1.2-6-3" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M16 5l2 2-2 2" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 19l-2-2 2-2" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// Iconos simples, propios, sin librerías externas
const icons = {
  dashboard: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="12" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="10" y="7" width="4" height="13" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="16" y="4" width="4" height="16" rx="1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  bell: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 18.5a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  bolt: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  coin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v8M9.5 10a2.5 2 0 0 1 2.5-1.5c1.4 0 2.5.7 2.5 1.7s-1 1.4-2.5 1.8-2.5.8-2.5 1.8 1.1 1.7 2.5 1.7A2.6 2.6 0 0 0 14.5 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  star: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="m12 4 2.4 5.1 5.6.6-4.2 3.8 1.2 5.5L12 16.3 7 19l1.2-5.5-4.2-3.8 5.6-.6L12 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  gift: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="9" width="16" height="11" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 13h16M12 9v11" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 9c-1.8 0-4-1-4-3s1.6-2.5 2.6-1.7C11.6 5.1 12 7 12 9Zm0 0c1.8 0 4-1 4-3s-1.6-2.5-2.6-1.7C12.4 5.1 12 7 12 9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
};

const negociosFeatures = [
  { icon: icons.dashboard, title: 'Panel en vivo', text: 'Transacciones, clientes y ticket promedio en tiempo real, sin planillas.' },
  { icon: icons.bell, title: 'Recordatorios con IA', text: 'Detecta quién dejó de venir y le manda la oferta justa, sola.' },
  { icon: icons.bolt, title: 'Ofertas relámpago', text: 'Crea un 2x1 en 30 segundos. Sin diseñador ni programador.' },
];

const personasFeatures = [
  { icon: icons.coin, title: '1 punto cada $100', text: 'Sin letra chica. Acumulas apenas pagas, en cualquier tienda Vuelve.' },
  { icon: icons.star, title: 'Sube de nivel', text: 'Bronze, Silver, Gold: mientras más vuelves, mejores beneficios.' },
  { icon: icons.gift, title: 'Ofertas solo para ti', text: 'Descuentos exclusivos en las tiendas que ya visitas seguido.' },
];

const rubros = ['Cafeterías', 'Almacenes', 'Peluquerías', 'Farmacias', 'Ferreterías', 'Panaderías', 'Pet shops', 'Minimarkets', 'Verdulerías', 'Librerías'];

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div>
      {/* NAV */}
      <nav className="nav">
        <div className="container nav__inner">
          <a href="#top" className="brand">
            <LogoMark />
            Vuelve
          </a>
          <ul className="nav__links">
            <li><a href="#negocios" onClick={(e) => { e.preventDefault(); scrollToSection('negocios'); }}>Negocios</a></li>
            <li><a href="#personas" onClick={(e) => { e.preventDefault(); scrollToSection('personas'); }}>Personas</a></li>
            <li><a href="#precios" onClick={(e) => { e.preventDefault(); scrollToSection('precios'); }}>Precios</a></li>
            <li><a href="#rubros" onClick={(e) => { e.preventDefault(); scrollToSection('rubros'); }}>Rubros</a></li>
          </ul>
          <div className="nav__actions">
            <button className="btn btn--ghost btn--sm">Iniciar sesión</button>
            <button className="btn btn--violet btn--sm" onClick={() => scrollToSection('precios')}>Comenzar</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="hero">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow eyebrow--violet">Fidelización para el comercio de barrio</span>
            <h1>Que cada compra <span>valga la próxima</span>.</h1>
            <p className="lead">
              Vuelve conecta a las tiendas de tu barrio con las personas que las visitan.
              Ellas acumulan puntos y suben de nivel. Tú recuperas clientes antes de perderlos.
            </p>

            <div className="switch">
              <button className="is-green" onClick={() => scrollToSection('negocios')}>
                {icons.dashboard} Tengo un negocio
              </button>
              <button className="is-mango" onClick={() => scrollToSection('personas')}>
                {icons.coin} Soy una persona
              </button>
            </div>
            <p className="switch__hint">Elige tu mundo — ambos son gratis para empezar.</p>
          </div>

          <div className="loop">
            <div className="loop__ring" />
            <div className="loop__center">
              <strong>El loop</strong>
              <span>de Vuelve</span>
            </div>
            <div className="loop__node loop__node--1">
              <b>1. Compra</b>
              <small>En su café o almacén de siempre</small>
            </div>
            <div className="loop__node loop__node--2">
              <b>2. Gana puntos</b>
              <small>1 pto por cada $100</small>
            </div>
            <div className="loop__node loop__node--3">
              <b>3. Vuelve</b>
              <small>Recordatorio justo a tiempo</small>
            </div>
            <div className="loop__node loop__node--4">
              <b>4. Canjea</b>
              <small>Descuentos y sube de nivel</small>
            </div>
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className="stats">
        <div className="container stats__grid">
          <div className="stat"><b>342</b><span>comercios activos</span></div>
          <div className="stat"><b>8.400+</b><span>personas usando Vuelve</span></div>
          <div className="stat"><b>$12,9M</b><span>canjeados el último mes</span></div>
          <div className="stat"><b>4,6/5</b><span>satisfacción promedio</span></div>
        </div>
      </section>

      {/* NEGOCIOS */}
      <section id="negocios" className="section section--green">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow eyebrow--green">Negocios</span>
            <h2>Recupera clientes antes de que se vayan a otro lado</h2>
            <p>
              Perder clientes es normal — no hacer nada al respecto, no debería serlo.
              Vuelve te avisa quién se está por ir y te da la herramienta para traerlo de vuelta.
            </p>
          </div>

          <div className="features">
            {negociosFeatures.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-card__icon feature-card__icon--green">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>

          <div className="steps">
            <div className="step">
              <div className="step__num">01</div>
              <h4>Crea tu cuenta gratis</h4>
              <p>Sin tarjeta de crédito, sin contrato. Listo en 5 minutos.</p>
            </div>
            <div className="step">
              <div className="step__num">02</div>
              <h4>Sube tu primera oferta</h4>
              <p>Un 2x1, un descuento, lo que quieras. Se publica al instante.</p>
            </div>
            <div className="step">
              <div className="step__num">03</div>
              <h4>Valida compras con QR</h4>
              <p>Tus clientes ganan puntos y tú ves crecer la recurrencia.</p>
            </div>
          </div>

          <button className="btn btn--green" onClick={() => scrollToSection('precios')}>
            Prueba gratis 30 días
          </button>
        </div>
      </section>

      {/* PERSONAS */}
      <section id="personas" className="section section--mango">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow eyebrow--mango">Personas</span>
            <h2>Cada compra en tu barrio, suma</h2>
            <p>
              El café de la esquina, el almacén, la peluquería de siempre — probablemente
              ya son tiendas Vuelve. Solo falta que empieces a acumular.
            </p>
          </div>

          <div className="features">
            {personasFeatures.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-card__icon feature-card__icon--mango">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>

          <div className="steps">
            <div className="step">
              <div className="step__num">01</div>
              <h4>Descarga y regístrate</h4>
              <p>Con tu correo. Sin costo, sin compromiso.</p>
            </div>
            <div className="step">
              <div className="step__num">02</div>
              <h4>Genera tu QR al pagar</h4>
              <p>La tienda lo valida y tus puntos suben al tiro.</p>
            </div>
            <div className="step">
              <div className="step__num">03</div>
              <h4>Canjea cuando quieras</h4>
              <p>Descuentos, productos gratis, beneficios de nivel Gold.</p>
            </div>
          </div>

          <button className="btn btn--mango" onClick={() => scrollToSection('precios')}>
            Empieza a ganar puntos
          </button>
        </div>
      </section>

      {/* RUBROS */}
      <section id="rubros" className="section">
        <div className="container">
          <div className="section__head">
            <h2>Donde ya compras seguido, Vuelve funciona</h2>
            <p>No es solo gastronomía. Es cualquier negocio de barrio que quieras ver de nuevo.</p>
          </div>
          <div className="chips">
            {rubros.map((r) => <span className="chip" key={r}>{r}</span>)}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="section" style={{ background: 'var(--paper-alt)' }}>
        <div className="container">
          <div className="section__head" style={{ maxWidth: 640 }}>
            <span className="eyebrow eyebrow--violet">Precios</span>
            <h2>Precios claros, para cada lado de Vuelve</h2>
            <p>Sin letra chica. Cambia o cancela tu plan cuando quieras.</p>
          </div>

          {/* Precios negocios */}
          <div className="pricing-block">
            <span className="eyebrow eyebrow--green">Para tu negocio</span>
            <div className="pricing-grid pricing-grid--3">
              <div className="price-card">
                <h3>Gratis</h3>
                <div className="price">$0</div>
                <ul>
                  <li>2 ofertas activas</li>
                  <li>100 clientes máximo</li>
                  <li>Panel básico</li>
                  <li className="no">Recordatorios con IA</li>
                </ul>
                <button className="btn btn--outline-green">Crear cuenta</button>
              </div>

              <div className="price-card price-card--featured-green">
                <span className="price-card__badge price-card__badge--green">Más elegido</span>
                <h3>Pro</h3>
                <div className="price">$29.990<span> /mes</span></div>
                <ul>
                  <li>Ofertas y clientes ilimitados</li>
                  <li>Panel avanzado</li>
                  <li><b>Recordatorios con IA</b></li>
                  <li>Analítica de clientes</li>
                </ul>
                <button className="btn btn--green">Comenzar Pro</button>
              </div>

              <div className="price-card">
                <h3>Premium</h3>
                <div className="price">$59.990<span> /mes</span></div>
                <ul>
                  <li>Todo lo de Pro</li>
                  <li>A/B testing de ofertas</li>
                  <li>Integración POS</li>
                  <li>Banner destacado en la app</li>
                </ul>
                <button className="btn btn--outline-green">Comenzar Premium</button>
              </div>
            </div>
          </div>

          {/* Precios personas */}
          <div className="pricing-block">
            <span className="eyebrow eyebrow--mango">Para ti</span>
            <div className="pricing-grid pricing-grid--2">
              <div className="price-card">
                <h3>Gratis</h3>
                <div className="price">$0</div>
                <ul>
                  <li>1 punto por cada $100</li>
                  <li>3 canjes al mes</li>
                  <li>Niveles Bronze y Silver</li>
                  <li className="no">Puntos 2x</li>
                </ul>
                <button className="btn btn--outline-mango">Crear cuenta</button>
              </div>

              <div className="price-card price-card--featured-mango">
                <span className="price-card__badge price-card__badge--mango">Recomendado</span>
                <h3>Plus</h3>
                <div className="price">$4.990<span> /mes</span></div>
                <ul>
                  <li><b>Puntos 2x</b> en cada compra</li>
                  <li>Canjes ilimitados</li>
                  <li>Nivel Gold + desafíos semanales</li>
                  <li>Gana invitando amigos</li>
                </ul>
                <button className="btn btn--mango">Suscribirme</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final">
        <div className="container">
          <div className="final__head">
            <h2>¿Listo para volver a crecer?</h2>
            <p>342 tiendas y 8.400 personas ya están usando Vuelve en Santiago.</p>
          </div>

          <div className="final__panels">
            <div className="panel panel--green">
              <h3>¿Tienes un local?</h3>
              <p>Crea tu cuenta gratis y sube tu primera oferta hoy mismo.</p>
              <button className="btn btn--green" onClick={() => scrollToSection('precios')}>Comenzar gratis</button>
            </div>
            <div className="panel panel--mango">
              <h3>¿Compras seguido?</h3>
              <p>Regístrate y empieza a acumular puntos en tus tiendas favoritas.</p>
              <button className="btn btn--mango" onClick={() => scrollToSection('precios')}>Únete gratis</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <a href="#top" className="brand" style={{ color: 'white' }}>
                <LogoMark />
                Vuelve
              </a>
              <p className="footer__tagline">
                Fidelización para el comercio independiente en Chile. Hecho en Santiago.
              </p>
            </div>
            <div className="footer__col">
              <h5>Producto</h5>
              <a href="#negocios" onClick={(e) => { e.preventDefault(); scrollToSection('negocios'); }}>Cómo funciona</a>
              <a href="#precios" onClick={(e) => { e.preventDefault(); scrollToSection('precios'); }}>Precios</a>
              <a href="#rubros" onClick={(e) => { e.preventDefault(); scrollToSection('rubros'); }}>Rubros</a>
            </div>
            <div className="footer__col">
              <h5>Negocios</h5>
              <a href="#negocios" onClick={(e) => { e.preventDefault(); scrollToSection('negocios'); }}>Panel de control</a>
              <a href="#negocios" onClick={(e) => { e.preventDefault(); scrollToSection('negocios'); }}>Recordatorios IA</a>
              <a href="#precios" onClick={(e) => { e.preventDefault(); scrollToSection('precios'); }}>Precios negocios</a>
            </div>
            <div className="footer__col">
              <h5>Personas</h5>
              <a href="#personas" onClick={(e) => { e.preventDefault(); scrollToSection('personas'); }}>Cómo ganar puntos</a>
              <a href="#personas" onClick={(e) => { e.preventDefault(); scrollToSection('personas'); }}>Niveles</a>
              <a href="#precios" onClick={(e) => { e.preventDefault(); scrollToSection('precios'); }}>Precios personas</a>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© 2025 Vuelve. Todos los derechos reservados.</span>
            <form onSubmit={handleEmailSubmit} style={{ display: 'flex', gap: 8 }}>
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.06)',
                  color: 'white',
                  fontSize: 13,
                  width: 200,
                }}
              />
              <button type="submit" className="btn btn--violet btn--sm">
                {sent ? 'Enviado ✓' : 'Avísame'}
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
