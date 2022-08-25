import React from 'react';
import logo from './logo.svg';
import './App1.css';
import ShoeCard1 from './Frontend/molecules/ShoeCard';
import DenseAppBar from './Frontend/components/Navbar';
import ShoesCard from './Frontend/components/Card';

function App() {
  return (
    <div >
      <DenseAppBar></DenseAppBar>
      <ShoesCard></ShoesCard>
     <ShoeCard1></ShoeCard1>

    </div>
  );
}

export default App;
