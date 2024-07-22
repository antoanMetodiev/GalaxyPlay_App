import { useState } from "react";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../../../firebase/firebase"; // Импортирайте правилно

import { email, password, phoneNumber, username } from "../utils/formValidations.js";
import { updateProfile } from "firebase/auth";

export const useForm = (initialValues) => {
	const [formValues, setFormValues, choosenAvatarImage] = useState(initialValues);
	const [error, setError] = useState("");


	let formValidationFunctions = { email, password, phoneNumber, username };

	function onChangeHandler(event) {
		setFormValues(state => ({
			...state,
			[event.target.name]: event.target.value,
		}));

		if (event.target.name === 'repassword' && formValidationFunctions.password(event.target.value)) {

			console.log(event.target.value);
			if (event.target.value === formValues.password) event.target.style.border = "1px solid green";
			else event.target.style.border = "1px solid red";

		} else if (event.target.name !== 'repassword' && formValidationFunctions[event.target.name](event.target.value)) {
			event.target.style.border = "1px solid green";
		} else {
			event.target.style.border = "1px solid red";
		}
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


	async function onSubmitRegisterHandler(event, choosenAvatarImage) {

		console.log(choosenAvatarImage);

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, formValues.email, formValues.password,
			);

			const user = userCredential.user;
			let number = event.target.phoneNumber.value;

			debugger;
			// Send Datas in Firebase Database:

			let myCustomKey = formValues.username;

			fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/users/${myCustomKey}.json`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: formValues.username,
					email: formValues.email,
					phoneNumber: number,
					password: formValues.password,
					photoURL: choosenAvatarImage.current,
					gender: event.target.gender.value,
				}),
			});

			fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/chatUsers/${myCustomKey}.json`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: formValues.username,
					email: formValues.email,
					phoneNumber: number,
					photoURL: choosenAvatarImage.current,
					gender: event.target.gender.value,
				}),
			});


			// Set additional user data
			await updateProfile(user, {
				displayName: formValues.username,
				phoneNumber: number,
				photoURL: choosenAvatarImage.current,
				gender: event.target.gender.value,
			});


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
