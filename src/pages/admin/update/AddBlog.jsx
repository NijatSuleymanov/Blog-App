import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { connect } from 'react-redux'
import { addBlogToDatabase } from '../../../actions/blogAction'

const AddBlog = props => {
  return (
    <div>
        <h1 className='text-center my-5'>Add Blog</h1>
        <BlogForm onFormSubmit={fd=>{
            props.dispatch(addBlogToDatabase(fd));
            props.history.push('/admin')
        }}/>
    </div>
  )
}

export default connect()(AddBlog)