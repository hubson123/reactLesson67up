import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import ProductPage from "../pages/ProductPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
const Page = () => {
  return (
    <>
      <Switch>
        {" "}
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/product" component={ProductPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
