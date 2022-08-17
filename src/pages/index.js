import React from "react"
import Layout from "../components/layout"
import Login from "./login"
import { navigate } from "gatsby"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../App.css"
export default function Home() {
  return (
    <Layout>
      <Login />
      <button
        type="submit"
        className="btn btn-outline-info"
        style={{
          fontSize: 15,
          marginTop: 20,
        }}
        onClick={() => navigate(`twelveDaysSeptember`)}
      >
        12 Days of September 👀
      </button>
    </Layout>
  )
}
