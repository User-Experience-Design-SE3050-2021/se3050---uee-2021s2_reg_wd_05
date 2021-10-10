const BILL_PAYMENT_API_BASE_URI = "http://localhost:5000/billPayment";

class BillPaymentService {

    async verifyAccountDetails(account) {
        return await fetch(BILL_PAYMENT_API_BASE_URI + "/" + account, {
            method: "GET",
        })
        .then((response) => {
            return response.json();
        })
        .catch((reason) => {
            return reason;
        });
    }

    async makePayment() {
        return await fetch(BILL_PAYMENT_API_BASE_URI+"/bill/payment", {
            method: "GET",
        })
        .then((response) => {
            return response;
        })
        .catch((reason) => {
            return reason;
        });
    }

    async getBillCategoryDetails(id) {
        return await fetch(BILL_PAYMENT_API_BASE_URI + "/" + id, {
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

export default new BillPaymentService();
