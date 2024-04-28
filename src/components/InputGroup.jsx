export default function InputGroup( {children, onChanged, value} ){
    return (
        <div>
                <p>
                    <label>{children}</label>
                    <input  type="number" required 
                            onChange={onChanged} value={value}/>
                </p>
        </div>
    )
}