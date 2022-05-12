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

    const appDataHandler = (userInput) => {
        console.log(userInput)
    }

  return (
    <div className="App">
     <Search data={data} appDataHandler={appDataHandler}/>
    </div>
  );
}

export default App;
