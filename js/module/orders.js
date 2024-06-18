import {connection} from "../../db/connection.js";

//Listar todas las órdenes que tienen un estado de 'Enviado':
export const getOrdersSend = async() =>{
    let [result]=await connection.query(`SELECT orderNumber,status FROM orders where status="Shipped";`);
    return result;
}

//Encontrar todas las órdenes realizadas por clientes de 'Francia':
export const getOrdersFromFrance = async() =>{
    let [result]=await connection.query(`SELECT orderNumber,country FROM orders INNER JOIN customers USING (customerNumber) WHERE country="France";`);
    return result;
}

//Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 101:
export const getOrdersAndNamesPerClient = async(clientNumber) =>{
    let [result]=await connection.query(`SELECT orderNumber,productName,customerNumber FROM orders INNER JOIN orderdetails USING (orderNumber) INNER JOIN products USING(productCode) WHERE customerNumber=${clientNumber};`);
    return result;
}

//Calcular el total de órdenes realizadas por cada cliente:
export const getTotalOrdersPerClient = async() =>{
    let [result]=await connection.query(`SELECT customerNumber,count(*) AS totalOrdered FROM orders GROUP BY customerNumber;`);
    return result;
}

//Encontrar la cantidad total de productos pedidos por cada cliente:
export const getTotalProductsOrderedPerClient = async() =>{
    let [result]=await connection.query(`SELECT customerNumber,sum(quantityOrdered) AS totalProducts FROM orders INNER JOIN orderdetails USING(orderNumber) GROUP BY customerNumber;`);
    return result;
}

//Calcular el total de ventas (cantidad ordenada por precio cada uno) por cada cliente:
export const getTotalSalesPerClient = async() =>{
    let [result]=await connection.query(`SELECT customerNumber,sum(quantityOrdered*priceEach) AS totalSales FROM orders INNER JOIN orderdetails USING(orderNumber) GROUP BY customerNumber ORDER BY totalProducts DESC;`);
    return result;
}