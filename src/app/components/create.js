import React from "react";
// import {firebase} from '../../Firebase/firebase';
import firebase from "firebase";
import {ReactDOM} from 'react-dom';
import { Link } from 'react-router-dom';

const margin = {
    padding: '40px 0px 20px 280px',
}

// Firebase connection
    
var config = {
    apiKey: "AIzaSyBeyu6TZbE1D7gHSn6w5hMvUDlNyWCfceA",
    authDomain: "react-crud-5b2a6.firebaseapp.com",
    databaseURL: "https://react-crud-5b2a6.firebaseio.com",
    projectId: "react-crud-5b2a6",
    storageBucket: "react-crud-5b2a6.appspot.com",
    messagingSenderId: "546410275241",
    appId: "1:546410275241:web:2a5d943ef96f02ca"
};
var db = firebase.initializeApp(config);


export class Create extends React.Component{
    constructor(props){
        super();
        this.state = {
            name: '',
            slug: '',
            body: ''
        }
        
    }
   
    onChanged(){
        console.log(this.state);

        this.setState({
            name:'',
            slug:'',
            body:''
        });
        
        
        firebase.database().ref('Blogs/'+1).push({
            name: this.state.name,
            slug: this.state.slug,
            body: this.state.body
        }).then(()=>{
            console.log('Inserted!');
            
        }).catch((error)=>{
            console.log(error);
        });
    }
    
    
        


    onChangeName(event) {
        console.log(event);
        this.setState({
            name: event.target.value,
        });
        console.log(this.setState.name);
    }

    onChangeSlug(event) {
        console.log(event);
        this.setState({
            slug: event.target.value,
        });
        console.log(this.setState.slug);
    }

    onChangeBody(event){
        console.log(event);
        this.setState({
            body: event.target.value,
        });
        console.log(this.setState.body);
        // const values = firebase.database().value('users/oo1');
        // console.log(values);
    }
    render(){
        return(
            <div className="container createBlog">
                <div className="row">
                <h1 style={margin}>Create Your First Blog</h1>
                <div className="col-lg-4 col-md-4">
                    <i className="fa fa-rss"></i>
                    <h1>{this.state.name}</h1>
                    <br/>
                    <small>{this.state.slug}</small>
                    <br/>
                    <p>{this.state.body}</p>
                </div>
                    <div className="col-lg-8 col-md-8">
                        
                       
                            <label for="title">Title</label>
                            <input className="form-control" name="title" type="text" id="title" onChange={(event) => this.onChangeName(event)} value={this.state.name} placeholder="Enter Title" />
                            <br />
                            <label for="slug">Slug</label>
                            <input className="form-control" slug="slug" type="text" id="slug" onChange={(event) => this.onChangeSlug(event)} value={this.state.slug}  placeholder="Enter Slug" />
                            <br/>
                            <label for="body">Body</label>
                            <textarea className="form-control" name="body" type="text" id="body" onChange={(event) => this.onChangeBody(event)} value={this.state.body}  placeholder="Enter Article"></textarea>
                            <br/>
                            <button className="btn btn-success" onClick={ this.onChanged.bind(this)} >Submit</button>
                        
                    </div>
                    
                </div>
                <br/>
                <hr/>
            </div>
        );
    }
}

export default Create;