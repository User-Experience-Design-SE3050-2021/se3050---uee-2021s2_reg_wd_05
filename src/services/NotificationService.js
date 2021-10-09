const CLASS_TIMETABLE_API_BASE_URI = "http://localhost:5000/classTimetables";

class NotificationService {

    async generateClassTimetable(classTimetable) {
        const bearer = "Bearer " + localStorage.getItem("userToken");
        return await fetch(CLASS_TIMETABLE_API_BASE_URI, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                Authorization: bearer,
            },
            body: JSON.stringify(classTimetable),
        })
        .then((response) => {
            return response;
        })
        .catch((reason) => {
            return reason;
        });
    }


    async getClassTimetable() {
        return await fetch(CLASS_TIMETABLE_API_BASE_URI, {
            method: "GET",
        })
        .then((response) => {
            return response.json();
        })
        .catch((reason) => {
            return reason;
        });
    }


    async getClassTimetableByID(id) {
        return await fetch(CLASS_TIMETABLE_API_BASE_URI + "/" + id, {
            method: "GET",
        })
        .then((response) => {
            return response.json();
        })
        .catch((reason) => {
            return reason;
        });
    }


    async updateClassTimetable(id, classTimetable) {
        const bearer = "Bearer " + localStorage.getItem("userToken");
        return await fetch(CLASS_TIMETABLE_API_BASE_URI + "/" + id, {
            method: "PUT",
            headers: {
                "content-Type": "application/json",
                Authorization: bearer,
            },
            body: JSON.stringify(classTimetable),
        })
        .then((response) => {
            return response;
        })
        .catch((reason) => {
            return reason;
        });
    }


    async removeClassTimetable(id) {
        const bearer = "Bearer " + localStorage.getItem("userToken");
        return await fetch(CLASS_TIMETABLE_API_BASE_URI + "/" + id, {
            headers: {
                Authorization: bearer,
            },
            method: "DELETE",
        })
        .then((response) => {
            return response;
        })
        .catch((reason) => {
            return reason;
        });
    }


    async searchClassTimetable(type,value) {
        return await fetch(CLASS_TIMETABLE_API_BASE_URI + "/search/result?type="+type+'&value='+value , {
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

export default new NotificationService();
