import React from "react";

const Menu = ({ foodObject }) => {
  return (
    <li className={`food ${foodObject.soldOut ? 'sold-out' : ''}`}>
      <img src={foodObject.photoName} alt="corn"></img>
      <div>
        <h3>{foodObject.name}</h3>
        <p>{foodObject.ingredients}</p>
        <span>{foodObject.price}</span>
      </div>
    </li>
  );
};

// function Menu(props) {
//   return (
//     <div>
//       {/*OPTIONAL WAY OF WRITING JS IN REACT*/}
//       <img src={menuData[0].photoName} alt="corn"></img>
//       <h4>Raw Corn and Corn Salad</h4>
//     </div>
//   );
// }

export default Menu;
