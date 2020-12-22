import React from "react"
import { withRouter, NavLink, Link } from "react-router-dom"

function Navbar() {
	return (
		<div className="header">
			<img
				src="data:image/jpeg;base64,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"
				alt=""
				className="logo"
			/>
			<div className="main-nav">
				<Link to="/" className="link">
					Accueil
				</Link>
				<Link to="/search" className="link">
					Recherche
				</Link>
				<Link to="/CreatePost" className="link">
					Creer un Article
				</Link>
				<Link to="/login" className="link">
					Connexion
				</Link>
				<Link to="/register" className="link">
					Inscription
				</Link>
			</div>
		</div>
	)
}

export default Navbar
