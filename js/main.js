import { 
    getAverageProductsOrders,
    getTotalProductsSoldPerProductLine,
    getAveragePriceEachProductsPerProductLine
} from "./module/orderdetails.js";
import {
    getUsaClientsLimitCredit,
    getAverageLimitCreditPerClient,
    getAverageCreditLimitPerCountry
} from "./module/customers.js";
import {
    getClientPayments,
    getAllPaymentsPerClient,
    getAllPayments,
    getTotalPaymentsPerClient,
    getTotalPaymentsPerCountry,
    getTotalPaymentsPerYear
} from "./module/payments.js";
import {
    getOrdersSend,
    getOrdersFromFrance,
    getOrdersAndNamesPerClient,
    getTotalOrdersPerClient,
    getTotalProductsOrderedPerClient,
    getTotalSalesPerClient
} from "./module/orders.js";
import {
    getSanFranciscoEmployees,
    getNameAndEmailFromEmployeesWhoReport,
    getAllEmployees,
    getEmployeesPerJob,
    getAverageSalesPerEmployee,
    getTotalOrdersPerEmployee,
    getAverageProductsOrderPerClient,
    getTotalSalesPerCountry,
    getTotalProductSoldPerSeller,
    getTotalPaymentsPerSeller,
    getAverageCreditLimitOfClientsPerSeller,
    getAverageProductsOrdersPerClient
} from "./module/employees.js";
import { 
    getAllOfficesPerCountry,
    getTotalSalesPerOffice 
} from "./module/offices.js";
import { 
    getAllProductsline,
    getAllProductsAndLineDescription,
    getTotalStockProducts,
    getAveragePriceForAllProducts,
    getAllProductsPrice,
    getAverageProductsMSRP,
    getAverageProductsOnStockPerProductLine,
    getAveragePriceProductsPerProductLine
} from "./module/products.js";

console.log(await getAllProductsAndLineDescription());