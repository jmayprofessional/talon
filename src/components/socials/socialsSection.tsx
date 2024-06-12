import { content } from "../../content/content";
import facebookLogo from '../../assets/facebookLogo.png';
import instaLogo from '../../assets/instaLogo.webp';

const SocialsSection = () => {
  return (
    <section
      className="socials-section"
      style={{
        backgroundImage: `url(${content.socialsSection.socialsSectionBackgroundImage})`,
        height: '12rem',
        marginBottom: '60px',
        textAlign: 'center', // Center the content
        padding: '20px',
        color: '#2D2C23',
      }}
    >
      <h2>{content.socialsSection.mainTitle}</h2>
      <div className="social-links">
        <a href={content.socialsSection.facebookLink} target="_blank" rel="noopener noreferrer">
          <img src={facebookLogo} alt="Facebook" style={{ width: '6rem', margin: '0 1rem' }} />
        </a>
        <a href={content.socialsSection.instaGramLink} target="_blank" rel="noopener noreferrer">
          <img src={instaLogo} alt="Instagram" style={{ width: '6rem', margin: '0 1rem' }} />
        </a>
      </div>
    </section>
  );
};

export default SocialsSection;
