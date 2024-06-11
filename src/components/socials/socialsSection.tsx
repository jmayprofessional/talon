import { content } from "../../content/content";

const SocialsSection = () => {

  return (
    <section className="socials-section" style={{ backgroundImage: `url(${content.socialsSection.socialsSectionBackgroundImage})`, height: '500px', marginBottom: '60px' }}>
      <h2>{content.socialsSection.mainTitle}</h2>
      <div className="social-links">
        <a href={content.socialsSection.facebookLink} target="_blank" rel="noopener noreferrer">
          <img src={content.socialsSection.faceBookLogo} alt="Facebook" />
        </a>
        <a href={content.socialsSection.instaGramLink} target="_blank" rel="noopener noreferrer">
          <img src={content.socialsSection.instagramLogo} alt="Instagram" />
        </a>
      </div>
    </section>
  );
};

export default SocialsSection;
