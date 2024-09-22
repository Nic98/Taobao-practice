import React from 'react'; 
import '../Styles/Sector.scss';


export default function Sector(props: any) {

  console.log(props);

  return (
    <div className="sector">
      {[...props].map((product: any, index: number) => ({
        product
      })}
    </div>
  );
}