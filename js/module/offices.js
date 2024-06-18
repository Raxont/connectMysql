import {connection} from "../../db/connection.js";

//Contar la cantidad de oficinas en cada país:
export const getAllOfficesPerCountry = async() =>{
    let [result]=await connection.query(`SELECT country, COUNT(*) AS officesCountry FROM offices GROUP BY country`);
    return result;
}

//Encontrar el total de ventas realizadas por cada oficina:
export const getTotalSalesPerOffice = async() =>{
    let [result]=await connection.query(`SELECT officeCode,SUM(amount) AS totalSales FROM offices INNER JOIN employees USING(officeCode) INNER JOIN customers ON employeeNumber=salesRepEmployeeNumber 
        INNER JOIN payments USING(customerNumber) WHERE salesRepEmployeeNumber IS NOT NULL GROUP BY officeCode;`);
    return result;
}