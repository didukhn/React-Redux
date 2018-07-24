import axios from "axios";

const RequestType = {
    GET: 'get',
    POST: 'post',
    PATCH: 'patch',
    DELETE: 'delete'
}

class BaseService {

    constructor(baseUrl) {
        this._baseUrl = baseUrl;
        this._axios = axios.create({
            baseURL: baseUrl
        });
    }

    get baseUrl() {
        return this._baseUrl;
    }

    get axios() {
        return this._axios;
    }

    call(uri, requestType, data = null) {
        return this.axios[requestType](uri, data)
            .then(x => x.data)
            .catch(err => console.log(err));
    }
}

export { RequestType, BaseService };