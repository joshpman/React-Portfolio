import weatherPhoto from '../images/projectPhotos/weather.webp';
import quizPhoto from '../images/projectPhotos/Quiz.webp';
import schnackPhoto from '../images/projectPhotos/schnack.webp';
import formPhoto from '../images/projectPhotos/form.webp';
import ProjectInsert from './ProjectInsert';
class ProjectItem{
    constructor(name, date, description, languages, urls, photo,){
      this.name  = name;
      this.date = date;
      this.description = description;
      this.languages = languages;
      this.urls = urls;
      this.photo = photo;
    }
}
const Weather = new ProjectItem(
    "Weather App",
    "September 2023",
    "Weather App written with HTML, CSS, and JS. Utilized LocationIQ and OpenMETEO Api",
    ["HTML","JavaScript", "CSS"],
    ["https://github.com/joshpman/weather", "weather/"],
    weatherPhoto
);
const Quiz = new ProjectItem(
    "Quiz Game",
    "October 2023",
    "Developed Single-Page Quiz Game with ReactJS, CSS, and OpenTDB API.",
    ["HTML", "CSS", "ReactJS"],
    ["https://github.com/joshpman/quizWebpage", "quizWebpage/"],
    quizPhoto
);
const Schnack = new ProjectItem(
    "Company Webpage",
    "August 2023",
    "Developed Frontend for Schnack.io webpage.Utilzied HTML, CSS, and JavaScript",
    ["HTML", "CSS", "Javascript"],
    ["https://github.com/joshpman/Schnack", "Schnack"],
    schnackPhoto
);
const Form = new ProjectItem(
    "Registration Form Demo",
    "October 2023",
    "Registration Form with Input Validation using custom written Regular Expressions.",
    ["HTML", "CSS", "Javascript"],
    ["https://github.com/joshpman/Registration-Form", "Registration-Form/"],
    formPhoto
);
const projects = [Weather, Quiz, Schnack, Form];
const Project = ()=>{
    return(
        <section id="projects">
            <div id="projectOutterWrapperInner">
                <h1 id="projectsLabel">PROJECTS</h1>
                <div id="projectSubheader">Each project represents a unique skill I've acquired</div>
                <div id="actualProjects">
                {projects.map((project, index)=>{
                    return <ProjectInsert project={project} count={index+1} key={index}/>
                })}
                </div>
            </div>
        </section>
    )
}
export default Project;