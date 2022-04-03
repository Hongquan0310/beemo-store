 import React from "react";
 import {BrowserRouter as Router} from 'react-router-dom'
 import {DataProvider} from './GlobalState'
 import Header from './components/headers/Header'
 import Footer from './components/footer/footer'
 import MainPages from './components/mainpages/Pages'
 function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header/>
          <MainPages/>
        </div>
        <Footer/>
      </Router>
    </DataProvider>
  );
}

export default App;
