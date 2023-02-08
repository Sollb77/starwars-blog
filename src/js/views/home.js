import React from "react";

import "../../styles/home.css";
import {Characters} from "../component/characters";

//import {ficha} from "../component/ficha";
import {Navbar} from "./component/navbar";
import {Footer} from "./component/footer";

export const Home = () => {

    return(
    <>
      <Navbar/>
      <Characters/>
    </>
)
};

