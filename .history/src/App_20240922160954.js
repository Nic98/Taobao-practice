import React from 'react';
import './Styles/App.scss';
import { Button } from 'antd';

const App: React.FC = () {
  return (
    <div className="App">
      
      <header className="App-header">
        <div className="header-text">淘宝 | 极有家 </div>
        <Button type="primary">Button</Button>
      </header>

      <div className="contents">
        <div className="sector">
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
