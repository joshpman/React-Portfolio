import mail from '../images/mailIcon.webp'
import resume from '../images/downloadResume.webp'
const Contact = ()=>{
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
                        <img draggable={false} src={mail} alt="" className="contactIcon"></img>
                    </div>
                    <div className="contactInfoWrapper">
                        <h1 className="topContactLabel">Email Me!</h1>
                        <h2 className="bottomContactLabel">jpearlma@mtu.edu</h2>
                    </div>
                </div>
                <div className="contactSegmentWrapper">
                    <div className="contactIconWrapper">
                        <img draggable={false} src={resume} alt="" className="contactIcon"></img>
                    </div>
                    <div className="contactInfoWrapper">
                        <h1 className="topContactLabel">Download My Resume!</h1>
                        <h2 className="bottomContactLabel">Click Here!</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )

}

export default Contact;