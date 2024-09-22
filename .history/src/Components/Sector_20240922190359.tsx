import React from 'react'; 
import '../Styles/Sector.scss';


export default function Sector(props: Array) {

  return (
    <div className="sector">
      {Object.entries(props).map((product, index) => (
        <div className="product" key={index}>
          {product}
        </div>
      ))}
    </div>
  );
}