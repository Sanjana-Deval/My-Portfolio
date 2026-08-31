
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import './ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams();

  const project = projectsData.find(
    p => p.id === parseInt(id)
  );

  if (!project) {
    return (
      <div className="project-not-found container">
        <h2>Project not found!</h2>
        <Link to="/projects" className="btn btn-primary">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="project-detail container">

      <Link to="/projects" className="back-link">
        ← Back to Projects
      </Link>

      <div className="project-detail-content">

        <div className="project-detail-header">
          <p className="project-label">PROJECT</p>

          <h1>{project.title}</h1>

          <p className="project-description">
            {project.longDesc}
          </p>
        </div>

        <div className="project-tech">
          <h2>Technologies Used</h2>

          <div className="detail-tags">
            {project.tech.map((tech, index) => (
              <span key={index} className="detail-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project-actions">

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Live Demo ↗
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub ↗
          </a>

        </div>

      </div>

    </section>
  );
}

export default ProjectDetail;

