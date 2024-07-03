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

        event.target.username.value = "";
        event.target.password.value = "";
        event.target.email.value = "";
        event.target.phoneNumber.value = "";

        event.target.password[1].value = "";
    }

    return [formValues, onChangeHandler, onSubmitHandler];
}