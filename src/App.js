import './App.css';
import { useState } from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const arr=useState;
  console.log("WHAT IS USESTATE: ", arr);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    };

    // DIFFERENT WAYS TO WRITE AN IF-STATEMENT
    // if (step < 3) setStep(step + 1);
    // step < 3 && setStep(step + 1);

    // TERNARY OPERATOR NOT WORKING
    // step < 3 ? setStep(step + 1) : null;
  };

  const handlePrevious = () => {
    step > 1 && setStep(step - 1);
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">

      <h1>Steps App</h1>
      <button onClick={handleIsOpen} className="close">{isOpen ? /*&times;*/"X" : /*&#10003;*/"√"}</button>
      {isOpen ?
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ''}>1</div>
            <div className={step >= 2 ? "active" : ''}>2</div>
            <div className={step >= 3 ? "active" : ''}>3</div>
          </div>
          <p className="message">Step {step}: {messages[step-1]}</p>
          <div className="buttons">
            <button onClick={handlePrevious} style={{backgroundColor: "#7950f2", color: "#fff"}}>Previous</button>
            <button onClick={handleNext} style={{backgroundColor: "#7950f2", color: "#fff"}}>Next</button>
          </div>
        </div>
        :
        /*<button className="close">&#10003;</button>*/null
      }
    </div>
  );
};

