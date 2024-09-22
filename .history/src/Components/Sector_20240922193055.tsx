import React from 'react'; 
import '../Styles/Sector.scss';


export default function Sector(props: Array<any>) {

  return (
    <div className='sector'>
      <div className="sector-header">
        <div className="sector-title">
        <div>流动的家</div>
        <div>移动移动，变形变形，让小家越住越大的家居我都爱</div>
        </div>

      </div>
      <div className="sector-products">
        {Object.values(props).map((product, index) => (
          <div className="product" key={index}>
            {product}
          </div>
        ))}
      </div>
    </div>

  );
}