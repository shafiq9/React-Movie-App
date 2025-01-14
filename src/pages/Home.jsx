import { useState } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"


function Home() {

    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        { id: 1, title: "John Wick", relase_date: "2020" },
        { id: 2, title: "Terminator", relase_date: "1999" },
        { id: 2, title: "The Matrix", relase_date: "1998" },
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return (
        <>
            <div className="home">
                <form onSubmit={handleSearch} className="search-form" action="">
                    <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} />
                    <button type="submit" className="search-button">Search</button>
                </form>

                <div className="movies-grid">
                    {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
                </div>

            </div>
        </>
    )
}

export default Home