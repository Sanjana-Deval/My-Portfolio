import './AboutSection.css';
import Photo from "../../assets/Photo.jpeg";

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src={Photo} alt='Sanjana.B' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Sanjana.B, a developer based in India building fast, accessible web experiences.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;