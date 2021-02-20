import React from "react";
import {Route} from 'react-router-dom';
const Footer = () => {
  return <div>Footer
    <Route path="/" exact render={(props)=>{
      return(
        <p>Jesteś na stronie domowej.</p>
      )
    }} />
       <Route path="/:page" exact render={(props)=>{
      return(
        <p>Jesteś na stronie {props.match.params.page}</p>
      )
    }} />
          <Route path="/:page/:idProduct" exact render={(props)=>{
      return(
        <p>Jesteś na stronie {props.match.params.idProduct}</p>
      )
    }} />
  </div>;
};

export default Footer;
