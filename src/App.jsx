import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Accont from "./pages/Accont";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

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
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Accont />
              </ProtectedRoute> 
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
