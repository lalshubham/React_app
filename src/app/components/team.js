import React from "react";
import logogirl from '../images/girl.png';
import logoboy from '../images/boy.png';

const imgStyle = {
    width:'100%',
    height: '155px',
    
}

export class Team extends React.Component{
    render(){
        return(
            <div className="container ourTeam">
                <div className="row">
                    <h2>Our Awesome Team </h2><br/>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <img src={logogirl} alt="John" style={imgStyle} />
                    <h3>Shraddha Mody</h3>
                    <p className="title">Frontend Designer</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p><button className="button">Contact</button></p>
                    <hr />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <img src={logogirl} alt="Dan" style={imgStyle} />
                    <h3>Namrta Himdev</h3>
                    <p className="title">Team Connector</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p><button className="button">Contact</button></p>
                    <hr />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <img src={logoboy} alt="Jane" style={imgStyle} />
                    <h3>Khizar Sayed</h3>
                    <p className="title">Frontend Developer</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p><button className="button">Contact</button></p>
                    <hr />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <img src={logoboy} alt="Mike" style={imgStyle} />
                    <h3>Shubham Lal</h3>
                    <p className="title">Backend Developer</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p><button className="button">Contact</button></p>
                    <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;