const yup = require('yup');

module.exports = yup.object().shape(
    {
        id: yup.number().positive().nullable(),
        name: yup.string().required().nullable(false),
        size: yup.string().required().nullable(false),
        industry: yup.string().required().nullable(false),
        status: yup.boolean().notRequired().nullable(false),
    }
);