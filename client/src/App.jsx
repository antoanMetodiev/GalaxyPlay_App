import { DiscoverPage } from "./components/DiscoverPage/DiscoverPage";
import { Register } from "./components/Register-Login_Page/Register";
import { Login } from "./components/Register-Login_Page/Login";
import { Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";

import { Categories } from "./components/Categories/Categories";
import { Game_Categories } from "./components/Categories/Games/Game_Categories";
import { Ps5Games_Page } from "./components/Categories/Games/Ps5Games_Page/Ps5Games_Page";
import { GameDetails } from "./components/Categories/Games/Ps5Games_Page/structure/Body/GameDetails/GameDetails";

import LoginOrNotContext from "./contexts/loginContext";

function App() {
  const [userData, setUserData] = useState({});

  const setUserDataHandler = (newData) => setUserData(newData);
 
  let logStatus = true;
  if (JSON.parse(localStorage.getItem('user')) == null) {
	logStatus = false;
  }

  return (
    <>
      <LoginOrNotContext.Provider value={""}>
        <Routes>
          <Route path="/" element={<DiscoverPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setUsDataHandler={setUserDataHandler} />} />

          {logStatus && (
            <>
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/games" element={<Game_Categories />} />
              <Route path="/categories/games/ps5-games" element={<Ps5Games_Page />} />
              <Route path="/categories/games/ps5-games/:gameId" element={<GameDetails />} />
            </>
          )}
        </Routes>
      </LoginOrNotContext.Provider>
    </>
  );
}

export default App;
