import { useState } from 'react';

function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais);

    function clearForm() {
        setValues(valoresIniciais);
    }

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        })
    }

    function handleChange(info) {

        const { getAttribute, value } = info.target;
        setValue(
            info.target.getAttribute('name'),
            value
        )
    }

    return {
        values,
        handleChange,
        clearForm
    }
}

export default useForm;