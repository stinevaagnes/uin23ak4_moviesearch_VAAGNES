import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Movie() {

    const {id} = useParams();
    const [movies, setMovies] = useState("");

    const filmSlug = async () => {
        const url = 'http://www.omdbapi.com/?i=${id}&apikey=147a1f7a;'
        const response = await fetch(url); 
        const responseJSON = await response.json();
        setMovies(responseJSON);
    };

    useEffect(() => {
        filmSlug();
    }, [id]);


    console.log(movies)

    return(
        <>
        <h3>{movies.Title}</h3>
        <img src={movies.Poster} alt={movies.Title} />
        <h4>Story:</h4> <p>{movies.Plot}</p>
        <h4>Actors:</h4> <p>{movies.Actors}</p>
        <h4>Released </h4> <p>{movies.Released}</p>
        <h4>Year: </h4> <p>:{movies.Year}</p>
        </>
    )
}

//Kilder:
//Samarbeidet med Marianne Stavrum Myrvold og Jennifer Grimsrud
//https://github.com/ackarlse/news
//https://github.com/ackarlse/gitcollab
//https://github.com/ackarlse/api-recipe