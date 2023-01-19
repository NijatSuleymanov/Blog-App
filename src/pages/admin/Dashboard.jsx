import React from 'react'
import Table from 'react-bootstrap/Table';
import TableItem from '../../components/TableItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Dashboard = props => {
  return (
<>
<h1 className='text-center my-5'>Admin Dashboard</h1>
<Link to="/add"><Button variant="success">Add</Button></Link>
    <Table striped bordered hover variant="secondary" className='my-2'>
      <thead >
        <tr>
          <th>#</th>
          <th>Blog photo</th>
          <th>Blog title</th>
          <th>Blog description</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
      {props.pvalue.map((item, i) => (
      <TableItem 
      photo={item.img}
      title={item.title}
      desc={item.desc}
      id={item.id}
      count={i}
      key={i}
      />
      ))}
      </tbody>
    </Table>
</>

  );
}



const mapStateToProps = (state) => {
    return { pvalue: state };
  };
  
  export default connect(mapStateToProps)(Dashboard);