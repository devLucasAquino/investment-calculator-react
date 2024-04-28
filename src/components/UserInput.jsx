import { useState } from "react";


import InputGroup from "./InputGroup";

export default function UserInput(){

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue){
        setUserInput(prevUserInput => {
            return{
                ...prevUserInput,
                [ inputIdentifier ]: newValue
            };
        });

    }



    return (
        <section id="user-input">
            <div  className="input-group">
                <InputGroup 
                    value={userInput.initialInvestment}
                    onChanged={ (event) => handleChange('initialInvestment', event.target.value)}> 
                        Initial Investment
                </InputGroup>
                <InputGroup 
                    value={userInput.annualInvestment}
                    onChanged={ (event) => handleChange('annualInvestment', event.target.value)}>
                        Annual Investment
                </InputGroup>
            </div>
            <div className="input-group">
                <InputGroup 
                    value={userInput.expectedReturn}
                    onChanged={ (event) => handleChange('expectedReturn', event.target.value)}> 
                        Expected Return
                </InputGroup>

                <InputGroup 
                    value={userInput.duration}
                    onChanged={ (event) => handleChange('duration', event.target.value)}> 
                        Duration
                </InputGroup>
            </div>


        </section>
    )
}