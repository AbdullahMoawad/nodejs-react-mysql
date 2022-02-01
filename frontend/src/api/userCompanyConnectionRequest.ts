import api from "./api";
import {AxiosError, AxiosPromise, AxiosResponse} from "axios";

const userCompanyConnectionRequest = (payload: number) : Promise<AxiosPromise>=> {
    return api.post(`user/company/connection-request`, {to_company: payload});
}

export default userCompanyConnectionRequest