import {connection} from "../../db/connection.js";

//Recuperar todas las líneas de productos con sus descripciones:
export const getAllProductsline = async() =>{
    let [result]=await connection.query(`SELECT productName,productDescription FROM products;`);
    return result;
}

//Listar todos los productos junto con las descripciones de sus líneas de productos:
export const getAllProductsAndLineDescription = async() =>{
    let [result]=await connection.query(`SELECT productName,productLine AS line,textDescription AS description FROM products INNER JOIN productlines USING (productLine);`);
    return result;
}

//Calcular el total de productos en stock:
export const getTotalStockProducts = async() =>{
    let [result]=await connection.query(`SELECT SUM(quantityInStock) AS totalStockProducts FROM products;`);
    return result;
}

//Encontrar el precio medio de compra de todos los productos:
export const getAveragePriceForAllProducts = async() =>{
    let [result]=await connection.query(`SELECT AVG(buyPrice) AS averagePrice FROM products;`);
    return result;
}

//Encontrar el precio total de todos los productos:
export const getAllProductsPrice = async() =>{
    let [result]=await connection.query(`SELECT SUM(buyPrice) AS totalPrice FROM products;`);
    return result;
}

//Calcular el promedio del precio sugerido (MSRP) de los productos:
export const getAverageProductsMSRP = async() =>{
    let [result]=await connection.query(`SELECT AVG(MSRP) AS totalSuggested  FROM products;`);
    return result;
}

//Obtener el promedio de la cantidad de productos en stock por línea de productos:
export const getAverageProductsOnStockPerProductLine = async() =>{
    let [result]=await connection.query(`SELECT productLine,AVG(quantityinStock) AS totalStock FROM products GROUP BY productLine;`);
    return result;
}

//Obtener el promedio del precio de compra de los productos por línea de productos:
export const getAveragePriceProductsPerProductLine = async() =>{
    let [result]=await connection.query(`SELECT productLine, AVG(buyPrice) AS averagePrice FROM products GROUP BY productLine; `);
    return result;
}