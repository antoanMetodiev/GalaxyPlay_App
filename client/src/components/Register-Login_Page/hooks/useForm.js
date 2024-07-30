import { useState } from "react";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../../../firebase/firebase"; // Импортирайте правилно

import { email, password, phoneNumber, username } from "../utils/formValidations.js";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const useForm = (initialValues) => {
	const [formValues, setFormValues, choosenAvatarImage] = useState(initialValues);
	const [error, setError] = useState("");
	let navigate = useNavigate();

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


	async function onSubmitRegisterHandler(event, choosenAvatarImage, setRegisterOrNotHandler) {

		// Check if user are inlcudes:
		let isIncludedUsername = await fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/usernames/${formValues.username}.json`);

		// Ako se sudurja vutre ne pravq zaqvka:
		isIncludedUsername = await isIncludedUsername.json();

		debugger;
		if (isIncludedUsername) {

			let text = 'Username already taken!'.slice(0);
			setRegisterOrNotHandler(text);

		} else {
			// Ako nqma takuv username - pravim takuv i si go suhranqvame na survura:
			await fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/usernames/${formValues.username}.json`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: formValues.username,
				}),
			});


			try {
				setRegisterOrNotHandler('Registered!');
				const userCredential = await createUserWithEmailAndPassword(auth, formValues.email, formValues.password,);
				const user = userCredential.user;
				let number = event.target.phoneNumber.value;
				const myToken = await user.getIdToken(); 

				// Send Datas in Firebase Database for Users:

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

				// For ChatUsers:
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
				
				debugger;
				localStorage.setItem('user', JSON.stringify({
					username: formValues.username,
					token: myToken,
					photoUrl: choosenAvatarImage.current,
				}));

				setFormValues(initialValues);
				cleariRegisterValues();
				

				// and finnaly we can navigate to '/':
				navigate('/');

			} catch (error) {
				cleariRegisterValues();
				setError(error.message);
			}
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
