import React from 'react';
import MovieCards from "./MovieCards";
import SearchResult from "./SearchResult";

export default function Layout ({searchResult, setSearch, getMovies}) {
    return (
        <div className="container">
            <header>
                <h1>Movie Search</h1>
            </header>
            
            <nav>
            <SearchResult setSearch={setSearch} getMovies={getMovies} />
            </nav>

            <main>
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