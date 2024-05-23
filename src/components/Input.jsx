import { Children } from "react";
export default function Input({ children, label, ...props }) {
  return (
    <p className="w-full mb-8">
      <label className="block mb-1 text-slate-00 text-base">{children}</label>
      <input
        className=" block w-full border border-slate-400 py-4 px-4 bg-white rounded-md"
        {...props}
      />
    </p>
  );
}
