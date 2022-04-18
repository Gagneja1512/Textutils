import React , {useState} from 'react'

export default function Textform(props) {
    const [text , setText] = useState(''); 

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
    }

    const handleCopy = ()=>{
        let text = document.getElementById("mybox") ;
        text.select() ;
        navigator.clipboard.writeText(text.value) ;
    }

    const removeExtraSpaces = ()=>{
        let newtext = text.split(/[ ] + /);
        setText(newtext.join(" "));

    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    return (
        <>
        <div className='comtainer' style={{color : props.mode==='dark'?'white':'black'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/*<label for="mybox" class="form-label">Example textarea</label>*/}
                <textarea className="form-control" value ={text} onChange = {handleOnChange}  style={{backgroundColor : props.mode=='dark'?'grey' : 'white' , color : props.mode=='dark'?'white' : 'black'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra spaces</button>
        </div>
        
        <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>Yout text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} numbers of words and {text.length} number of characters</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h1>Preview</h1>
            <p>{text.length > 0 ? text : "Enter something above to preview it"}</p>
        </div>
        </>
    )
}
