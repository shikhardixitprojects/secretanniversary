import React from "react"
import { navigate } from "gatsby"

const Post = ({ postData }) => {
  return (
    <div className="container">
      <button
        type="button"
        className="button"
        onClick={() => {
          navigate("/postList")
        }}
      >
        Go Back To Post List
      </button>
      <div style={{ paddingBottom: "10px", paddingTop: "10px" }}>
        <h1
          style={{ fontFamily: "Verdana", fontWeight: 600, color: "goldenrod" }}
        >
          Our {postData.year} Memories
        </h1>
      </div>
      <section className="post-feed" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {!!postData.blogPosts &&
          postData.blogPosts.map(blogPost => {
            console.log(blogPost)
            return (
              <div>
                {!!blogPost.date && (
                  <h2 style={{ fontFamily: "fantasy", fontWeight: 800 }}>
                    {blogPost.date}
                  </h2>
                )}
                {!!blogPost.description && <h3>{blogPost.description}</h3>}
                {!!blogPost.image && (
                  <img
                    style={{
                      width: "auto",
                      height: "300px",
                      borderRadius: "10px",
                    }}
                    src={
                      require("../../assets/" + blogPost.image.fileName).default
                    }
                    title={blogPost.image.title}
                    alt={blogPost.image.altText}
                  />
                )}
              </div>
            )
          })}
      </section>
    </div>
  )
}
export default Post
