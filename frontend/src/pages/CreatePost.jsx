import React, { useState, useEffect, useContext } from "react"

export default function CreatePost(props) {
	const [post, setPost] = useState({
		title: "",
		body: "",
		image: "",
		author: "",
		comments: [],
	})
	const [title, setTitle] = useState("")
	const [body, setBody] = useState("")

	const [image, setImage] = useState(null)

	useEffect(() => {}, [])

	const handleFormSubmit = event => {
		const optionFetch = {
            method: "POST",
            mode: "cors",

			body: {
                titre: title,
				body: body,
				image:
					"https://www.google.com/search?q=image+test&client=firefox-b-d&tbm=isch&source=iu&ictx=1&fir=qAVxLck55vb35M%252CCTeR5qJuDjA1jM%252C_&vet=1&usg=AI4_-kT5J6DIHIEVBCX081gEtlFElULUtg&sa=X&ved=2ahUKEwiHgIWrrd_tAhUky4UKHU2LBysQ9QF6BAgIEAE#imgrc=qAVxLck55vb35M",
				author: "test",
			},
		}
		console.log(optionFetch.body)
		event.preventDefault()
		fetch("http://localhost:4000/post", optionFetch)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				console.log(event)
				return data
			})
	}

	const handleInputChange = event => {
		setPost({
			...post,
			[event.target.name]: event.target.value,
		})
	}

	const handleFileInput = event => {
		if (event.target.files[0]) {
			const image = event.target.files[0]
			setImage(image)
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
