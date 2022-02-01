const yup = require('yup');

const userSchema = yup.object().shape(
    {
        id: yup.number().positive().nullable(),
        first_name: yup.string().required().nullable(false),
        last_name: yup.string().required().nullable(false),
        email: yup.string().email().required().nullable(false),
        company: yup.number().positive().required().nullable(false),
        password: yup.string().required().nullable(false),
        status: yup.boolean().required().nullable(false),
    }
);

export default userSchema

