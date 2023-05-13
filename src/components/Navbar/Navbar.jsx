import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = userAuth();
  const navigate = useNavigate();
  // console.log(user);

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className=" text-red-600 text-4xl font-bold cursor-pointer">
          Ari Movie
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white px-4">Accont</button>
          </Link>

          <button
            onClick={handleLogOut}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white px-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign UP
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
