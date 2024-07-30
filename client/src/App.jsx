import { DiscoverPage } from "./components/DiscoverPage/DiscoverPage";
import { Register } from "./components/Register-Login_Page/Register/Register";
import { Login } from "./components/Register-Login_Page/Login/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";

import { Categories } from "./components/Categories/Categories";
import { Game_Categories } from "./components/Categories/Games/Game_Categories";
import { Ps5Games_Page } from "./components/Categories/Games/Ps5Games_Page/Ps5Games_Page";
import { GameDetails } from "./components/Categories/Games/Ps5Games_Page/structure/Body/GameDetails/GameDetails";
import { AllChats } from "./components/Chat/AllChats/AllChats";
import { WithoutPermission } from "./components/WithoutPermission/WithoutPermission";

import AudioPlayer from "./AudioPlayer";
import { UserDetails } from "./UserDetails/UserDetails";
import { InvalidPath } from "./components/InvalidPath/InvalidPath";
import { GameReviews } from "./components/GameReviews/GameReviews";

function App() {
	let firstRender = useRef(false);  // it is just a flag for bug between InvalidPath && WithoutPermission!

	const [userData, setUserData] = useState({});
	let [logStatus, setLogStatus] = useState(false);
	let location = useLocation();

	useEffect(() => {
		if (JSON.parse(localStorage.getItem('user'))) {
			firstRender.current = true;
			setLogStatus(true);
		}

	}, [location.pathname, JSON.parse(localStorage.getItem('user'))]);

	const setUserDataHandler = (newData) => {
		setUserData(newData);
	};


	return (
		<>
			<AudioPlayer />
			{logStatus && (
				<>
					<AllChats />
				</>
			)}

			<Routes>
				<Route path="/" element={<DiscoverPage />} />
				<Route path="/register" element={<Register />} />
				<Route
					path="/login"
					element={<Login setUsDataHandler={setUserDataHandler} />}
				/>

				{logStatus && (
					<>
						<Route path="/categories" element={<Categories />} />
						<Route path="/categories/games" element={<Game_Categories />} />
						<Route path="/profile-details" element={<UserDetails />} />

						{/* Example: */}

						<Route
							path="/categories/:specificCategory/:subcategory?"
							element={<Ps5Games_Page />}
						/>

						{/* For All Game Categories: */}
						<Route
							path="/categories/game/:subcategory/:gameId"
							element={<GameDetails />}
						/>


						{/* For Others Categories without subCategory: */}
						<Route
							path="/categories/:specificCategory/details?/:gameId"
							element={<GameDetails />}
						/>


						{/* Game Rewiews */}
						<Route path="/game-reviews" element={<GameReviews />} />

					</>
				)}

				{logStatus && (
					<>
						<Route
							path="*"
							element={<InvalidPath />}
						/>
					</>
				)}

				{(!logStatus && firstRender.current) &&(
					<>
						<Route
							path="*"
							element={<WithoutPermission />}
						/>
					</>
				)}
			</Routes>
		</>
	);
}

export default App;
