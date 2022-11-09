import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log('Up was clicked '+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
        // setText("You have clicked on handleUpClick" );
    }
    const handleLowClick=()=>{
        // console.log('Up was clicked '+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
        // setText("You have clicked on handleUpClick" );
    }
    const handleClearClick=()=>{
        // console.log('Up was clicked '+ text);
        let newText='';
        setText(newText);
        props.showAlert("Converted to Clear","success");
        // setText("You have clicked on handleUpClick" );
    }
    const handleCapitalized=()=>{
        // console.log('Up was clicked '+ text);
        let newText=text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Converted to Capitalize","success");
        // setText("You have clicked on handleUpClick" );
    }
   
    const handleOnChange=(event)=>{
        // console.log('On change');
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');
    // setText("New Text");
  return (
    <>
     <div className="container">
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        style={{backgroundColor:props.mode==='dark'?'grey':'white'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCapitalized}>Capitalized Case</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
   
  );
}
