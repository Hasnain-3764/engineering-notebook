---
id: intro
title: Start Here
sidebar_label: 🏠 Start Here
slug: /intro
description: An introduction to this engineering notebook — what it contains, how it is organized, and how to navigate it.
---

# Engineering Notebook

> *"If you can't explain it simply, you don't understand it well enough."*
> — Richard Feynman

## What This Is

This is a **public engineering notebook** — a structured, searchable record of everything
I study as a Computer Science student. It is not a polished tutorial site; it is an
honest study record with:

- **Derivations** — step-by-step math worked out in full
- **Diagrams** — Mermaid flowcharts and architecture sketches
- **Code** — working, annotated snippets
- **Mistakes** — things I got wrong and why
- **Concepts** — first-principles explanations

## How It Is Organized

```
docs/
├── mathematics/          ← Calculus, linear algebra, probability, discrete math
├── operating-systems/    ← Processes, memory, scheduling, concurrency
├── machine-learning/     ← Gradient descent, neural networks, theory
├── java/                 ← JVM, concurrency, generics, design patterns
├── systems-programming/  ← Memory, system calls, C/C++/Rust low-level
└── linux/                ← Filesystem, shell, process management
```

The **Learning Log** (blog) is a running journal — short entries about what I studied,
what confused me, and what clicked.

## Navigation Tips

| I want to…                        | Go to…                                    |
|-----------------------------------|-------------------------------------------|
| Browse a topic                    | Sidebar on the left                       |
| Find a specific concept           | 🔍 Search bar (top right)                |
| See recent study entries          | [Learning Log](/blog)                     |
| Browse by topic tag               | [Tags](/docs/tags)                        |
| Start with math fundamentals      | [Mathematics](/docs/mathematics/intro)    |
| Understand OS concepts            | [Operating Systems](/docs/operating-systems/intro) |

## Naming Convention for Notes

All notes follow this pattern:

```
{topic}-{subtopic}.md
```

Examples:
- `gradient-descent.md`
- `process-management.md`
- `linear-algebra-fundamentals.md`
- `jvm-internals.md`

## Tagging Strategy

Every note is tagged with at least:
1. A **domain tag** — `mathematics`, `os`, `ml`, `java`, `systems`, `linux`
2. A **concept tag** — `gradient-descent`, `process`, `matrix`, etc.
3. Optionally a **difficulty tag** — `beginner`, `intermediate`, `advanced`

## Features

- **Math rendering** via KaTeX — inline: $E = mc^2$, display: $$\nabla_\theta J(\theta)$$
- **Code highlighting** for Java, Python, C, Bash, Rust, and more
- **Mermaid diagrams** for flowcharts, sequence diagrams, and architecture
- **Full-text search** — no server required
- **Dark mode** — default
- **Mobile responsive**

---

*Start with any domain in the sidebar, or use the search bar to jump directly to a concept.*
