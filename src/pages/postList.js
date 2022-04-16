import React from "react"

import PostCard from "../components/common/PostCard"
import Entry from '../pages/entry';
import { posts } from "../constants/postCardListContent"

const PostList = ({location}) => {
  console.log(posts);
  return (
    <>
      <Entry location={location}>
        <div className="container">
          <section className="post-feed">
            {posts.map(({ node }) => (
              // The tag below includes the markup for each post - components/common/PostCard.js
              <PostCard key={node.id} post={node} />
            ))}
          </section>
        </div>
      </Entry>
    </>
  )
}

export default PostList
