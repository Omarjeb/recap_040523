
import { useState,useEffect } from 'react';
import './App.css';
import moviesData from './assets/Data';
import MovieList from './Components/MovieList';
import Navigation from './Components/Navigation';
import AddMovie from './Components/AddMovie';

function App() {
  
  const [data,setData]=useState(moviesData)
  
  const [search,setSearch]=useState("")
  const [rate,setRate]=useState(0)
 

  return (
    <div className="App">
   
    <Navigation setSearch={setSearch} setRate={setRate} rate={rate}/>
    <AddMovie setData={setData} data={data}/>
    <MovieList data={data} search={search} rate={rate}/>
    
    </div>
  );
}

export default App;
