import logo from "../assets/investment-calculator-logo.png";

export default function Header(){
    return(
        <header id="header">
            <img src={logo} alt="logo showing a money bag" />
            <h1>Calculadora de Investimento</h1>
        </header>
    )
}