import bitmoji from './images/bitMoji.webp';
import github from './images/githubLogo.svg';
import linkedin from './images/linkedIn.svg';
import './hero.css';
const Hero = ()=>{
    return(
        <section id="home">
            <div id="topContentWrapper">
                <section id="heroLeftWrapper">
                    <h1 id="mainHeader">Developer studying Computer Science at MTU</h1>
                    <h2 id="lowerText">Hi, I'm Josh Pearlman. A student studying Computer Science with a Passion for Front-End Development.</h2>
                    <div id="socialsWrapper">
                        <img className="socialLogos" src={github}></img>
                        <img className="socialLogos" src={linkedin}></img>
                    </div>
                </section>
                <section id="heroRightPhotoWrapper">
                    <img id="bitmoji" src={bitmoji} alt=""></img>
                </section>
            </div>
            <footer id="heroFooterWrapper">

            </footer>
        </section>
    )
}
export default Hero;