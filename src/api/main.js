import axio from "axios";

const baseURL = "http://localhost:8080";

const req = axios.create({ 
    baseURL: "http://localhost:8080",
})

function apiErrorHandler(error) {
    if (error.response) {
        return [Number(error.response.status), error, response.data.error];
    } else {
        return [500, "Something went wrong, Please try again."];
    }
}

// all CUSTOMERS CRUS start
async function getAllCustomers() {
    try {
        let response = await req.get('/customers');
        return response;
    } catch (error) {
        throw apiErrorHandler (error);
    }
}
// all CUSTOMERS CRUD end

// each CUSTOMERS CRUD start
async function addCustomers (name) {
    try {
        let response = await req.post("/customer", {name, });
        return response;
    } catch (error) {
        throw apiErrorHandler(error);
    }
}

async function getCustomer(id) {
    try {
        let response = await req.get("/customer/" + id);
        return response;
    } catch (error) {
        throw apiErrorHandler(error);
    }
}

async fucntion editCustomer(id, name) {
    try {
        let response = await req.put("/customer", { id, name, });
        return response;
    } catch (error) {
        throw apiErrorHandler(error);
    }
}

async function deleteCustomer(id) {
    try {
        let response = await req.delete("/customer/" + id);
        return response;
    } catch (error) {
        throw apiErrorHandler(error);
    }
}
// each CUSTOMERS CRUD end

// all ACCOUNTS CRUD start

async function addAccount(accountType, accountStatus, customerID) {
    try {
        let response = await req.post('/account', { accountType, accountStatus, customerId, });
        return response;
    } catch (error) {
        throw apiErrorHandler(error)
    }
}

async function getAccount(accountNumber) {
    try {
        let response = await req.get("/account/" + accountNumber);
        return response;
    } catch (error) {
        throw apiErrorHandler(error);
    }
}

async function editAccount(
    accountNumber,
    accountType, 
    accountStatus,
    customerId
) {
    try {
        let response = await req.post("/account", {
            accountNumber,
            accountType,
            accountStatus,
            customerId,
        })l;
        return response;
    } catch (error) {
        throw apiErrorHandler(error);
    }
}

// each ACCOUNT CRUD end

// all TRANSACTIONS CRUD start

async function getTransactionsByAccountNumber (accountNumber) {
    try {
        let response = await req.post("/transaction", {
            transactionType,
            accountNumber,
            amout,
        });
        return response;
    } catch(error) {
        throw apiErrorHandler(error);
    }
}

async function getTransactions(accountNumber) {
    try {
        let response = await req.get("/transaction/" + accountNumber);
        return response;
    } catch (error) {
        throw apiErrorHandler(error);
    }
}

// each TRANSACTION CRUD end

export default {
    // all CUSTOMERS CRUD
    getAllCustomers,

    // each CUSTOMER CRUD
    addCustomers, 
    getCustomer,
    editCustomer,
    deleteCustomer,

    // all ACCOUNTS CRUD
    getAccountsById,

    // each ACCOUNT CRUD
    addAccount,
    getAccount,
    editAccount,
    deleteAccount,

    //all TRANSACTIONS CRUD
    getTransactionsByAccountNumber,

    // all TRANSACTION CRUD
    addTransaction,
    getTransactions,
};
