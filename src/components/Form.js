import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Form =(props) => {
 
    const {value, submit, update } = props;

    console.log(props)

    const onChange = (evt) => {
      const {name, value} = evt.target;
      update(name, value)
    }


    
  const onSubmit = (evt) => {
    evt.preventDevault()
    submit()
  }

  // const onEdit = () => {
  //  memberToEdit()
  // }



    return (
     <div>Team Member 
        <form className="form" onSubmit={onSubmit} >
            <input 
            name={value.name}
            type="text"
            value={value.name}
            onChange={onChange}

            />
            <input  
                email={value.email}
                type="text"
                value={value.email}
                onChange={onChange}

            />

            <select value={value.role} name="role" >
               <option value="" >Select A Role</option>
               <option value="Student" >Student</option>
               <option value="Instructor" >Instructor</option>
               <option value="Alumni" >Alumni</option>
          </select>

            <button type="submit" >Submit</button>
        </form>
        
        <button type="button">Edit Members</button>
        
    `</div>
    )
}

export default Form