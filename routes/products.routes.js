import express from 'express';
import * as productsController from '../controllers/products.controller.js';

const router = express.Router();


/**
 * @swagger
 * /api/products:
 *   get:
 *     tags: [Productos]
 *     summary: Listar todos los productos
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 products:
 *                   type: array
 *                   example:
 *                     - id: 1
 *                       nombre: Laptop
 *                       precio: 1200
 *                       cantidad: 5
 *                     - id: 10
 *                       nombre: Disco Duro
 *                       precio: 100
 *                       cantidad: 18
 *       403:
 *         description: Acceso no autorizado
 */
router.get('/products', productsController.getAllProducts)


/**
 * @swagger
 * /api/products/search:
 *   get:
 *     tags: [Productos]
 *     summary: Buscar productos por nombre
 *     parameters:
 *       - in: query
 *         name: nombre
 *         required: true
 *         schema:
 *           type: string
 *         example: laptop
 *     responses:
 *       200:
 *         description: Lista de productos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "1"
 *                   nombre:
 *                     type: string
 *                     example: "Laptop Lenovo IdeaPad 3"
 *                   precio:
 *                     type: number
 *                     example: 799.99
 *                   cantidad:
 *                     type: number
 *                     example: 15
 *       400:
 *         description: Parámetro 'nombre' faltante o inválido
 *       403:
 *         description: Acceso no autorizado
 *       404:
 *         description: No se encontraron productos
 */
router.get('/products/search', productsController.searchProduct);


/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     tags: [Productos]
 *     summary: Obtener producto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         example: 10
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "10"
 *                 nombre:
 *                   type: string
 *                   example: "Laptop Dell Inspiron 15"
 *                 precio:
 *                   type: number
 *                   example: 899.99
 *                 cantidad:
 *                   type: number
 *                   example: 9
 *       404:
 *         description: Producto no encontrado
 *       403:
 *         description: Acceso no autorizado
 */
router.get("/products/:id", productsController.getProductById);


/**
 * @swagger
 * /api/products:
 *   post:
 *     tags: [Productos]
 *     summary: Crear un nuevo producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             required: [nombre, precio, cantidad]
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "WebCam"
 *               precio:
 *                 type: number
 *                 example: 5000
 *               cantidad:
 *                 type: integer
 *                 example: 20
 *     responses:
 *       201:
 *         description: Producto creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 12
 *                 nombre:
 *                   type: string
 *                   example: "WebCam"
 *                 precio:
 *                   type: number
 *                   example: 5000
 *                 cantidad:
 *                   type: integer
 *                   example: 20
 *       403:
 *         description: Acceso denegado
 *       500:
 *         description: Error del servidor
 */
router.post("/products", productsController.createProduct);


/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     tags: [Productos]
 *     summary: Actualizar un producto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "9"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "WebCam HD"
 *               precio:
 *                 type: number
 *                 example: 5500
 *               cantidad:
 *                 type: integer
 *                 example: 25
 *     responses:
 *       200:
 *         description: Producto actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 9
 *                 nombre:
 *                   type: string
 *                   example: "WebCam HD"
 *                 precio:
 *                   type: number
 *                   example: 5500
 *                 cantidad:
 *                   type: integer
 *                   example: 25
 *       403:
 *         description: Acceso denegado
 *       404:
 *         description: Producto no encontrado
 */
router.put("/products/:id", productsController.updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     tags: [Productos]
 *     summary: Eliminar producto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10
 *     responses:
 *       204:
 *         description: Producto eliminado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete("/products/:id", productsController.deleteProduct);

export default router;