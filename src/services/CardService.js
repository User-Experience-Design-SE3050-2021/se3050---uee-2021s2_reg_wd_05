const CARD_API_BASE_URI = "http://localhost:5000/card";

class CardService {

    /**
     *  This service function is to send Card details to backend
     */
    async addCard(payment) {
        return await fetch(CARD_API_BASE_URI, {
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
     *  This service function is to Get All Cards from backend
     */
    async getCards(){
        return await fetch(CARD_API_BASE_URI,{
            method:"GET",
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to get a Card from backend
     */
    async getCardByID(id) {
        return await fetch(CARD_API_BASE_URI + "/" + id, {
            method: "GET",
        })
            .then((response) => {
                return response.json();
            })
            .catch((reason) => {
                return reason;
            });
    }

    /**
     *  This service function is to Remove stored Card in backend
     */
    async removeCard(id){
        return await fetch(CARD_API_BASE_URI+"/"+id,{
            method:"DELETE",
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

}

export default new CardService;
