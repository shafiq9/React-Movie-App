import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'

function App() {
 

  return (
    <>
      <Home />
      <MovieCard movie={{title: "Tim's Film", release_date: "2024"}} />
    </>
  )
}

export default App
