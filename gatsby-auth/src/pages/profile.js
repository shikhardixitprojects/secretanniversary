import React from "react"
import { getUser } from "../services/auth"
const Profile = () => (
  <>
    <h1></h1>
    <ul>
      <li>Welcome {getUser().name}</li>
    </ul>
  </>
)
export default Profile