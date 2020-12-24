import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
//import axios from 'axios';



function Home() {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    fetch("http://localhost:4000/")
      .then(res => res.json())
      .then(data => {
      //  console.log(data);
        setPosts(data);
      });
  };

  useEffect(() => {
    getData();
    //console.log(posts);
  }, []);

  //console.log(post._v)

  // const voteUp = postId => {
  //   const myPost = firebase.collection("posts").doc(postId);
  //   myPost.get().then(doc => {
  //     if (doc.exists) {
  //       const previousCount = doc.data().vote_count;
  //       myPost.update({ vote_count: previousCount + 1 });
  //     }
  //   });
  // };

  const renderPosts = () => {
    return (
      posts &&
      posts.map((post, index) => (
        <div key={index}>
          <div className="post">
            <div className="post-image">
              <img src={post.image} alt="" />
            </div>
            <div className="post-content">
              <NavLink to={`/PostDetails/${post._id}`}>
                <h3 className="post-title font-medium">{post.titre}</h3>
              </NavLink>
              <h5 className="post-details">
                <span className="posted-by font-semibold">{post.author}</span>
                <span className="date font-bold">
                  {moment(post.created_at).local("fr").fromNow()}
                </span>
              </h5>
              <p className="post-body">{post.body}</p>
              <div className="votes">
                <div className="up">
                &#9733;&#9733;&#9733;  
                </div>
                <div className="count"></div>
              </div>
            </div>
          </div>
          <hr className="line" />
        </div>
      ))
    );
  };

  return (
    <div className="main">
      <div className="main-content">
        <div className="posts">{renderPosts()}</div>
      </div>
    </div>
  );
}
export default Home;

