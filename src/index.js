import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloComponant from './componant/HelloComponant';

const root = ReactDOM.createRoot(document.getElementById('root'));

// การสร้างcomponant
// function HelloComponant(){
//     return <h1>hello componant</h1>
// }

// การสร้าง Class Componant
// class HelloComponant extends React.Component{
//     render(){
//         return <h1>สวัสดี componant แรก</h1>
//     }
// }

root.render(<App/>);

reportWebVitals();
