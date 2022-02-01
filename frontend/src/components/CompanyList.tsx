import companyListGet from "../api/companyListGet";
import {useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import CompanyBox from "../components/CompanyBox";
import TypeCompany from "../types/TypeCompany";
import {Alert} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";
import CompanySearchHandle from "./CompanySearchHandle";

const CompanyList = () => {
    const [queryParams] = useSearchParams();
    const [companyList, setCompanyList] = useState([])
    const [searchResults, setSearchResults] = useState<TypeCompany[]>()
    const {handleSearch} = CompanySearchHandle()

    const getCompanyList = () => {
        companyListGet()
            .then((res: AxiosResponse | any) => {
                if (res?.status === 200) {
                    setCompanyList(res?.data)
                }
            }).catch(e => console.log(e))
    }

    const search = async () => {
        try {
            const apiCall: any = await handleSearch()
            if (apiCall?.status === 200) setCompanyList(apiCall?.data);
            if (apiCall.status !== 200) alert(apiCall?.response?.data);

        } catch (e) {
            console.log('company search', e)
        }
    }
    useEffect(() => getCompanyList(), [])
    useEffect(() => console.log(searchResults), [searchResults])
    useEffect(() => {
        search()
    }, [queryParams])

    return (
        <>
            {searchResults?.length === 0 && <Alert className={'float-start col-12'}>No companies</Alert>}

            {companyList?.length > 0 && (
                <>
                    {!searchResults && companyList.map((company: TypeCompany) => (
                        <div className={'float-start col-12 col-md-6 p-2'} key={company.id}>
                            <CompanyBox company={company}/>
                        </div>
                    ))}

                    {searchResults && searchResults.length > 0 && searchResults.map(company => (
                        <div className={'float-start col-12 col-md-6 p-2'} key={company.id}>
                            <CompanyBox company={company}/>
                        </div>
                    ))}
                </>
            )}
        </>
    )
}

export default CompanyList