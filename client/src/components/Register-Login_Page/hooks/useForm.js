import { useState } from "react";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../../../firebase/firebase"; // Импортирайте правилно

export const useForm = (initialValues) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState("");

  function onChangeHandler(event) {
    setFormValues(state => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  function cleariInputValues() {
    setFormValues({
      email: "",
      password: "",
    });
  };

  function cleariRegisterValues() {
    setFormValues({
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      repassword: "",
    });
  }

  async function onSubmitRegisterHandler(event) {
    event.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, formValues.email, formValues.password);
      setFormValues(initialValues);

	  cleariRegisterValues();
      console.log('User Registered!');

    } catch (error) {
	  cleariRegisterValues();
      setError(error.message);
    }
  };

  async function onSubmitLoginHandler(event) {

    try {
      const result = await signInWithEmailAndPassword(auth, formValues.email, formValues.password);
      cleariInputValues();
      setError('Successful login.');
      return result;

    } catch (error) {
	  cleariInputValues();
      setError("This user does not exist.");
    }
  };

  return { formValues, onChangeHandler, onSubmitLoginHandler, onSubmitRegisterHandler, error, cleariInputValues };
};
