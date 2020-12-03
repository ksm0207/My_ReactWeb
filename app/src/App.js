import React from "react"
import axios from "axios"
import Movie from "./Movie"

class App extends React.Component{
  state = {
    isLoading: true,
    movies : []
  }

  getMovies = async() =>{
    // 영화 데이터를 가진 API Function
    const {
      data:{
        data:{movies}
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
    this.setState({movies, isLoading : false})
    console.log(movies)
  };
  componentDidMount(){
    // 컴포넌트가 생성된후 getMovies() 함수를 호출합니다
    this.getMovies();
  }
  render(){
    // ↓ isLoading & movies 를 정의합니다
    const {isLoading , movies } = this.state
    return (
      <div>
        {
          isLoading ? "불러오는중 ..." : movies.map(movie =>(
            <Movie
              key = {movie.id}
              id = {movie.id}
              title = {movie.title}
              year = {movie.year}
              summary = {movie.summary}
              poster = {movie.medium_cover_image}
              rating = {movie.rating}
              runtime = {movie.runtime}
            />
          ))}
      </div>  
    )
  }
}
export default App;