import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React , {useState} from 'react';

function App() {
  const [mode, setmode] = useState('light')

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setmode('dark') ;
      document.body.style.backgroundColor = 'grey' ;
    }
    else
    {
      setmode('light') ;
      document.body.style.backgroundColor = 'white' ;
    }
  }
  return (
    <>
      <Navbar title="Textutils" about="About Us" mode = {mode} toggleMode = {toggleMode}></Navbar>
      <div className="container my-3">
        <Textform heading="Enter the text here" mode = {mode}></Textform>
      </div>

      {/*<About mode= {mode}/>*/}
    </>
  );
}

export default App;
