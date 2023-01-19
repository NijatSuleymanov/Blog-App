import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
class BlogForm extends Component {
    constructor(props){
        super(props);
        this.state={
            formphoto: props.editblog ? props.editblog.img: "",
            formtitle:props.editblog ? props.editblog.title: "",
            formdesc:props.editblog ? props.editblog.desc: "",
        }
    }
    

    blogSubmit=e=>{
        e.preventDefault();
        if (!this.state.formphoto || !this.state.formtitle || !this.state.formdesc) {
            alert("please, fill out input")
        }else{
            this.props.onFormSubmit({
                img:this.state.formphoto,
                title:this.state.formtitle,
                desc:this.state.formdesc
            })
        }
    }
    
    
    
  render() {
    return (
     
      <div className="d-flex aligin-items-center justify-content-center mt-3">

         <Col md={6}>
               <Form onSubmit={this.blogSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Blog photo</Form.Label>
                <Form.Control type="text" placeholder="Add photo" onChange={e=>{
                    const formphoto = e.target.value;
                    this.setState(()=>({formphoto}))
                }}
                
                value={this.state.formphoto}
                
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Blog title</Form.Label>
                <Form.Control type="text" placeholder="Add title" onChange={e=>{
                    const formtitle = e.target.value;
                    this.setState(()=>({formtitle}))
                }}
                value={this.state.formtitle}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Blog description</Form.Label>
                <Form.Control type="text" placeholder="Add description" onChange={e=>{
                    const formdesc = e.target.value;
                    this.setState(()=>({formdesc}))
                }}
                value={this.state.formdesc}
                />
              </Form.Group>

              <Button className='mt-3' variant="primary" type="submit">
                Save  
              </Button>
            </Form>
         </Col>
      </div>

       
    
    )
  }
}

export default BlogForm