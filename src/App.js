import './App.css';
import Axios from "axios";
import {useState} from 'react';
import Recipe from './recipe.js'
import { v4 as uuidv4 } from "uuid";
import Alert from "./command.js"



const App = () => {
  const  [query, setquery] = useState("")
  const [recipes, setrecipes] = useState([]);
  const [alert, setalert] = useState("") 
  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
   const getdata = async () => {
    if (query !== "") {
    const result  = await Axios.get(url);
    if (!result.data.more) {
      return setalert("No food with such name");
    }
    setrecipes(result.data.hits)
    console.log(result); 
    setquery("");
    setalert("");
  }
  else {
    setalert("please fill the form")
  }

   };
   const change = e => {
    setquery(e.target.value)
   };

   const submit = e => {
    e.preventDefault();
    getdata();
   };

  return (
    <div className="App">
      <h1 onClick={getdata}>Food App</h1>
      <form className="search-form" onSubmit={submit}>
        {alert !== "" && <Alert alert={alert} />}
      <input type='text' placeholder='search food' autocomplete='off' onChange={change} value={query} />
     <input type='submit' value="search" />

      </form>
      <div className='recipes'>
        {recipes !== [] && recipes.map(recipe =>  <Recipe key={uuidv4()} recipe ={recipe} /> )}
      </div>

  
    </div>
  );
}

export default App;
