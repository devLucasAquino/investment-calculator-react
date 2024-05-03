import InputGroup from "./InputGroup";

export default function UserInput( {onChangeInput, userInput }){
    return (
        <section id="user-input">
            <div  className="input-group">
                <InputGroup 
                    value={userInput.initialInvestment}
                    onChanged={ (event) => onChangeInput('initialInvestment', event.target.value)}> 
                        Investimento Inicial
                </InputGroup>
                <InputGroup 
                    value={userInput.annualInvestment}
                    onChanged={ (event) => onChangeInput('annualInvestment', event.target.value)}>
                        Investimento Anual
                </InputGroup>
            </div>
            <div className="input-group">
                <InputGroup 
                    value={userInput.expectedReturn}
                    onChanged={ (event) => onChangeInput('expectedReturn', event.target.value)}> 
                        Retorno esperado
                </InputGroup>

                <InputGroup 
                    value={userInput.duration}
                    onChanged={ (event) => onChangeInput('duration', event.target.value)}> 
                        Duração
                </InputGroup>
            </div>


        </section>
    )
}