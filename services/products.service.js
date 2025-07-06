import * as productModel from "../models/products.model.js"

export const getAllProducts = async () => {
    return productModel.getAllProducts();
}

export const getProductById = async (id) => {
    return productModel.getProductById(id);
}

export const createProduct = async (productData) => {
    const { nombre, precio, cantidad } = productData;
    const products = productModel.getAllProducts()
    const newProduct = {
        id: products.length + 1,
        nombre,
        precio,
        cantidad
    }
    productModel.saveProduct(newProduct);
    return newProduct;
}

export const searchProduct = async (nombre) => {
    return productModel.searchProduct(nombre);
}

export const updatedProduct = async (newData) => {
    const { id, nombre, precio, cantidad } = newData;

    const originalProduct = await productModel.getProductById(id);

    const updatedProductInfo = {
        nombre: nombre ?? originalProduct.nombre,
        precio: precio ?? originalProduct.precio,
        cantidad: cantidad ?? originalProduct.cantidad
    }
    return await productModel.updateProduct(id, updatedProductInfo);
}

export const deleteProduct = async (id) => {
    return productModel.deleteProduct(id);
}