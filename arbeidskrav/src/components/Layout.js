import React from 'react';
import MovieCards from "./MovieCards";
import SearchReult from "./SearchResult";

export default function Layout ({searchResult, setSearch, getMovies}) {
    return (
        <div className="container">
            <header>
                <h1>Movie Search</h1>
            </header>
            
            <main>
                <SearchReult setSearch={setSearch} getMovies={getMovies} />
                <MovieCards searchResult={searchResult} />
            </main>
        </div>
    )
}

//Kilder:
//Samarbeidet med Marianne Stavrum Myrvold og Jennifer Grimsrud
//https://github.com/ackarlse/news
//https://github.com/ackarlse/gitcollab
//https://github.com/ackarlse/api-recipe