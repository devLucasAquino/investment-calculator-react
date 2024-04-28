import InputGroup from "./InputGroup";

export default function UserInput(){
    return (
        <section id="user-input">
            <div  className="input-group">
                <InputGroup> 
                    Initial Investment
                </InputGroup>
                <InputGroup>
                    Annual Investment
                </InputGroup>
            </div>
            <div className="input-group">
                <InputGroup >
                    Expected Return
                </InputGroup>

                <InputGroup >
                    Duration
                </InputGroup>
            </div>


        </section>
    )
}