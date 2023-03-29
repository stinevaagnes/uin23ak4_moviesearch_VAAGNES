import { useEffect, useState } from "react"

export default function MovieCard({imdbID}) {
   
    const [movie, setMovie] = useState("")
    const placeholder = "https://cdn.pixabay.com/photo/2015/01/11/09/19/film-596009_1280.jpg"
    

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
       <img src={movie.Poster !== "N/A" ? movie.Poster : placeholder} alt={movie.Title}/>
       <h3>{movie.Title}</h3>
       <section>
       <h4>Genre: </h4><p>{movie.Genre !== "N/A" ? movie.Genre : "Genre not available"}</p>
       <h4>Published: </h4><p>{movie.Year !== "N/A" ? movie.Year : "Year not available"}</p>
       <h4>Director: </h4><p>{movie.Director !== "N/A" ? movie.Director : "Director not available"}</p>
       <h4>Actors: </h4><p>{movie.Actors !== "N/A" ? movie.Actors : "Actors not available"}</p>
       <h4>Awards: </h4><p>{movie.Awards !== "N/A" ? movie.Awards : "None"}</p>
       <h4>Runtime: </h4><p>{movie.Runtime !== "N/A" ? movie.Runtime : "Runtime not available"}</p>
       <h4>Language: </h4><p>{movie.Language !== "N/A" ? movie.Language : "Language information not available"}</p>
       <h4>Plot: </h4><p>{movie.Plot !== "N/A" ? movie.Plot : "Plot not available"}</p>
       </section>
     </article>
    )
}

//Kilder:
//Samarbeidet med Marianne Stavrum Myrvold og Jennifer Grimsrud
//https://github.com/ackarlse/news
//https://github.com/ackarlse/gitcollab
//https://github.com/ackarlse/api-recipe