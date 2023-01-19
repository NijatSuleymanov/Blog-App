import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
  <div className="px-4 py-5 my-5 text-center">
  <h1 className="display-5 fw-bold text-warning">Centered hero</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4 text-warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident recusandae voluptate amet suscipit nemo adipisci accusantium odio vitae ipsa, officiis consequatur quis eaque accusamus tenetur nam magnam exercitationem iste eos!</p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
     <Link to="/blogs" > <button type="button" className="btn btn-warning btn-lg px-4 gap-3">Blogs</button></Link>
      <button type="button" className="btn btn-outline-primary btn-lg px-4">Button2</button>
    </div>
  </div>
</div>

  )
}

export default Home