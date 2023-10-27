import './styles/about.css';
import photo from "./images/aboutMePic.webp";
const About = ()=>{
    return(
            <div id="aboutWrapper">
                <div id="aboutLeft">
                    <img src={photo} draggable={false} alt="Something broke" id="aboutLeftImage"></img>
                </div>
                <div id="aboutRight">
                    <h2 id="aboutMeLabel">ABOUT ME</h2>
                    <h1 id="aboutMeHeader">A Dedicated Student and Front-End Developer based in Michigan&#128205; </h1>
                    <p id="aboutPara">As a dedicated Computer Science student, I have honed my skills in HTML, CSS, JavaScript, React, as well as Object-Oriented programming with languages like Java, C, and Assembly (MIPS). I excel at creating responsive websites that put user experience at the forefront. My strengths lie in developing intuitive, dynamic user interfaces with clean and efficient code, always staying updated with the latest development practices. While I prioritize my academic commitments, I am also a team player, ready to collaborate and bring my knowledge to any group endeavor to achieve excellence in web and software solutions.</p>
                </div>
            </div>

    ) 
}
export default About;