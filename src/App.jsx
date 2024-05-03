import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [ inputIdentifier ]: +newValue,
        };
    });
}


  return (
    <>
    
    <Header />
    <UserInput userInput={userInput} onChangeInput={handleChange}/>

    {!inputIsValid && <p className="center"> Por favor, insira a duração maior que zero.</p>}
    {inputIsValid && <Results input={userInput}/>}

    {/* {inputIsValid ? 
      <Results input={userInput}/> : 
      <p className="center"> Please enter a duration greater than zero.</p>} */}


    </>
    
    )
}

export default App
