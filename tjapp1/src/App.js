import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
// import Hello from './Components/hello'
import Navbar from './Components/Navbar'
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {BrowserRouter as Router,Route,Routes,Switch} from "react-router-dom";
// const doc=document;
export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS;
  constructor(){
    super();
    // console.log(this.apikey);
    this.state = {
      mode:"light",
      mode1:"dark",
      progress:10
    }
  }
  render() {
document.title="TJ Spider News";
let setProgress=(progress)=>{
  this.setState({progress:progress});
  }
let switchOver=()=>{
  console.log("hello");
  if(this.state.mode=="light"){
this.setState({mode:"dark",mode1:"light"});
document.body.style.backgroundColor="#212529";
  }
  else{
    this.setState({mode:"light",mode1:"dark"});  
document.body.style.backgroundColor="white";
  }
}

    return (      
      <Router>
            <LoadingBar
        color='#f11946'
        height={5}
        progress={this.state.progress}
        
      />
        <Navbar mode={this.state.mode} mode1={this.state.mode1} switchOver={switchOver}  />
<Routes>
<Route exact path="/sports" element={<News setProgress={setProgress} mode={this.state.mode} mode1={this.state.mode1} key="sports"  country="in" total={8} category="sports"/>}/>
<Route exact path="/" element={<News setProgress={setProgress} mode={this.state.mode} mode1={this.state.mode1} key="general"   country="in" total={8} category="general"/>}/>
<Route exact path="/general"      element={<News setProgress={setProgress} mode={this.state.mode} mode1={this.state.mode1} key="hello" country="in" total={8} category="general"/>}/>
<Route exact path="/business"   element={<News setProgress={setProgress} mode={this.state.mode} mode1={this.state.mode1} key="business" country="in" total={8} category="business"/>}/>
<Route exact path="/science"   element={<News setProgress={setProgress} mode={this.state.mode} mode1={this.state.mode1} key="science" country="in" total={8} category="science"/>}/>
<Route exact path="/technology"   element={<News setProgress={setProgress} mode={this.state.mode} mode1={this.state.mode1} key="technology" country="in" total={8} category="technology"/>}/>
<Route exact path="/entertainment"  element={<News setProgress={setProgress} mode={this.state.mode} mode1={this.state.mode1}  key="entertainment"  country="in" total={8} category="entertainment"/>}/>
<Route exact path="/health" element={<News setProgress={setProgress} key="health" mode={this.state.mode} mode1={this.state.mode1}  country="in" total={8} category="health"/>}/>
</Routes>

        </Router>
    )
  }
}

