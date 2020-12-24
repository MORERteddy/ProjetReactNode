import React, { useState, useEffect, useContext, Component } from "react"
import axios, { post } from "axios"
import {useHistory } from "react-router-dom"

export default function CreatePost(props) {
	const [post, setPost] = useState({
		title: "",
		body: "",
		image: "",
		author: "",
		comments: [],
	})
	const history = useHistory();
	const [title, setTitle] = useState("")
	const [body, setBody] = useState("")

	const [image, setImage] = useState("")
	const [selectedFile, setSelectedFile] = useState()

	useEffect(() => {}, [])

	const handleFormSubmit = event => {
		const optionFetch = {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				titre: title,
				body: body,
				image: image,
				author: "test",
				created_at: Date.now(),
			}),
		}
		console.log(optionFetch.body)
		event.preventDefault()

		fetch("http://localhost:4000/post", optionFetch)
		history.push('/')
	}


	const handleFileInput = (event) => {
		const files = event.target.files
		const reader = new FileReader()
		let lien =""
		reader.readAsDataURL(files[0])
		 reader.onload = e => {		
		setImage(e.target.result)
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
					onChange={e => setTitle(e.target.value)}
					value={title}
					placeholder="Titre"
					autoComplete="off"
				/>
				<textarea
					className="textarea"
					name="body"
					placeholder="Description ..."
					onChange={e => setBody(e.target.value)}
					value={body}
					cols="30"
					rows="10"
				/>
				<input
					type="file"
					name="image"
					placeholder="Url de l'image"
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
	)
}
