import React, { useState, useEffect } from "react"
import { NavLink, useParams,useHistory } from "react-router-dom"
import moment from "moment"


const PostDetails = () => {
	const [post, setPost] = useState([])
	const [noteMoyenne, setNoteMoyenne] = useState(0)
  const [comments, setComments] = useState([])
  const [postcomments, setPostComments] = useState([])
  const { id } = useParams()
  const history = useHistory();

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
    }, [])
    
    return (
		post && (
            <>
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
			</div>
        <hr />
<div className="post-body"> 
<ul>
          {postcomments.length>0?post.comments.map((comment, index) => {return <li key={index} >{comment}</li> }):<></>}
        </ul>
</div>
<NavLink to={`/EditComm/${id}`}>
                <h3 className="post-title font-medium">Mettre un commentaire</h3>
              </NavLink>

</>
))
	
        }
        export default PostDetails;