import React from 'react'; 
import '../Styles/Sector.scss';


export default function Sector(sectors: any) {
  
  sectors.map((sector: any, sectorIndex: number) => {
    console.log(sector);
  });

  return (
    <div className='sector'>
      {Object.values(sectors).map((sector: any, sectorIndex: number) => (
        <div className="sector-header" key={sectorIndex}>
          <div className="sector-title">
            <div>
              <div style={{ color: "#000", fontSize: 20, fontWeight: 700, letterSpacing: 0, whiteSpace: "nowrap" }}>
                {sector.desc.title}
              </div>
              <div style={{ color: "#50607a", fontSize: 14, fontWeight: 400, marginLeft: 8, whiteSpace: "nowrap" }}>
                {sector.desc.promotion}
              </div>
            </div>
          </div>

          <div className="sector-products">
            {sector.sector_products.map((product: any, productIndex: number) => (
              <div className="product" key={productIndex}>
                {product}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}