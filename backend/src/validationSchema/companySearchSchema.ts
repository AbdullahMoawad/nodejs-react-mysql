const yup = require('yup');

module.exports = yup.object().shape(
    {
        name: yup.string().nullable(false),
        size: yup.string().nullable(false),
        industry: yup.string().nullable(false),
    }
);