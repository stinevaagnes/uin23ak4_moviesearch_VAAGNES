import React from 'react';
import MovieCards from "./MovieCards";
import SearchReult from "./SearchResult";

export default function Layout ({searchResult, setSearch, getMovies}) {
    return (
        <div className="front-page">
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