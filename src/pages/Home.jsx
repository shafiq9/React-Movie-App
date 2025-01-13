import MovieCard from "../components/MovieCard"


    function Home(){

        const movies = [
            {id: 1, title: "John Wick", relase_date: "2020"},
            {id: 2, title: "Terminator", relase_date: "1999"},
            {id: 2, title: "The Matrix", relase_date: "1998"},
        ]

        return 
        <div className="home">
            <div className="movies-grid">
                {movies.map(movie => <MovieCard movie={movie} />)}
            </div>

        </div>
    }