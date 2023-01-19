import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import BlogList from "../pages/BlogList";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import NotFoundPage from "../pages/NotFoundPage";
import BlogDetails from "../pages/BlogDetails";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/admin/Dashboard";
import AddBlog from "../pages/admin/update/AddBlog";
import EditBlog from "../pages/admin/update/EditBlog";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/blogs" exact component={BlogList}></Route>
          <Route path="/blogs/:id" component={BlogDetails}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" component={Dashboard}></Route>
          <Route path="/add" component={AddBlog}></Route>
          <Route path="/edit/:id" component={EditBlog}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default AppRouter;