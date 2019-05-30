import React, { Component } from 'react';

const iStyle = {
    style:'width:30px'
}


export class Contact extends React.Component {
    constructor(){
        super();
        this.state = {
            newName : "Contact Us",

        };
        setTimeout(()=>{
            this.setState({
                newName:'Contact to Shubham',
            });
        },3000);
    }
    
    
    
  render() {
    return (
        <div className="container contactContainer">
            <div className="row contactRow">
                <div className="col-lg-6 col-md-6 contactTitle google-maps">
                
                    <h1>Title</h1>
                    <div className="w3-row w3-padding-32 details">
                        <div className="w3-col m6 w3-large w3-margin-bottom">
                            <i className="fa fa-map-marker" style={iStyle} ></i> Mumbai, Maharashtra.India.<br/>
                            <i className="fa fa-phone" style={iStyle} ></i> Phone: +91 900-472-8301.<br/>
                            <i className="fa fa-envelope" style={iStyle} > </i> Email: contact@subhamlal.com<br/>
                        </div>
                    </div>
                
                </div>
                <div className="col-lg-6 col-md-6 contactUs" >
                    <h1>{ this.state.newName}</h1>
                    <form>
                        <label for="fullName">Full Name</label>
                        <input className="form-control" id="fullName" type="text" placeholder="Enter Name"/>
                        
                        <label for="contact">Contact No.</label>
                        <input className="form-control" id="contact" type="text" placeholder="Enter Your contact number" />
                        
                        <label for="Message">Enter Message</label>
                        <textarea className="form-control" id="Message" placeholder="Enter Message"></textarea>
                        <br/>
                        <button type="submit" class="btn btn-success" >Submit</button>
                        
                    </form>
                    <hr />
                </div>
                
            </div>
        </div>
    );
  }
}

export default Contact;