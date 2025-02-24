import { Contact, ContentBreak, Events, LeftPanel, SectionWrapper, Topper } from "../../components";
import { sections } from "../../utils/Constants";
import "./styles.module.css";

const Home = () => {
  return (
    <>
      {/* --- start of new component --- */}
      {/* description: this new component will look like a card laying on top of the blue background */}
      {/* it will be solid white, with a black drop shadow, like a piece of paper sitting on top of the blue background */}
      <Topper showNote={true} />
      {/* --- end of new component --- */}

      <ContentBreak />
      {/*<PaperTopper showNote={false} backgroundColor={"#0c2767"} height={500}/>*/}
      <SectionWrapper id={"about"}>
          <LeftPanel title={'About Us'} content={sections?.about?.text}/>
      </SectionWrapper>

      <SectionWrapper id={"events"}>
          <Events />
      </SectionWrapper>

      <SectionWrapper id={"membership"}>
          <LeftPanel title={'Membership'}/>
      </SectionWrapper>

      <SectionWrapper id={"contact"}>
          <Contact />
      </SectionWrapper>

      {/* TODO: create get involved component */}
      {/* TODO: create sponsors component*/}
    </>
  )
}

export default Home;