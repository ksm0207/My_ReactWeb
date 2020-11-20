import React from "react"


function Coffee({name,image,number}){
  console.log(name,image)
  return (
    
    <div>
      <h2>나는 {number}번 {name}  을 좋아합니다</h2>
      <img src={image}/>
    </div>
    
  )
}

const coffee_menu = [
  {
    name:   "아메리카노",
    image : "https://ohfun.net/contents/article/images/2016/0311/1457678114312320.jpg",
    num   : 1
  },
  {
    name: "에스프레소",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqUd4xi2mC_0Ohx-5n2TY17igDIRdnzZxjA&usqp=CAU",
    num   : 2
  },
  {
    name : "카라멜 마끼야또",
    image : "https://image.aladin.co.kr/product/8883/90/cover500/s762635127_1.jpg",
    num   : 3
  },
  {
    name : "콜드브루",
    image : "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1w9j/image/hLwSeRelJ-42_XVplEZ10xSTifc.png",
    num   : 4
  },
  {
    name : "자몽주스",
    image : "https://lh3.googleusercontent.com/proxy/MziUQAKEIjUzWesajE8apgcwRnnhspcntoybB5qCMQKBYWZs35a_a47bP0rSJmh7naowgJYwTdfEnHsIctryLWBEFKWLY_7v-pBAdGbyI96jdpYJg_MeVfNbrSd-7KJ1QzEnAM2tVlpYMC9q0Ok14Lm_EcYl9O_u9Qle6-XbG-9JTKtzU9IUoNfxACx6Tx5Og_Rhj1GUC523rDF2R0Mwhr_kOyv4WTPeHnnSCmhJdWD5xJr2iBaV9Mud77-585bWZz4jmLf6MycES-9DO0rK34euWqo-i8eB45iFD7kTeXkIU_a4Ixbrs6nV7ewa6yw8CnhDuZozYnujoBAhZprz_bnX8hOWZE4",
    num   : 5
  }
]

function App() {
  return (
    <div>
      {coffee_menu.map(list =>(
        <Coffee name = {list.name} image = {list.image} number = {list.num} ></Coffee>
      ))}
    </div>
   
  );
}

export default App;