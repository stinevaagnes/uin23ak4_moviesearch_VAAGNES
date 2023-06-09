import './App.css';
import './css/main.css'
import Layout from './components/Layout'
import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {

  const [searchResult, setSearchResult] = useState([])
    const [search, setSearch] = useState("james+bond")

    const getMovies = async() => {
        const response = await fetch(`http://www.omdbapi.com/?s=${search}&type=movie&apikey=147a1f7a`)
        const data = await response.json()
        setSearchResult(data.Search)
        console.log(searchResult)
    }

    useEffect(() =>{
        getMovies()
    },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout searchResult={searchResult} setSearch={setSearch} getMovies={getMovies}/>} />
      </Routes>
    </BrowserRouter>
   

  );
}

export default App;

//Kilder:
//Samarbeidet med Marianne Stavrum Myrvold og Jennifer Grimsrud
//https://github.com/ackarlse/news
//https://github.com/ackarlse/gitcollab
//https://github.com/ackarlse/api-recipe
//LMS Webtricks for UIN