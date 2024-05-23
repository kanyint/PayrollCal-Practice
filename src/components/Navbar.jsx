import logo from "../assets/Logo.png";

export default function Navbar() {
  let navlinks = "text-slate-900 text-base";
  return (
    <div className=" w-full px-24 flex flex-row items-center justify-between py-8">
      <img
        className="max-h-6 max-w-fit"
        src={logo}
        alt="Workpay Logo"
      />
      <div className="flex items-center justify-between gap-x-10">
        <p className={navlinks}>Why workpay</p>
        <p className={navlinks}>Products</p>
        <p className={navlinks}>Pricing</p>
        <p className={navlinks}>Resources</p>
        <p className={navlinks}> About Us</p>
      </div>
      <div className=" flex items-center gap-x-8 ">
        <p>Sign in</p>
        <button className="py-3 px-10 text-white cursor-pointer bg-green-600 hover:bg-green-700 rounded-md">
          Try for Free
        </button>
      </div>
    </div>
  );
}
