import Logo from "../assets/img/Logo Cero Huella Horiz.png"
import Nav from "../components/Nav"
import "../styles/Header.css"
import "../styles/bootstrap.min.css"

function Header() {  
    return ( 
        <> 
        <header className="header">
            <img className="logo" src={Logo} alt="" />
            <Nav/>    
        </header> 
        </>  
    ); 
}  
export default Header;