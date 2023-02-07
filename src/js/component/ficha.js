import React from "react";
import {Link} from "react-router-dom";

export const ficha = () => {





return (
    <div className = "container-fluid " >
    <div>
      <img src="" alt=""width={800} height={600} />
      <div>
        <h1>name</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus non esse voluptas, enim totam obcaecati harum porro quae voluptates vel dolores, ab reprehenderit repellat facilis itaque necessitatibus aut est. Facere.</p>
      </div>
   </div>
   <table className="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">Birth yeard</th>
      <th scope="col">Gender</th>
      <th scope="col">Height</th>
      <th scope="col">Skin Color</th>
      <th scope="col">Eye Color</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    </tbody>
   </table>
</div >


);
};

root.render(<ficha/>)