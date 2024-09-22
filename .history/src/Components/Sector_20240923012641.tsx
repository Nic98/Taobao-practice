import React from 'react'; 
import '../Styles/Sector.scss';


export default function Sector(props: any) {

  return (
    <div className='sector'>
      {console.log(props)}
      {Object.values(props.descs).map((desc: any, index) => (
        <div className="sector-header">
            <div className="sector-title">
                <div key={index}>
                  <div style={{ color: "#000", fontSize: 20, fontWeight: 700, letterSpacing: 0, whiteSpace: "nowrap" }}>{desc.title}</div>
                  <div style={{ color: "#50607a", fontSize: 14, fontWeight: 400, marginLeft: 8, whiteSpace: "nowrap" }}>{desc.promotion}</div>
                </div>
            </div>
        </div>
      ))}

      <div className="sector-products">
        {Object.values(props.sector_product).map((product:any, index) => (
          <div className="product" key={index}>
            {product.products}
          </div>
        ))}
      </div>
      
    </div>
  );
}