import React, {useState} from 'react'

function Register() {
    const [user, setUser] = useState({
        name : "",
        email: "",
        password:""
    })

    const handleInputChange = event =>{
        setUser({
            ...user,
            [event.target.name] : event.target.value,
        })
    }

    const handleFormSubmit = event =>{
        const optionFetch = {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                password: user.password
            })}

        event.preventDefault();
        fetch("http://localhost:4000/users/create", optionFetch)
    }

    console.log(user.name, user.email, user.password)

    return (
<div className="form-container">
            <h2 className="register-form-title">Inscription</h2>
                <form onSubmit={handleFormSubmit}>
                    <input type="text" name="name"
                    required className="form-control"
                    onChange={handleInputChange}
                    value={user.name}
                    placeholder="Nom & Prénom"
                    autoComplete="off"
                    />

                    <input type="email" name="email"
                    required className="form-control"
                    onChange={handleInputChange}
                    value={user.email}
                    placeholder="email"
                    autoComplete="off"
                    />

                    <input type="password" name="password"
                    required className="form-control"
                    onChange={handleInputChange}
                    value={user.password}
                    placeholder="Mot de passe"
                    autoComplete="off"
                    />
                    <div>
                        <button className="btn btn-primary"
                        type="submit">Valider</button>
                    </div>
                </form>
        </div>
    )
}

export default Register
