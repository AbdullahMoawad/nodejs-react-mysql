import {useRef, useState} from "react";

const Validation = (validationSchema) => {
    const [errors, setErrors] = useState<[]>()
    const schema = useRef(validationSchema)

    const validate = async (data: {}) => {
        const validationErrors: [] = []
        for (const field of Object.entries(data)) {
            if (validationSchema?.fields?.[field[0]] === undefined) return;

            await schema.current
                .validateAt(field[0], data,)
                .catch(err => validationErrors[field[0]] = err.errors)
        }

        setErrors(validationErrors)

        return validationErrors
    }

    return {validate, errors, setErrors}
}

export default Validation