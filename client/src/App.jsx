import { DiscoverPage } from "./components/DiscoverPage/DiscoverPage";
import { Register } from "./components/Register-Login_Page/Register/Register";
import { Login } from "./components/Register-Login_Page/Login/Login";
import { Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { Categories } from "./components/Categories/Categories";
import { Game_Categories } from "./components/Categories/Games/Game_Categories";
import { Ps5Games_Page } from "./components/Categories/Games/Ps5Games_Page/Ps5Games_Page";
import { GameDetails } from "./components/Categories/Games/Ps5Games_Page/structure/Body/GameDetails/GameDetails";


import AudioPlayer from "./AudioPlayer";

function App() {
  const [userData, setUserData] = useState({});

  const setUserDataHandler = (newData) => setUserData(newData);

  let logStatus = true;
  if (JSON.parse(localStorage.getItem("user")) == null) {
    logStatus = false;
  }

  return (
    <>
      <AudioPlayer />
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
             
            </>
          )}
        </Routes>
    </>
  );
}

export default App;
