import { HomePage } from "./components/HomePage/HomePage";
import { Register } from "./components/RegisterPage/Register";
import { useState } from "react";

import { Router, Routes, Route } from "react-router-dom";

function App() {
  let [wantRegister, setWantRegister] = useState(false);

  console.log(wantRegister);
  function wantRegisterHandler() {
    setWantRegister(true);
  }

  <Router>
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>;

  return (
    <>
      {wantRegister == false && <HomePage wantRegister={wantRegisterHandler} />}

      {wantRegister && <Register />}
    </>
  );
}

export default App;
