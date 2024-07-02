import { HomePage } from "./components/HomePage/HomePage";
import { Register } from "./components/RegisterPage/Register";
import { Login } from "./components/RegisterPage/Login";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  let location = useLocation();

  return (
    <>
	   {/* HomePage section */}
      {location.pathname !== "/register" &&
        location.pathname !== "/login" && <HomePage />}


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
