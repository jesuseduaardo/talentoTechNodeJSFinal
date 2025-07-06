# 🧠 Talento Tech - Proyecto Final Node.js

Este es el proyecto final del curso **Talento Tech**, desarrollado con **Node.js** y **Express**, desplegado en **Vercel**. Incluye una arquitectura modular, documentación Swagger y buenas prácticas de desarrollo backend.

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- Swagger (swagger-ui-express + swagger-jsdoc)
- Vercel (despliegue)
- JavaScript (ES Modules)

## 📂 Estructura del Proyecto

Esta es la estructura de directorios y archivos del proyecto.

```
.
├── controllers/          # Controladores que manejan la lógica de las peticiones y respuestas
│   ├── auth.controller.js
│   └── products.controller.js
│
├── data/                 # Configuración y conexión con la base de datos (Firebase)
│   └── data.js
│
├── middlewares/          # Middlewares personalizados (ej. autenticación, validación)
│   └── authentication.js
│
├── models/               # Modelos de datos que representan las entidades de la aplicación
│   ├── products.model.js
│   └── user.model.js
│
├── routes/               # Definición de las rutas y endpoints de la API
│   ├── auth.routes.js
│   ├── products.routes.js
│   └── test.routes.js
│
├── services/             # Capa de servicios que contiene la lógica de negocio
│   └── products.service.js
│
├── utils/                # Funciones y utilidades auxiliares reutilizables
│   └── token-generator.js
│
├── .gitignore            # Archivos y carpetas ignorados por Git
├── vercel.json           # Archivo de configuración para el despliegue en Vercel
├── index.js              # Punto de entrada y configuración del servidor Express
├── package.json          # Metadatos, dependencias y scripts del proyecto
└── README.md             # Documentación principal del proyecto
```


## 📚 Documentación de la API

La documentación interactiva está disponible en:
https://talento-tech-node-js-final.vercel.app/api-docs

## 🛠️ Instalación local

```bash
git clone https://github.com/jesuseduaardo/talentoTechNodeJSFinal.git
cd talentoTechNodeJSFinal
npm install
npm start
```
Luego accede a http://localhost:3000/api-docs para ver la documentación.

🧪 Scripts disponibles
- npm start: Inicia el servidor en modo producción.
- npm run dev: Inicia en modo desarrollo.

📦 Despliegue
Este proyecto está desplegado en Vercel: https://talento-tech-node-js-final.vercel.app 
usando un servidor personalizado (index.js) definido en vercel.json.

## 🩺 Testear si el proyecto esta online 
https://talento-tech-node-js-final.vercel.app/test/

### Para probar un error 500
[https://talento-tech-node-js-final.vercel.app/test/](https://talento-tech-node-js-final.vercel.app/test/error500)


✍️ Autor
Jesús Eduardo Castillo
