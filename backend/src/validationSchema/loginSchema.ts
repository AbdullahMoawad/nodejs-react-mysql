const yup = require('yup');

const loginSchema = yup.object().shape(
    {
        email: yup.string().email().required().nullable(false),
        password: yup.string().required().nullable(false),
    }
);

export default loginSchema