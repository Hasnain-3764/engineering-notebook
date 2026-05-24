---
slug: week-1-gradient-descent-clicked
title: "Week 1: The Moment Gradient Descent Finally Clicked"
authors:
  - name: Your Name
    title: CS Student
    url: https://github.com/yourusername
date: 2024-01-22
tags: [ml, gradient-descent, learning-log, mathematics]
description: What finally made gradient descent click for me — the Taylor expansion interpretation.
---

# Week 1: The Moment Gradient Descent Finally Clicked

I have been studying gradient descent for months. I knew the formula $\theta := \theta - \alpha \nabla J$,
I implemented it, it worked — but I didn't *feel* like I understood it. I was pattern-matching, not reasoning.

This week something clicked.

<!-- truncate -->

## The Problem With How It Is Usually Explained

Every textbook says something like: "Move in the direction opposite to the gradient because the gradient
points uphill." That's correct, but it skips the step that makes it rigorous: **why does moving opposite
to the gradient decrease the function?**

## The Taylor Expansion Perspective

The answer comes from the first-order Taylor expansion. For any differentiable function $J$:

$$J(\theta + \delta) \approx J(\theta) + \delta^T \nabla_\theta J(\theta)$$

This says: if I take a small step $\delta$ from $\theta$, the new cost is approximately the old cost
plus a correction term.

To make $J$ **decrease**, I need that correction term to be **negative**:

$$\delta^T \nabla_\theta J(\theta) < 0$$

The choice $\delta = -\alpha \nabla_\theta J(\theta)$ gives:

$$\delta^T \nabla J = (-\alpha \nabla J)^T \nabla J = -\alpha \|\nabla J\|^2 \leq 0$$

That's it. It's always non-positive. This is **provably** a descent direction (as long as $\alpha > 0$
and $\|\nabla J\| \neq 0$). The gradient descent update isn't magic — it's the simplest possible
choice that guarantees a decrease in the first-order approximation.

## What I Got Wrong

I used to think of the gradient as a "direction to move." But it is more precisely a
**local linear approximation of the function's change**. The update rule is saying:
*"Given that this linear model of the change is valid for a small step, take the step that
minimally decreases it."*

## The Connection to Optimisation Theory

This is the basis of **descent algorithms** — a large family that includes:
- Gradient descent (steepest descent)
- Newton's method (uses second-order information)
- Conjugate gradient (uses information from previous steps)

All of them satisfy $\delta^T \nabla J < 0$. They just differ in how they choose $\delta$.

## Action Items

- [ ] Write the full derivation as a doc note → done: [Gradient Descent](/docs/machine-learning/gradient-descent)
- [ ] Understand Newton's method and why it converges faster
- [ ] Implement Adam from scratch without PyTorch

---

*This is entry #1 in my learning log. The goal: document the moment things click, not just what I studied.*
