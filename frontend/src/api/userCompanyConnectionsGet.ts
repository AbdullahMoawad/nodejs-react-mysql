import api from "./api";
import {AxiosPromise} from "axios";

const userCompanyConnectionsGet = (): Promise<AxiosPromise> => {
    return api.get(`user/company/connections`);
}

export default userCompanyConnectionsGet