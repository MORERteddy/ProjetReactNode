import React, { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import moment from "moment"

const EditComm = () => {
	const [post, setPost] = useState([])
	const [noteMoyenne, setNoteMoyenne] = useState(0)
  const [comments, setComments] = useState([])
  const [postcomments, setPostComments] = useState([])
	const { id } = useParams()
	const getData = () => {
		fetch("http://localhost:4000/Post/" + id)
			.then(res => res.json())
			.then(data => {
				console.log(data)
        setPost(data)
        setPostComments(data.comments)
			})
	}
	useEffect(() => {
		getData()
		console.log(post)
	}, [])

	const handleFormSubmit = (event) => {
    console.log(post.noteMoyenne)
    post.comments.push(comments)
    let voteCount=post.voteCount +1
    let note = post.noteMoyenne * post.voteCount + Number(noteMoyenne)
    let  note2 = (note/voteCount).toFixed(0)
    console.log("note:"+note+" note2:"+note2+"votecount: "+ voteCount)
    const optionFetch = {
			method: "PATCH",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({

        comments : post.comments,
        noteMoyenne : note2,
        voteCount :voteCount
			}),
		}
		console.log(optionFetch.body)
		event.preventDefault()

    fetch("http://localhost:4000/Post/"+id, optionFetch)

  }

	return (
		post && (
			<div>
				<h1>Test</h1>
				<div className="post">
					<div className="post-image">
						<img src={post.image} alt="" />
						{console.log(post.image)}
					</div>
					<div className="post-content">
						<h5 className="post-details">
							<span className="posted-by font-semibold">
								{post.author}
							</span>
							<span className="date font-bold">
								{moment(post.created_at).local("fr").fromNow()}
							</span>
						</h5>
						<p className="post-body">{post.body}</p>
						<div className="count">Nombre de vote : {post.noteMoyenne}</div>
							<div className="count">Note :{post.noteMoyenne}</div>
						
					</div>
    
				</div>
<div className="post-body"> 
<ul>
          {postcomments.length>0?post.comments.map((comment, index) => {<li key={index} >{comment}</li> }):<></>}
        </ul>
</div>

				<hr />
				<form onSubmit={handleFormSubmit}>
					<input
						type="number"
						min="1"
						max="10"
						name="note"
						required
						className="form-control input"
						onChange={e => setNoteMoyenne(e.target.value)}
						value={noteMoyenne}
						placeholder="Note"
						autoComplete="off"
					/>
					<textarea
						className="textarea"
						name="comments"
						placeholder="Commentaire ..."
						onChange={e => setComments(e.target.value)}
						value={comments}
						cols="30"
						rows="10"
					/>
					<div>
						<button className="btn btn-primary" type="submit">
							Valider
						</button>
					</div>
				</form>
			</div>
		)
	)
}
export default EditComm
