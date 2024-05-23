import { employeeCost, employerCost } from "../util/costlists";
import Button from "./Button";
import emptyIllustration from "../assets/Empty.svg";

export default function PayrollResult({ gross, resultsIsViewed }) {
  const filledState = (
    <>
      <div className="flex justify-between pb-5 border-b border-slate-200 mb-5">
        <p>Gross Salary</p>
        <h3>200,000</h3>
      </div>
      <p className="mb-4">Employee Cost</p>
      <div className="pb-5 mb-7 border-b border-slate-200">
        {employeeCost.map((list) => {
          return (
            <div
              key={employeeCost.indexOf(list)}
              className="flex justify-between mb-3"
            >
              <p className="text-base">{list.identifier}</p>
              <h4>{list.value}</h4>
            </div>
          );
        })}
      </div>
      <p className="mb-4">Employer Cost</p>
      <div className="pb-5 mb-8">
        {employerCost.map((list) => {
          return (
            <div
              key={employerCost.indexOf(list)}
              className="flex justify-between mb-3"
            >
              <p className="text-base">{list.identifier}</p>
              <h4>{list.value}</h4>
            </div>
          );
        })}
      </div>
    </>
  );

  const emptyState = (
    <>
      <div className="flex flex-col items-center mt-14 mb-16">
        <img
          className="mb-4 size-24"
          src={emptyIllustration}
          alt="Illustration of a cactus"
        />
        <p className="text-base"> Fill in the salary details to get started</p>
      </div>
    </>
  );

  return (
    <div className="bg-white h-full pt-10 pb-12 px-8 rounded-2xl w-2/4">
      <div className="flex justify-between pb-5 border-b border-slate-200 mb-5">
        <h3>Total Calculations</h3>
        <p>KES</p>
      </div>
      {resultsIsViewed ? filledState : emptyState}
      <div className="flex items-center justify-between px-4 py-6 bg-sky-950 rounded-lg ">
        <h4 className="text-white">{gross ? "Net Pay" : "Gross Pay"}</h4>
        {resultsIsViewed ? (
          <h2 className="text-white">
            144,659.65 <span className="font-['Moderat'] text-sm align-middle">KES</span>
          </h2>
        ) : null}
      </div>
      <Button outline={false}>Request a demo</Button>
    </div>
  );
}
