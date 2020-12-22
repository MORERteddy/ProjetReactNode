import React, { useState, useEffect, useContext } from "react";


export default function CreatePost(props) {
  const [post, setPost] = useState({
    title: "",
    body: "",
    image: "",
    author :"",
    comments:[],
  });

  const [image, setImage] = useState(null)
 
 

  useEffect(()=>{
  },[])


  const handleFormSubmit = event => {
    event.preventDefault();
    console.log(image)
    handleImageUpload();
  };

  const handleImageUpload =()=>{
    const uploadImage = firebaseStorage.ref(`images/${image.name}`).put(image);
    uploadImage.on("state_changed", snapshot =>{
    console.log("uploading ...")
    },error =>{
        console.log(error.message)
    }, ()=>{

        })
    
  }

  const handleInputChange = event => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileInput = event =>{
      if(event.target.files[0])
      {
          const image = event.target.files[0];
          setImage(image);

      }
  }

  return (
    <div className="form-container">
      <h2 className="register-form-title">Ajouter un Poste</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          required
          className="form-control input"
          onChange={handleInputChange}
          value={post.title}
          placeholder="Titre"
          autoComplete="off"
        />
        <textarea
          className="textarea"
          name="body"
          placeholder="Description ..."
          value={post.body}
          onChange={handleInputChange}
          cols="30"
          rows="10"
        />
        <input
          type="file"
          name="image"
          required
          className="form-control input"
          onChange={handleFileInput}
        />
        <div>
          <button className="btn btn-primary" type="submit">
            Valider
          </button>
        </div>
      </form>
    </div>
  );
}
