import React from "react";

export class Footer extends React.Component{
    render(){
        return(
            <footer className="footerClass">
                <i className="fa fa-facebook-official w3-hover-opacity"></i>
                <i className="fa fa-instagram w3-hover-opacity"></i>
                <i className="fa fa-snapchat w3-hover-opacity"></i>
                <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                <i className="fa fa-twitter w3-hover-opacity"></i>
                <i className="fa fa-linkedin w3-hover-opacity"></i>
            <p className="text-center">Copyright &copy; 2019 | Impact.com</p>
          </footer> 
        );
    }
}

export default Footer;