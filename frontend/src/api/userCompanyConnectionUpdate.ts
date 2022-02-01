import api from "./api";
import {TypeCompanyConnectionStatus} from "../types/TypeCompanyConnectionStatus";
import {AxiosPromise} from "axios";

const userCompanyConnectionRequestUpdate = (status: TypeCompanyConnectionStatus, id) : Promise<AxiosPromise>=> {
    return api.put(`user/company/connection-request-update`, {status, id});
}

export default userCompanyConnectionRequestUpdate