import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick =()=>{
        //console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text is converted to UpperCase!","success")
    }

    const handleLowClick =()=>{
        //console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Text is converted to LowerCase!","success");
    }

    const handleClearText =()=>{
        let newText = ''
        setText(newText)
        props.showAlert("Text is cleared!","success");
    }

    const handleCopyText =()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text is copied!","success");
    }
    
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert("Extra spaces are removed","success");
    }

    const handleOnChange =(event)=>{
        //console.log("onChange");
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1 style={{paddingLeft:'1%'}}>{props.heading}</h1>
                <div className="container">
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"/>
                    </div>
                    <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLowClick}>Convert to Lowerrcase</button>
                    <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearText}>Clear Text</button>
                    <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopyText}>Copy</button>
                    <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container" mb-3 style={{color:props.mode==='dark'?'white':'black',paddingLeft:'2%',paddingTop:'2%'}}> 
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>Avg time needed to read : {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length+" minutes"}</p>
            </div>
        </>

    )
}
