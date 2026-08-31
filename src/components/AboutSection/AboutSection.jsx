
import './AboutSection.css';
import Photo from '../../assets/Photo.jpeg';

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper container">

        <div className="about-image">
          <img src={Photo} alt="Sanjana B." />
        </div>

        <div className="about-copy">
          <p className="about-label">GET TO KNOW ME</p>

          <h1>About Me</h1>

          <p className="about-description">
            Hi! I'm <strong>Sanjana B.</strong>, a B.Tech Computer Science
            Engineering student and aspiring software developer based in India.
            I enjoy building clean, fast and accessible web experiences.
          </p>

          <div className="about-cards">

            <div className="about-card">
              <span className="about-icon">🎓</span>
              <div>
                <h3>Education</h3>
                <p>B.Tech CSE</p>
              </div>
            </div>

            <div className="about-card">
              <span className="about-icon">💻</span>
              <div>
                <h3>Currently Learning</h3>
                <p>React • JavaScript • C • Python</p>
              </div>
            </div>

            <div className="about-card">
              <span className="about-icon">🚀</span>
              <div>
                <h3>My Goal</h3>
                <p>Aspiring Software Developer</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
