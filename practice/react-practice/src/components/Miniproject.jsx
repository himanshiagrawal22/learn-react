import img from "../assets/image.png";
import {Bookmark} from 'lucide-react'
const Miniproject=(props)=>{
// console.log(props.company);
    return(
        <div className="card">
            <div>
                <div className="top">
                    <img className="logo" src={props.brandLogo} alt="amazon logo" />
                    <button>Save<Bookmark/></button>
                 </div>
                <div className="center">
                    <h3>{props.company}<span> {props.dateposted}</span></h3>
                    <h2>{props.post}</h2>
                    <div className="tag">
                        <h4>{props.tag1}</h4>
                        <h4>{props.tag2}</h4>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <h3>{props.pay}</h3>
                        <p>{props.location}</p>
                    </div>
                    <div>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default Miniproject;