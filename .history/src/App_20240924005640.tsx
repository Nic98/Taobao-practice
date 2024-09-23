import React from 'react';
import { React, useState } from 'react';
import './Styles/App.scss';
import ProductCard from './Components/ProductCard.tsx';
import Sector from './Components/Sector.tsx';

const App: React.FC = () => {

  const repeat_products = [...Array(24)].fill(
    <ProductCard
      image={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
      title={"木邻有仓床北欧全实木床樱桃木日式双人高箱体收纳储物床小户型"}
      promotion={"立减912元 火爆热卖中"}
      price={1000}
    />
  );
  
  const sector_descs = [
    {
      title: "流动的家",
      promotion: "移动移动，变形变形，让小家越住越大的家居我都爱"
    },
    {
      title: "松弛感氛围",
      promotion: "周末与家人一起，松弛下来自有惊喜"
    }
  ];

  const sector_products = [...Array(2)].fill(repeat_products);

  const sectors = [
    {
      products: sector_products[0],
      desc: sector_descs[0],
    },
    {
      products: sector_products[1],
      desc: sector_descs[1],
    },
  ];

  const [sector_product, setProducts] = React.useState(sector_products);
  const [desc, setTitles] = React.useState(sector_products);
  const [sector, setSectors] = React.useState(sectors);

  
  return (
    <div className="App">
      
      <header className="App-header">
        <div className="header-text">淘宝 | 极有家</div>
      </header>

      <div className="contents">
        <Sector
          {...sector}
        />
      </div>
    </div>
  );
}

export default App;
