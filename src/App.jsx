import { useState } from "react";
import Counter from "./components/Counter/Counter";
import ConfigureCounter from "./components/Counter/ConfigureCounter";
import Header from "./components/Header";
import { log } from "./log.js";

function App() {
  log("<App /> rendered");
  const [chosenCount, setChosenCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSetCount={setChosenCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
