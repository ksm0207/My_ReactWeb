import React from "react"


function Coffee({name}){
  return (
    <h2>나는 {name} 을 좋아합니다</h2>
  )
}



function App() {
  return ( 
    <div>
      <h1>안녕하세요 ? </h1>
      <h1>반갑습니다 !!</h1>
      <Coffee name ="콜드브루"></Coffee>
      <Coffee name ="녹차라떼"></Coffee>
      <Coffee name ="아메리카노"></Coffee>
      <Coffee name ="에스프레소"></Coffee>
    </div>
    
  );
}

export default App;