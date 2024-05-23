import { useState } from "react";
import Input from "./Input";
import SwitchButton from "./SwitchButton";
import ToogleButton from "./ToogleButton";
import Button from "./Button";

export default function CalculatorForm({ gross, net, handleSwitchButton, handleSubmit }) {
  const [enabled, setEnabled] = useState({
    nssf: false,
    nhif: false,
    paye: false,
    housingLevy: false,
  });

  function handleToogle(identifier) {
    setEnabled((prevInput) => {
      return {
        ...prevInput,
        [identifier]: !enabled[identifier],
      };
    });
  }

  let twoInputs = "w-full inline-flex justify-stretch items-end gap-x-4";

  return (
    <div className="w-2/4">
      <h2 className="mb-3">Payroll Cost Calculator</h2>
      <p>Select the country you want to hire in, to explore and benchmark salaries for international roles.</p>
      <form className="mt-10">
        <Input>Choose desired country</Input>
        <span className={twoInputs}>
          <Input>{gross ? "Gross Salary" : "Net Salary"}</Input>

          <span className="flex gap-1">
            <SwitchButton
              isDisabled={gross}
              handleClick={handleSwitchButton}
              selected={gross}
              buttonText="Gross"
            />
            <SwitchButton
              isDisabled={net}
              handleClick={handleSwitchButton}
              selected={net}
              buttonText="Net"
            />
          </span>
        </span>
        <Input>Mortage premium</Input>
        <span className={twoInputs}>
          <Input>Are you a resident?</Input>
          <Input>Are you a secondary employee</Input>
        </span>
        <ToogleButton
          enabled={enabled.nssf}
          Toogle={() => handleToogle("nssf")}
          label="Deduct NSSF"
        />
        {enabled.nssf ? <Input>Nssf Rate</Input> : null}
        <ToogleButton
          enabled={enabled.nhif}
          Toogle={() => handleToogle("nhif")}
          label="Deduct NHIF"
        />
        <ToogleButton
          enabled={enabled.paye}
          Toogle={() => handleToogle("paye")}
          label="Deduct PAYE"
        />
        <ToogleButton
          enabled={enabled.housingLevy}
          Toogle={() => handleToogle("housingLevy")}
          label="Housing Levy"
        />
        <Button
          handleSubmit={handleSubmit}
          outline={true}
        >
          Calculate
        </Button>
      </form>
    </div>
  );
}
