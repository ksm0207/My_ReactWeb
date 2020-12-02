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
  };
  componentDidMount(){
    // 컴포넌트가 생성된후 getMovies() 함수를 호출합니다
    this.getMovies();
  }
  
  render(){
    const isLoading = this.state.isLoading
    const movies = this.state.movies
    return(
      <div>
        {
          isLoading ? "불러오는중 ..." :
          movies.map(movie =>(
            <Movie
              title = {movie.title}     
            />
          ))}
        
      </div>
    ); 
  }
}



export default App;