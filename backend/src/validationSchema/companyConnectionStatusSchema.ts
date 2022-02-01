const yup = require('yup');

module.exports =  yup.object().shape(
    {
        id: yup.number().positive().nullable(),
        name: yup.string().required().nullable(false),
        status: yup.boolean().required().nullable(false),
    }
);