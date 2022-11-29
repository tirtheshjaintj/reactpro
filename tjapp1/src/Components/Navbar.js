import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class Navbar extends Component {
  
  render() {
 
    return (
        <>
        <nav className={`navbar navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode} text-${this.props.mode} fw-bold`} style={{position:"fixed",width:"100%",top:0,zIndex:1}}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">TJ News</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/business">Business</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/general">General</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sports">Sports</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/entertainment">Entertainment</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/health">Health</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/science">Science</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/technology">Technology</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
        <div className="form-check form-switch p-2">
    <input className="form-check-input" onChange={this.props.switchOver}   type="checkbox" role="switch" id="flexSwitchCheckDefault" />
    <label className={`form-check-label text-`+this.props.mode1}  htmlFor="flexSwitchCheckDefault" style={{textTransform:"capitalize"}}> Mode</label>
  </div>
        </form>
      </div>
    </div>
  </nav>
      </>
    )
  }
}
