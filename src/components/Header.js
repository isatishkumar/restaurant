import Nav from "./Nav";
import logo from "../assests/icons/Logo.svg"

function Header(){
    return (
        <header className="flex justify-evenly items-center py-4"> 
            <img src={logo} alt="logo" />
            <Nav></Nav>
        </header>
    )
}

export default Header;