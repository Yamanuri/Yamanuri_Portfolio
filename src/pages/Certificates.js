import React from 'react';
import { Award, ExternalLink, Trophy, Users, Sparkles } from 'lucide-react';
import '../components/Certificates.css';

const certificates = [
  {
    title: 'AWS Cloud Serverless',
    issuer: 'Verified on Credly',
    desc: 'Verified badge covering core serverless architecture concepts on AWS, including event-driven design and managed compute.',
    url: 'https://www.credly.com/badges/b7395600-d5c0-40fd-8748-314265758569'
  },
  {
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    desc: 'Certified for intermediate-level data structures and algorithmic problem solving across multiple challenge sets.',
    url: 'https://www.hackerrank.com/certificates/54b16f23d75a'
  },
  {
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
    desc: 'Certified for foundational SQL skills including queries, joins, and relational data handling.',
    url: 'https://www.hackerrank.com/certificates/00eb3e7306a7'
  },
  {
    title: 'Data Analytics Simulation',
    issuer: 'Deloitte (Forage)',
    desc: 'Completed a job-simulation program covering forensic technology and data analytics workflows used by Deloitte teams.',
    url: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_699985d909815524df7c4076_1771779086178_completion_certificate.pdf'
  }
];

const leadership = [
  {
    icon: <Trophy size={22} />,
    title: 'Captain — School & College Cricket Teams',
    desc: 'Led school and college cricket teams, developing leadership, teamwork, and discipline both on and off the field.'
  },
  {
    icon: <Users size={22} />,
    title: 'Head of Content Domain — Kannada Koota PESU',
    desc: 'Drove content strategy for cultural initiatives, strengthening communication and organizational skills within the university community.'
  }
];

export default function Certificates() {
  return (
    <div className="certificates-container">
      <div className="header-section">
        <h1 className="main-title">
          Certificates & <span className="gradient-text">Achievements</span>
        </h1>
        <p className="header-description">
          Credentials and recognitions earned alongside my coursework and internship
          work, reflecting continuous learning across cloud, data, and problem solving.
        </p>
      </div>

      <div className="certificates-content-wrapper">
        <div className="cert-grid">
          {certificates.map((cert, idx) => (
            <a
              key={idx}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              <div className="cert-icon-wrap">
                <Award size={26} />
              </div>
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-desc">{cert.desc}</p>
              <div className="cert-link-row">
                View credential <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>

        <h2 className="cert-section-title">
          <Sparkles size={22} style={{ verticalAlign: 'middle', marginRight: '0.5rem', color: '#ec4899' }} />
          Leadership & Extracurriculars
        </h2>
        <div className="leadership-grid">
          {leadership.map((item, idx) => (
            <div className="leadership-card" key={idx}>
              <div className="leadership-icon-wrap">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
