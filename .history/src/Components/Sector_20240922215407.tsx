import React from 'react'; 
import '../Styles/Sector.scss';


export default function Sector(props: any) {

  return (
    <div className='sector'>

      <div className="sector-header">
        <div className="sector-title">
          {Object.values(props.titles).map((title: any, index) => (
            <div key={index}>
              <div style={{ color: "#000", fontSize: 20, fontWeight: 700, letterSpacing: 0, whiteSpace: "nowrap" }}>{title.title}</div>
              <div style={{ color: "#50607a", fontSize: 14, fontWeight: 400, marginLeft: 8, whiteSpace: "nowrap" }}>{title.promotion}</div>
            </div>  
          )}
          // <div style={{ color: "#000", fontSize: 20, fontWeight: 700, letterSpacing: 0, whiteSpace: "nowrap" }}>{props.titles.title}</div>
          // <div style={{ color: "#50607a", fontSize: 14, fontWeight: 400, marginLeft: 8, whiteSpace: "nowrap" }}>{props.titles.title}</div>
        </div>
      </div>

      <div className="sector-products">
        {Object.values(props.products).map((product:any, index) => (
          <div className="product" key={index}>
            {product}
          </div>
        ))}
      </div>
    </div>

  );
}