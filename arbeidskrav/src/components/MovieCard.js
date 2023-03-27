export default function MovieCard({poster, title, year}) {
    return (
    <article className="movie-card">
        <img src={poster != "N/A" ? poster : "https://pixabay.com/illustrations/avatar-icon-placeholder-symbol-2388584/"} alt={title} />
        <h3>{title}</h3>
        <p>{year}</p>
        <button>Mer om filmen</button>
     </article>
    )
}