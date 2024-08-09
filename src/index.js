import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Layout from './paged/layout';
import Home from './paged/home';
import Registration from './paged/registration';
import Aboutas from './paged/aboutas';
import Comp from './paged/components';
import Props from './paged/props';
import Button from './paged/event';
import Condition from './paged/condition';
import Map from './paged/map';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
export default function App() {
  const a="super";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="registration" element={<Registration />} />
          <Route path="aboutas" element={<Aboutas/>}/>
          <Route path="components" element={<Comp/>}></Route>
          <Route path="props" element={<Props brand= {a}/>}></Route>
          <Route path="event" element={<Button/>}></Route>
          <Route path="condition" element={<Condition R='0' />}></Route>
          <Route path="map" element={<Map />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);