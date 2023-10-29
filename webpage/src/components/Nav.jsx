import '../styles/nav.css';
import mobileMenu from '../images/hamburgerMenu.svg';
import mobileClose from '../images/xLogo.webp';
import logo from '../images/jpLogo.webp';
import { useState } from 'react';
const Nav = ()=>{
    const showMobileMenu = ()=>{
        let itemList = document.getElementById("navOptions");
        document.getElementById("navLogo").style.display="none";
        document.getElementById("socialsWrapper").style.display ="none";
        itemList.classList.add("mobileNav");
        setMenuStatus(1);
    }
    const closeMobileMenu = ()=>{
        let itemList = document.getElementById("navOptions");
        document.getElementById("navLogo").style.display="block";
        document.getElementById("socialsWrapper").style.display =null;
        itemList.classList.remove("mobileNav");
        setMenuStatus(0);
    }
    const checkMenu = ()=>{
        if(menuStatus === 1){
            closeMobileMenu();
        }
    }
    const [menuStatus, setMenuStatus] = useState(0);
    return(
        <div id="navWrapperOuter">
            <div id="navWrapper">
                <img id="navLogo" src={logo} alt="Logo"></img>
                <ul id="navOptions">
                    {
                        menuStatus===0?<img draggable={false} src={mobileMenu} onClick={showMobileMenu} className="mobileMenu"></img>
                        :menuStatus===1?<img draggable={false} src={mobileClose} onClick={closeMobileMenu} className="mobileMenu"></img>:undefined
                    }
                    <li className="navLi"><a onClick={checkMenu} href="#home">Home</a></li>
                    <li className="navLi"><a onClick={checkMenu} href="#aboutWrapper">About</a></li>
                    <li className="navLi"><a onClick={checkMenu} href="#projects">Projects</a></li>
                    <li className="navLi"><a onClick={checkMenu} href="#contact">Contact</a></li>
                </ul> 
            </div>
        </div>
    )
}

export default Nav;