import React, { Component } from 'react';
import logo from '../images/chef.jpg';

export class About extends React.Component {
  render() {
    return (
        <div className="container about">
          <div className="row">  
            <h3>About Me, The Food Man</h3><br/>
            <img src={logo} alt="Me" className="w3-image"  width="800" height="300" />
            <div className="w3-padding-32">
              <h4><b>I am Who I Am!</b></h4>
              <h6><i>With Passion For Real, Good Food</i></h6>
              <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            </div>
            <hr />
          </div>
        </div>
        
        
    );
  }
}

export default About;