import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PostList from "./postList"
import Login from "./login"
import TwentyEighteen from './twentyEighteen'
import TwentyNineteen from './twentyNineteen'
import TwentyTwenty from './twentyTwenty'
import TwentyTwentyOne from './twentyTwentyOne'
import TwentyTwentyTwo from './twentyTwentyTwo'
import "../App.css"
import "../styles/app.css";

const App = () => (
  <Layout>
    <Router>
      <PostList path="/postList" />
      <Login path="/login" />
      <TwentyEighteen path="/twentyEighteen" />
      <TwentyNineteen path="/twentyNineteen" />
      <TwentyTwenty path="/twentyTwenty" />
      <TwentyTwentyOne path="/twentyTwentyOne" />
      <TwentyTwentyTwo path="/twentyTwentyTwo" />
    </Router>
  </Layout>
)
export default App
