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
    const handleCopy=()=>{
      let newText = document.getElementById("exampleFormControlTextarea1");
      newText.select();
      newText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(newText.value);
      props.showAlert("Copied to clipboard","success");
    }
   
    const handleOnChange=(event)=>{
        // console.log('On change');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
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
          style={{backgroundColor:props.mode==='dark'?'grey':'white'}}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalized}>Capitalized Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
   
  );
}
