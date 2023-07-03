import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from './components/Form'
import './App.css';

const teamMembers = {
  name: "",
  email: "",
  role: ""
}

function App() {

  const [members, setMembers]= useState([])
  const [formValues, setFormValues] = useState({teamMembers})

  const {memberToEdit, setMemberToEdit}= useState([])


  
  const updateForm = (inputName, inputValue) => {
      setFormValues({...formValues, [inputName]: inputValue})
  }
  
   const submitForm = () => {
    const submit = [setFormValues, ...formValues]
    submit()

  }

   const team = {
        username: formValues.username,
        email: formValues.email,
        role: formValues.role 
  }  
    
  
  

  axios.post(`fakeapi.com`, members)
  .then(res => setMembers(res.data, ...members))
  .catch(err => console.error(err))


  useEffect( () => {
    axios.get('fakeapi.com')
    .then(res => setMembers(res.data))
    .catch(err => console.error(err))
  }, [])





  return (
    <div className="App">
      This is the App rendering
    <Form 
      value={formValues}
      update={updateForm}
      submit={submitForm}
      edit={memberToEdit}
     />
    </div>
  );
}

export default App;
