import React from "react";
import firebase from "firebase";





export class Edit extends React.Component{
    
    constructor(){
        super();
        firebase.database().ref('Blogs/'+1).once('value',(data)=>{
            console.log(data.toJSON());
        });     
    }
    
    
   
    render(){
        return(
            <div>
                <p>Hi! I am Edit</p>
                <button>Show Blogs</button>
            </div>
        );
    }
}

export default Edit;