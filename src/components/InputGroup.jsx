export default function InputGroup( {children} ){
    return (
        <div>
                <p>
                    <label>{children}</label>
                    <input type="number" required/>
                </p>
        </div>
    )
}