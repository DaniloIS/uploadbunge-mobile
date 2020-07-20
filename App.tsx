import React from 'react';
import { StatusBar } from 'react-native';


import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar  
        backgroundColor = "#b3e6ff"  
        barStyle = "dark-content"   
        hidden = {true}    
        translucent = {true}  
      />

      <Routes />
    </>
  );
}

