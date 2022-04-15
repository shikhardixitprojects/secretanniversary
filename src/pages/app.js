import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Entry from "./entry"
import Login from "./login"
import "../App.css"
const App = () => (
  <Layout>
    <Router>
      <Entry path="/entry" />
      <Login path="/login" />
    </Router>
  </Layout>
)
export default App