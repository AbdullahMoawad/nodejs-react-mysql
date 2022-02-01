import {useSearchParams} from "react-router-dom";
import companySearch from "../api/companySearch";
import Validation from "../schemaValidation/Validation";
import companySearchSchema from "../schemaValidation/companySearchSchema";

const CompanySearchHandle = () => {
    const [queryParams] = useSearchParams();
    const {validate} = Validation(companySearchSchema)

    const shouldSearch = searchData => Object.values(searchData).some((param:any) => (param && param.length > 0));

    const handleSearch = async () => {
        const searchData = {
            name: queryParams.get('name'),
            industry: queryParams.get('industry'),
            size: queryParams.get('size'),
        }

        if (!shouldSearch(searchData)) return;

        const hasError = await validate(searchData)

        if (hasError && Object.keys(hasError).length > 0) throw Error();

        return companySearch(searchData)
    }

    return {handleSearch}
}

export default CompanySearchHandle