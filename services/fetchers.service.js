import httpCommon from "../http-common";

class apiWorker {
    getAll(endpoint) {
        return httpCommon.get(`${endpoint}`);
    }

    get(endpoint, id) {
        return httpCommon.get(`${endpoint}/${id}`);
    }

    create(endpoint, data) {
        return httpCommon.post(`${endpoint}`, data);
    }

    update(endpoint, id, data) {
        return httpCommon.put(`${endpoint}/${id}`, data);
    }

    delete(endpoint, id) {
        return httpCommon.delete(`${endpoint}/${id}`);
    }

    deleteAll(endpoint) {
        return httpCommon.delete(`${endpoint}`);
    }

    findByTitle(endpoint, title) {
        return httpCommon.get(`${endpoint}?title=${title}`);
    }
}

export default new apiWorker();
