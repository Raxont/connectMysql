import {connection} from "../../db/connection.js";

//Calcular la cantidad media de productos pedidos en las órdenes:
export const getAverageProductsOrders = async() =>{
    let [result]=await connection.query(`SELECT AVG(quantityOrdered) AS quantityOrders FROM orderdetails;`);
    return result;
}

//Obtener la cantidad total de productos vendidos por cada línea de productos:
export const getTotalProductsSoldPerProductLine = async() =>{
    let [result]=await connection.query(`SELECT orderLineNumber,SUM(priceEach * quantityOrdered) AS totalSold FROM orderdetails GROUP BY orderLineNumber ORDER BY totalSold DESC;`);
    return result;
}

//Encontrar el promedio del precio de venta (priceEach) de los productos por línea de productos:
export const getAveragePriceEachProductsPerProductLine = async() =>{
    let [result]=await connection.query(`SELECT productLine,AVG(priceEach) AS averagePrice FROM orderdetails INNER JOIN products USING(productCode) GROUP BY productLine;`);
    return result;
}