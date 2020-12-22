<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

function Home() {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    fetch("http://localhost:4000/posts")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPosts(data);
      });
  };


  useEffect(() => {
    getData();
    console.log(posts);
  }, []);

  const renderPosts = () => {
    return (
      posts &&
      posts.map((post, index) => (
        <div key={index}>
          <div className="post">
            <div className="post-image">
              <img src={post.image} alt="" />
                { console.log(post.image)}
            </div>
            <div className="post-content">
              <NavLink to={`/post/${post._id}`}>
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
                  &#8593;
                </div>
                <div className="down">
                  &#8595;
                </div>
                <div className="count">{post.__v}</div>
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
=======
import React from "react"
import { useState, useEffect } from "react"

function Home() {
	const [posts, setPosts] = useState([])

	const getData = () => {
		fetch("http://localhost:4000/posts")
			.then(res => res.json())
			.then(data => {
                setPosts(data)

			})
	}
	useEffect(() => {
		getData()
		console.log(posts)
	}, [])
	return (
		<div>
			{posts.map((post, index) => {
				return (
					<div key={index}>
						{post._id} {post.titre}
					</div>
				)
			})}
		</div>
	)
}
export default Home
>>>>>>> 24a4f14fbe0918f31649a77915bbd440edc4dd81
