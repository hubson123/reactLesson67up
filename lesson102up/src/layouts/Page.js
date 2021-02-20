import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import ProductListPage from "../pages/ProductListPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";

const Page = () => {
  return (
    <>
      <Switch>
        {" "}
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/products" component={ProductListPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
