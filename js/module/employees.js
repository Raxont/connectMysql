import {connection} from "../../db/connection.js";

//Encontrar todos los empleados que trabajan en la oficina de 'San Francisco':
export const getSanFranciscoEmployees = async() =>{
    let [result]=await connection.query(`SELECT lastName, firstName,officeCode FROM employees where officeCode=1;`);
    return result;
}

//Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143:
export const getNameAndEmailFromEmployeesWhoReport = async(employeeReportedId) =>{
    let [result]=await connection.query(`SELECT lastName, firstName, email FROM employees WHERE reportsTo=${employeeReportedId};`);
    return result;
}

//Obtener la cantidad total de empleados:
export const getAllEmployees = async() =>{
    let [result]=await connection.query(`SELECT COUNT(*) AS totalEmployees FROM employees;`);
    return result;
}

//Contar la cantidad de empleados por título de trabajo:
export const getEmployeesPerJob = async() =>{
    let [result]=await connection.query(`SELECT jobTitle, COUNT(*) AS officesCountry FROM employees GROUP BY jobTitle;`);
    return result;
}

//Encontrar el promedio de ventas (cantidad ordenada por precio cada uno) por cada empleado:
export const getAverageSalesPerEmployee = async() =>{
    let [result]=await connection.query(`SELECT employeeNumber,AVG(quantityOrdered * priceEach) AS averageSales FROM employees INNER JOIN customers ON employeeNumber=salesRepEmployeeNumber INNER JOIN orders USING(customerNumber) 
        INNER JOIN orderdetails USING(orderNumber) WHERE salesRepEmployeeNumber IS NOT NULL GROUP BY employeeNumber ORDER BY averageSales DESC;`);
    return result;
}

//Calcular el total de órdenes gestionadas por cada empleado:
export const getTotalOrdersPerEmployee = async() =>{
    let [result]=await connection.query(`SELECT employeeNumber,COUNT(orderNumber) AS cuantityOrders FROM employees INNER JOIN customers ON employeeNumber=salesRepEmployeeNumber INNER JOIN orders USING(customerNumber) 
        WHERE salesRepEmployeeNumber IS NOT NULL GROUP BY employeeNumber ORDER BY cuantity DESC;`);
    return result;
}

//Encontrar el promedio de la cantidad de productos ordenados por cada cliente:
export const getAverageProductsOrderPerClient = async() =>{
    let [result]=await connection.query(`SELECT customerNumber,AVG(quantityOrdered) AS averageOrders FROM employees INNER JOIN customers ON employeeNumber=salesRepEmployeeNumber INNER JOIN orders USING(customerNumber) 
        INNER JOIN orderdetails USING(orderNumber) WHERE salesRepEmployeeNumber IS NOT NULL GROUP BY customerNumber;`);
    return result;
}

//Calcular el total de ventas realizadas en cada país:
export const getTotalSalesPerCountry = async() =>{
    let [result]=await connection.query(`SELECT country,COUNT(orderNumber) AS totalSold FROM employees INNER JOIN customers ON employeeNumber=salesRepEmployeeNumber INNER JOIN orders USING(customerNumber)
         WHERE salesRepEmployeeNumber IS NOT NULL GROUP BY country;`);
    return result;
}

//Encontrar la cantidad total de productos vendidos por cada vendedor:
export const getTotalProductSoldPerSeller = async() =>{
    let [result]=await connection.query(`SELECT employeeNumber,SUM(quantityOrdered) AS cuantityOrders FROM employees INNER JOIN customers ON employeeNumber=salesRepEmployeeNumber 
        INNER JOIN orders USING(customerNumber) INNER JOIN orderdetails USING(orderNumber) WHERE salesRepEmployeeNumber IS NOT NULL GROUP BY employeeNumber;`);
    return result;
}

//Calcular el total de pagos recibidos por cada vendedor:
export const getTotalPaymentsPerSeller = async() =>{
    let [result]=await connection.query(`SELECT employeeNumber,COUNT(checkNumber) AS totalPayments FROM employees INNER JOIN customers ON employeeNumber=salesRepEmployeeNumber INNER JOIN payments USING(customerNumber) 
        WHERE salesRepEmployeeNumber IS NOT NULL GROUP BY employeeNumber;`);
    return result;
}

//Obtener el promedio del límite de crédito de los clientes atendidos por cada vendedor:
export const getAverageCreditLimitOfClientsPerSeller = async() =>{
    let [result]=await connection.query(`SELECT employeeNumber,AVG(creditLimit) AS averageCreditLimit FROM employees INNER JOIN customers ON employeeNumber=salesRepEmployeeNumber INNER JOIN payments USING(customerNumber) 
        WHERE salesRepEmployeeNumber IS NOT NULL GROUP BY employeeNumber;`);
    return result;
}

//Calcular la cantidad media de productos pedidos por cada cliente:
export const getAverageProductsOrdersPerClient = async() =>{
    let [result]=await connection.query(`SELECT customerNumber,AVG(quantityOrdered) AS averageOrders FROM employees INNER JOIN customers ON employeeNumber=salesRepEmployeeNumber INNER JOIN orders USING(customerNumber) 
        INNER JOIN orderdetails USING(orderNumber) WHERE salesRepEmployeeNumber IS NOT NULL GROUP BY customerNumber;`);
    return result;
}

