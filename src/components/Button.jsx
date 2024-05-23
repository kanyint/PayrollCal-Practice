import { Children } from "react";

export default function ({ children, outline, handleSubmit }) {
  let buttonStyle;
  {
    outline
      ? (buttonStyle =
          "w-full border text-green-600 border-green-600 py-3 px-auto rounded-md mt-6 hover:bg-green-100 font-['Moderat']")
      : (buttonStyle =
          "w-full text-white bg-green-600 py-3 px-auto rounded-md mt-6 hover:bg-green-700 font-['Moderat']");
  }

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className={buttonStyle}
    >
      {children}
    </button>
  );
}
