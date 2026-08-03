import React from "react";
import LeftComponent from "../common/LeftComponent";
import { useAuth } from "../../hooks/useAuth";
import FormInput from "@/components/FormInput";
import { Mail, User } from "lucide-react";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  let leftComponentData = {
    mainText: "Velocity Sports Intelligence Platform.",
    subText:
      "Accesss your premium dashboard for deep analytical insights, predictive modeling, and zero-latency cricket data.",
    cardArr: [
      {
        mainText: "SYNC STATE",
        subText: "Real-time database connectivity",
      },
      {
        mainText: "SECURE ACCESS",
        subText: "End-to-end encrypted session keys",
      },
    ],
  };

  const { errors, handleSubmit, onLoginSubmit, register, navigate } =
    useAuth();
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* main content */}
      <main className="flex-1 justify-center items-center flex bg-linear-to-tr from-slate-50 to-emerald-200/20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          {/* Left container */}
          <div className="md:flex items-end justify-center h-full w-full pb-8 hidden">
            <LeftComponent
              mainText={leftComponentData.mainText}
              subText={leftComponentData.subText}
              cardArr={leftComponentData.cardArr}
            />
          </div>
          {/* Signup form card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-8 w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold text-slate-900">Welcome Back</h2>
            <p className="text-sm text-slate-500 mt-1">
              Enter your credentials to access your personalized feed.
            </p>

            <form
              onSubmit={handleSubmit(onLoginSubmit)}
              className="mt-6 space-y-5"
            >
              <FormInput
                label={"Email"}
                icon={Mail}
                placeholder="kholi@stadium.com"
                error={errors.email}
                {...register("email", { required: "Email is required" })}
              />
              <FormInput
                label={"password"}
                type="password"
                placeholder="••••••••"
                error={errors.password}
                {...register("password", {
                  required: "Email is required",
                  minLength: {
                    value: 6,
                    message: "minimum 6 characters are required",
                  },
                })}
              />

              <label className="flex items-start gap-2 text-sm text-slate-600">
                <input type="checkbox" className="mt-0.5 accent-emerald-700" />
                Stay Logged in for 30 days
              </label>

              <Button label={"CREATE ACCOUNT"} />
            </form>

            <div className="mt-5 border-t border-slate-100 pt-4 text-center text-sm text-slate-500">
              New to CricFlash?{" "}
              <p
                onClick={() => navigate("/")}
                className="text-emerald-700 font-semibold hover:underline inline cursor-pointer"
              >
                Register
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-6 ">
              <IconButton
                icon={FcGoogle}
                label={"Google"}
                onClick={() => console.log("click")}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
