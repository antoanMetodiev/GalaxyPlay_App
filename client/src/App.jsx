import { DiscoverPage } from "./components/DiscoverPage/DiscoverPage";
import { Register } from "./components/Register-Login_Page/Register/Register";
import { Login } from "./components/Register-Login_Page/Login/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";

import { Categories } from "./components/Categories/Categories";
import { Game_Categories } from "./components/Categories/Products/Game_Categories";
import { SpecificCategory } from "./components/Categories/Products/SpecificCategory/SpecificCategory";
import { ProductDetails } from "./components/Categories/Products/SpecificCategory/structure/Body/ProductDetails/ProductDetails";
import { AllChats } from "./components/Chat/AllChats/AllChats";
import { WithoutPermission } from "./components/WithoutPermission/WithoutPermission";
import { BigImage } from "./components/BigImage/BigImage";

import { allAvatars, allAvatarsReversed } from "./utils/allAvatars";

// import AudioPlayer from "./AudioPlayer";
import { UserDetails } from "./UserDetails/UserDetails";
import { InvalidPath } from "./components/InvalidPath/InvalidPath";
import { GameReviews } from "./components/GameReviews/GameReviews";

import Cookies from "js-cookie";
import { AllAvatarsContext } from "./contexts/allAvatarsContext";

function App() {
	const [userData, setUserData] = useState({});
	let [logStatus, setLogStatus] = useState(false);
	let location = useLocation();

	// References:
	let bigImageRef = useRef(null);  // this is wrapper on bigImageRef, you should remove name!!!
	let currentBigImageRef = useRef(null);
	let pathName = useRef('');


	function removeLogStatus() {
		setLogStatus(false);
	}


	const setUserDataHandler = (newData) => {
		setLogStatus(true);
		setUserData(newData);
	};


	function showBigImage(imagePath) {
		console.log(imagePath);
		bigImageRef.current.style.display = 'block';
		currentBigImageRef.current.src = imagePath;
	}

	useEffect(() => {
		// Проверка на cookie при зареждане на приложението
		const token = Cookies.get('session');

		if (token) {
			setLogStatus(true);
		} else {
			setLogStatus(false);
		}

	}, []); // Празен масив за да се изпълни само при зареждане на компонента



	return (

		<AllAvatarsContext.Provider value={{ 'allAvatars': allAvatars, 'allAvatarsReversed': allAvatarsReversed }}>
			<>
				{/* <AudioPlayer /> */}


				{logStatus && (
					<>
						<AllChats
							currentBigImageRef={currentBigImageRef}
							showBigImage={showBigImage}
							bigImageRef={bigImageRef}
						/>

						<BigImage
							currentBigImageRef={currentBigImageRef}
							bigImageRef={bigImageRef}
						/>
					</>
				)}

				<Routes>

					<Route path="/" element={<DiscoverPage logStatus={logStatus} removeLogStatus={removeLogStatus} />} />

					{!logStatus && (
						<>
							<Route path="/register" element={<Register setUserDataHandler={setUserDataHandler} />} />
							<Route
								path="/login"
								element={<Login setUserDataHandler={setUserDataHandler} />}
							/>
						</>
					)}

					{logStatus && (
						<>
							<Route path="/categories" element={<Categories />} />
							<Route path="/categories/games" element={<Game_Categories />} />
							<Route path="/profile-details" element={<UserDetails />} />

							{/* Example: */}

							<Route
								path="/categories/:specificCategory/:subcategory?"
								element={<SpecificCategory />}
							/>

							{/* For All Game Categories: */}
							<Route
								path="/categories/game/:subcategory/:gameId"
								element={<ProductDetails />}
							/>


							{/* For Others Categories without subCategory: */}
							<Route
								path="/categories/:specificCategory/details?/:gameId"
								element={<ProductDetails />}
							/>


							{/* Game Rewiews */}
							<Route path="/game-reviews" element={<GameReviews />} />

						</>
					)}

					{!logStatus && !Cookies.get('session') && (
						<Route
							path="*"
							element={<WithoutPermission />}
						/>
					)}


					{logStatus && (location.pathname !== '/register' && location.pathname !== '/login'
						&& location.pathname !== '/' && location.pathname !== '') && (
							<>
								<Route
									path="*"
									element={<InvalidPath />}
								/>
							</>
						)}
				</Routes>
			</>
		</AllAvatarsContext.Provider>
	);
}

export default App;
