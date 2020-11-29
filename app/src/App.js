import React from "react"
import PropTypes from "prop-types";


class App extends React.Component{
  state = {
    count : 0,
  };

  add = () =>{
    this.setState(current =>({count: current.count +1}));
    console.log("Add 호출")
  }
  minus = () =>{
    this.setState(current=>({count: current.count -1}))
    console.log("Minus 호출")
  }
  
  constructor(props){
    super(props);
    console.log("<0> constructor() 생성자 함수 입니다 컴포넌트가 생성되고 render 되기전에 가장 먼저 호출됩니다 Js에서 Class를 만들때 호출합니다")
  }
  
  componentWillUnmount(){
    console.log("다른 페이지로 이동하면 컴포넌트는 없어집니다")
  }
  componentDidUpdate(){
    console.log("<3> componentDidUpdate() Add or Minus 으로 클릭된 버튼으로 업데이트 하였습니다")
  }
  componentDidMount(){
    console.log("<2> componentDidMount() 렌더링된 구성요소가 잘 작동합니다")
  }
  render(){
    console.log("<1> render() : 나는 렌더링중 입니다")
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