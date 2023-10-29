import photo from "../images/aboutMePic.webp";
const About = ()=>{
    return(
        <div id="about">
            <div id="aboutWrapper">
                <div id="aboutLeft">
                    <img src={photo} draggable={false} alt="Something broke" id="aboutLeftImage"></img>
                </div>
                <div id="aboutRight">
                    <h2 id="aboutMeLabel">ABOUT ME</h2>
                    <h1 id="aboutMeHeader">A Dedicated Student and Front-End Developer based in Michigan&#128205; </h1>
                    <p id="aboutPara">As a dedicated Computer Science student, I've honed my expertise in a spectrum of programming languages, from the high-level Object-Oriented paradigms of Java to the intricate, low-level nuances of C and Assembly. My core strength, however, lies in crafting user-centric responsive websites using HTML, CSS, JavaScript, and React.</p>
                </div>
            </div>
        </div>
    ) 
}
export default About;