import React, {useState, useEffect} from 'react'
import Posts from './Posts'
import Pagination from './Pagination'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(r=>r.json())
    .then(data => {
      setPosts(data);
      setLoading(false)
    })
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  function paginate(pageNumber){
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <Posts loading={loading} posts={currentPosts}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  )
}

export default App