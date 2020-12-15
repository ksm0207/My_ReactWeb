import React from "react";
import {HashRouter,Route} from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"
import Navigation from "./components/Navigation"
import Logo from "./components/Logo"
import Detail from "./routes/Detail"

function App(){
  return(
    <HashRouter>
      <Logo></Logo>
      <Navigation/>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie/:id" component = {Detail}></Route>
    </HashRouter>
  )
}

export default App;
