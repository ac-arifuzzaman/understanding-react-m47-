import logo from './logo.svg';
import './App.css';
import Device from './component/Device/Device';
import { useEffect, useState } from 'react';

function App() {
  const [steps, setSteps] = useState(0);
  const handleSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
  }
  useEffect(() => {
    console.log(steps)
  }, [steps])
  return (
    <div className="App">
      <h3>My steps: {steps}</h3>
      <button onClick={handleSteps}>Walk</button>
      <Device steps={steps} name="phone" price="13500" />
    </div>
  );
}

export default App;
