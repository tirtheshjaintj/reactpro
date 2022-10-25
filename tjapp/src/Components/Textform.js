// import React from 'react'
// import PropTypes from 'prop-types'
import React,{useState} from 'react';
function Textform(props) {
  const [value, setValue] = useState("");
  // const [mode,setMode]= useState(props.mode);
 
  function h1(e){
    setValue(e.target.value);
  }
  function h2(){
    setValue(value.toUpperCase());
props.alert1("Text Converted To UpperCase");
  }
  function h3(){
    setValue(value.toLowerCase());
props.alert1("Text Converted To LowerCase");
  }
  function h4(){
    setValue("");
props.alert1("Text Cleared");
  }
  function h5(){
navigator.clipboard.writeText(value);
props.alert1("Text Copied");
  }
  function h6(){
    let newtext=value.split(/[ ]+/);
    setValue(newtext.join(" "));
props.alert1("Spaces Removed");
  }
  
  return (
    <>
       <div className="container">
     <div className={`mb-2 text-${props.mode2}`}>
      <h2>Enter Text To Analyze</h2>
  <textarea className={`form-control bg-${props.mode} text-${props.mode2}`} value={value} onChange={h1} style={{height:"200px"}} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" onClick={h2} className="btn btn-primary m-2">UpperCase</button>
<button type="button" onClick={h3}  className="btn btn-secondary m-2">LowerCase</button>
<button type="button" onClick={h4} className="btn btn-success m-2">Clear Text</button>
<button type="button" onClick={h5} className="btn btn-danger m-2">Copy Text</button>
<button type="button" onClick={h6} className="btn btn-warning m-2">Remove Spaces</button>
{/* <button type="button" className="btn btn-info m-2">Info</button>
<button type="button" className="btn btn-light m-2">Light</button>
<button type="button" className="btn btn-dark m-2">Dark</button> */}
     </div> 
     <div className={`container text-${props.mode2}`}>
      <h2>
        Your Text Summary
      </h2>
      <h5>
        {value.split(" ").filter(function(el){return el!=""}).length} Words and {value.replace(/ /g,"").length} Characters
      </h5>
      <h2>Preview</h2>
      <p>{value}</p>
     </div>
    </>
  )
}

// Textform.propTypes = {

// }

export default Textform

