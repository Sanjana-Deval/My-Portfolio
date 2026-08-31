
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import Hero from '../components/Hero/Hero';
import AboutSection from '../components/AboutSection/AboutSection';
import './Home.css';

function Home() {
  const featured = projectsData.filter(p => p.featured);

  return (
    <div className="home-page">

      <Hero />

      <AboutSection />

      <section className="featured-section container" id="projects">

        <div className="featured-heading">
          <p className="section-label">MY WORK</p>
          <h2>Featured Projects</h2>
          <p className="section-description">
            A few projects I've built while learning and exploring
            modern web development.
          </p>
        </div>

        <div className="featured-grid">
          {featured.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </section>

    </div>
  );
}

export default Home;