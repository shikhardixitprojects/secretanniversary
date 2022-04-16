import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PostList from "./postList"
import Login from "./login"
import TwentyEighteen from './twentyEighteen'
import "../App.css"
import "../styles/app.css";

const App = () => (
  <Layout>
    <Router>
      <PostList path="/postList" />
      <Login path="/login" />
      <TwentyEighteen path="/twentyEighteen" />
    </Router>
  </Layout>
)
export default App
