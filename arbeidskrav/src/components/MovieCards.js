import React from 'react';
import MovieCard from "./MovieCard"

export default function MovieCards ({searchResult}) {
    return (
        <section className="movies">
            {searchResult.map((movie, index) => (
                <MovieCard key={index} imdbID={movie.imdbID} />
            ))}
        </section>
    )
}

//Kilder:
//Samarbeidet med Marianne Stavrum Myrvold og Jennifer Grimsrud
//https://github.com/ackarlse/news
//https://github.com/ackarlse/gitcollab
//https://github.com/ackarlse/api-recipe