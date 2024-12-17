import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import { useState } from "react";
import profileIcon from "../assets/images/profile_pic.png";
import dropdownIcon from "../assets/icons/dropdown_icon.svg";

export default function NavBar() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between py-4 mb-5 text-sm border-b border-b-gray-400">
      <img className="cursor-pointer w-44" src={logo} alt="" />
      <ul className="items-start hidden gap-5 font-medium md:flex">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div>
        <div className="flex items-center gap-4">
          {token ? (
            <div className="relative flex items-center gap-2 cursor-pointer group">
              <img src={profileIcon} alt="" className="w-8 rounded-full" />
              <img src={dropdownIcon} alt="" className="w-2.5" />
              <div className="absolute top-0 right-0 z-20 hidden text-base font-medium text-gray-600 pt-14 group-hover:block">
                <div className="flex flex-col gap-4 p-4 rounded min-w-48 bg-stone-100">
                  <p
                    className="cursor-pointer hover:text-black"
                    onClick={() => navigate("profile")}
                  >
                    My Profile
                  </p>
                  <p
                    className="cursor-pointer hover:text-black"
                    onClick={() => navigate("my-appoinment")}
                  >
                    My Appoinment
                  </p>
                  <p
                    className="cursor-pointer hover:text-black"
                    onClick={() => setToken(false)}
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden px-8 py-3 font-light text-white rounded-full bg-primary md:block"
            >
              Create account
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
