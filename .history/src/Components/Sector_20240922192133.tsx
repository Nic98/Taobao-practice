import React from 'react'; 
import '../Styles/Sector.scss';


export default function Sector(props: Array<any>) {

  return (
    <div className='sector'>
      <div className="sector-title"> 热销商品 </div>
      <div className="products-sector">
        {Object.values(props).map((product, index) => (
            <div className="product" key={index}>
              {product}
            </div>
          ))}
      </div>
    </div>

  );
}