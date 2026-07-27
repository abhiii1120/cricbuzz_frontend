import { useState } from "react";
import { User, Mail, Lock, RefreshCw, CreditCard, Smartphone } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    updates: false,
  });

  const handleChange = (field) => (e) => {
    const value = field === "updates" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };



  const {errors,handleSubmit,onRegisterSubmit,register} = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
     

      {/* Main content */}
      <main className="flex-1 justify-center items-center flex bg-gradient-to-br from-slate-50 to-emerald-50/40 px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left copy */}
          <div className="pt-4">
            <span className="inline-flex items-center justify-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              JOIN THE INNER CIRCLE
            </span>

            <h1 className="mt-5 text-4xl md:text-[2.6rem] leading-tight font-extrabold text-slate-900">
              Experience the Game in
              <br />
              High-Density Precision.
            </h1>

            <p className="mt-4 text-slate-600 max-w-md">
              Get ball-by-ball analytics, real-time scorecards, and exclusive
              insights from the world of cricket. Fast, data-driven, and
              built for true fans.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-8 max-w-md">
              <div className="border-l-2 border-emerald-700 pl-4">
                <p className="text-[11px] font-semibold tracking-wide text-emerald-800">
                  LIVE EDGE
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Instant updates from every major series.
                </p>
              </div>
              <div className="border-l-2 border-emerald-700 pl-4">
                <p className="text-[11px] font-semibold tracking-wide text-emerald-800">
                  EXPERT FEED
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Journalism-grade match analysis.
                </p>
              </div>
            </div>
          </div>

          {/* Signup form card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-8 w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold text-slate-900">Create Account</h2>
            <p className="text-sm text-slate-500 mt-1">
              Step into the stadium. Get started below.
            </p>

            <form onSubmit={handleSubmit(onRegisterSubmit)} className="mt-6 space-y-5">
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

              <div className="grid grid-cols-2 gap-4">
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

                <div>
                  <label className="block text-[11px] font-semibold tracking-wide text-slate-500 mb-1.5">
                    CONFIRM
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={form.confirm}
                      onChange={handleChange("confirm")}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2"
                      aria-label="Toggle password visibility"
                    >
                      <RefreshCw className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>
                </div>
              </div>

              <label className="flex items-start gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={form.updates}
                  onChange={handleChange("updates")}
                  className="mt-0.5 accent-emerald-700"
                />
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
              <a href="/login" className="text-emerald-700 font-semibold hover:underline">
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

      {/* Footer */}
      <footer className=" px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <span>
          © 2026 CricFlash. All rights reserved. High-density data provided
          by FlashStats.
        </span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
        </div>
      </footer>
    </div>
  );
}