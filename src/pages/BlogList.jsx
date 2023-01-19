import React from 'react'
import { Row } from 'react-bootstrap'
import SingleBlog from '../components/SingleBlog'
import { connect } from 'react-redux'

const BlogList = props => {
  return (
<div className='m-5'>
        <Row>
              {props.pvalue.map((item,i)=>(
                <SingleBlog key={i} photo={item.img} title={item.title} desc={item.desc} id={item.id}/>
              ))}
            </Row>
</div>
  )
}

const mapStateToProps =(state)=>{
  return{pvalue:state}
}

export default connect(mapStateToProps)(BlogList)