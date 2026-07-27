import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const FormInput = ({
  label,
  icon: Icon,
  error,
  type = "text",
  ref,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div>
      <label className="block text-[11px] font-semibold tracking-wide text-slate-500 mb-1.5 uppercase">
        {label}
      </label>
      <div className="relative">
        <input
          ref={ref}
          type={inputType}
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
          {...rest}
        />

        {isPassword ? (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
            aria-label={showPassword ? "Hide password" : "Show password"}
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        ) : (
          Icon && (
            <Icon className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
          )
        )}
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error.message}</p>}
    </div>
  );
};

export default FormInput;
