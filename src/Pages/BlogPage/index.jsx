import React from 'react'

import { Layout } from '../../Components'

import { Link } from 'react-router-dom'

const BlogPage = () => {
  return (
    <Layout>
      <div className='flex justify-between'>
        <ul>
          <Link to='/blog/photos'> Photos </Link>
          <Link to='/blog/pouch'> Pouch </Link>
        </ul>
      </div>
    </Layout>
  )
}

export default BlogPage
