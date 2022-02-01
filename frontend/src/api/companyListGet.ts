import api from "./api";
import {AxiosPromise} from "axios";

const companyListGet = ():Promise<AxiosPromise> => {
    return api.get('company');
}

export default companyListGet