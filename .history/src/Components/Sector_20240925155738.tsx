import React, { useEffect } from 'react'; 
import '../Styles/Sector.scss';
import { Button } from 'antd';

interface SectorProps {
  products: React.ReactNode[];
  desc: {
    title: string;
    promotion: string;
  };
  collectImages: (urls: string[]) => void;
}



// export default function Sector(sectors: SectorProps[]) {


//   useEffect(() => {
//     const products = Object.values(sectors).map((sector: any) => sector.products).flat();
//     const imageUrls = products.map((product: any) => product.props.image);
//     console.log(imageUrls);
//     collectImages(imageUrls);
//   }, [products, collectImages]);


//   return (
//     <div className='sectors'>
//       {Object.values(sectors).map((sector: any, sectorIndex: number) => (
//         <div className="sector" key={sectorIndex}>
//           <div className="sector-title">
//               <div style={{ color: "#000", fontSize: 20, fontWeight: 700, letterSpacing: 0, whiteSpace: "nowrap" }}>
//                 {sector.desc.title}
//               </div>
//               <div style={{ color: "#50607a", fontSize: 14, fontWeight: 400, marginLeft: 8, whiteSpace: "nowrap" }}>
//                 {sector.desc.promotion}
//               </div>
//           </div>

//           <div className="sector-products">
//             {sector.products.map((product: any, productIndex: number) => (
//               <div className="product" key={productIndex}>
//                 {product}
//               </div>
//             ))}
//           </div>

//           <div>
//             <Button>展示更多 V</Button>
//           </div>

//         </div>
//       ))}
//     </div>
//   );
// }

const Sector: React.FC<SectorProps> = ({ products, desc, collectImages }) => {
  useEffect(() => {
    const imageUrls = products.map((product: any) => product.props.image);
    collectImages(Array.length(imageUrls);
  }, []);

  return (
    <div className="sector">
      <h2>{desc.title}</h2>
      <p>{desc.promotion}</p>
      <div className="products">
      {products.map((product, index) => (
        <div key={index}>{product}</div> // Use a unique identifier if available
      ))}
      </div>
    </div>
  );
};

export default Sector;