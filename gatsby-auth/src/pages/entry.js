import React, { useEffect } from "react"
import { isLoggedIn } from "../services/auth"
import { navigate } from "gatsby"
const Entry = ({ location }) => {
  useEffect(() => {
    console.log(isLoggedIn())
    if (!isLoggedIn() && location.pathname !== `/login`) {
      navigate("/")
      return null
    }
  }, [])
  return (
    <div>
      <div>
        <h1>Your Freshman Year</h1>
      </div>
      <div>
        <h1>4/21/18</h1>
        <h1>Junior Prom</h1>
      </div>
      <div>
        <h1>5/03/18</h1>
        <h1>Spring Weekend</h1>
      </div>
      <div>
        <h1>5/18</h1>
        <h1>The Walk</h1>
      </div>
      <div>
        <h1>5/18</h1>
        <h1>4/21/18</h1>
      </div>
      <div>
        <h1>Your Sophomore Year</h1>
      </div>
      <div>
        <h1>Your Junior/Senior Year</h1>
      </div>
      <div>
        <h1>Med School First Year</h1>
      </div>
      <div>
        <h1>Med School Second Year</h1>
      </div>
    </div>
  )
}
export default Entry
