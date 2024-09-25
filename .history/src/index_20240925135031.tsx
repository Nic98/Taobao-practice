import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App.tsx';
import DownloadBtn from './Components/DownLoadBtn.tsx'

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
    {/* a button to download all images (->zip) */}
    <DownloadBtn/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
