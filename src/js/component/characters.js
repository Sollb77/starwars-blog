import {useEffect} from "react";





export const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [people, setPeople] = useState([]);

   let Characters = <div className = "card"
    style = "width: 18rem;" >
        <img src = "https://starwars-visualguide.com/assets/img/characters/1.jpg"
    className = "card-img-top"
    alt = "..." />
        <div className = "card-body" >
         <h5 className = "card-title" > name </h5> 
         < p className = "card-text" > Some quick example text to build on the card title and make up the bulk of the card 's content.</p> 
         </div> 
         <ul className = "list-group list-group-flush" >
        <li className = "list-group-item" > An item </li> 
        <li className = "list-group-item" > A second item </li> 
        <li className = "list-group-item" > A third item </li> 
        </ul >
         <div className = "card-body" >
        <a href = "#" className = "card-link" > Card link </a>
         <a href = "#" className = "card-link" > Another link </a>
          </div>
        
    </div>


    const getCharacters = async () => {
        try {
            const response = await
            fetch("https://www.swapi.tech/api/people/1")
                .then(response => response.json())
                .then(data => console.log(data))

        } catch (error) {

            console.log(error)
        }

        return {

            characters: characters,
            

        }


    }
}