const yup = require('yup');

module.exports = yup.object().shape(
    {
        id: yup.number().positive().nullable(),
        from_company: yup.number().required().nullable(false),
        to_company: yup.number().required().nullable(false),
        status: yup.string().required().nullable(false),
    }
);