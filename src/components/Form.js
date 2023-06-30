import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Form =(props) => {
 
    const {value, submit } = props;

console.log(props)
    
  const onSubmit = (evt) => {
    evt.preventDevault()
    submit()
  }



    return (
     <div>THIS IS THE FORM page returning
        <form className="form" onSubmit={onSubmit} >
            <input 
            name={value.teamMembers.name}
            type="text"
            // value={}
            // onChange={}

            
            
            />
            <input  
                email={value.teamMembers.email}
                type="text"
            />

            <select value={props.role} name="role" >
               <option value="" >Select A Role</option>
               <option value="Student" >Student</option>
               <option value="Instructor" >Instructor</option>
               <option value="Alumni" >Alumni</option>
          </select>

            <submit type="button" >Submit</submit>
        </form>
        
        
    `</div>
    )
}

export default Form