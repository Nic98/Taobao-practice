import React from 'react';
import './Styles/App.scss';
import ProductCard from './Components/ProductCard.tsx';

const App: React.FC = () => {

  const products = [...Array(8)].map((_, index) => {

  return (
    <div className="App">
      
      <header className="App-header">
        <div className="header-text">淘宝 | 极有家 </div>
      </header>

      <div className="contents">
        <div className="sector">
          <ProductCard
            image={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
            title={"木邻有仓床北欧全实木床樱桃木日式双人高箱体收纳储物床小户型"}
            promotion={"立减912元 火爆热卖中"}
            price={1000}
          />

        </div>
      </div>
      
    </div>
  );
}

export default App;
