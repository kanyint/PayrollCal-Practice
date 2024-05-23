import CalculatorForm from "./components/CalculatorForm";
import Header from "./components/Header";
import PayrollResult from "./components/PayrollResults";
import { useState } from "react";

function App() {
  const [gross, setIsGross] = useState(true);
  const [net, setIsNet] = useState(false);
  const [viewResults, setViewResults] = useState(false);

  function handleSwitchButtons() {
    setIsGross(!gross);
    setIsNet(!net);
  }

  function handleSubmit() {
    setViewResults(!viewResults);
  }

  return (
    <>
      <Header />
      <main className="bg-white  h-auto">
        <div className="flex justify-between mx-24 mt-20 mb-20 pt-16 pl-16 pr-16 pb-20 bg-blue-50 rounded-lg gap-x-20">
          <CalculatorForm
            gross={gross}
            net={net}
            handleSwitchButton={handleSwitchButtons}
            handleSubmit={handleSubmit}
          />
          <PayrollResult
            gross={gross}
            resultsIsViewed={viewResults}
          />
        </div>
      </main>
    </>
  );
}

export default App;
