
import React ,{ useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
   const [myMode, setMode] = useState('light');
   const [title, setTitle] = useState('TextUtils');
   const [alert, setAlert] = useState(null);
   
   const handleToggleMode=()=>
    {
      if(myMode==='light')
        {
          setMode('dark');
          document.body.style.backgroundColor = 'grey';
          showAlert('Dark Mode is enabled','success')
        }
        else{
          setMode('light');
           document.body.style.backgroundColor = 'white'
           showAlert('Light Mode is enabled','success')
        }
    }

    const showAlert=(message,type)=>
      {
          setAlert({
            msg:message,
            type: type
          })
          setTimeout(() => {
            setAlert(null)
          }, 1500);
      }
  return (
    <>
     <Router>
     <Navbar mode = {myMode} toggleMode={handleToggleMode} title={title}/>
     <Alert alert={alert}/>
     <div className="container my-3">
     <Routes>
          <Route exact path="/" element={<TextForm heading = "Enter your text to analyse" mode ={myMode} showAlert = {showAlert}/>} />
          <Route path="about" element={<About  mode = {myMode}/>} />
      </Routes>
     </div>
     </Router>
    </>
  );
}

export default App;
