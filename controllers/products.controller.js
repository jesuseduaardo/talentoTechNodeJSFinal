import * as productsService from '../services/products.service.js'

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
    res.status(200).json(await productsService.getAllProducts());
};

// Obtener un producto por su id
export const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await productsService.getProductById(id);
    return product ?
        res.status(200).json(product) :
        res.status(404).json({ error: `Producto con id ${id} no existe` });
}

// Buscar productos por su nombre
export const searchProduct = async (req, res) => {
    const { nombre } = req.query;
    if (!nombre) {
        return res.status(400).json({ error: "El parametro 'nombre'es requerido" })
    }
    const filteredProducts = await productsService.searchProduct(nombre);
    if (!filteredProducts.length) {
        return res.status(404).json({ error: `No se encontro coincidencia con el nombre ${nombre}` })
    }
    res.status(200).json(filteredProducts);
}

// Crear un producto
export const createProduct = async (req, res) => {
    const { nombre, precio, cantidad } = req.body;
    if (!nombre || !precio) {
        return res.status(400).json({ error: `Los campos "nombre" y "precio" son requeridos` });
    }
    res.status(201).json(await productsService.createProduct({ nombre, precio, cantidad }));
}

// Actualizar un producto
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { nombre, precio, cantidad } = req.body;

    const updatedProduct = await productsService.updatedProduct({ id, nombre, precio, cantidad });

    updateProduct != null ?
        res.status(200).json(updatedProduct) :
        res.status(400).json({ error: `No se pudo actualizar el producto con id ${id}` })

}

// Borrar un producto
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await productsService.getProductById(id);
    if (!product) {
        return res.status(404).json({ error: `Producto con id ${id} no existe` });
    }
    productsService.deleteProduct(id);
    return res.status(204).json("Producto eliminado exitosamente");
}

