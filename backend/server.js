// Vuelve Backend - Express.js API
// npm install express cors dotenv pg jwt-simple bcryptjs uuid

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import jwt from 'jwt-simple';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key-change-in-production';

// Supabase client (PostgreSQL en la nube)
//const supabase = createClient(
//  process.env.SUPABASE_URL || 'https://your-project.supabase.co',
//  process.env.SUPABASE_KEY || 'your-anon-key'
//);

// Middleware
app.use(cors());
app.use(express.json());

// Middleware de autenticación
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token requerido' });
  }
  try {
    const decoded = jwt.decode(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};

// ==================== AUTENTICACIÓN ====================

// Registro usuario
// Registro usuario
app.post('/auth/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Campos requeridos faltando' });
    }

    // Para ahora, sin base de datos real
    const token = jwt.encode(
      { id: 'user-123', email, role: 'user' },
      JWT_SECRET
    );

    res.json({
      token,
      user: {
        id: 'user-123',
        email,
        name,
        puntos: 0,
        nivel: 'bronze'
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en servidor' });
  }
});

// Login usuario
app.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña requeridos' });
    }

    // Buscar usuario
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !data) {
      return res.status(401).json({ error: 'Email o contraseña incorrectos' });
    }

    // Verificar password
    const validPassword = await bcrypt.compare(password, data.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Email o contraseña incorrectos' });
    }

    // Generar JWT
    const token = jwt.encode(
      { id: data.id, email: data.email, role: 'user' },
      JWT_SECRET
    );

    res.json({
      token,
      user: {
        id: data.id,
        email: data.email,
        name: data.name,
        puntos: data.puntos,
        nivel: data.nivel,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en servidor' });
  }
});

// Registro tienda
app.post('/auth/store-register', async (req, res) => {
  try {
    const { email, password, storeName, category, phone, ubicacion } = req.body;

    if (!email || !password || !storeName || !category) {
      return res.status(400).json({ error: 'Campos requeridos faltando' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from('stores')
      .insert([
        {
          id: uuidv4(),
          email,
          password: hashedPassword,
          nombre: storeName,
          categoria: category,
          phone: phone || null,
          ubicacion: ubicacion || null,
          plan: 'gratis',
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const store = data[0];
    const token = jwt.encode(
      { id: store.id, email: store.email, role: 'store' },
      JWT_SECRET
    );

    res.json({
      token,
      store: {
        id: store.id,
        email: store.email,
        nombre: store.nombre,
        categoria: store.categoria,
        plan: store.plan,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en servidor' });
  }
});

// ==================== PUNTOS & TRANSACCIONES ====================

// Validar QR y otorgar puntos
app.post('/transactions/validate-qr', authMiddleware, async (req, res) => {
  try {
    const { qrCode, storeId, monto } = req.body;
    const userId = req.user.id;

    if (!qrCode || !storeId || !monto) {
      return res.status(400).json({ error: 'Datos incompletos' });
    }

    // Verificar QR existe y no expiró
    const { data: qr, error: qrError } = await supabase
      .from('qr_codes')
      .select('*')
      .eq('code', qrCode)
      .eq('user_id', userId)
      .single();

    if (qrError || !qr) {
      return res.status(400).json({ error: 'QR inválido o expirado' });
    }

    // Calcular puntos (1 punto por cada $100)
    const puntos = Math.floor(monto / 100);

    // Obtener usuario actual
    const { data: user } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    const nuevosPuntos = user.puntos + puntos;

    // Determinar nivel
    let nuevoNivel = 'bronze';
    if (nuevosPuntos >= 3000) nuevoNivel = 'gold';
    else if (nuevosPuntos >= 1000) nuevoNivel = 'silver';

    // Actualizar usuario
    const { error: updateError } = await supabase
      .from('users')
      .update({ puntos: nuevosPuntos, nivel: nuevoNivel })
      .eq('id', userId);

    if (updateError) {
      return res.status(500).json({ error: updateError.message });
    }

    // Registrar transacción
    const { data: transaction, error: transError } = await supabase
      .from('transactions')
      .insert([
        {
          id: uuidv4(),
          user_id: userId,
          store_id: storeId,
          monto,
          puntos_obtenidos: puntos,
          qr_code: qrCode,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (transError) {
      return res.status(500).json({ error: transError.message });
    }

    // Marcar QR como usado
    await supabase
      .from('qr_codes')
      .update({ usado: true, usado_en: new Date().toISOString() })
      .eq('code', qrCode);

    res.json({
      success: true,
      puntosOtorgados: puntos,
      puntosTotales: nuevosPuntos,
      nuevoNivel,
      mensaje: `¡${puntos} puntos otorgados! Tienes ${nuevosPuntos} puntos totales.`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en servidor' });
  }
});

// Generar QR para usuario
app.post('/qr/generate', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const qrCode = `QR-${userId.substring(0, 8)}-${Date.now()}`;
    const expiraEn = new Date(Date.now() + 2 * 60 * 1000); // 2 minutos

    const { data, error } = await supabase
      .from('qr_codes')
      .insert([
        {
          id: uuidv4(),
          code: qrCode,
          user_id: userId,
          usado: false,
          expira_en: expiraEn.toISOString(),
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({
      qrCode,
      expiraEn: expiraEn.toISOString(),
      segundosRestantes: 120,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en servidor' });
  }
});

// ==================== TIENDAS & OFERTAS ====================

// Obtener tiendas cercanas
app.get('/stores', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('stores')
      .select(
        `
      id,
      nombre,
      categoria,
      ubicacion,
      created_at
      `
      )
      .eq('activo', true)
      .limit(50);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en servidor' });
  }
});

// Crear oferta (tienda)
app.post('/offers', authMiddleware, async (req, res) => {
  try {
    const { titulo, descripcion, descuento, validoHasta } = req.body;
    const storeId = req.user.id;

    if (!titulo || !descuento) {
      return res.status(400).json({ error: 'Campos requeridos' });
    }

    const { data, error } = await supabase
      .from('offers')
      .insert([
        {
          id: uuidv4(),
          store_id: storeId,
          titulo,
          descripcion: descripcion || null,
          descuento,
          valido_hasta: validoHasta || null,
          activo: true,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json(data[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en servidor' });
  }
});

// Obtener ofertas de una tienda
app.get('/offers/:storeId', async (req, res) => {
  try {
    const { storeId } = req.params;

    const { data, error } = await supabase
      .from('offers')
      .select('*')
      .eq('store_id', storeId)
      .eq('activo', true)
      .order('created_at', { ascending: false });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en servidor' });
  }
});

// ==================== DASHBOARD TIENDA ====================

// Obtener métricas tienda
app.get('/store/metrics', authMiddleware, async (req, res) => {
  try {
    const storeId = req.user.id;

    // Total transacciones
    const { data: transactions } = await supabase
      .from('transactions')
      .select('*')
      .eq('store_id', storeId);

    // Clientes únicos
    const uniqueCustomers = new Set(
      transactions?.map((t) => t.user_id) || []
    ).size;

    // Revenue total
    const totalRevenue = transactions?.reduce((sum, t) => sum + t.monto, 0) || 0;

    // Promedio por transacción
    const avgTransaction =
      transactions && transactions.length > 0
        ? totalRevenue / transactions.length
        : 0;

    res.json({
      totalTransacciones: transactions?.length || 0,
      clientesUnicos: uniqueCustomers,
      revenueTotal: totalRevenue,
      promedioTransaccion: Math.round(avgTransaction),
      tasaRetorno: (
        (uniqueCustomers / Math.max(1, transactions?.length || 1)) *
        100
      ).toFixed(2),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en servidor' });
  }
});

// ==================== HEALTH CHECK ====================

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Manejo de 404
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint no encontrado' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Vuelve API corriendo en http://localhost:${PORT}`);
  console.log(`📚 Documentación: http://localhost:${PORT}/docs`);
});

export default app;
