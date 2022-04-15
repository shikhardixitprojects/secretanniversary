import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "./profile"
import Login from "./login"
import "../App.css"
const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/profile" component={Profile} />
      <Login path="/login" />
    </Router>
  </Layout>
)
export default App