import * as yup from 'yup';

const companyConnStatusSchema = yup.object().shape(
    {
        id: yup.number().positive().nullable(),
        name: yup.string().required().nullable(false),
        status: yup.boolean().required().nullable(false),
    }
);

export default companyConnStatusSchema
