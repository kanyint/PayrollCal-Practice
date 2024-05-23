import Navbar from "./Navbar";
import waves from "../assets/Bgvisual.svg";
import Input from "./Input";

export default function Header() {
  return (
    <header className="flex flex-col justify-between items-center  bg-blue-50">
      <Navbar />
      <div className="w-5/12 mt-24 ">
        <h1 className="text-center leading-[56px] mb-3  ">Gain insights into the true cost of hiring</h1>
        <p className=" w-5/6 mx-auto text-center">
          Have a clearer picture of all the payroll taxes you’ll owe when bringing on a new employee.
        </p>
      </div>
      <img
        src={waves}
        className="w-fit place-self-end mt-20"
      />
    </header>
  );
}
