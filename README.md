# Code World - Landing Page Interactiva

Esta es una landing page interactiva construida con React y Vite. La aplicación permite a los usuarios agregar y eliminar ideas de una lista y enviar un formulario de contacto con validación en tiempo real.

## Características

- **Gestión de Ideas**: Añade o elimina ideas de una lista de forma dinámica. El estado se gestiona globalmente con Zustand.
- **Formulario de Contacto**: Un formulario completo con validación de campos (nombre, email, mensaje) utilizando `react-hook-form` y `zod`.
- **Navegación Fluida**: Navegación interna a través de enlaces ancla.
- **Botón Flotante**: Un botón de "volver arriba" que aparece al hacer scroll para mejorar la experiencia de usuario.
- **Componentes Modulares**: La aplicación está estructurada en componentes de React reutilizables.

## Tecnologías Utilizadas

- **Frontend**:
  - [React 19](https://react.dev/)
  - [Vite](https://vitejs.dev/) como herramienta de construcción y servidor de desarrollo.
- **Manejo de Estado**:
  - [Zustand](https://github.com/pmndrs/zustand) para un manejo de estado global simple y efectivo.
- **Formularios**:
  - [React Hook Form](https://react-hook-form.com/) para la gestión de formularios.
  - [Zod](https://zod.dev/) para la validación de esquemas.
- **Linting**:
  - [ESLint](https://eslint.org/) para mantener la calidad y consistencia del código.

## Cómo Empezar

Sigue estas instrucciones para tener una copia del proyecto corriendo en tu máquina local.

### Prerrequisitos

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema (se recomienda la versión LTS).

### Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/ecc97/landing-page-interactive.git
   ```
2. Navega al directorio del proyecto:
   ```sh
   cd landing-page-interactive
   ```
3. Instala las dependencias de npm:
   ```sh
   npm install
   ```

### Ejecución

Para iniciar el servidor de desarrollo, ejecuta:

```sh
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) (o el puerto que indique Vite) en tu navegador para ver la aplicación.

## Scripts Disponibles

En el `package.json`, encontrarás los siguientes scripts:

- `npm run dev`: Inicia el servidor de desarrollo de Vite.
- `npm run build`: Compila la aplicación para producción en el directorio `dist`.
- `npm run lint`: Ejecuta ESLint para analizar el código en busca de errores y problemas de estilo.
- `npm run preview`: Sirve el build de producción localmente para previsualización.

## Estructura del Proyecto

```
landing-page-interactive/
├── public/              # Archivos estáticos públicos
├── src/
│   ├── assets/          # Imágenes y otros assets
│   ├── components/      # Componentes de React
│   │   ├── Contact/
│   │   ├── FloatingButton/
│   │   ├── Header/
│   │   ├── Hero/
│   │   └── List/
│   |   └── Footer/
│   ├── store/           # Stores de Zustand
│   │   └── ideasStore.js
│   ├── utils/           # Funciones de utilidad
│   ├── App.css
│   ├── App.jsx          # Componente raíz de la aplicación
│   ├── index.css        # Estilos globales
│   └── main.jsx         # Punto de entrada de la aplicación
├── .gitignore
├── eslint.config.js     # Configuración de ESLint
├── index.html           # Plantilla HTML principal
├── package.json
├── README.md
└── vite.config.js       # Configuración de Vite
```