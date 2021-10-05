import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from react
import react from 'react';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  const [searchTerm, setSearchTerm] = useState("")


  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
