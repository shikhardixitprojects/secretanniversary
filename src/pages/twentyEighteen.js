import React from "react"
import Entry from "./entry"
import Post from "../components/common/Post"
import { postListData } from "../constants/postListData"
import { navigate } from "gatsby"
import { Button } from "@material-ui/core"

const TwentyEighteen = ({ location }) => {
  console.log(location.state.postId)
  return (
    <>
      <Entry location={location}>
        <Post postData={postListData[location.state.postId]} />
      </Entry>
    </>
  )
}
export default TwentyEighteen
