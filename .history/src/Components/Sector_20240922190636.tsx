import React from 'react'; 
import '../Styles/Sector.scss';


export default function Sector(props: Array<any>) {

  return (
    <div className="sector">
      {Object.entries(props).map((product, index) => (
          {product}
      ))}
    </div>
  );
}