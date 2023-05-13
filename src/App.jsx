import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Accont from "./pages/Accont";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Accont />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
