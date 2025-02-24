import React from 'react';
import Header from './components/Header';
import { useTheme } from "./ThemeProvider";
import styles from './themes.module.css';
import { Home } from './pages';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            ['stripe-buy-button']: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

function App() {
    const { theme, selectTheme } = useTheme();
    console.log(`theme: ${theme}`);

    const themeClassName = styles[theme]; //ai generated - GOOGLE MORE - what is going on here? why does this work?
    console.log(`themeClassName: ${themeClassName}`);

    const imageSource = 'https://live.staticflickr.com/5517/12213224246_a9d49f83d8_b.jpg';
    const responseMessage = (response: any) => {
        console.log('success')
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
            <div className={`App ${themeClassName}`}>
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                </style>
                <Header />
                <Home />
                <footer>
                    {/*TODO: create footer content */}
                </footer>
            </div>
        </>
    );
}

export default App;