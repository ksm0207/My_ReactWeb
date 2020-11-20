import React from "react"
import PropTypes from "prop-types";

const coffee_menu = [
  {
    name:   "아메리카노",
    image : "https://ohfun.net/contents/article/images/2016/0311/1457678114312320.jpg",
    id   : 1,
    rating : 5.0
  },
  {
    name: "에스프레소",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqUd4xi2mC_0Ohx-5n2TY17igDIRdnzZxjA&usqp=CAU",
    id   : 2,
    rating : 4.3
  },
  {
    name : "카라멜 마끼야또",
    image : "https://image.aladin.co.kr/product/8883/90/cover500/s762635127_1.jpg",
    id   : 3,
    rating : 3.2
  },
  {
    name : "콜드브루",
    image : "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1w9j/image/hLwSeRelJ-42_XVplEZ10xSTifc.png",
    id   : 4,
    rating : 5.0
  },
  {
    name : "자몽주스",
    image : "https://lh3.googleusercontent.com/proxy/MziUQAKEIjUzWesajE8apgcwRnnhspcntoybB5qCMQKBYWZs35a_a47bP0rSJmh7naowgJYwTdfEnHsIctryLWBEFKWLY_7v-pBAdGbyI96jdpYJg_MeVfNbrSd-7KJ1QzEnAM2tVlpYMC9q0Ok14Lm_EcYl9O_u9Qle6-XbG-9JTKtzU9IUoNfxACx6Tx5Og_Rhj1GUC523rDF2R0Mwhr_kOyv4WTPeHnnSCmhJdWD5xJr2iBaV9Mud77-585bWZz4jmLf6MycES-9DO0rK34euWqo-i8eB45iFD7kTeXkIU_a4Ixbrs6nV7ewa6yw8CnhDuZozYnujoBAhZprz_bnX8hOWZE4",
    id   : 5,
    rating : 4.5
  }
]

function Coffee({name,picture, rating}){
  return (
    <div>
      <h2>나는 {name}  을 좋아합니다</h2>
      <h3>{rating}/5.0</h3>
      <img src={picture} alt={name}/>
    </div>
  )
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {coffee_menu.map(list =>(
        <Coffee name = {list.name} picture = {list.image} key = {list.id} rating = {list.rating} ></Coffee>
      ))}
    </div>
  );
}

export default App;