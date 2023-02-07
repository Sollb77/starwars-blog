import React from "react";
import {
    Link
} from "react-router-dom";

export const Navbar = () => {
    return ( 
	<nav className = "navbar bg-light " >
     <div className = "container-fluid d-flex justify-content-start " >
        <a className = "navbar-brand"
        href = "#" />
        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Star_wars_1977_us.svg/2560px-Star_wars_1977_us.svg.png"
        width={120} 
		height={80}
		/>
		<div className="btn-group">
		<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
		  Favorites
		</button>
		<ul className="dropdown-menu">
		  <li><a className="dropdown-item" href="#">Favorites</a></li>
		  <li><a className="dropdown-item" href="#">Another action</a></li>
		  <li><a className="dropdown-item" href="#">Something else here</a></li>
		 
		  <li><a className="dropdown-item" href="#">Separated link</a></li>
		</ul>
	  </div>
	  </div>
    </nav>



    );
};