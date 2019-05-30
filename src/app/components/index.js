import React from "react";
import logo1 from '../images/la.jpg';
import logo2 from '../images/chicago.jpg';
import logo3 from '../images/ny.jpg';
import {Slider} from "../components/slider";




export class Index extends React.Component{
    render(){
        return(
            <div>
            <Slider/>
                <div className="container Index">
                    <div className="row">
                        <h3>Our Work</h3>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 box">
                                <span className="w3-xlarge">11+</span><br />
                                Partners
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 box">
                                <span className="w3-xlarge">55+</span><br />
                                Projects Done
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 box">
                                <span className="w3-xlarge">89+</span><br />
                                Happy Clients
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 box">
                                <span className="w3-xlarge">150+</span><br />
                                Meetings
                            </div>
                        </div>

                        <button className="w3-button w3-light-grey w3-padding-large w3-section">
                            <i className="fa fa-download"></i> Download Resume
                        </button>
                </div>

                
                <hr />
                </div>
        );
    }
}

export default Index;