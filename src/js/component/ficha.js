import React from "react";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const Ficha = () => {

const params = useParams();
const [persona,setPersona]= useState({})
const personaje =async () => { 
	try {
      const response = await fetch("https://swapi.dev/api/people/"+params.theid);
      //console.log(response);
	  const data = await response.json();
	  console.log(data);

	  setPersona(data);
	}
   catch (error) {
	console.log(error);
   }
}
//personajes();
useEffect(() => {
  personaje();
},[])



        return (
         <> 
         <h1>Hola {persona.name}</h1>
         
         
         </>
        )


            //<
            //     div className = "container-fluid " >
            //     <
            //     div >
            //     <
            //     img src = ""
            //     alt = ""
            //     width = {
            //         800
            //     }
            //     height = {
            //         600
            //     }
            //     /> <
            //     div >
            //     <
            //     h1 > name < /h1> <
            //     p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus non esse voluptas, enim totam obcaecati harum porro quae voluptates vel dolores, ab reprehenderit repellat facilis itaque necessitatibus aut est.Facere. < /p> <
            //     /div> <
            //     /div> <
            //     table className = "table" >
            //     <
            //     thead >
            //     <
            //     tr >
            //     <
            //     th scope = "col" > name < /th> <
            //     th scope = "col" > Birth yeard < /th> <
            //     th scope = "col" > Gender < /th> <
            //     th scope = "col" > Height < /th> <
            //     th scope = "col" > Skin Color < /th> <
            //     th scope = "col" > Eye Color < /th> <
            //     /tr> <
            //     /thead> <
            //     tbody class = "table-group-divider" >
            //     <
            //     tr >
            //     <
            //     th scope = "row" > 1 < /th> <
            //     td > Mark < /td> <
            //     td > Otto < /td> <
            //     td > @mdo < /td> <
            //     td > Mark < /td> <
            //     td > Otto < /td> <
            //     td > @mdo < /td> <
            //     /tr> <
            //     /tbody> <
            //     /table> <
            //     /div >


            // );
}