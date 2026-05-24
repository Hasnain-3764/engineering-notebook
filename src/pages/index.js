// src/pages/index.js — Engineering Notebook Homepage

import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

// ── Knowledge domain cards ──────────────────────────────────────────────────
const DOMAINS = [
  {
    icon:  '📐',
    title: 'Mathematics',
    desc:  'Linear algebra, calculus, probability, discrete math — the language of CS.',
    href:  '/docs/mathematics/intro',
    tags:  ['linear-algebra', 'calculus', 'probability'],
  },
  {
    icon:  '⚙️',
    title: 'Operating Systems',
    desc:  'Processes, memory management, scheduling, file systems, and concurrency.',
    href:  '/docs/operating-systems/intro',
    tags:  ['processes', 'memory', 'scheduling'],
  },
  {
    icon:  '🧠',
    title: 'Machine Learning',
    desc:  'Gradient descent, neural networks, backpropagation, and model theory.',
    href:  '/docs/machine-learning/intro',
    tags:  ['neural-networks', 'gradient-descent', 'optimization'],
  },
  {
    icon:  '☕',
    title: 'Java',
    desc:  'JVM internals, concurrency, generics, collections, and design patterns.',
    href:  '/docs/java/intro',
    tags:  ['jvm', 'concurrency', 'generics'],
  },
  {
    icon:  '🔧',
    title: 'Systems Programming',
    desc:  'Memory layout, pointers, system calls, and low-level C/C++/Rust concepts.',
    href:  '/docs/systems-programming/intro',
    tags:  ['memory', 'system-calls', 'c'],
  },
  {
    icon:  '🐧',
    title: 'Linux',
    desc:  'Filesystem hierarchy, shell scripting, process management, and networking.',
    href:  '/docs/linux/intro',
    tags:  ['bash', 'filesystem', 'networking'],
  },
];

// ── Recent highlights / pinned notes ───────────────────────────────────────
const HIGHLIGHTS = [
  { label: 'Gradient Descent Derivation',     href: '/docs/machine-learning/gradient-descent' },
  { label: 'OS: Process Lifecycle & States',  href: '/docs/operating-systems/process-management' },
  { label: 'Linear Algebra Fundamentals',     href: '/docs/mathematics/linear-algebra-fundamentals' },
  { label: 'Java Concurrency Primitives',     href: '/docs/java/concurrency-basics' },
];

// ── Stats strip ────────────────────────────────────────────────────────────
const STATS = [
  { value: '6',    label: 'Subjects' },
  { value: '10+',  label: 'Notes' },
  { value: 'Free', label: 'Open Source' },
  { value: 'Dark', label: 'Mode First' },
];

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      {/* Background grid pattern */}
      <div className={styles.heroBg} aria-hidden />

      <div className={styles.heroInner}>
        <div className={styles.heroLabel}>
          <span className={styles.dot} />
          Personal Knowledge Base
        </div>

        <h1 className={styles.heroTitle}>
          {siteConfig.title}
        </h1>

        <p className={styles.heroSubtitle}>
          A public engineering notebook covering CS fundamentals, systems, machine learning,
          mathematics, and software engineering — organized for deep study and long-term recall.
        </p>

        <div className={styles.heroActions}>
          <Link className={clsx('button', styles.btnPrimary)} to="/docs/intro">
            Browse Notes →
          </Link>
          <Link className={clsx('button', styles.btnSecondary)} to="/blog">
            Learning Log
          </Link>
        </div>

        {/* Stats row */}
        <div className={styles.statsRow}>
          {STATS.map(s => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

function DomainsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Knowledge Domains</h2>
        <p className={styles.sectionSub}>
          Six core areas of study — each with structured notes, examples, and derivations.
        </p>
      </div>

      <div className={styles.grid}>
        {DOMAINS.map(d => (
          <Link key={d.title} to={d.href} className={styles.card}>
            <span className={styles.cardIcon}>{d.icon}</span>
            <h3 className={styles.cardTitle}>{d.title}</h3>
            <p className={styles.cardDesc}>{d.desc}</p>
            <div className={styles.cardTags}>
              {d.tags.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function HighlightsSection() {
  return (
    <section className={clsx(styles.section, styles.highlightSection)}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>📌 Pinned Notes</h2>
        <p className={styles.sectionSub}>Key concepts worth reading first.</p>
      </div>

      <ul className={styles.highlightList}>
        {HIGHLIGHTS.map(h => (
          <li key={h.label}>
            <Link to={h.href} className={styles.highlightLink}>
              <span className={styles.highlightArrow}>→</span>
              {h.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.highlightFooter}>
        <Link to="/blog" className={styles.seeAll}>
          See Learning Log →
        </Link>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className={styles.section}>
      <div className={styles.philosophyCard}>
        <h2>📖 Why This Notebook Exists</h2>
        <blockquote className={styles.quote}>
          "The Feynman Technique: learn by writing until you can explain it simply."
        </blockquote>
        <p>
          This is a public, searchable record of everything I study as a CS student.
          Notes are written as if I am teaching — with derivations, examples, diagrams,
          and honest mistakes documented. It serves as both a personal reference and a portfolio.
        </p>
        <div className={styles.pillRow}>
          <span className={styles.pill}>✅ Markdown source</span>
          <span className={styles.pill}>✅ KaTeX math</span>
          <span className={styles.pill}>✅ Mermaid diagrams</span>
          <span className={styles.pill}>✅ Syntax highlighted code</span>
          <span className={styles.pill}>✅ Open source</span>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="A personal engineering notebook covering CS fundamentals, systems, machine learning, and mathematics."
    >
      <HeroSection />
      <main>
        <DomainsSection />
        <HighlightsSection />
        <PhilosophySection />
      </main>
    </Layout>
  );
}
