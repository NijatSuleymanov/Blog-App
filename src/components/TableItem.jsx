
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TableItem = ({photo,title,desc,id,count}) => {
  return (
    <tr >
    <td>{count+1}</td>
    <td><img width={130} src={photo} alt="" /></td>
    <td>{title}</td>
    <td>{desc}</td>
    <td><Link to={`/edit/${id}`}><Button variant="warning">Edit</Button></Link></td>
  </tr >
  )
}

export default TableItem