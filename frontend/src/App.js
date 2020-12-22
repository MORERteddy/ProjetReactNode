<<<<<<< HEAD
import Home from './pages/Home'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar'
import Register from './pages/Register';
=======

import './App.css';
import {useState,useEffect} from "react"
>>>>>>> ea5858732fb1435433d1f2f562e881f6006f7b23

function App() {
  const[posts,setPosts]=useState([])
  
  const getData = () => {
    fetch("http://localhost:4000/Post")
      .then(res => res.json())
      .then(data => { console.log(data)
        setPosts(data)})}
        useEffect(() => {
          getData()
          console.log(posts)    
        }, [])
  return (
<<<<<<< HEAD
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact component ={Home}/>
        <Route path="/register" exact component ={Register}/>
      </Switch>
    </BrowserRouter>
=======
    <div className="App">
      {posts.map((post,index)=>{return <div key={index}>{post._id} {post.titre}</div>})}

    </div>
>>>>>>> ea5858732fb1435433d1f2f562e881f6006f7b23
  );
}

export default App;
