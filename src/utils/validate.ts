export const validateSignInOrSignUpForm = (
  email: string,
  password: string,
  name?: string,
  isSigninForm?: boolean
) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = isSigninForm ? true : /^[a-z ,.'-]+$/i.test(name || "");

  if (!isEmailValid) return "Invalid email format";

  if (!isPasswordValid) return "Invalid password format";

  if (!isNameValid) return "Name cannot be empty";

  return null;
};
