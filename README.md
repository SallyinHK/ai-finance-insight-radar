# AI Finance Insight Radar

An AI-powered insight generation and prompt engineering system designed for financial research workflows.

---

##  Business Problem

The rapid advancement of AI has triggered widespread discussion about its impact on financial analysts. However, the real bottleneck is not model capability — it is **workflow integration**.

In practice:

* Analysts spend excessive time on **data collection and formatting**
* AI outputs often lack **structure, consistency, and institutional tone**
* Organizations face **operational friction** in adopting AI (compliance, approval chains, data access)

This project addresses a key question:

> *Not “Can AI do the job?” but “How should workflows evolve with AI?”*

---

##  Solution Overview

AI Finance Insight Radar is a structured system that transforms raw prompts into:

* Investment-style insights
* LinkedIn-ready professional content
* Transparent prompt design frameworks
* Documented iteration and architecture

The system separates **prompt engineering**, **content generation**, and **presentation layers**.

---

##  System Architecture

The project is built with a modular structure:

### 1. Prompt Layer (`/prompts`)

* Defines structured prompts for different use cases
* Includes:

  * Insight generation prompts
  * Content transformation prompts
  * Tone and audience constraints

### 2. Processing Layer (`/lib`)

* Handles document parsing (DOCX → HTML)
* Manages content transformation logic
* Integrates prompt-driven workflows

### 3. Presentation Layer (`/app`)

Built using Next.js App Router:

* `/posts` → Insight Terminal

  * Displays AI-generated content
  * Structured in institutional research format

* `/progress-report` → System Documentation

  * Architecture breakdown
  * Prompt iteration history
  * Development workflow

---

##  Key Features

###  Insight Terminal

* Generates structured finance insights
* Emulates investment research tone
* Focus on clarity, hierarchy, and signal density

---

###  Prompt Registry

* Centralized prompt design system
* Enables:

  * Reusability
  * Standardization
  * Controlled output structure

---

###  Progress Report Engine

* Converts DOCX → HTML for web rendering
* Provides full transparency of:

  * Prompt evolution
  * System design decisions
  * Iteration process

---

###  Design Philosophy

This system follows principles inspired by institutional finance environments:

* **Information density over decoration**
* **Structure over aesthetics**
* **Clarity over verbosity**

---

##  Live Demo

 https://ai-finance-insight-radar.netlify.app

---

##  Tech Stack

* Next.js 14 (App Router)
* React 18
* TypeScript
* Tailwind CSS
* Mammoth.js (DOCX parsing)

---

##  Project Setup

Clone the repository:

```bash
git clone <your-repo-link>
cd AI-Finance-Insight-Radar
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

##  Project Structure

```
app/
  posts/
  progress-report/
lib/
  docx.ts
public/
  content/
scripts/
  extract-docx-to-html.mjs
```

---

##  Limitations

* No real-time financial data integration
* Output quality depends on prompt design
* No evaluation pipeline for prompt performance

---

##  Future Improvements

* API-based financial data integration
* Prompt testing & evaluation framework
* Multi-agent workflow orchestration

---

##  Author

Built as part of an AI-driven workflow and prompt engineering project in finance.

---

##  License

This project is for academic and demonstration purposes.
