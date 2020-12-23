import React, { useState, useEffect } from "react";
import { NavLink,useParams } from "react-router-dom";
import moment from "moment";

const EditComm =() => {
    const [post, setPost] = useState([]);
    const { id } = useParams();
    const getData = () => {
      fetch("http://localhost:4000/Post/"+id)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setPost(data);
        });
    }
    useEffect(() => {
        getData();
        console.log(post);
      }, []);

    return(
        <div>
            <h1>Test</h1>
        <div className="post">
          <div className="post-image">
            <img src={post.image} alt="" />
              { console.log(post.image)}
          </div>
          <div className="post-content">
            <h5 className="post-details">
              <span className="posted-by font-semibold">{post.author}</span>
              <span className="date font-bold">
                {moment(post.created_at).local("fr").fromNow()}
              </span>
            </h5>
            <p className="post-body">{post.body}</p>
            <div className="votes">
              <div className="count">{post.noteMoyenne}</div>
            </div>
          </div>
        </div>
        <hr className="line" />
      </div>
    )
}
export default EditComm;