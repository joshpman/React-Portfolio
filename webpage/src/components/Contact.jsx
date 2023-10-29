import mail from '../images/mailIcon.webp'
import resume from '../images/downloadResume.webp'
const Contact = ()=>{
    const sendEmail = ()=>{
    window.open("mailto:jpearlma@mtu.edu?subject=Reaching Out&body=Hey Josh, How's it going? ");
    }
    return(
        <div id="contact">
        <div id="contactWrapper">
            <div id="contactHeaderLabels">
                <h1 id="contactHeader">CONTACT AND RESUME</h1>
                <h2 id="contactSubheader">Feel Free to Download my Resume and Reach Out if you'd like!</h2>
            </div>
            <div id="contactMethodWrapper">
                <div className="contactSegmentWrapper">
                    <div className="contactIconWrapper">
                        <img onClick={sendEmail} draggable={false} src={mail} alt="" className="contactIcon"></img>
                    </div>
                    <div className="contactInfoWrapper">
                        <h1 className="topContactLabel">Email Me!</h1>
                        <h2 onClick={sendEmail} className="bottomContactLabel">jpearlma@mtu.edu</h2>
                    </div>
                </div>
                <div className="contactSegmentWrapper">
                    <div className="contactIconWrapper">
                        <img onClick={()=>window.open('/downloads/JoshPearlmanResume.pdf', '_blank')} draggable={false} src={resume} alt="" className="contactIcon"></img>
                    </div>
                    <div className="contactInfoWrapper">
                        <h1 className="topContactLabel">Download My Resume!</h1>
                        <h2 onClick={()=>window.open('/downloads/JoshPearlmanResume.pdf', '_blank')} className="bottomContactLabel">Click Here!</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Contact;