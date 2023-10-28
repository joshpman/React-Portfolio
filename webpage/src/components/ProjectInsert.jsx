
    const ProjectInsert = ({project, count})=>{
    console.log(project);
    console.log(count);
    const LangTag = ({languages})=>{
        return(
            <div className="projectLanguagesWrapper">
                <h1 className="projectLanguageH">{languages}</h1>
            </div>
        )
    }
    const LeftCheck= ({item, value})=>{
        if(value%2===1){
            return(
                <div className="projectWrapperInner">
                    <img src={item.photo} className="projectImage" alt=""></img>
                    <div className="projectContentWrapper">
                        <h1 className="projectHeader">{item.name}</h1>
                        <h2 className="projectDate">{item.date}</h2>
                        <p className="projectDescription">{item.description}</p>
                        {
                            item.languages.map((langs)=><LangTag languages={langs}/>)
                        }
                        <footer className="projectLogosBottom">
                            <a href={item.urls[0]} className="codeButton">Code</a>
                            <a href={item.urls[1]} className="repoButton">Live Webpage</a>
                        </footer>

                    </div>
                </div>
            )
        }
        return(
            <div className="projectWrapperInner">
                <div className="projectContentWrapper">
                    <h1 className="projectHeader">{item.name}</h1>
                    <h2 className="projectDate">{item.date}</h2>
                    <p className="projectDescription">{item.description}</p>
                    {
                        item.languages.map((langs)=><LangTag languages={langs}/>)
                    }
                    <footer className="projectLogosBottom">
                        <a href={item.urls[0]} className="codeButton">Code</a>
                        <a href={item.urls[1]} className="repoButton">Live Webpage</a>
                    </footer>

                </div>
                <img src={item.photo} className="projectImage" alt=""></img>
            </div>
        )
    }
    return(
        <div className="projectWrapper">
                <LeftCheck item={project} value={count}/>
        </div>
    )
}

export default ProjectInsert;