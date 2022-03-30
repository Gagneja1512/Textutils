import React , {useState} from 'react'

export default function Textform(props) {
    const [text , setText] = useState('Enter Text here'); 

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    return (
        <div> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/*<label for="mybox" class="form-label">Example textarea</label>*/}
                <textarea className="form-control" value ={text} onChange = {handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
