import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";

export let useAuth = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    let navigate = useNavigate();

    const onRegisterSubmit = (data) => {
        console.log(data);
    }

    const onLoginSubmit= (data) => {
        console.log(data)
    }

    return {
        register,
        handleSubmit,
        errors,
        onLoginSubmit,
        onRegisterSubmit
    }
}