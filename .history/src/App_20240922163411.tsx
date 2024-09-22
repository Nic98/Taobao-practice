import React from 'react';
import './Styles/App.scss';
import Card from './Components/Card';

const App: React.FC = () => {
  return (
    <div className="App">
      
      <header className="App-header">
        <div className="header-text">淘宝 | 极有家 </div>
      </header>

      <div className="contents">
        <div className="sector">
          <Card>
            key={index}
            image: {"s"};
            title: {"木邻有仓床北欧全实木床樱桃木日式双人高箱体收纳储物床小户型"};
            price: {1000};
          </Card>
        </div>
      </div>
      
    </div>
  );
}

export default App;
