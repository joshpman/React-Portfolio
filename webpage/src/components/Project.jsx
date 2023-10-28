import weatherPhoto from '../images/projectPhotos/weather.webp';
import quizPhoto from '../images/projectPhotos/Quiz.webp';
import schnackPhoto from '../images/projectPhotos/schnack.webp';
import formPhoto from '../images/projectPhotos/form.webp';
import ProjectInsert from './ProjectInsert';
import '../styles/projects.css';
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
    ["HTML","JavaScript", "CSS","APIs"],
    ["URL 1", "URL 2"],
    weatherPhoto
);
const Quiz = new ProjectItem(
    "Quiz Game",
    "October 2023",
    "Developed Single-Page Quiz Game with ReactJS, CSS, and OpenTDB API.",
    ["HTML, CSS, ReactJS, APIs"],
    ["URL 1", "URL 2"],
    quizPhoto
);
const Schnack = new ProjectItem(
    "Company Webpage Demo",
    "August 2023",
    "Developed Frontend for Schnack.io webpage.Utilzied HTML, CSS, and JavaScript",
    ["HTML", "CSS", "Javascript"],
    ["URL 1", "URL 2"],
    schnackPhoto
);
const Form = new ProjectItem(
    "Registration Form Demo",
    "October 2023",
    "3-step Registration page made with HTML, CSS, and JS. Validated input using custom written Regular Expressions.",
    ["HTML", "CSS", "Javascript"],
    ["URL 1", "URL 2"],
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