const BILL_PAYMENT_API_BASE_URI = "http://192.168.1.4:3000/billPayment";
const BILL_ACCOUNT_API_BASE_URI = "http://192.168.1.4:3000/billAccount";

class BillPaymentService {

    async verifyAccountDetails(account) {
        console.log('id',account)
        return await fetch(BILL_ACCOUNT_API_BASE_URI + "/" + account, {
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
