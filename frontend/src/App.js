
import './App.css';
import {useState,useEffect} from "react"

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
    <div className="App">
      {posts.map((post,index)=>{return <div key={index}>{post._id} {post.titre}</div>})}

    </div>
  );
}

export default App;
