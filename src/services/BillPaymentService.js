const BILL_PAYMENT_API_BASE_URI = "http://localhost:5000/billPayment";

class BillPaymentService {

    async verifyAccountDetails(account) {
        return await fetch(BILL_PAYMENT_API_BASE_URI, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(account),
        })
        .then((response) => {
            return response;
        })
        .catch((reason) => {
            return reason;
        });
    }

    async makePayment(payment) {
        return await fetch(BILL_PAYMENT_API_BASE_URI, {
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
