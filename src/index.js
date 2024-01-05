import ReactDOM from "react-dom/client";
import React from "react";

import NavScrollExample from './appBar';
import style from './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Cardcontainer from "./CardContainer";
import FormProductData from "./FormProductData";
// tag / root
const root = ReactDOM.createRoot(document.getElementById('root'));



// React fragments sugar form
root.render(
        <>
                <NavScrollExample />
                <h1 className="text-center mt-3">Welcome to Skolar store 💪</h1>
                <hr />
                <Cardcontainer/>
                <FormProductData/>
                
        </>

)
