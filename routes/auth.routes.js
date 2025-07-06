import express from 'express';
import { login } from '../controllers/auth.controller.js';

const router = express.Router();


/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Autenticación]
 *     summary: Iniciar sesión y obtener token JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@email.com
 *               password:
 *                 type: string
 *                 example: strongPass123
 *     responses:
 *       200:
 *         description: Token JWT generado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Email o contraseña inválidos
 */
router.post('/login', login);

export default router;