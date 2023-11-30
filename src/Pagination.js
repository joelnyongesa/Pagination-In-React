import React from 'react'

function Pagination({ postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];

    for (let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)
    }
  return (
    <div>
        <nav style={{'display': 'flex', 'flexDirection': 'row', 'listStyle': 'none'}}>
            {pageNumbers.map((number)=>(
                <li style={{'marginRight': '2px'}} key={number}>
                    <a href='#' onClick={()=> {paginate(number)}}>
                        {number}
                    </a>
                </li>
            ))}
        </nav>
    </div>
  )
}

export default Pagination