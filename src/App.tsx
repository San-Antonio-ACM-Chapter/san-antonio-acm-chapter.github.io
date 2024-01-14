import React from 'react';
import './App.css';
import {GoogleLogin} from '@react-oauth/google';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function App() {
    const imageSource = 'https://live.staticflickr.com/5517/12213224246_a9d49f83d8_b.jpg';
    const responseMessage = (response: any) => {
        console.log(response);
    }

    const errorMessage = () => {
        console.log('error');
    }

    const [showGoogleLogin, setShowGoogleLogin] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    return (
        <>
            <div className="App">
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
                </style>
                <div style={{
                    height: '75px',
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
                <span style={{
                    minWidth: '40%',
                    maxWidth: '40%',
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-between'
                }}>
                    <a href={"#home"}>Home</a>
                    <a href={"#about"}>About</a>
                    <a href={"#projects"}>Projects</a>
                    <a href={"#get-involved"}>Get Involved</a>
                </span>

                <a className="App-login" href={"#login"} onClick={handleShow}>Login</a>
            </span>
                </div>
                <section className={'App-home-section'}>

                </section>

            </div>
            {/* TODO: this is not rendering properly */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Login with Google
                    <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant={"primary"} onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default App;
