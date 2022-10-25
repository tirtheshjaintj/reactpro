import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import About from './Components/About';
import React,{useState} from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
function App() {
  const [dark, setdark] = useState('light');
  const [mode2,setMode2]= useState("");
  
  const [alert, setAlert] = useState(null);
  function Alert1(msg){
    setAlert(msg);
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  function mode1(){
    if(dark=="dark"){
setdark("light");
setMode2("dark");
document.body.style.backgroundColor="white";
Alert1("Light Mode Has Been Enabled");
    }
    else{
      setdark("dark");
setMode2("light");
document.body.style.backgroundColor="#212529";
Alert1("Dark Mode Has Been Enabled");
    }
  }
  return (
  <Router>
    <div className="App">
    <Navbar title="Tirthesh Jain" mode={dark} mode1={mode1} mode2={mode2}/>
     {/* <About></About> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Tirthesh Jain Here</code> 
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}
    </div>
    <Routes>
      <Route path="/about" element={<About mode={dark} mode2={mode2}/>}> </Route>
      <Route path="/" element={<Textform mode={dark} alert1={Alert1} mode2={mode2}></Textform>}> </Route>
    </Routes>
    <Alert alert={alert}></Alert>
    </Router>
  );
  
}

export default App;
