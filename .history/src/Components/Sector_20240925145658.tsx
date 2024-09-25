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



const Sector: React.FC<SectorProps> = ({ products, desc, collectImages }) => {
  useEffect(() => {
    const imageUrls = products.map((product: any) => product.props.image);
    collectImages(imageUrls);
  }, [products, collectImages]);

  return (
    <div className="sector">
      <h2>{desc.title}</h2>
      <p>{desc.promotion}</p>
      <div className="products">
        {products.map((product, index) => (
          <div key={index}>{product}</div>
        ))}
      </div>
    </div>
  );
};

export default Sector;