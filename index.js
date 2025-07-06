import express from 'express';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import productsRouter from './routes/products.routes.js'
import authRouter from './routes/auth.routes.js';
import testRouter from './routes/test.routes.js';
import { authentication } from './middlewares/authentication.js';

const app = express();
const PORT = 3000;

// MIDDLEWARES
// ----------------------------------------------------
// 1. Peticiones de origen cruzado.
app.use(cors());

// 2. Interpretar objetos json en el body de las peticiones.
app.use(express.json());


// Configuración de Swagger 
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Api productos',
            version: '1.0.1',
            description: 'Api CRUD de productos para el proyecto final',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// --- Ruta para la UI de Swagger ---
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec,
    {
        customJs: [
            'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.18.3/swagger-ui-bundle.js',
            'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.18.3/swagger-ui-standalone-preset.js'
        ],
        customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.18.3/swagger-ui.css'
    }
));

// RUTAS (ENDPOINTS)
// ----------------------------------------------------
app.use('/test', testRouter);
app.use('/auth', authRouter);
app.use('/api', authentication, productsRouter);

// Middleware para 404 Not Found 
const handle404 = (req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
};
app.use(handle404);

// Middleware para manejar errores inesperados
const errorHandler = (err, req, res, next) => {
    // Imprime el error en la consola para depuración
    console.error(err.stack);

    res.status(500).json({
        error: 'Ocurrió un error inesperado en el servidor.'
    });
};
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Servidor iniciado y escuchando en http://localhost:${PORT}`);
    console.log(`Documentación de Swagger disponible en http://localhost:${PORT}/api-docs`);
});