import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import City from './City';

function App() {
  const key = "cdb53e5ce9a1150c62dd6a7a4279b84b";
  const [search,setSearch] = useState("");
  const [city,setCity] = useState();
  useEffect(() => {
    async function getApiKey() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApiKey();
  },[search]);
  console.log(search);
  return (
     <div className='App py-20 text-center'>
      <h1 className="py-20 mb-20 text-4xl font-bold underline ">
        Weather Explorer
      </h1>
      <input
      onChange={(e)=> setSearch(e.target.value)}
      placeholder='Enter City Name'
      className='px-12 py-3 border-8 border-tomato-500' 
      type='text'
    />
    <City city={city} />
    </div>
    
  )
}

export default App;
