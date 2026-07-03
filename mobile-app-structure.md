# Vuelve Mobile App (React Native)

Estructura recomendada para la app móvil iOS/Android.

## Estructura de carpetas

```
mobile/
├── package.json
├── app.json                    # Expo config
├── babel.config.js
├── tsconfig.json
│
├── src/
│   ├── App.tsx               # Entry point
│   │
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── RegisterScreen.tsx
│   │   │   └── ResetPasswordScreen.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── StoreDetailsScreen.tsx
│   │   │   └── OffersScreen.tsx
│   │   │
│   │   ├── points/
│   │   │   ├── PointsScreen.tsx
│   │   │   ├── HistoryScreen.tsx
│   │   │   └── RedeemScreen.tsx
│   │   │
│   │   ├── qr/
│   │   │   ├── QRGeneratorScreen.tsx
│   │   │   └── QRSuccessScreen.tsx
│   │   │
│   │   └── profile/
│   │       ├── ProfileScreen.tsx
│   │       ├── SettingsScreen.tsx
│   │       └── NotificationsScreen.tsx
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   └── EmptyState.tsx
│   │   │
│   │   ├── qr/
│   │   │   ├── QRCodeDisplay.tsx
│   │   │   ├── QRTimer.tsx
│   │   │   └── QRScanner.tsx
│   │   │
│   │   ├── store/
│   │   │   ├── StoreCard.tsx
│   │   │   ├── OfferCard.tsx
│   │   │   └── LocationMap.tsx
│   │   │
│   │   └── points/
│   │       ├── PointsCounter.tsx
│   │       ├── LevelBadge.tsx
│   │       └── ProgressBar.tsx
│   │
│   ├── navigation/
│   │   ├── AuthNavigator.tsx     # Auth stack
│   │   ├── AppNavigator.tsx      # Main app tabs
│   │   ├── RootNavigator.tsx     # Decide auth vs app
│   │   └── types.ts              # Navigation types
│   │
│   ├── services/
│   │   ├── api.ts                # API client (axios)
│   │   ├── auth.ts               # Auth logic
│   │   ├── storage.ts            # AsyncStorage wrapper
│   │   └── notifications.ts      # Firebase push
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── usePoints.ts
│   │   ├── useStores.ts
│   │   ├── useQR.ts
│   │   └── useNotifications.ts
│   │
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   ├── PointsContext.tsx
│   │   └── AppContext.tsx
│   │
│   ├── state/
│   │   ├── reducers/
│   │   │   ├── authReducer.ts
│   │   │   └── pointsReducer.ts
│   │   │
│   │   └── actions/
│   │       ├── authActions.ts
│   │       └── pointsActions.ts
│   │
│   ├── types/
│   │   ├── index.ts              # Global types
│   │   ├── api.ts                # API types
│   │   └── store.ts              # Store types
│   │
│   ├── utils/
│   │   ├── api.ts
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   ├── constants.ts
│   │   └── colors.ts
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   └── styles/
│       ├── theme.ts
│       ├── spacing.ts
│       └── typography.ts
│
└── .env.example
```

---

## Key Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-native": "^0.72.0",
    "expo": "^49.0.0",
    "expo-barcode-scanner": "^12.0.0",
    "expo-notifications": "^0.19.0",
    "@react-navigation/native": "^6.1.0",
    "@react-navigation/bottom-tabs": "^6.5.0",
    "axios": "^1.6.0",
    "react-native-qrcode-svg": "^6.2.0",
    "react-native-svg": "^13.12.0",
    "async-storage": "^1.13.0",
    "@react-native-async-storage/async-storage": "^1.18.0",
    "date-fns": "^2.30.0",
    "zustand": "^4.4.0",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^18.2.0",
    "@types/react-native": "^0.72.0"
  }
}
```

---

## Screen Examples

### LoginScreen.tsx

```typescript
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useAuth } from '../hooks/useAuth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useAuth();

  const handleLogin = async () => {
    const success = await login(email, password);
    if (success) {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Inicia sesión en Vuelve
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />

      {error && <Text style={{ color: 'red' }}>{error}</Text>}

      <TouchableOpacity
        onPress={handleLogin}
        disabled={loading}
        style={{
          backgroundColor: '#6C3FE0',
          padding: 15,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
          {loading ? 'Cargando...' : 'Inicia sesión'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={{ marginTop: 20 }}
      >
        <Text style={{ color: '#6C3FE0', textAlign: 'center' }}>
          ¿No tienes cuenta? Regístrate
        </Text>
      </TouchableOpacity>
    </View>
  );
}
```

### QRGeneratorScreen.tsx

```typescript
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useAuth } from '../hooks/useAuth';
import { generateQR } from '../services/api';

export default function QRGeneratorScreen() {
  const { user, token } = useAuth();
  const [qrCode, setQRCode] = useState(null);
  const [timeLeft, setTimeLeft] = useState(120);
  const [loading, setLoading] = useState(false);

  const handleGenerateQR = async () => {
    setLoading(true);
    try {
      const response = await generateQR(token);
      setQRCode(response.qrCode);
      setTimeLeft(120);
    } catch (error) {
      Alert.alert('Error', 'No se pudo generar el QR');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!qrCode) return;

    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
      if (timeLeft <= 0) {
        setQRCode(null);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [qrCode, timeLeft]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 30 }}>
        QR para Pagar
      </Text>

      {qrCode ? (
        <>
          <QRCode value={qrCode} size={300} />
          <Text style={{ marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>
            Expira en: {timeLeft}s
          </Text>
          <TouchableOpacity
            onPress={() => setQRCode(null)}
            style={{ marginTop: 20, paddingVertical: 10, paddingHorizontal: 20 }}
          >
            <Text style={{ color: '#6C3FE0', fontWeight: 'bold' }}>Cancelar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          onPress={handleGenerateQR}
          disabled={loading}
          style={{
            backgroundColor: '#6C3FE0',
            paddingVertical: 15,
            paddingHorizontal: 40,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
            {loading ? 'Generando...' : 'Generar QR'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
```

---

## Setup (Expo)

```bash
# Create new project
npx create-expo-app vuelve-mobile
cd vuelve-mobile

# Install dependencies
npm install expo-barcode-scanner react-native-qrcode-svg axios

# Start
npm start
# Escanea QR con Expo Go (iOS/Android)
```

---

## Styling with Theme

```typescript
// utils/theme.ts
export const theme = {
  colors: {
    primary: '#6C3FE0',
    success: '#0F6E56',
    danger: '#E24B4A',
    text: '#1a1a1a',
    lightBg: '#F7F7F7',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
};

// En componentes
import { theme } from '../utils/theme';

<View style={{ padding: theme.spacing.md, backgroundColor: theme.colors.lightBg }}>
```

---

## API Integration

```typescript
// services/api.ts
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const API_URL = 'http://localhost:3000';

export const apiClient = axios.create({
  baseURL: API_URL,
});

// Agregar token automáticamente
apiClient.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth
export const login = (email: string, password: string) =>
  apiClient.post('/auth/login', { email, password });

// QR
export const generateQR = (token: string) =>
  apiClient.post('/qr/generate', {}, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Points
export const getPoints = (userId: string) =>
  apiClient.get(`/users/${userId}/points`);
```

---

## Environment Variables

```env
# .env
API_URL=http://localhost:3000
FIREBASE_API_KEY=...
GOOGLE_MAPS_API_KEY=...
```

---

## Next Steps

1. Crear proyecto Expo
2. Instalar dependencias
3. Copiar esta estructura
4. Implementar autenticación
5. Conectar con backend
6. Build para iOS/Android

---

**Status:** Ready for implementation  
**Priority:** After MVP web dashboard
