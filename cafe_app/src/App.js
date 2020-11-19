import React from "react"


function Coffee({coffee_menu}){
    
  return (
    <h1> 나는  {coffee_menu} 를 (을) 주문했어요 </h1>
  )

}

function App() {
  return ( 
    <div>
      <h1>안녕하세요 ? </h1>
      <h1>반갑습니다 !!</h1>
      <Coffee coffee_menu ="아메리카노"></Coffee>
      <Coffee coffee_menu ="콜드브루 진한맛"></Coffee>
      <Coffee coffee_menu ="에스프레소"></Coffee>
    </div>
    
  );
}

export default App;