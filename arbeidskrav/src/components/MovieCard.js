import { useEffect, useState } from "react"

export default function MovieCard({imdbID}) {
   
    const [movie, setMovie] = useState("")
    const placeholder = "https://pixabay.com/illustrations/avatar-icon-placeholder-symbol-2388584/"

    const getMovies = async() => {
        const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&type=movie&apikey=147a1f7a`)
        const data = await response.json()
        setMovie(data)
        console.log(movie)
    }

    useEffect(() =>{
        getMovies()
    },[imdbID])
   
    return (
    <article className="movie-card">
       <h3>{movie.Title}</h3>
       <img src={movie.Poster !== "N/A" ? movie.Poster : placeholder} alt={movie.Title}/>
       <p>Genre: {movie.Genre !== "N/A" ? movie.Genre : "Genre not available"}</p>
       <p>Published: {movie.Year !== "N/A" ? movie.Year : "Year not available"}</p>
       <p>Director: {movie.Director !== "N/A" ? movie.Director : "Director not available"}</p>
       <p>Actors: {movie.Actors !== "N/A" ? movie.Actors : "Actors not available"}</p>
       <p>Awards: {movie.Awards !== "N/A" ? movie.Awards : "None"}</p>
       <p>Runtime: {movie.Runtime !== "N/A" ? movie.Runtime : "Runtime not available"}</p>
       <p>Language: {movie.Language !== "N/A" ? movie.Language : "Language information not available"}</p>
       <p>Plot: {movie.Plot !== "N/A" ? movie.Plot : "Plot not available"}</p>
     </article>
    )
}

//Kilder:
//Samarbeidet med Marianne Stavrum Myrvold og Jennifer Grimsrud
//https://github.com/ackarlse/news
//https://github.com/ackarlse/gitcollab
//https://github.com/ackarlse/api-recipe