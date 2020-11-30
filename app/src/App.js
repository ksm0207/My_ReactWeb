import React from "react"


class App extends React.Component{
  state = {
    isLoading: true,
    items : []
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading : false})
    }, 2000);
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