# vue_project

Aplicación web de ejemplo para subir y ver fotos y videos usando Vue 3, TypeScript, Vue Router, Pinia y Tailwind CSS.

## ✅ Qué se implementó

- Base de proyecto Vue 3 con Vite y TypeScript.
- Navegación moderna con `vue-router`.
- Estado local con `pinia`.
- UI responsive con `tailwindcss`.
- Estructura de carpetas basada en features:
  - `src/features/home`
  - `src/features/photos`
  - `src/features/videos`
  - `src/shared/components`
  - `src/shared/services`
- Simulación de backend local usando IndexedDB con la librería `idb`.

## 🏗️ Arquitectura del proyecto

Este proyecto usa una arquitectura híbrida basada en features con principios de arquitectura hexagonal.

```bash
src/
├── features/
│   ├── nombre-feature/
│   │   ├── domain/        # Lógica de negocio (modelos, reglas, casos de uso)
│   │   ├── services/      # Comunicación con APIs o lógica externa
│   │   ├── components/    # Componentes Vue específicos de la feature
│   │   ├── views/         # Vistas/páginas de la feature
│   │   └── store/         # Estado (Pinia) de la feature
│
├── shared/
│   ├── components/        # Componentes reutilizables globales
│   ├── composables/       # Lógica reutilizable (Composition API)
│   └── utils/             # Funciones auxiliares
│
├── router/                # Configuración de rutas
├── App.vue
└── main.js
```

### Principios clave

- Organización por features para mejorar escalabilidad y mantenimiento.
- Separación de responsabilidades entre dominio, servicios, UI y estado.
- Desacoplar la lógica de negocio de Vue para facilitar evolución y testeo.
- Centralizar reutilizables en `shared/`.

### Filosofía

- Priorizar simplicidad sobre complejidad innecesaria.
- Evitar sobreingeniería en esta fase inicial.
- Permitir evolución progresiva de la arquitectura.
- Mantener una base clara y flexible para futuros cambios.

---

## 📁 Estructura actual

- `src/main.ts` — bootstrap de Vue, Pinia y router.
- `src/App.vue` — layout principal con barra de navegación.
- `src/router/index.ts` — rutas para Home, Fotos y Videos.
- `src/shared/components/NavBar.vue` — barra de navegación moderna.
- `src/shared/services/mockApi.ts` — simulación de API local con IndexedDB.
- `src/features/photos` — upload, galería y gestión de fotos.
- `src/features/videos` — upload, lista y reproductor de videos.

## ⚙️ Dependencias principales

- `vue`
- `vue-router`
- `pinia`
- `tailwindcss`
- `idb`

## 🚀 Cómo ejecutar

Usa npm o Yarn según prefieras.

```bash
npm install
npm run dev
```

o

```bash
corepack yarn install
corepack yarn dev
```

Luego abre `http://localhost:5173`.

## 🧰 Extensiones recomendadas para VS Code

Para trabajar bien con Vue 3, TypeScript y Tailwind, instala estas extensiones:

- `Vue.volar` — soporte completo para Vue 3 y TypeScript en `.vue`
- `dbaeumer.vscode-eslint` — control de errores y linting de JavaScript/TypeScript
- `esbenp.prettier-vscode` — formateo consistente de código
- `bradlc.vscode-tailwindcss` — autocompletado y soporte para clases Tailwind

## 📝 Notas

- Actualmente la app usa IndexedDB para almacenar archivos localmente.
- No hay backend real todavía; la carpeta `src/shared/services` agrupa la lógica de simulación.
- La aplicación es responsive y puede extenderse como PWA o app móvil más adelante.
- El proyecto incluye Prettier y ESLint para mantener formato y calidad de código.
