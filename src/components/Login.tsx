import React, { useRef, useState } from "react";
import Header from "./Header";
import { BACKGROUND_IMAGE_URL, PHOTO_URL } from "../utils/constant";
import { validateSignInOrSignUpForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const Login = () => {
  const [isSigninForm, setSigninForm] = useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSetSigninForm = () => {
    setSigninForm(!isSigninForm);
  };

  const handleOnSubmit = () => {
    const emailValue = email.current?.value as string;
    const passwordValue = password.current?.value as string;
    const nameValue = name.current?.value as string;
    const errorMessage = validateSignInOrSignUpForm(
      emailValue,
      passwordValue,
      nameValue,
      isSigninForm
    );
    setErrorMessage(errorMessage);
    if (errorMessage) return;

    if (!isSigninForm) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: nameValue,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({ uid, email, displayName: displayName, photoURL })
              );
            })
            .catch((error) => {
              console.error("Profile update error: ", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} : ${errorMessage}`);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({ uid, email, displayName: displayName, photoURL }));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} : ${errorMessage}`);
        });
    }
  };

  return (
    <div
      className="flex flex-col h-screen relative"
      onSubmit={(e) => e.preventDefault()}
    >
      <Header />
      <img
        className="w-full h-full absolute top-0 left-0 -z-10 object-cover"
        src={BACKGROUND_IMAGE_URL}
        alt="Login Banner"
      />
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-black bg-opacity-50 sm:w-3/5 md:w-2/4 lg:w-1/3 flex flex-col justify-center items-center mx-auto">
          <form className="w-full">
            <div className="flex m-12 justify-center items-center flex-col">
              <h1 className="text-3xl text-white my-5">
                {isSigninForm ? "Sign In" : "Sign Up"}
              </h1>
              {!isSigninForm && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Name"
                  className="p-5 w-full my-5 rounded-md
                bg-gray-800 text-white"
                />
              )}
              <input
                ref={email}
                type="email"
                placeholder="Email"
                className="p-5 w-full my-5 rounded-md
                bg-gray-800 text-white"
              />
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="p-5 w-full my-5 rounded-md bg-gray-800 text-white"
              />
              <p className="text-red-500 p-2 font-bold">{errorMessage}</p>
              <button
                className="p-5 my-5 w-full bg-red-700 text-white rounded-md"
                onClick={handleOnSubmit}
              >
                {isSigninForm ? "Sign In" : "Sign Up"}
              </button>
              <p
                className="text-white py-4 cursor-pointer"
                onClick={() => handleSetSigninForm()}
              >
                {isSigninForm
                  ? "Need an account? Sign up now."
                  : "Already have an account? Sign in now."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
