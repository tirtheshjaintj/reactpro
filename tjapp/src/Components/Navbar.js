import react from 'react'
import PropTypes from "prop-types"
import React,{useState} from "react"
import {Link} from "react-router-dom";
const Navbar = (props) => {
  // const [mode,setMode]= useState(props.mode);
  // const [mode2,setMode2]= useState("");
  return (
    <>
      <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <div className="form-check form-switch p-2">
  <input className="form-check-input" onChange={props.mode1}  type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className={`form-check-label text-${props.mode2}`}  htmlFor="flexSwitchCheckDefault" style={{textTransform:"capitalize"}}>{props.mode} Mode</label>
</div>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:"TJ"
}
export default Navbar;
