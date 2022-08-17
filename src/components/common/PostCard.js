import React from "react"
import { Link } from "gatsby"

const PostCard = ({ post }) => {
  return (
    <Link to={"/" + post.id} className="post-card" state={{ postId: post.id }}>
      <header className="post-card-header">
        {post.feature_image && (
          <div
            className="post-card-image"
            style={{
              backgroundImage: `url(${
                require("../../assets/" + post.feature_image).default
              })`,
            }}
          ></div>
        )}
        {post.featured && <span>Featured</span>}
        <h2 className="post-card-title">{post.title}</h2>
      </header>
      <section className="post-card-excerpt">{post.excerpt}</section>
    </Link>
  )
}
export default PostCard
