import CompanySearchForm from "../components/CompanySearchForm";
import CompanyList from "../components/CompanyList";

const Companies = () => {

    return (
        <div className={'container'}>
            <h1 className={'float-start w-100 text-center'}>Companies List</h1>
            <div className={'float-start w-100 my-5'}>
                <CompanySearchForm/>
            </div>
            <div className={'float-start w-100 my-5'}>
                <CompanyList/>
            </div>
        </div>
    )
}

export default Companies