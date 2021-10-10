const NOTIFICATION_API_BASE_URI = "http://192.168.1.4:3000/notification";

class NotificationService {

    async getNotification() {
        return await fetch(NOTIFICATION_API_BASE_URI, {
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
