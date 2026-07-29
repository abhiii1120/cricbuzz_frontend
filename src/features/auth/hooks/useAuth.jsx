import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
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

  return {
    register,
    handleSubmit,
    errors,
    onLoginSubmit,
    onRegisterSubmit,
    navigate,
  };
};
