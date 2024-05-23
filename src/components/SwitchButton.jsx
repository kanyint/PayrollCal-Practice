export default function SwitchButton({ isDisabled, handleClick, selected, buttonText }) {
  let baseStyle;
  if (selected && isDisabled) {
    baseStyle = "mb-8 pt-3 pb-3 pl-5 pr-5 align-middle rounded-3xl bg-green-600 text-white ";
  } else {
    baseStyle =
      "mb-8 pt-3 pb-3 pl-5 pr-5 align-middle rounded-3xl border border-green-600 text-slate-600 hover:bg-green-100";
  }

  return (
    <button
      disabled={isDisabled}
      onClick={handleClick}
      className={baseStyle}
    >
      {buttonText}
    </button>
  );
}
