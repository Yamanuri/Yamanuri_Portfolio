import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Code, Star, ArrowRight } from 'lucide-react';
import '../components/Projects.css';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Your actual GitHub projects
  const projects = [
    {
      id: 1,
      title: "MailSentry Intelligence Suite",
      description: "Designed and built solo as an enterprise-grade email intelligence suite (V2.0): a mail classifier that sorts incoming email by category/priority, a fetcher that pulls messages via API, and a real-time analytics dashboard so users can see inbox trends at a glance instead of digging through raw messages.",
      category: "web",
      technologies: ["Python", "JavaScript", "React", "Tailwind CSS", "ML"],
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=500&q=60",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri/MailSentry_project",
      date: "2024",
      featured: true,
      stats: { stars: 5, forks: 2 }
    },
    {
      id: 2,
      title: "Multimodal Bot Detection System",
      description: "Independently designed a multi-modal bot detection system for Twitter(X) that goes beyond text-only classifiers by fusing tweet text with image sentiment. Combining XLM-RoBERTa (multilingual text) with ResNet-50 (visual sentiment) and Random Forest/XGBoost on top, accuracy jumped from ~75% (single modality) to 93.7%.",
      category: "ml",
      technologies: ["Python", "TensorFlow", "RoBERTa", "ResNet50", "Hugging Face"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=60",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri",
      date: "2024",
      featured: true,
      stats: { stars: 3, forks: 1 }
    },
    {
      id: 3,
      title: "Serverless Execution Platform",
      description: "Built to solve a real developer pain point: running untrusted user-submitted code safely. Users deploy Python/JavaScript functions through a FastAPI backend, which executes each one inside an isolated Docker container — with an optional gVisor (runsc) sandbox layer for stronger kernel-level isolation on top of standard container security.",
      category: "systems",
      technologies: ["Python", "Docker", "gVisor", "Serverless"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=60",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri/PES2UG22CS674",
      date: "2024",
      featured: true,
      stats: { stars: 2, forks: 0 }
    },
    {
      id: 4,
      title: "Drone Operations Coordinator",
      description: "An AI agent that takes coordination work off a human operator's plate — it manages and schedules complex drone activities and syncs live status back to a Google Sheets tracker, so a non-technical team can monitor operations without touching code.",
      category: "ml",
      technologies: ["Python", "FastAPI", "Google Sheets API", "AI Agents"],
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=500&q=60",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri/Drone_AI_agent",
      date: "2024",
      featured: false,
      stats: { stars: 1, forks: 0 }
    },
    {
      id: 5,
      title: "Agro Management System",
      description: "A full-stack platform built end-to-end (frontend, backend, database schema) so farmers can manage crops, fields, loans, products, and orders in one place instead of scattered records. Implemented JWT-based auth with distinct user/admin roles, backed by RESTful APIs and a normalized MySQL schema.",
      category: "web",
      technologies: ["TypeScript", "Node.js", "React", "MySQL", "JWT"],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=500&q=60",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri/Agro-Management-System",
      date: "2024",
      featured: false,
      stats: { stars: 2, forks: 1 }
    },
    {
      id: 6,
      title: "Sentiment-Driven Trader Analysis",
      description: "A data science exploration into whether market sentiment actually predicts trader outcomes — pulled sentiment signals from financial news and social media, then analyzed correlation with trader performance and broader market trends using pandas-driven EDA.",
      category: "ml",
      technologies: ["Python", "Jupyter Notebook", "Pandas", "Sentiment Analysis"],
      image: "https://images.unsplash.com/photo-1611974719543-96024ef139c8?auto=format&fit=crop&w=500&q=60",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri/sentiment-driven-trader-analysis",
      date: "2024",
      featured: false,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 7,
      title: "Harbor",
      description: "Contributed to a framework for running agent evaluations and building/using reinforcement-learning environments, with Docker-based benchmarking so agent behavior can be tested consistently across isolated, reproducible environments.",
      category: "systems",
      technologies: ["Python", "Docker", "Reinforcement Learning"],
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=500&q=60",
      demoUrl: "#",
      githubUrl: "https://github.com/Yamanuri/harbor",
      date: "2024",
      featured: false,
      stats: { stars: 2, forks: 0 }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'python', label: 'Python Projects', count: projects.filter(p => p.category === 'python').length },
    { id: 'ml', label: 'Machine Learning', count: projects.filter(p => p.category === 'ml').length },
    { id: 'systems', label: 'System Programming', count: projects.filter(p => p.category === 'systems').length }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-overlay"></div>
        <div className="header-content">
          <div className="header-text">
            <h1 className="main-title">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="header-description">
              Showcasing my academic journey through innovative projects that demonstrate
              technical skills, creativity, and problem-solving abilities.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="content-wrapper">
        <div className="filter-section">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.featured && (
                <div className="featured-badge">
                  <Star className="star-icon" />
                  Featured
                </div>
              )}

              {project.status && (
                <div className="status-badge">
                  {project.status}
                </div>
              )}

              {/* Project Image */}
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="image-gradient"></div>

                {/* Overlay Links */}
                <div className={`image-overlay ${hoveredProject === project.id ? 'visible' : ''}`}>
                  <a href={project.demoUrl} className="overlay-btn demo-btn">
                    <ExternalLink className="btn-icon" />
                  </a>
                  <a href={project.githubUrl} className="overlay-btn github-btn">
                    <Github className="btn-icon" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div className="project-meta">
                  <div className="project-date">
                    <Calendar className="meta-icon" />
                    {project.date}
                  </div>
                  <div className="project-stats">
                    <div className="stat-item">
                      <Star className="meta-icon" />
                      {project.stats.stars}
                    </div>
                    <div className="stat-item">
                      <Code className="meta-icon" />
                      {project.stats.forks}
                    </div>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                {/* Technologies */}
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="view-project-btn"
                  style={{ textDecoration: 'none' }}
                >
                  View Project
                  <ArrowRight className="arrow-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more-container" style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '2rem' }}>
          <a href="https://github.com/Yamanuri?tab=repositories" target="_blank" rel="noopener noreferrer" className="view-project-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            View More on GitHub
            <ArrowRight className="arrow-icon" />
          </a>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number blue">{projects.length}</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number purple">
                {projects.reduce((sum, p) => sum + p.technologies.length, 0)}
              </div>
              <div className="stat-label">Technologies Used</div>
            </div>
            <div className="stat-card">
              <div className="stat-number green">
                {projects.reduce((sum, p) => sum + p.stats.stars, 0)}
              </div>
              <div className="stat-label">GitHub Stars</div>
            </div>
            <div className="stat-card">
              <div className="stat-number yellow">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="stat-label">Featured Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;