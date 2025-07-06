import { db } from '../data/data.js';
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    setDoc,
    doc
} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export const getProductById = async (id) => {
    const productDoc = await getDoc(doc(productsCollection, id));
    return productDoc.exists() ? productDoc.data() : null;
}

export const getAllProducts = async () => {
    const querySnapshot = await getDocs(productsCollection);
    const products = [];
    querySnapshot.forEach(doc => {
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
}

export const saveProduct = async (product) => {
    await addDoc(productsCollection, product);
}

export const updateProduct = async (id, product) => {
    await setDoc(doc(productsCollection, id), product);
}

export const deleteProduct = async (id) => {
    await deleteDoc(doc(productsCollection, id));
}

export const searchProduct = async (nombre) => {
    const products = await getAllProducts();
    const filteredProducts = products
        .filter(product =>
            product.nombre.toLowerCase().includes(nombre.toLocaleLowerCase())
        );
    return !filteredProducts.length ? [] : filteredProducts;
}