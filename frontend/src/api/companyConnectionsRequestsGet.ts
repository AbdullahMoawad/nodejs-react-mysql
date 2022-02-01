import api from "./api";
import {AxiosPromise} from "axios";

const companyConnectionsRequestsGet = (payload) :Promise<AxiosPromise>=> {
    return api.post('company-connection/requests', payload);
}

export default companyConnectionsRequestsGet