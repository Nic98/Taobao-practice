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
  
  const title = {
    title: "流动的家",
    promotion: "移动移动，变形变形，让小家越住越大的家居我都爱"
  }

  const repeat_title = [...Array(2)].fill(title);

  const [products, setProducts] = React.useState(repeat_product);
  const [titles, setTitles] = React.useState(title);


  let props = {
    products: products,
    titles: titles
  }

  return (
    <div className="App">
      
      <header className="App-header">
        <div className="header-text">淘宝 | 极有家 </div>
      </header>

      <div className="contents">
        <Sector
          {...props}
          key={1}
        />
        <Sector
          {...props}
          key={2}
        />
      </div>
    </div>
  );
}

export default App;
