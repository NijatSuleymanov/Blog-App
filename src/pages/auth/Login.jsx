
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const user = {
    email:"snicat894@gmail.com",
    pass:"nicat2003"
}

const Login=props=> {
    const [alertColor,setAlertColor] = useState();
    const [alertText,setAlertText] = useState();
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const loginSubmit =()=>{
    
            if (!email || !pass) {
                
                setAlertColor('warning');
                setAlertText('fill input');
            }else{
                if (email === user.email && pass === user.pass) {
                    props.history.push('/admin')
                    setAlertColor('success');
                    setAlertText('successful');
                    
                }else{
                  setAlertColor('danger');
                  setAlertText('login is wrong!');
                    
                }
            }
    }
  return (
    <div className="d-flex aligin-items-center justify-content-center">
        <Col md={6}>
    <Form onSubmit={loginSubmit}>
    
        <h1 className='text-center my-5'>Login</h1>
       
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <p className={` text-center alert alert-${alertColor}`}>{alertText}</p>
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={e=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
          
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Col>
    </div>
  );
}

export default Login;