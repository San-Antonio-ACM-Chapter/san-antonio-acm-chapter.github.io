interface SocialLinkProps {
  link: string,
  src: string,
  title: string,
}

const SocialLink = ({ link, src, title}: SocialLinkProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
        <img src={src} alt={`${title} logo`} />
    </a>
  )
}

export default SocialLink;