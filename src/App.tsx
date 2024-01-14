import React from 'react';
import './App.css';

function App() {
    const imageSource = 'https://live.staticflickr.com/5517/12213224246_a9d49f83d8_b.jpg';
  return (
      <div className="App">
          <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
          </style>
          <div style={{height: '75px',
              alignContent: 'center',
          }}>
            <span style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "space-between",
                marginLeft: 30,
                marginRight: 30,
                textAlign: 'center',
                alignContent: 'center',
                paddingTop: 10,
            }}>
                <h2 style={{color: 'white', fontFamily: 'Roboto', alignSelf: 'center'}}>
                    ACM San Antonio
                </h2>
                <span style={{minWidth: '40%', maxWidth: '40%', display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
                    <a href={"#home"}>Home</a>
                    <a href={"#about"}>About</a>
                    <a href={"#projects"}>Projects</a>
                    <a href={"#get-involved"}>Get Involved</a>
                </span>

                <a className="App-login" href={"#login"}>Login</a>
            </span>
          </div>
          <section className={'App-home-section'}>

          </section>
      </div>
  );
}

export default App;
