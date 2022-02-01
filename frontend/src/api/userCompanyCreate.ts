import api from "./api";
import {AxiosPromise} from "axios";

const userCompanyCreate =  (payload): Promise<AxiosPromise> => {
    return api.post('user/company/create', payload);
}

export default userCompanyCreate