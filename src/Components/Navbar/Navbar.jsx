import { React } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import '../../App.css'

// Imagens
import Logo from '../../assets/img/logo.jpg'

export default function Navbar() {
    return (
        <nav>
            <div className="navContainer">
            <div className='logo'>
                <img src={Logo} alt="Logo da Fujicom" />
            </div>
            <div className='linksNavbar'>
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/About">Sobre</Link></li> 
                <li><Link to="/ViewProducts">Produtos</Link></li> 
                <li><Link to="/Contact">Contato</Link></li> 
            </div>
            </div>
        </nav>
    );
}