import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { loginUser, registerUser } from "../state/authAction";

export let useAuth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const onRegisterSubmit = (data) => {
    dispatch(registerUser(data));
  };

  const onLoginSubmit = (data) => {
    dispatch(loginUser(data));
  };

  const onGoogleLogin = () => {
    window.location.href = "http://localhost:3000/api/auth/google";
    console.log('clicked')
  }

    const { pathname } = useLocation();

  return {
    register,
    handleSubmit,
    errors,
    onLoginSubmit,
    onRegisterSubmit,
    navigate,
    onGoogleLogin,
    pathname,
  };
};
