
import Home from './pages/Home'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar'
import Register from './pages/Register';
<<<<<<< HEAD

import {useState,useEffect} from "react"

function App() {
=======
import CreatePost from "./pages/CreatePost"
import Search from "./pages/Search"


function App() {

>>>>>>> 24a4f14fbe0918f31649a77915bbd440edc4dd81
  return (

    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact component ={Home}/>
        <Route path="/register" exact component ={Register}/>
        <Route path="/createPost" exact component ={CreatePost}/>
        <Route path="/search" exact component ={Search}/>
      </Switch>
<<<<<<< HEAD
    </BrowserRouter>

=======

    </BrowserRouter>
    
>>>>>>> 24a4f14fbe0918f31649a77915bbd440edc4dd81
  );
}

export default App;
