import React from "react"
import axios from "axios"
import Movie from "../components/Movie"
import "./Home.css";

class Home extends React.Component{
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
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json")
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
      <section className="container">
        {
          isLoading ?( 
          <div className="loader">
            <img src="https://steamuserimages-a.akamaihd.net/ugc/948460320894342091/41316AE448EAF126C7067790ADCEAC99B26B576C/"/>
          </div>
          ) : ( <div className="movies">
            {
              movies.map(movie => (
                <Movie
                key = {movie.id}
                id = {movie.id}
                title = {movie.title}
                year = {movie.year}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                rating = {movie.rating}
                runtime = {movie.runtime}
                genres = {movie.genres}
                />
              ))}
          </div> 
          )}
      </section>
    ); // end of return 
  } // end of render Function
}
export default Home;