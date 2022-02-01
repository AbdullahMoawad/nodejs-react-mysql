import api from "./api";
import {AxiosPromise} from "axios";

const userSearch = (payload): Promise<AxiosPromise> => {
    return api.get('user/company/employees/search', {params: payload});
}

export default userSearch