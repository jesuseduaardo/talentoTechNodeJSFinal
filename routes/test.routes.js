import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Api Rest en Node.js funcionando correctamente!');
});
router.get('/error500', (req, res) => {
    throw new Error('¡Esto es un error de prueba!');
})

export default router;