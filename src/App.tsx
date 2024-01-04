import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationHeader from './assets/Components/organisms/NavigationHeader/NavigationHeader';

function App() {
  return (
      <div className="App">
          <NavigationHeader/>
          <div className={"marque-plate"}>
              <div className={"marque-container"}/>

          </div>
          <div className={"hover-container"}>
              <h1>Software Engineering ACM San Antonio</h1>
              <p>under construction</p>
          </div>
          <section>
              <div>
                  <h2>What is ACM?</h2>
                  <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
              </div>
          </section>
          <section>
              <div>
                  <h2>Sponsors</h2>
                  <p>
                      lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
              </div>
          </section>
      </div>
  );
}

export default App;
