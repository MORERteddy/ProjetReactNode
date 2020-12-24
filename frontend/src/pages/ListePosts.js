import { NavLink } from "react-router-dom"
import moment from "moment"
import React, { useState, useEffect } from "react";

function ListePosts() {
  const [lposts, setLposts] = useState([])

  const getData = () => {
    fetch("http://localhost:4000/Posts")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLposts(data);
      });
  };


  useEffect(() => {
    getData();
    console.log(lposts);
  }, []);

  const renderPosts = () => {
    return (
      lposts &&
      lposts.map((post, index) => (
        <div key={index}>
          <div className="post">
            <div className="post-image">
              <img src={post.image} alt="" />
                { console.log(post.image)}
            </div>
            <div className="post-content">
              <NavLink to={`/EditComm/${post._id}`}>
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
export default ListePosts;

