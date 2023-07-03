import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import Edit from '../components/Edit'

const Form =(props) => {
 
    const {value, submit, update } = props;

    console.log(props)

    const onChange = (evt) => {
      const {name, value} = evt.target;
      update(name, value)
    }


    
  const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
  }

  // const onEdit = () => {
  //  console.log(memberToEdit())
  // return <Edit />
  // }



    return (
     <div>Team Builder App 
        <form className="form" onSubmit={onSubmit} >
          <label> Name: 
            <input 
            name="name"
            type="text"
            value={value.name}
            placeholder="Enter Your Name"
            onChange={onChange}

            />
          </label>
          <label> Email: 
            <input  
                email="email"
                type="text"
                value={value.email}
                onChange={onChange}
                placeholder="Enter Your Email"


            />
          </label>
          <label>Role: 
            <select value={value.role} name="role" >
               <option value="" >Select A Role</option>
               <option value="Student" >Student</option>
               <option value="Instructor" >Instructor</option>
               <option value="Alumni" >Alumni</option>
            </select>
          </label>

            <input type="submit" value="Create Your Team!" />
        </form>
        
        {/* need to add an on open and on close funcitonality to the Edit Members button to show the Edit section when the page is clicked, and  */}
        {/* <button type="button" onEdit={onEdit}>Edit Members</button> */}
        
    `</div>
    )
}

export default Form