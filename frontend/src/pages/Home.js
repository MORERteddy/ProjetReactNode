import React from 'react'
import {useState,useEffect} from "react"

function Home() {
    const[posts,setPosts]=useState([])
  
    const getData = () => {
      fetch("http://localhost:4000/posts")
        .then(res => res.json())
        .then(data => { console.log(data)
          setPosts(data)})}
          useEffect(() => {
            getData()
            console.log(posts)    
          }, [])
    return (
        <div>
                  {posts.map((post,index)=>{return <div key={index}>{post._id} {post.titre}</div>})}
        </div>
    )
}
export default Home