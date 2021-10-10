const TRANSACTION_API_BASE_URI = "http://localhost:3000/transaction";

class TransactionService {

    /**
     *  This service function is to send Transaction details to backend
     */
    async makeTransaction(payment) {
        return await fetch(TRANSACTION_API_BASE_URI, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(payment),
        })
            .then((response) => {
                return response;
            })
            .catch((reason) => {
                return reason;
            });
    }

    /**
     *  This service function is to Get All Transaction from backend
     */
    async getTransactions(){
        return await fetch(TRANSACTION_API_BASE_URI,{
            method:"GET",
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to get a Transaction from backend
     */
    async getTransactionByID(id) {
        return await fetch(TRANSACTION_API_BASE_URI + "/" + id, {
            method: "GET",
        })
            .then((response) => {
                return response.json();
            })
            .catch((reason) => {
                return reason;
            });
    }

}

export default new TransactionService;
