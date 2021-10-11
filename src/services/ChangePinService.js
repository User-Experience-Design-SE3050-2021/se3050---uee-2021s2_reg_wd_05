const CHANGEPIN_BASE_URI = "http://172.20.10.2:3000/changepin";

class ComplaintService {
    /**
     *  This service function handle is to change pin
     */
    async updatePin(id,Pin){
        console.log(Pin);
        return await fetch(CHANGEPIN_BASE_URI+"/"+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json",
            },
            body:JSON.stringify(Pin)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to Get All PIN from backend
     */
    async getPin() {
        return await fetch(CHANGEPIN_BASE_URI, {
            method: 'GET',
        })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .catch(reason => {
                return reason;
            });
    }

    /**
     *  This service function is to get one PIN from backend
     */
    async getPinByID(id) {
        return await fetch(CHANGEPIN_BASE_URI + id, {
            method: 'GET',
        })
            .then(response => {
                return response.json();
            })
            .catch(error => {
                console.log(error.message);
            });
    }
    /**
     *  This service function is to Add Complaint Details
     */
    async createPin(pin) {
        console.log(pin);
        return await fetch(CHANGEPIN_BASE_URI, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(pin),
        })
            .then(response => {
                console.log(response);
                return response;
            })
            .catch(reason => {
                return reason;
            });
    }

}
export default new ComplaintService();
