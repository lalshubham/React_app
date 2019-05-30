import React from "react";
import {Header} from "./components/Header";
import {Index} from "./components/index";
import {Body} from "./components/body";
import {About} from "./components/about";
import {Slider} from "./components/slider";
import {Contact} from "./components/contact";
import {Team} from "./components/team";
import {Footer} from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/App.css';



export class App extends React.Component{
    render(){
        return(
            <div>
            
                <Header/>
                <Router>
                        <Route path={"/"} exact component={ Index } >
                            <Route path={"about"} component={ About } /> 
                            <Route path={"our-team"} component={ Team } /> 
                            <Route path={"contact"} component={Contact} /> 
                            <Route path={"newindex"} component={Index} /> 
                        </Route>
                </Router>
                <Footer/>
               
            </div>
        );
    }
}


export default App;

