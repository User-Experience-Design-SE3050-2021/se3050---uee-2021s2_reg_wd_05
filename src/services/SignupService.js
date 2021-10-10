// const SIGNUP_BASE_URI = 'http://192.168.1.101:8080/signup/'; //192.168.1.101
//
// class SignupService {
//     /**
//      *  This service function is to Add Signup Details
//      */
//     async createSignup(signup) {
//         console.log(signup);
//         return await fetch(SIGNUP_BASE_URI, {
//             method: 'POST',
//             headers: {
//                 'content-Type': 'application/json',
//             },
//             body: JSON.stringify(signup),
//         })
//             .then(response => {
//                 console.log(response);
//                 return response;
//             })
//             .catch(reason => {
//                 return reason;
//             });
//     }
//     /**
//      *  This service function is to Get All Registered users from backend
//      */
//     async getSignup() {
//         return await fetch(SIGNUP_BASE_URI, {
//             method: 'GET',
//         })
//             .then(response => {
//                 console.log(response);
//                 return response.json();
//             })
//             .catch(reason => {
//                 return reason;
//             });
//     }
//
//     /**
//      *  This service function is to get a order from backend
//      */
//     async getSignupByID(id) {
//         return await fetch(SIGNUP_BASE_URI + id, {
//             method: 'GET',
//         })
//             .then(response => {
//                 return response.json();
//             })
//             .catch(error => {
//                 console.log(error.message);
//             });
//     }
//
// }
// export default new SignupService();
