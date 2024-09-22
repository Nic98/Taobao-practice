import React from 'react'; 
import '../Styles/Sector.scss';


export default function Sector(props: SectorProps) {
  return (
    <div className='sector'>
      {props.sectors.map((sector, sectorIndex) => (
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
            {sector.sector_products.products.map((product) => (
              <div className="product" key={product.id}>
                {product.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}