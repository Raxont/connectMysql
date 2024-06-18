import {connection} from "../../db/connection.js";

//Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:
export const getClientPayments = async(customerNumber) =>{
    let [result]=await connection.query(`SELECT * FROM payments WHERE customerNumber=${customerNumber};`);
    return result;
}

//Listar el monto total de los pagos recibidos de cada cliente:
export const getAllPaymentsPerClient = async() =>{
    let [result]=await connection.query(`SELECT customerNumber, SUM(amount) AS amount FROM payments GROUP BY customerNumber;`);
    return result;
}

//Calcular el total de pagos recibidos:
export const getAllPayments = async() =>{
    let [result]=await connection.query(`SELECT COUNT(*) AS totalPayments FROM payments;`);
    return result;
}

//Calcular el total de pagos recibidos por cada cliente:
export const getTotalPaymentsPerClient = async() =>{
    let [result]=await connection.query(`SELECT customerNumber, SUM(amount) AS amount FROM payments GROUP BY customerNumber;`);
    return result;
}

//Calcular el total de pagos recibidos por cada país:
export const getTotalPaymentsPerCountry = async() =>{
    let [result]=await connection.query(`SELECT country, SUM(amount) AS totalAmount FROM payments INNER JOIN customers USING(customerNumber) GROUP BY country;`);
    return result;
}

//Obtener el total de pagos realizados en cada año:
export const getTotalPaymentsPerYear = async() =>{
    let [result]=await connection.query(`SELECT YEAR(paymentDate) AS year, SUM(amount) AS totalAmount FROM payments GROUP BY year;`);
    return result;
}