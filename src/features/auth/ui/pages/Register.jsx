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

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const { errors, handleSubmit, onRegisterSubmit, register } = useAuth();

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
          {/* Left copy */}
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
              <div>
                <label className="block text-[11px] font-semibold tracking-wide text-slate-500 mb-1.5">
                  FULL NAME
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="James Anderson"
                    {...register("name")}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                    required
                  />
                  <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-wide text-slate-500 mb-1.5">
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="james@stadium.com"
                    {...register("email")}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                    required
                  />
                  <Mail className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-wide text-slate-500 mb-1.5">
                  PASSWORD
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...register("password")}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                    required
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <label className="flex items-start gap-2 text-sm text-slate-600">
                <input type="checkbox" className="mt-0.5 accent-emerald-700" />
                Stay updated with cricket news, match alerts, and series
                insights.
              </label>

              <button
                type="submit"
                className="w-full bg-[#0a3d31] hover:bg-[#0d4a3c] text-white font-semibold tracking-wide text-sm py-3 rounded-lg transition"
              >
                CREATE ACCOUNT
              </button>
            </form>

            <div className="mt-5 border-t border-slate-100 pt-4 text-center text-sm text-slate-500">
              Already have a profile?{" "}
              <a
                href="/login"
                className="text-emerald-700 font-semibold hover:underline"
              >
                Login
              </a>
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
