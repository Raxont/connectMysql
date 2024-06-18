import {connection} from "../../db/connection.js";

//Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:
export const getUsaClientsLimitCredit = async(limitCredit) =>{
    let [result]=await connection.query(`SELECT * FROM customers WHERE country="USA" AND creditLimit>${limitCredit};`);
    return result;
}

//Obtener el promedio del límite de crédito de todos los clientes:
export const getAverageLimitCreditPerClient = async() =>{
    let [result]=await connection.query(`SELECT AVG(creditLimit) AS totalAverage FROM customers;`);
    return result;
}

//Obtener el promedio del límite de crédito de los clientes por país:
export const getAverageCreditLimitPerCountry = async() =>{
    let [result]=await connection.query(`SELECT country,AVG(creditLimit) FROM customers GROUP BY country;`);
    return result;
}

