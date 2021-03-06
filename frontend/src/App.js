import Home from './pages/Home'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar'
import Register from './pages/Register';
// import {useState,useEffect} from "react"
import CreatePost from "./pages/CreatePost"
import Search from "./pages/Search"
import ListePosts from "./pages/ListePosts"
import EditComm from "./pages/EditComm"
import PostDetails from "./pages/PostDetails"
import Login from "./pages/Login"

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
        <Route path="/PostDetails/:id" exact  component ={PostDetails}/>
        <Route path="/Login/" exact  component ={Login}/>

      </Switch>

    </BrowserRouter>
    
  );
}


export default App;
