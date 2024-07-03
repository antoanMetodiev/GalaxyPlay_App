import { useState } from "react";

export const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues);

    function onChangeHandler(event) {
        setFormValues(state => ({
            ...state,
            [event.target.name]: event.target.value,
        }));
    };

    function onSubmitHandler(event) {
        event.preventDefault();

        event.username = "";
        event.password = "";

    }

    return [formValues, onChangeHandler, onSubmitHandler];
}