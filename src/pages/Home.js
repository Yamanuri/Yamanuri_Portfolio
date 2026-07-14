// src/components/Home.js
import React from 'react';
import '../components/Home.css';
//import profileImg from '../assets/Photo_01.jpg'; // adjust the path if needed

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="home-main">
        <div className="home-left">
          <span className="home-badge">Software Development Engineer Intern</span>
          <h1>Hello, I'm <span>Yamanuri</span></h1>
          <p>
            I'm a <strong>B.Tech CSE graduate from PES University</strong> and an <strong>SDE Intern at White & Box Tech Products & Services</strong>. 
            I specialize in building full-stack applications, advanced Machine Learning systems, and scalable serverless platforms.
          </p>

          <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            Say Hello!
          </button>
          <div className="home-stats">
            <div><h2>Intern</h2><p>SDE at White & Box</p></div>
            <div><h2>15+</h2><p>Projects Completed</p></div>
            <div><h2>2026</h2><p>Graduation Year</p></div>
          </div>
        </div>
        <div className="home-right">
          <img src="/assets/Photo_01.png?v=3" alt="Yamanuri Shrishail Nad" />
          <div className="home-photo-tag">PES University &bull; Bengaluru</div>
        </div>
      </div>


      <div className="skills-section">
        <h3 className="skills-title">Skills & Technologies</h3>
        <div className="skills-marquee">
          <div className="skills-track">
            {/* First Set */}
            <div className="skill"><i className="devicon-python-plain colored"></i><p>Python</p></div>
            <div className="skill"><i className="devicon-typescript-plain colored"></i><p>TypeScript</p></div>
            <div className="skill"><i className="devicon-javascript-plain colored"></i><p>JavaScript</p></div>
            <div className="skill"><i className="devicon-react-original colored"></i><p>React</p></div>
            <div className="skill"><i className="devicon-nodejs-plain colored"></i><p>Node.js</p></div>
            <div className="skill"><i className="devicon-docker-plain colored"></i><p>Docker</p></div>
            <div className="skill"><i className="devicon-github-original"></i><p>gVisor</p></div>
            <div className="skill"><i className="devicon-amazonwebservices-original colored"></i><p>Serverless</p></div>
            <div className="skill"><i className="devicon-tensorflow-original colored"></i><p>ML (ResNet/RoBERTa)</p></div>
            <div className="skill"><i className="devicon-mysql-plain colored"></i><p>SQL/NoSQL</p></div>
            <div className="skill"><i className="devicon-cplusplus-plain colored"></i><p>C++/DSA</p></div>
            <div className="skill"><i className="devicon-git-plain colored"></i><p>Git</p></div>
            <div className="skill"><i className="devicon-linux-plain colored"></i><p>Linux</p></div>

            {/* Duplicate for seamless scrolling */}
            <div className="skill"><i className="devicon-python-plain colored"></i><p>Python</p></div>
            <div className="skill"><i className="devicon-typescript-plain colored"></i><p>TypeScript</p></div>
            <div className="skill"><i className="devicon-javascript-plain colored"></i><p>JavaScript</p></div>
            <div className="skill"><i className="devicon-react-original colored"></i><p>React</p></div>
            <div className="skill"><i className="devicon-nodejs-plain colored"></i><p>Node.js</p></div>
            <div className="skill"><i className="devicon-docker-plain colored"></i><p>Docker</p></div>
            <div className="skill"><i className="devicon-github-original"></i><p>gVisor</p></div>
            <div className="skill"><i className="devicon-amazonwebservices-original colored"></i><p>Serverless</p></div>
            <div className="skill"><i className="devicon-tensorflow-original colored"></i><p>ML (ResNet/RoBERTa)</p></div>
            <div className="skill"><i className="devicon-mysql-plain colored"></i><p>SQL/NoSQL</p></div>
            <div className="skill"><i className="devicon-cplusplus-plain colored"></i><p>C++/DSA</p></div>
            <div className="skill"><i className="devicon-git-plain colored"></i><p>Git</p></div>
            <div className="skill"><i className="devicon-linux-plain colored"></i><p>Linux</p></div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Home;
