const SchemaValidate = (validationSchema, data) => {
    validationSchema.validateSync(data, {
        strict: false,
        abortEarly: false,
        stripUnknown: false,
        recursive: true,
    })
}

export default SchemaValidate