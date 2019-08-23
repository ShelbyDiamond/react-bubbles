import React, { useState } from "react"
import axios from "axios"

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  // credentials are username and password used to login
  const [credentials, setCredentials] = useState({
    username: "Lambda School",
    password: "i<3Lambd4"
  })

  const handleChanger = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(
        response => (
          localStorage.setItem("token", response.data.payload),
          props.history.push("/protected")
        )
      )
      .catch(error => console.log("Failure", error))
    console.log(credentials)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={credentials.username}
          onChange={handleChanger}
          required
        />
        <input
          name="password"
          value={credentials.password}
          onChange={handleChanger}
          type="password"
          required
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Login
