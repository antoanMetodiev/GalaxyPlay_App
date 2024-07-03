import { DiscoverPage } from "./components/DiscoverPage/DiscoverPage";
import { Register } from "./components/Register-Login_Page/Register";
import { Login } from "./components/Register-Login_Page/Login";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  let location = useLocation();

  return (
    <>
	   {/* HomePage section */}
      {location.pathname !== "/register" &&
        location.pathname !== "/login" && <DiscoverPage />}


      {/* Login & Register sections */}
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>


    </>
  );
}

export default App;
