import React from "react";
import {Index} from "../components/index";
import {About} from "../components/about";
import {Contact} from "../components/contact";
import {Create} from "../components/create";
import {Edit} from "../components/edit";
import {Delete} from "../components/delete";
import {Team} from "../components/team";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from '../images/logonew.jpg';





export class Header extends React.Component{
    render(){
        console.log(this.props.slider);
        console.log(this.props.userName);
        return(
            <Router>
                <div className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <Link to={"/"} ><img src={logo} width="90px" height="60px" /></Link>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                        <li className="active"><Link to={"/"} >Home</Link></li>
                        {/* <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">About Us <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                            <li><a href="#">Page 1-1</a></li>
                            <li><a href="#">Page 1-2</a></li>
                            <li><a href="#">Page 1-3</a></li>
                            </ul>
                        </li> */}
                        <li><Link to={"/about"} >About Us</Link></li>
                        <li><Link to={"/our-team"} >Our Team</Link></li>
                        <li><Link to={"/contact"} >Contact Us</Link></li>
                        <li><Link to={"/create"} >Create</Link></li>
                        <li><Link to={"/edit"} >Edit</Link></li>
                        <li><Link to={"/delete"} >Delete</Link></li>
                        </ul>
                       
                    </div>
                    <switch>
                            <Route path={"/"} exact component={Index} />
                            <Route path={"/about"} component={About} />
                            <Route path={"/our-team"} exact component={Team} />
                            <Route path={"/contact"} component={Contact} />
                            <Route path={"/create"} component={Create} />  
                            <Route path={"/edit"} component={Edit} />  
                            <Route path={"/delete"} component={Delete} />     
                    </switch>
                </div>
                
            </Router>
        );
    }
}

export default Header;