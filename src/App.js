import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="Textutils" about="About Us"></Navbar>
      <div className="container my-3">
        <Textform heading="Enter the text here"></Textform>
      </div>
    </>
  );
}

export default App;
