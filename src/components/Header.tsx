import React, { useEffect, useState } from "react";
import { LOGO_URL, USER_AVATAR } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/appStore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../store/userSlice";

const Header = () => {
  const [isMenuOpen, setIsOpenMenu] = useState<boolean>(false);

  const user = useSelector((store: RootState) => store.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName: displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isMenuOpen);
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error("Sign out error: ", error);
      });
  };

  return (
    <div
      className="p-5 bg-gradient-to-t from-black to-transparent w-full flex
    justify-between"
    >
      <div>
        <img
          className="h-auto sm:w-24 md:w-32 lg:w-40"
          src={LOGO_URL}
          alt="Netflix Logo"
        />
      </div>
      <div className="cursor-pointer">
        {user?.uid && (
          <button onClick={handleOpenMenu}>
            <img alt="signout" src={USER_AVATAR} />
          </button>
        )}
        {isMenuOpen && (
          <div className="bg-white bg-opacity-90 rounded absolute top-16 right-5 flex flex-col text-black">
            <label className="m-3 p-3 flex">
              <img className="pr-1" alt="profile" src={USER_AVATAR} />
              {user.displayName}
            </label>
            <button
              className="border-t-2 border-gray-600 p-5"
              onClick={handleSignout}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
