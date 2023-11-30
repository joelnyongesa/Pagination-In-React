import React from 'react'

function Posts({ posts, loading }) {
    if(loading){
        return <h2>Loading...</h2>
    }
  return (
    <div>
        <h1>Posts</h1>
        {posts.map((post)=>(
            <li key={post.id}>{post.title}</li>
        ))}
    </div>
  )
}

export default Posts