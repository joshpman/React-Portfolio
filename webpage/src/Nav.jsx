import './Nav.css';
import logo from './images/jpLogo.webp';
const Nav = ()=>{
    return(
        <div id="navWrapperOuter">
            <div id="navWrapper">
                <img id="navLogo" src={logo} alt="Logo"></img>
                <ul id="navOptions">
                    <li className="navLi"><a href="#home">Home</a></li>
                    <li className="navLi"><a href="#about">About</a></li>
                    <li className="navLi"><a href="#projects">Projects</a></li>
                    <li className="navLi"><a href="#contact">Contact</a></li>
                </ul> 
            </div>
        </div>
    )
}

export default Nav;