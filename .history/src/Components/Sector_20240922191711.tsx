import React from 'react'; 
import '../Styles/Sector.scss';


export default function Sector(props: Array<any>) {

  return (
    <div className="sector">
      {Object.value(props).map((product, index) => (
        <div className="product">
          {product}
        </div>
      ))}
    </div>
  );
}