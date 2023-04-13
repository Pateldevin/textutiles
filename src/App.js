import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react'



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 5000);

  }

  const toogleMode=()=>{
    if (mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode is Enabled", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode is Enabled", "success")
    }
  }

  return (
    <>
    <Navbar title="TextUtiles" aboutText="About TextUtiles" mode={mode} toogleMode={toogleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForms  showAlert={showAlert}heading="Enter the Text to analyze and change the word in various forms" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
