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

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    return (
        <>
        <div className='comtainer'> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/*<label for="mybox" class="form-label">Example textarea</label>*/}
                <textarea className="form-control" value ={text} onChange = {handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        </div>
        
        <div className="container my-3">
            <h1>Yout text summary</h1>
            <p>{text.split(" ").length} numbers of words and {text.length} number of characters</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
