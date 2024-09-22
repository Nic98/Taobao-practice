import React from 'react'; 
import '../Styles/Sector.scss';


export default function Sector(props: any) {

  console.log(Object.entries(props)[0][1]);

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