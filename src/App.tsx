import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import MetricsPage from './pages/Metrics';
import IndexPage from './pages/Index';
import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css';
import './Styles/globals.scss';
import Footer from './components/Footer';
function App() {
  return (
    <AppProvider>
      <Header/>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="/metrics" element={<MetricsPage />} />
      </Routes>
      <Footer/>
    </AppProvider>
  );
}

export default App;
