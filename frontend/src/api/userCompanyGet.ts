import api from "./api";
import {AxiosPromise} from "axios";

const userCompanyGet = (): Promise<AxiosPromise> => {
    return api.get(`user/company/get`);
}

export default userCompanyGet