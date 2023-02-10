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
          
         
         
         


            <div className = "container flex-column" >
                <div className="d-flex justify-content-around m-3 p-3 ">
                <img src = {"https://starwars-visualguide.com/assets/img/characters/"+params.theid+".jpg"} alt = "" width = {800}
                height = {600}className="m-2"/> 
                <div />
                  <div className="">
                <h1> {persona.name} </h1> 
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus non esse voluptas, enim totam obcaecati harum porro quae voluptates vel dolores, ab reprehenderit repellat facilis itaque necessitatibus aut est.Facere. </p>
                </div>
                </div>
                <div>
                 <table className = "table  ">
                  <thead>
                  <tr>
                  <th scope = "col" > name </th> 
                  <th scope = "col" > Birth yeard </th> 
                  <th scope = "col" > Gender </th> 
                  <th scope = "col" > Height </th> 
                  <th scope = "col" > Skin Color </th>
                   <th scope = "col" > Eye Color </th> 
                   </tr> 
                   </thead> 
                   < tbody class = "table-group-divider" >
                   <tr>
                   <th scope = "row" > {persona.name} </th> 
                   <td >{persona.birth_year} </td> 
                   <td > {persona.gender} </td> 
                   <td > {persona.height} </td> 
                   <td > {persona.skin_color} </td> 
                   <td > {persona.eye_color} </td> 
                   
                   </tr> 
                   </tbody> 
                   </table> 
                   </div>
                   
            
            </div>

         </>
        
             );
}