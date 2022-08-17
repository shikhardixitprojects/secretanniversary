import React from "react"
import Entry from "./entry"
import Post from "../components/common/Post"
import { postListData } from "../constants/postListData"
import GenericYearPageContainer from "../pages/GenericYearPageContainer"

const TwentyTwentyTwo = ({ location }) => {
  if (location.state == null || location.state.postId == null) return <></>
  return (
    <GenericYearPageContainer>
      <Entry location={location}>
        <Post postData={postListData[location.state.postId]} />
      </Entry>
    </GenericYearPageContainer>
  )
}
export default TwentyTwentyTwo
