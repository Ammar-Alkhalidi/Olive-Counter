
import  { useState } from "react";
import Text from "./components/Text";

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <Text count={counter} />
      <button onClick={incrementCounter}>Increment count</button>
    </div>
  );
};

export default App;
