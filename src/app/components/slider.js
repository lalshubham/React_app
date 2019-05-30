import React from "react";
import logo1 from '../images/la.jpg';
import logo2 from '../images/chicago.jpg';
import logo3 from '../images/ny.jpg';


export class Slider extends React.Component{
    render(){
        return(
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                
                <div className="carousel-inner">
                    <div className="item active">
                        <img src={logo1} alt="Los Angeles" />
                    </div>

                    <div className="item">
                        <img src={logo2} alt="Chicago" />
                    </div>

                    <div className="item">
                        <img src={logo3} alt="New York" />
                    </div>
                </div>

                
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
        </div>
        );
    }
}
export default Slider;