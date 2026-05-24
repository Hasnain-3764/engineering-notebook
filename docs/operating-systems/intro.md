---
id: intro
title: Operating Systems
sidebar_label: Overview
description: Notes on OS fundamentals — processes, memory, scheduling, file systems, and concurrency.
tags: [os, overview]
---

# Operating Systems

These notes cover the theory and implementation of operating systems — focused on
the concepts tested in exams and used in real systems work.

## Topics

| Topic | Key Concepts |
|---|---|
| [Process Management](./process-management) | States, PCB, context switch, fork/exec |
| Memory Management | Virtual memory, paging, segmentation, TLBs |
| File Systems | Inodes, journaling, VFS |
| Scheduling | FCFS, SJF, Round Robin, CFS |
| Concurrency & Deadlocks | Mutex, semaphore, monitors, deadlock conditions |

## Reference OS

Most examples use **Linux** (kernel 6.x) since it is open-source and examinable.
