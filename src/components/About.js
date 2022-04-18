import React , {useState} from "react";


export default function (props) {
    //const [myStyle , setMyStyle] = useState({
     //   color : 'black' ,
      //  backgroundColor : 'white' ,
    //})

    let myStyle = {
      color : props.mode==='dark'?'white':'grey' ,
      backgroundColor : props.mode==='dark'?'grey':'white' ,
    }

    {/*const [btnText, setbtnText] = useState("Enable Dark mode")

      const toggleStyle = ()=>{
        if(myStyle.color == "black")
        {
            setMyStyle({
                color : "white" , 
                backgroundColor : "grey" ,
            })

            setbtnText("Enable light mode")
        }
        else
        {
            setMyStyle({
                color : "black" , 
                backgroundColor : "white" ,
            })

            setbtnText("Enable Dark mode")
        }

    }*/}

  return (
    <div className="container" style = {myStyle}>
      <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample" style = {myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style = {myStyle}
            >
              <strong>Analyse your text area</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              Textutils give you a way to analyse your text quickly and efficiently.Be it word count , character count or time to read a sentence .
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style = {myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              Textutils is a free counter tool that provides instant character count and word count statistics for a given text. Textutils reports the number of charcters and words in a given text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style = {myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              This word counter work in any browser such as Chrome , safari , Opera , Brave .It suits to count the characters in a blog , essay , article or a journal .
            </div>
          </div>
        </div>

        {/*<div className="container my-3">
          <button onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
        </div>*/}
      </div>
      
    </div>
  );
}
