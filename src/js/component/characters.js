import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";
//import { getCharacters } from "../helpers/getCharacters";




export const Characters = () => {

const [characters, setCharacters] = useState([]);

const personajes =async () => { 
	try {
      const response = await fetch("https://swapi.dev/api/people");
	  const data = await response.json();
	  console.log(data.results);

	  setCharacters(data.results);
	}
   catch (error) {
	console.log(error);
   }
}
//personajes();
useEffect(() => {
  personajes();
},[])


return (
 <>
<h1>Personajes</h1>

<div className="card d-flex flex-row overflow-scroll" >
   {characters.map((item,id) => ( 
  <div key={id}>
  <img src={"https://starwars-visualguide.com/assets/img/characters/"+(id+1)+".jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">
		Genero: {item.gender}
		Color de pelo:{item.hair_color}
	</p>
	<Link  to={"/ficha/"+(id+1)}>
	<button > Mas detalles</button>

      </Link>
    {/* <a href="" className="btn btn-primary">Mas detalles</a> */}
  </div>
  </div>
   ))}

</div>
 
 
 
 
 
 </>



)


    // const [characters, setCharacters] = useState([]);

	// const setCharactersAsync = async () => {
	// 	const characterList = await getCharacters();
	// 	setCharacters(characterList?.results);
	// }

	// useEffect(() => {setCharactersAsync()},[])

    //     return (
    //         <div className="container mt-2">
	// 		<h2>Characters</h2>
	// 		<div className="card-container mt-4 p-2 d-flex justify-content-between">
	// 			{characters.map( ( {name, hair_color, eye_color, gender}, i ) => (
	// 				<div key= {i} className="card me-5">
	// 					<img src={`https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`} className="card-img-top" alt="Loading from API" />
	// 					<div className="card-body p-3">
	// 						<h4 className="card-title">{name}</h4>
	// 						<p className="card-text"> Gender: {gender}</p>
	// 						<p className="card-text"> Hair Color: {hair_color}</p>
	// 						<p className="card-text"> Eye-Color: {eye_color}</p>
	// 					</div>
	// 					<div className="card-footer d-flex justify-content-between">
	// 						<Link to={`/infoCharacters/${i+1}`}>
	// 							<button className="btn btn-outline-primary">Learn More!</button>
	// 						</Link>
	// 						<button className="like btn btn-outline-warning"><i className="far fa-heart"></i></button>
	// 					</div>
	// 				</div>
	// 			))}
	// 		</div>
	// 	</div>



    //     )


    }
