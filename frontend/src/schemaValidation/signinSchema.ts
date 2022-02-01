import * as yup from 'yup';

const signSchema = yup.object().shape(
    {
        email: yup.string().email().required().nullable(false),
        password: yup.string().required().nullable(false),
    }
);

export default signSchema