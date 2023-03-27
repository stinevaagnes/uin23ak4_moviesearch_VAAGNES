export default function SearchReult({setSearch, getMovies}){
    
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleSearch = (event) => {
        if(event.target.value.length > 2) {
            setSearch(event.target.value)
            console.log(event.target.value)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="..." onChange={handleSearch}/>
            <input type="submit" onClick={getMovies} value="Søk" />
        </form>
    )
}


