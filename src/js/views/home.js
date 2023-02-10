import React from "react";

import "../../styles/home.css";
import {Characters} from "../component/characters";
import {Planetas} from "../component/planetas";
//import {Ficha} from "../component/ficha";
//import {Navbar} from "../component/navbar";
//import {Footer} from "../component/footer";

export const Home = () => {

    return(
    <>
      {/* <Navbar/>  */}
      <Characters/>
      <Planetas/>
    </>
)
};

