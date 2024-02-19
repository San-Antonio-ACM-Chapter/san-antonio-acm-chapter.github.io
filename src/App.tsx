import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import PaperTopper from "./components/paperTopper/paperTopper";
import ContentBreak from "./components/contentBreak/contentBreak";
import AboutUsSection from "./components/aboutUs/aboutUs";
import EventsSection from "./components/Events/eventsSection";
import ContactSection from "./components/contact/contactSection";
import {useTheme} from "./ThemeProvider";
import styles from './themes.module.css';

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


                <Header/>
                {/* --- start of new component --- */}
                {/* description: this new component will look like a card laying on top of the blue background */}
                {/* it will be solid white, with a black drop shadow, like a piece of paper sitting on top of the blue background */}
                <PaperTopper showNote={true}/>

                {/* --- end of new component --- */}
                <ContentBreak/>
                {/*<PaperTopper showNote={false} backgroundColor={"#0c2767"} height={500}/>*/}
                <section id={"about"}>
                    <AboutUsSection />
                </section>
                <ContentBreak/>
                <section id={"events"}>
                    <EventsSection />
                </section>
                <ContentBreak/>
                <section id={"contact"}>
                    <ContactSection/>
                </section>
                <ContentBreak/>
                <section id={"getInvolved"}>
                    {/* TODO: create get involved component */}
                </section>
                <ContentBreak/>
                <section id={"sponsors"}>
                    {/* TODO: create sponsors component*/}
                </section>
                <ContentBreak/>
                <footer>
                    {/*TODO: create footer content */}
                </footer>
            </div>
        </>
    );
}

export default App;