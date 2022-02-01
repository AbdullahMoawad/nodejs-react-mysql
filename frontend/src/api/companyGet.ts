import api from "./api";
import {AxiosPromise} from "axios";

const companyGet = (payload):Promise<AxiosPromise> => {
    return api.get(`company/${payload}`);
}

export default companyGet