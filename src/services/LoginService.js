const LOGIN_BASE_URI = "http://172.20.10.2:3000/login";//172.20.10.2

class LoginService {
    /**
     *  This service function is to handle Login
     */
    async login(login) {
        console.log(login);
        return await fetch(LOGIN_BASE_URI, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(login),
        })
            .then(response => {
                console.log(response);
                return response;
            })
            .catch(reason => {
                return reason;
            });
    }
    /**
     *  This service function is to Get All Logins from backend
     */
    async getLogin() {
        return await fetch(LOGIN_BASE_URI, {
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
     *  This service function is to get one Complaint from backend
     */
    async loginByID(id) {
        return await fetch(LOGIN_BASE_URI + id, {
            method: 'GET',
        })
            .then(response => {
                return response.json();
            })
            .catch(error => {
                console.log(error.message);
            });
    }

}
export default new LoginService();
