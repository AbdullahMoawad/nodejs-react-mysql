import * as yup from 'yup';

const companySchema = yup.object().shape(
    {
        name: yup.string().nullable(),
        size: yup.string().nullable(),
        industry: yup.string().nullable(),
    }
);

export default companySchema
