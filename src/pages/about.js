import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './about.module.css';

export default function About() {
  const { siteConfig } = useDocusaurusContext();

  const projects = [
    {
      title: 'Engineering Notebook',
      description: 'A comprehensive, open-source technical notebook and personal blog built with Docusaurus, React, and MDX. Features chronological learning logs and curated permanent notes.',
      technologies: ['React', 'Docusaurus', 'CSS Modules'],
      link: `https://github.com/Hasnain-3764/engineering-notebook`
    },
    {
      title: 'Project Two',
      description: 'Placeholder description for another project. You can edit this file (src/pages/about.js) to replace this with your actual projects, research, or tools you have built.',
      technologies: ['TypeScript', 'Node.js', 'PostgreSQL'],
      link: '#'
    }
  ];

  return (
    <Layout
      title="About Me"
      description="About Mohd. Hasnain - Software Engineer and Writer"
    >
      <main className={styles.aboutContainer}>
        {/* Header Section */}
        <section className={styles.header}>
          <img 
            src="https://github.com/Hasnain-3764.png" 
            alt="Mohd. Hasnain" 
            className={styles.avatar} 
          />
          <h1 className={styles.title}>Mohd. Hasnain</h1>
          <p className={styles.subtitle}>Software Engineer • Problem Solver • Lifelong Learner</p>
          
          <div className={styles.contactLinks}>
            <a href="https://github.com/Hasnain-3764" target="_blank" rel="noopener noreferrer" className={styles.contactButton}>
              GitHub Profile
            </a>
            <a href="mailto:your.email@example.com" className={`${styles.contactButton} ${styles.contactButtonSecondary}`}>
              Email Me
            </a>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.paragraph}>
            Welcome to my digital home. I am an engineer passionate about systems, software architecture,
            and continuous learning. I built this site to bridge the gap between building things and thinking about them.
          </p>
          <p className={styles.paragraph}>
            When I am not writing code, I enjoy exploring economics, finance, mathematics, and analyzing literature or Hindi poetry.
            This space serves as a portfolio of my technical engineering work alongside a chronological log of my reflections and studies.
          </p>
        </section>

        {/* Portfolio / Projects */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectGrid}>
            {projects.map((project, idx) => (
              <div key={idx} className={styles.projectCard}>
                <h3 className={styles.projectTitle}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>My Approach</h2>
          <p className={styles.paragraph}>
            I view learning as a two-fold process: the act of communicating growth through journaling and reflection, 
            and the act of showcasing polished knowledge as a portfolio to the world. I strive for minimalism, clarity, and impact in everything I design.
          </p>
        </section>
      </main>
    </Layout>
  );
}