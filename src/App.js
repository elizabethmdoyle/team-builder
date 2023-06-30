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


  const onChange = () => {

  }

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
     />
    </div>
  );
}

export default App;
