    const ProjectInsert = ({project, count})=>{
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
                            <div className="projectNameDateWrapper">
                                <h1 className="projectHeader">{item.name}</h1>
                                <h2 className="projectDate">{item.date}</h2>
                            </div>
                            <div className="projectDescriptLangWrapper">
                                <p className="projectDescription">{item.description}</p>
                                <div className="languageUsedWrapper">
                                {
                                    item.languages.map((langs,index)=><LangTag languages={langs} key={index}/>)
                                }
                                </div>
                            </div>
                        <footer className="projectLogosBottom">
                            <a href='#' onClick={(e)=>{e.preventDefault(); window.open(item.urls[0], '_blank')}} className="codeButton">View Code</a>
                            <a href={item.urls[1]} className="codeButton">Live Webpage</a>
                        </footer>
                    </div>
                </div>
            )
        }
        return(
            <div className="projectWrapperInner">
                <div className="projectContentWrapper">
                    <div className="projectNameDateWrapper">
                        <h1 className="projectHeader">{item.name}</h1>
                        <h2 className="projectDate">{item.date}</h2>
                    </div>
                    <div className="projectDescriptLangWrapper">
                        <p className="projectDescription">{item.description}</p>
                        <div className="languageUsedWrapper">
                        {
                            item.languages.map((langs,index)=><LangTag languages={langs} key={index}/>)
                        }
                        </div>
                    </div>
                    <footer className="projectLogosBottom">
                        <a href='#' onClick={(e)=>{e.preventDefault(); window.open(item.urls[0], '_blank')}} className="codeButton">View Code</a>
                        <a href={item.urls[1]} className="codeButton">Live Webpage</a>
                    </footer>
                </div>
                <img src={item.photo} onClick={()=>{ window.open(item.urls[0], '_blank')}} className="projectImage" alt=""></img>
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