import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import BubblePage from "./components/BubblePage"
import Login from "./components/Login"
import PrivateRoute from "./utilities/PrivateRoute"
import "./styles.scss"

function App() {
  const [colorList, setColorList] = useState([])
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={props => <Login {...props} />} />
        <PrivateRoute path="/protected" component={BubblePage} />
      </div>
    </Router>
  )
}

export default App
