import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import BaseLayout from './components/BaseLayout';
import HomePage from './pages/home-page/HomePage'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import CountryPage from './pages/country-page/CountryPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {BaseLayout.getNavigationBar()}
    <BrowserRouter basename='The-Concept-Travelling/'>
      <Routes>
        <Route path='/country/:countryName' element={<CountryPage/>}></Route>
        <Route path='/country/' element={<CountryPage/>}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/' element={<Navigate replace to={"/home"} />}></Route>
        <Route path='/*' element={<Navigate replace to={"/home"} />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
