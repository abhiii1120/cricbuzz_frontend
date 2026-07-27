import React from "react";

const FormInput = ({label,icon:Icon,error,type="text",ref,...rest}) => {
  return (
    <div>
      <label className="block text-[11px] font-semibold tracking-wide text-slate-500 mb-1.5">
        {label}
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
  );
};

export default FormInput;
