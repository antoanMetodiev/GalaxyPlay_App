import { useState } from "react";
import postRequest from "../services/requests";

export const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues);

    function onChangeHandler(event) {
        setFormValues(state => ({
            ...state,
            [event.target.name]: event.target.value,
        }));
    };

    async function onSubmitRegisterHandler(event) {
        event.preventDefault();

        event.target.username.value = "";
        event.target.password.value = "";
        event.target.email.value = "";
        event.target.phoneNumber.value = "";
        event.target.password[1].value = "";

        // TODO:

    };

    async function onSubmitLoginHandler(event) {
        event.preventDefault();

        const result = await postRequest("/users/login", {
            email: event.target.email.value,
            password: event.target.password.value,
        });

        return result;
    };

    return { formValues, onChangeHandler, onSubmitLoginHandler , onSubmitRegisterHandler};
}