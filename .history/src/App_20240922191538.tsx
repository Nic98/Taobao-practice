import React from 'react';
import './Styles/App.scss';
import ProductCard from './Components/ProductCard.tsx';
import Sector from './Components/Sector.tsx';

const App: React.FC = () => {

  const repeat_product = [...Array(8)].fill(
    <ProductCard
    image={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
    title={"木邻有仓床北欧全实木床樱桃木日式双人高箱体收纳储物床小户型"}
    promotion={"立减912元 火爆热卖中"}
    price={1000}
  />);

  const [products, setProducts] = React.useState(repeat_product);

  return (
    <div className="App">
      
      <header className="App-header">
        <div className="header-text">淘宝 | 极有家 </div>
      </header>

      <div className="contents">
        <Sector
          {...products.map((product, _) => (product))}
        />
        <Sector
          {...products.map((product, _) => (product))}
        />
      </div>
    </div>
  );
}

export default App;
