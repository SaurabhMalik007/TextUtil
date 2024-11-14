import React, { useState } from 'react'


export default function TextForm(props) {
  const [text,setText] = useState('');

  const handleUpClick = ()=>{
    // console.log("clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
    // console.log("clicked");
    setText(event.target.value);
  }
  const handleDownClick = ()=>{
    // console.log("clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
  }
  const removeExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  
  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea 
                className="form-control" 
                value={text} 
                onChange={handleOnChange}
                placeholder='Enter Text Here' 
                id="myBox" 
                rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-warning mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>


    </div>
    <div className="container my-2">
        <h3>Your Text summary</h3>
        <p>{text.split(" ").length-1} Words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
