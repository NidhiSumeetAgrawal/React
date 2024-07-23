import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Uppercase','success')
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>{
        let newText = "";
        setText(newText)
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))

    }
    const [text,setText]= useState(''); 
  return (
    <>
    <div className="container" style={{background: props.mode==='light'? 'white': 'grey'}}>
    <h1 style={{color: props.mode==='light'? 'black': 'white'}}>{props.heading}</h1>
        <div className="mb-3"> 
        <textarea className="form-control" id="myForm" rows="8" style={{background: props.mode==='light'? 'white': '#1b1717', color :props.mode==='light'? 'black': 'white' }} value={text} onChange={handleOnChange}></textarea>
        </div>
        <button disabled={text.length===0 }className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{background: props.mode==='light'? 'white': 'grey', color :props.mode==='light'? 'black': 'white' }}>
        <h2>Your text summery</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and  {text.length} characters</p>
    </div>
    </>
  )
}
