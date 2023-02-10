import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";
//import { getCharacters } from "../helpers/getCharacters";
//include your index.scss file into the bundle
import "../../styles/index.css";



export const Characters = () => {

const [characters, setCharacters] = useState([]);

const personajes =async () => { 
	try {
      const response = await fetch("https://swapi.dev/api/planets");
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
<h1 className="p-3 m-3 text-danger Liberation Sans">Charaters</h1>

<div className="card d-flex flex-row overflow-scroll p-3 m-3" >
   {characters.map((item,id) => ( 
  <div key={id} className= "p-2 m-2 border border-dark "id="tarjeta"  >
  <img src={"https://starwars-visualguide.com/assets/img/characters/"+(id+1)+".jpg"} className="card-img-top " alt="..."id="imagen"/>
  <div className="card-body">
    <h5 className="card-title text-decoration-underline">{item.name}</h5>
    <p className="card-text">
		<strong>Genero:</strong> <span className="emphasized">{item.gender} </span><br />
		<strong>Color de pelo:</strong> <span className="emphasized">{item.hair_color}</span> <br />
        <strong>Peso:</strong> <span className="emphasized">{item.mass}</span> <br />

	</p>
	<div className="d-flex justify-content-between">
	 <Link  to={"/ficha/"+(id+1)}>
	 <button className="btn btn-outline-primary p-2 mb-2 rounded"> Mas detalles</button>

      </Link>
     <button className="p-2 mb-3 text-warning border border-warning push-right rounded"> <i className="fas fa-heart"></i></button>
    </div>
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
