// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react'
import Alert from './components/Alert';

// import { BrowserRouter as Router,Switch, Route,Link }from "react-router-dom";

// import {
//   BrowserRouter,
//   Route,
//   Link
// } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('dark');
  const [alert,setAlert] = useState(" ");

const showAlert =( message, type) =>{
        setAlert({
          msg:message,
          type:type
        })
        // setTimeout(()=>{
        //   setAlert(null);
        // },1500);
  }
  const toggleMode = () =>{

    if( mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='#040b15';
      showAlert("Dark mode is enabled","success");
      document.title = 'Textutils-dark mode';
    }
    else
   {
      setMode('light')
      document.body.style.backgroundColor ='white';
      showAlert("light mode is enabled","success");
      document.title = 'Textutils-dark mode';
    }
  }
  return (
<>
  {/* <Router> */}
  <Navbar title="TextUtils" aboutText="About"  mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
  <TextForm showAlert={showAlert} heading=" Enter the text to analyze below :" mode={mode}/>
  
  {/* <Routes> */}
          {/* <Route exact path="/About" element={<About/>} /> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading=" Enter the text to analyze below :" mode={mode}/>}/>
        </Routes> */}
  </div>
  {/* </Router> */}
</>
);
}

export default App;