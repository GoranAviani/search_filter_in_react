import logo from './logo.svg';
import './App.css';

import Search from "./Search";

const data = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];


function App() {
  return (
    <div className="App">
     <Search data={data}/>
    </div>
  );
}

export default App;
