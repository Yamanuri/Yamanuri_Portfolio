import React from 'react';
import { Briefcase, Calendar, Database, Code2, Bug, GitPullRequest } from 'lucide-react';
import '../components/Experience.css';

const highlights = [
  {
    icon: <Database size={16} />,
    title: 'Built an interactive MySQL learning module for W3Schools',
    desc: "Designed and developed the module used to teach MySQL concepts, structuring lessons and interactive query examples for learners visiting W3Schools' MySQL pages."
  },
  {
    icon: <Code2 size={16} />,
    title: 'Rebuilt the Python Online Compiler',
    desc: 'Re-engineered the in-browser Python compiler using React, Vite, and CodeMirror for the editor experience, with Pyodide (WebAssembly) powering client-side Python execution — no server round-trip needed to run code.'
  },
  {
    icon: <Bug size={16} />,
    title: 'Debugged and tested across the full bug lifecycle',
    desc: 'Identified, reproduced, and fixed bugs end-to-end — from initial report through verification — to improve the reliability and performance of shipped features.'
  },
  {
    icon: <GitPullRequest size={16} />,
    title: 'Collaborated on code reviews and feature enhancements',
    desc: 'Worked with the team on data handling improvements and feature rollouts, participating in code reviews to keep the codebase consistent and maintainable.'
  }
];

const techUsed = ['JavaScript', 'Python', 'React', 'Vite', 'CodeMirror', 'Pyodide / WASM', 'MySQL'];

export default function Experience() {
  return (
    <div className="experience-container">
      <div className="header-section">
        <h1 className="main-title">
          Work <span className="gradient-text">Experience</span>
        </h1>
        <p className="header-description">
          Hands-on engineering work building learning tools used by developers
          worldwide, as part of my internship at White & Box Tech.
        </p>
      </div>

      <div className="experience-wrapper">
        <div className="exp-card">
          <div className="exp-card-top">
            <div className="exp-role-block">
              <div className="exp-icon-wrap">
                <Briefcase size={24} />
              </div>
              <div>
                <h3>Software Development Engineer Intern</h3>
                <h4>White & Box Tech Products and Services — ArukuX Group</h4>
              </div>
            </div>
            <div className="exp-duration">
              <Calendar size={16} /> Jan 2026 – June 2026
            </div>
          </div>

          <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '0.5rem' }}>
            Worked on developer-education products used on W3Schools, contributing to both
            a new MySQL learning module and a full rebuild of the Python Online Compiler,
            while also handling bug fixes and code quality work across the team's codebase.
          </p>

          <h5 className="exp-subsection-title">What I worked on</h5>
          <div className="exp-highlight-list">
            {highlights.map((h, idx) => (
              <div className="exp-highlight" key={idx}>
                <div className="exp-highlight-icon">{h.icon}</div>
                <div className="exp-highlight-text">
                  <h5>{h.title}</h5>
                  <p>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="exp-tech-tags">
            {techUsed.map((tech, idx) => (
              <span className="exp-tech-tag" key={idx}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
