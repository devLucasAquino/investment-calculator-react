import InputGroup from "./InputGroup";

export default function UserInput( {onChangeInput, userInput }){
    return (
        <section id="user-input">
            <div  className="input-group">
                <InputGroup 
                    value={userInput.initialInvestment}
                    onChanged={ (event) => onChangeInput('initialInvestment', event.target.value)}> 
                        Initial Investment
                </InputGroup>
                <InputGroup 
                    value={userInput.annualInvestment}
                    onChanged={ (event) => onChangeInput('annualInvestment', event.target.value)}>
                        Annual Investment
                </InputGroup>
            </div>
            <div className="input-group">
                <InputGroup 
                    value={userInput.expectedReturn}
                    onChanged={ (event) => onChangeInput('expectedReturn', event.target.value)}> 
                        Expected Return
                </InputGroup>

                <InputGroup 
                    value={userInput.duration}
                    onChanged={ (event) => onChangeInput('duration', event.target.value)}> 
                        Duration
                </InputGroup>
            </div>


        </section>
    )
}