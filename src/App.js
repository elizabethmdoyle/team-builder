import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from './components/Form'
import './App.css';



function App() {

  const teamMembers = {
    name: "",
    email: "",
    role: ""
  }

  
  const [members, setMembers]= useState([])
  const [formValues, setFormValues] = useState({teamMembers})

  // const {memberToEdit, setMemberToEdit}= useState([])


  
  const updateForm = (name, value) => {
      setFormValues({...formValues, [name]: value})
  }
  
   const submitForm = () => {
    setMembers([formValues, ...members])
    setFormValues({name: "", email: "", role: ""})
    
  }

   const team = {
        username: formValues.username,
        email: formValues.email,
        role: formValues.role 
  }  
    
  
  

  // axios.post(`fakeapi.com`, members)
  // .then(res => setMembers(res.data, ...members))
  // .catch(err => console.error(err))


  // useEffect( () => {
  //   axios.get('fakeapi.com')
  //   .then(res => setMembers(res.data))
  //   .catch(err => console.error(err))
  // }, [])





  return (
    <div className="App">
      This is the App rendering
    <Form 
      value={formValues}
      update={updateForm}
      submit={submitForm}
      
     />

     { members.map((member), idx => {
      return (
        
          <div key={idx}>
            {member.name}, {member.email}, {member.role}

          </div>
      )
     })}
    </div>
  );
}

export default App;
