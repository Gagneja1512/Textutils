import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React , {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message , type)=>{
    setAlert({
      msg : message ,
      type : type ,
    })

  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setmode('dark') ;
      document.body.style.backgroundColor = 'grey' ;
      showAlert("Dark mode has been enabled ") ;
      document.title = 'TextUtils - Dark Mode' ;
    }
    else
    {
      setmode('light') ;
      document.body.style.backgroundColor = 'white' ;
      showAlert("Light mode has been enabled ") ;
      document.title = 'TextUtils - Dark Mode' ;
    }
  }
  return (
    <>
      <Navbar title="Textutils" about="About Us" mode = {mode} toggleMode = {toggleMode}></Navbar>
      <Alert alert = {alert} />
      <div className="container my-3">
        <Textform heading="Enter the text here" mode = {mode}></Textform>
      </div>

      {/*<About mode= {mode}/>*/}
      
    </>
  );
}

export default App;
