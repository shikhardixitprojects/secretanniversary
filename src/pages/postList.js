import React from "react"

import PostCard from "../components/common/PostCard"
import Entry from "../pages/entry"
import { posts } from "../constants/postCardListContent"

const PostList = ({ location }) => {
  return (
    <div className="twelveDaysBackground">
      <Entry location={location}>
        <div className="container">
          <section className="post-feed">
            {posts.map(({ node }) => (
              <PostCard key={node.id} post={node} />
            ))}
          </section>
        </div>
      </Entry>
    </div>
  )
}

export default PostList
