import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Form =(props) => {
 
    const {values, submit } = props;


    
  const onSubmit = (evt) => {
    evt.preventDevault()
  }



    return (
     <div>THIS IS THE FORM page returning
        <form className="form" >
            <input 
            name={props.name}
            type="text"
            // value={}
            // onChange={}

            
            
            />
            <input  
                email={props.email}
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