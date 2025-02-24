import ContentBreak from "../contentBreak";

interface SectionProps {
  id: string
  children: React.ReactNode
}

const SectionWrapper: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <>
      <section id={id}>
        {children}
      </section>
      <ContentBreak />
    </>
  )
};

export default SectionWrapper;
