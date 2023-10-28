import weatherPhoto from '../images/projectPhotos/weather.webp';
class ProjectItem{
    constructor(name, description, languages, urls, photo){
      this.name  = name;
      this.description = description;
      this.languages = languages;
      this.urls = urls;
      this.photo = photo;
    }
}
const Weather = new ProjectItem(
    "Weather App",
    "Weather App written with HTML, CSS, and JS. Utilized LocationIQ and OpenMETEO Api",
    ["HTML","JavaScript", "CSS","APIs"],
    "PUT URL HERE",
    {weatherPhoto}
)
const Project = ()=>{
    return(
        <div id="projectWrapper">
            <div id="projectWrapperInner">
                <h1 id="projectsLabel">PROJECTS</h1>
                <div id="projectSubheader">Each project represents a unique skill I've acquired</div>
            </div>
        </div>
    )
}

export default Project;