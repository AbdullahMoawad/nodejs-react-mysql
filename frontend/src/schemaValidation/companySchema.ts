import * as yup from 'yup';

const companySchema = yup.object().shape(
    {
        id: yup.number().positive().nullable(),
        name: yup.string().required().nullable(false),
        size: yup.string().required().nullable(false),
        industry: yup.string().required().nullable(false),
        status: yup.boolean().required().nullable(false),
    }
);

export default companySchema
