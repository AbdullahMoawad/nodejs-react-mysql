import {useSearchParams} from "react-router-dom";
import userSearch from "../api/userSearch";

const UserSearchHandle = () => {
    const [queryParams] = useSearchParams();

    const shouldSearch = searchData => Object.values(searchData).some((param: any) => (param && param.length > 0));

    const handleSearch = async () => {
        const searchData = {email: queryParams.get('email'),}
        if (!shouldSearch(searchData)) return;

        return userSearch(searchData)
    }

    return {handleSearch}
}

export default UserSearchHandle