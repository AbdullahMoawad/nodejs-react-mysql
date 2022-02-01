const yup = require('yup');

const signupSchema = yup.object().shape(
    {
        first_name: yup.string().required().nullable(false),
        last_name: yup.string().required().nullable(false),
        email: yup.string().email().required().nullable(false),
        password: yup.string().required().nullable(false),
    }
);

export default signupSchema