import React from 'react';
import './Styles/App.scss';
import ProductCard from './Components/ProductCard.tsx';

const App: React.FC = () => {

  const repeat_product = [...Array(8)].fill()

  })

  const [products, setProducts] = React.useState(repeat_product);

  return (
    <div className="App">
      
      <header className="App-header">
        <div className="header-text">淘宝 | 极有家 </div>
      </header>

      <div className="contents">
        <div className="sector">
          {products.map((product, index) => (
            { product }
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default App;
