import React from "react"
import Layout from "../components/layout"
import Login from "./login"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
export default function Home() {
  return (
    <Layout>
      <Login />
    </Layout>
  )
}