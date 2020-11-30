import React from "react"
import axios from "axios"

class App extends React.Component{
  state = {
    isLoading: true,
    items : []
  }
  // https://yts-proxy.nomadcoders1.now.sh/list_movies.json

  getMoveis = async() =>{
    // 영화 데이터를 가진 API Function
    const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
    console.log(movies)
  }

  componentDidMount(){
    // 컴포넌트가 생성된후 getMovies() 함수를 호출합니다
    this.getMoveis();
  }
  
  render(){
    const isLoading = this.state.isLoading
    return(
      <div>
        {isLoading ? "불러오는중 ... " : "준비완료"}
      </div>
    ) 
  }
}



export default App;