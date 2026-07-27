import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";

export let useAuth = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    let navigate = useNavigate();
}