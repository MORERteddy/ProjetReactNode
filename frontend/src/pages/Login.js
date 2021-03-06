import React, { useState } from "react"

const Login = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	})
	const handleInputChange = event => {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		})
	}

	const handleFormSubmit = event => {

		event.preventDefault()
        fetch("http://localhost:4000/users/"+user.email)
        
	}
	return (
		<div className="form-container">
			<h2 className="register-form-title">Connexion</h2>
			<form onSubmit={handleFormSubmit}>
				<input
					type="email"
					name="email"
					required
					className="form-control"
					onChange={handleInputChange}
					value={user.email}
					placeholder="email"
					autoComplete="off"
				/>

				<input
					type="password"
					name="password"
					required
					className="form-control"
					onChange={handleInputChange}
					value={user.password}
					placeholder="Mot de passe"
					autoComplete="off"
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

export default Login
