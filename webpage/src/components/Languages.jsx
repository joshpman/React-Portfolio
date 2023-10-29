const Languages = ({language1, language2})=>{
    return(
        <div className="languageWrapper">
            <img alt="" src={language1} className="languageLeft" draggable="false"></img>
            <img alt="" src={language2} className="languageRight" draggable="false"></img>
        </div>
    )
}
export default Languages;