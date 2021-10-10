const NOTIFICATION_API_BASE_URI = "http://localhost:5000/notification";

class NotificationService {

    async getNotificationByUser(id) {
        return await fetch(NOTIFICATION_API_BASE_URI + "/" + id, {
            method: "GET",
        })
        .then((response) => {
            return response.json();
        })
        .catch((reason) => {
            return reason;
        });
    }

    async removeNotificationById(id) {
        return await fetch(NOTIFICATION_API_BASE_URI + "/" + id, {
            method: "DELETE",
        })
        .then((response) => {
            return response;
        })
        .catch((reason) => {
            return reason;
        });
    }
}

export default new NotificationService();
