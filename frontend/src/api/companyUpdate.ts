import api from "./api";
import {AxiosPromise} from "axios";

const companyUpdate = (payload) :Promise<AxiosPromise>=> {
    return api.put('company', payload);
}

export default companyUpdate