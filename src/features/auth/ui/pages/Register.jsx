import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  RefreshCw,
  CreditCard,
  Smartphone,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import LeftComponent from "../common/LeftComponent";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const { errors, handleSubmit, onRegisterSubmit, register, navigate } =
    useAuth();

  let leftComponentData = {
    mainText: "Experience the Game in High-Density Precision.",
    subText:
      "Get ball-by-ball analytics, real-time scorecards, and exclusive insights from the world of cricket. Fast, data-driven, and built for true fans.",
    cardArr: [
      {
        mainText: "LIVE EDGE",
        subText: "Instant updates from every major series.",
      },
      { mainText: "EXPERT FEED", subText: "Journalism-grade match analysis." },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Main content */}
      <main className="flex-1 justify-center items-center flex bg-linear-to-br from-slate-50 to-emerald-50/40 px-6 ">
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
            <h2 className="text-xl font-bold text-slate-900">Create Account</h2>
            <p className="text-sm text-slate-500 mt-1">
              Step into the stadium. Get started below.
            </p>

            <form
              onSubmit={handleSubmit(onRegisterSubmit)}
              className="mt-6 space-y-5"
            >
              <FormInput
                label={"User Name"}
                icon={User}
                placeholder="Virat kholi"
                error={errors.name}
                {...register("name", { required: "Name is required" })}
              />
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
                Stay updated with cricket news, match alerts, and series
                insights.
              </label>

              <Button label={"CREATE ACCOUNT"} />
            </form>

            <div className="mt-5 border-t border-slate-100 pt-4 text-center text-sm text-slate-500">
              Already have a profile?{" "}
              <p
                onClick={() => navigate("/login")}
                className="text-emerald-700 font-semibold hover:underline inline cursor-pointer"
              >
                Login
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-6 opacity-30">
              <CreditCard className="w-6 h-6 text-slate-400" />
              <Smartphone className="w-6 h-6 text-slate-400" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
