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
            image: {image};
            title: {title};
            price: {1000};
          </Card>
        </div>
      </div>
      
    </div>
  );
}

export default App;
