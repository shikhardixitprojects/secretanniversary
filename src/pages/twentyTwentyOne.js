import React from "react"
import Entry from "./entry"
import Post from "../components/common/Post";
import { postListData } from '../constants/postListData';

const TwentyTwentyOne = ({ location }) => {
  if(location.state == null || location.state.postId == null) return(
    <></>
  )
  return (
    <>
      <Entry location={location}>
        <Post postData={postListData[location.state.postId]}/>
      </Entry>
    </>
  )
}
export default TwentyTwentyOne;
