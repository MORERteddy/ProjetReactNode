
import Home from './pages/Home'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar'
import Register from './pages/Register';
import {useState,useEffect} from "react"
import CreatePost from "./pages/CreatePost"
import Search from "./pages/Search"
import ListePosts from "./pages/ListePosts"
import EditComm from "./pages/EditComm"


function App() {


  return (

    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact component ={Home}/>
        <Route path="/register" exact component ={Register}/>
        <Route path="/createPost" exact component ={CreatePost}/>
        <Route path="/search" exact component ={Search}/>
        <Route path="/ListePosts" exact component ={ListePosts}/>
        <Route path="/EditComm/:id" exact  component ={EditComm}/>
      </Switch>


    </BrowserRouter>
    

  );
}

export default App;
