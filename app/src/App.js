import React from "react"
import PropTypes from "prop-types";


class App extends React.Component{
  state = {
    count : 0,
  };

  add = () =>{
    console.log("Add 호출")
  }
  minus = () =>{
    console.log("Minus 호출")
  }
  render(){
    return(
      <div>
      <h2>이 숫자는 : {this.state.count} 입니다!!</h2>
      <button onClick = {this.add}>Add</button>
      <button onClick = {this.minus}>Minus</button>
      </div>
    ) 
  }

}



export default App;