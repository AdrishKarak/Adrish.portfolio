# Adrish Karak — Portfolio Profile & Project Reference

> **Purpose:** This file is the source-of-truth brief for an AI agent building Adrish Karak's personal developer portfolio.
>
> Use the information below to create an accurate, polished portfolio. Do not invent employers, job titles, dates, awards, metrics, links, technologies, or project capabilities. If a detail is not provided, omit it or mark it as unavailable rather than guessing.

---

## 1. Personal Information

- **Name:** Adrish Karak
- **Age:** 21
- **Location:** India
- **Education status:** Undergraduate Computer Science student
- **Email:** [runakarak@gmail.com](mailto:runakarak@gmail.com)
- **Phone:** +91 7811025336
- **GitHub:** [github.com/AdrishKarak](https://github.com/AdrishKarak)

### Personal interests

- Pokémon
- Cats

These are genuine personal interests and can appear in a small, tasteful “Beyond code” or personal-interest section. Do not make them dominate the professional presentation.

---

## 2. Professional Summary

Full-stack engineer building AI-powered, RAG-driven web applications with scalable, production-grade architectures.

Areas of work and interest demonstrated by the projects:

- Full-stack web application development
- Backend engineering and API design
- Retrieval-Augmented Generation (RAG)
- Vector search and embeddings
- LLM-powered applications
- Multi-agent orchestration and workflow automation
- Real-time systems and event-driven workflows
- Multi-tenant SaaS architecture
- AI inference integrations
- Testing, evaluation, deployment and CI/CD

Present the profile as a full-stack engineer with a strong focus on backend systems and applied AI engineering. Avoid claiming seniority or professional expertise beyond the experience and projects listed here.

---

## 3. Education

### Netaji Subhash Engineering College

- **Degree:** Bachelor of Technology (B.Tech)
- **Branch:** Computer Science and Engineering
- **Duration:** 2023 – Present
- **CGPA:** 7.8
- **Expected graduation:** 2027

---

## 4. Professional Experience

### Software Development Intern — Emdee

**February 2026 – April 2026**

- Developed and deployed [zuneko.in](https://zuneko.in) from scratch, a company website featuring case-study showcases, portfolio work and detailed service information.
- Achieved a **91+ Lighthouse performance score**.
- Automated the CI/CD pipeline using GitHub Actions, reducing manual deployment effort by approximately **80%**.
- Certificate: [View certificate](https://drive.google.com/file/d/1Q7T1nAzU8WX2dHlab7AV4EdpzxuSYN_E/view?usp=drivesdk)

### Software Development Intern — ZunekoLabs

**May 2026 – June 2026**

- Implemented an **E-Commerce Hybrid Search Recommender** using a RAG pipeline for a jewelry platform.
- Combined semantic and keyword retrieval, improving search relevance by **38% over keyword-only search**.
- Built a customized internal **Vendor Management System (VMS)** that enabled HR to track and manage supply records in real time.
- Reduced manual vendor-tracking effort by approximately **45%**.
- Certificate: [View certificate](https://drive.google.com/file/d/1KQx0Rhy24WFO1BKFt09SCm0LFZR6W5Jq/view?usp=drivesdk)

---

## 5. Featured Portfolio Projects

The five projects below are the current featured portfolio projects. Give each project a substantial project detail section or dedicated project page. Use the supplied links exactly.

### Project 1 — Apex

**Category:** Codebase RAG / Applied AI  
**Short description:** A codebase intelligence application that uses retrieval-augmented generation to retrieve relevant repository context and support grounded AI interactions.

**Tech stack:**
- Next.js
- TypeScript
- tRPC
- Prisma
- PostgreSQL
- pgvector
- Gemini
- Groq
- AssemblyAI
- Docker
- LangChain

**Key engineering work and features:**
- Architected a grounded codebase RAG pipeline with **top-7 pgvector similarity retrieval** over **768-dimensional embeddings**.
- Integrated LangChain GitHub loaders, Gemini embeddings and Groq streaming.
- Optimized repository synchronization, reducing redundant LLM and embedding calls by approximately **60%** through incremental indexing, file-change detection and idempotent vector writes.
- Built resilient AI ingestion pipelines with parallel Groq/Gemini workers, rate-aware delays and TTL caching.
- Achieved **3–4x faster indexing throughput** through the ingestion optimizations above.

**Links:**
- GitHub: https://github.com/AdrishKarak/Apex-rag
- Live: https://apex-rag-nine.vercel.app

---

### Project 2 — Sonic

**Category:** AI SaaS / Voice Technology  
**Short description:** A serverless AI text-to-speech application with GPU-backed inference, voice management and usage-based monetization.

**Tech stack:**
- Next.js 16
- React 19
- TypeScript
- tRPC
- Prisma
- PostgreSQL
- Clerk
- AWS S3
- Modal
- Polar.sh

**Key engineering work and features:**
- Built serverless text-to-speech generation supporting **10 concurrent GPU inputs** using Modal A10G inference.
- Integrated AWS S3 for generated audio storage.
- Engineered multi-tenant voice management and voice cloning with organization-scoped access.
- Enforced organization-level authorization through Clerk organizations and Prisma query filters.
- Used signed URLs for controlled access to stored assets.
- Implemented usage-based monetization with Polar.sh, subscription gating and asynchronous ingestion of metered generation events.

**Links:**
- GitHub: https://github.com/AdrishKarak/Sonic
- Live: https://sonic-blue-six.vercel.app

---

### Project 3 — Ping-up

**Category:** Full-stack / Real-time Social Platform  
**Short description:** A social media platform with real-time messaging, optimized feeds, connection discovery and asynchronous social workflows.

**Tech stack:**
- React
- Vite
- Node.js
- Express
- MongoDB
- Redis
- Clerk
- Stream
- ImageKit
- Inngest
- TanStack Query

**Key engineering work and features:**
- Designed a modular-monolith-based social platform.
- Implemented real-time messaging with **sub-second latency** using Server-Sent Events (SSE) and Redis Pub/Sub for cross-instance message routing.
- Optimized feed delivery and connection discovery using MongoDB indexes, projections, TanStack Query and Redis caching with **10–15 minute TTLs**.
- Orchestrated asynchronous social workflows, including **24-hour story expiry** and retry-based background jobs, using Inngest.
- Integrated Clerk webhooks and ImageKit transformations.

**Links:**
- GitHub: https://github.com/AdrishKarak/Ping-up
- Live: https://ping-up-ruby.vercel.app

---

### Project 4 — AI Content Studio & Multi-Platform Command Center

**Category:** Multi-agent AI / Content Orchestration  
**Hackathon context:** hoichoi Hackathon '26 — Problem 3: AI-Driven Multi-Platform Content Studio  
**Short description:** An AI-powered content orchestration studio for hoichoi. It turns a show or campaign brief into culturally authentic, platform-specific Bengali and English social content, validates it, routes it through human approval, simulates publishing and feeds performance insights into future campaigns.

**Tech stack:**
- Next.js 15.5
- React 19
- TypeScript 5.6
- tRPC v11
- PostgreSQL
- pgvector
- Prisma 5.20
- Google Gemini
- Gemini embeddings (`gemini-embedding-001`)
- Inngest
- Clerk
- Vitest
- Docker
- GitHub Actions
- Vercel

**Core workflow:**

1. A user submits a show or campaign brief.
2. The Brief Analyzer Agent extracts structured metadata such as genre, tone, target audience, language and target channels.
3. Relevant learnings from previous campaigns are retrieved from pgvector.
4. Specialized generation components create platform-specific copy and visual concepts.
5. Bengali copy passes through a runtime nativeness guardrail.
6. A deterministic TypeScript compliance engine validates content and media constraints.
7. Every asset enters a human approval workflow before scheduling.
8. Approved assets can be sent through mock publishing adapters.
9. Analytics are ingested and normalized.
10. A weekly Insight Agent creates citation-grounded reports and embeds key learnings for retrieval during future briefs.

**Specialized agents and components:**

- **Brief Analyzer Agent:** Extracts a structured campaign specification and retrieves relevant historical campaign insights.
- **Content Generator Agent:** Produces platform-specific Bengali and English marketing copy, calls to action and hashtags.
- **Image Agent:** Creates separate visual prompts and concepts for each platform rather than resizing one image.
- **Bengali Nativeness Guardrail:** Uses a secondary model check to detect unnatural or translated-sounding Bengali and triggers a bounded retry. Failed checks are flagged for human review.
- **Deterministic Compliance Checker:** Uses TypeScript rules and arithmetic rather than an LLM to validate character limits, hashtag counts, CTA presence and media constraints.
- **Publisher and Scheduler:** Enforces approval checks and revalidates constraints before mock dispatch.
- **Analytics Engine:** Ingests metrics and calculates normalized engagement rates.
- **Insight Agent:** Produces reports with claims cited to published post IDs and stores insights as vectors for future retrieval.

**Key engineering decisions and differentiators:**

- **Native Bengali, not literal translation:** The system aims to produce culturally natural Bengali marketing copy rather than translating English copy word-for-word.
- **Distinct platform creative:** It generates three distinct visual concepts for Instagram, Facebook and X instead of cropping or relabeling one image.
- **Deterministic compliance:** Character counts, hashtag limits, CTA requirements and file-size checks are validated with code. The checker fails closed.
- **Human approval gate:** No asset can enter the publishing workflow without explicit human approval. Rejected or unreviewed assets must not be published.
- **Closed-loop learning:** Weekly performance insights are embedded in pgvector and retrieved automatically when analyzing later briefs.
- **Bounded regeneration:** Automatic regeneration attempts are capped to control cost and prevent unbounded loops.
- **Single-app architecture:** The LangGraph-style orchestration pipeline runs in the Next.js application; Inngest handles asynchronous and scheduled workflows.
- **Mock publishing:** Instagram, Facebook and X publishing is simulated through mock adapters. Do not claim that the project performs live publishing through the real social-media APIs.
- **Image-first MVP:** Video generation is a future/stretch goal, not a completed MVP capability.

**Analytics details:**
- Engagement rate is calculated as `(likes + comments + shares) / views × 100`.
- An asset receives a “Certified Banger” badge at an engagement rate of **10% or higher**.
- Metrics can be ingested from CSV or mock data.
- Weekly reports feed future generation through vector retrieval.

**Testing and verification reported in the repository:**
- README reports **15 passing tests across 4 test files**.
- README reports successful TypeScript typechecking and production build verification.
- These are project-reported verification results; do not imply independent certification.

**Links:**
- GitHub: https://github.com/AdrishKarak/content-agent
- Live: https://content-agent-seven-alpha.vercel.app

---

### Project 5 — Spotify AI Customer Support Agent

**Category:** Applied AI / RAG / Customer Support Automation  
**Domain:** Spotify Customer Care on Twitter (`@SpotifyCares`)  
**Short description:** An end-to-end AI customer-support triage and response-drafting system grounded in historically resolved customer interactions. It classifies incoming support messages, retrieves relevant historical resolutions, drafts evidence-grounded replies and applies deterministic safety and escalation rules.

**Tech stack:**
- Next.js 15
- TypeScript
- tRPC
- Prisma
- Neon Serverless PostgreSQL
- pgvector
- Gemini
- Groq
- Zod
- Docker
- Vitest / automated evaluation tooling

**Core pipeline:**

1. Receives an incoming customer tweet.
2. Runs structured intent classification concurrently with dense semantic retrieval.
3. Retrieves the top three relevant historical resolutions from a pgvector knowledge base.
4. Synthesizes a grounded response using retrieved context.
5. Applies deterministic and policy-based escalation checks.
6. Returns a typed result containing the intent, suggested reply, escalation decision, escalation reason and priority.

**Key engineering work and features:**

- Built an empirical **nine-intent taxonomy** for Spotify support scenarios:
  - Playback issues
  - Offline downloads
  - Account access
  - Subscription and billing
  - Content availability
  - App bugs and crashes
  - Feature requests
  - Feedback and complaints
  - Human escalation required
- Developed the taxonomy by clustering 250 customer tweets using Gemini embeddings and K-Means (`k=12`), then consolidating the clusters into nine canonical operational intents.
- Built a knowledge base containing **2,000 cleaned multi-turn support threads**.
- Uses dense semantic retrieval with Neon pgvector and an HNSW index.
- Uses Groq for fast classification/inference and Gemini as a fallback provider.
- Runs classification and retrieval concurrently using `Promise.all`, with approximately **40% latency reduction** reported in the README.
- Implemented LRU embedding and response caching.
- Added rate-limit backoff and multi-provider fallback.
- Uses Zod validation for structured model outputs.
- Externalized and version-controlled prompts.
- Redacts emails, phone numbers, URLs and user handles before sending content to model or embedding providers.
- Uses deterministic safety heuristics and confidence/evidence thresholds to escalate sensitive or uncertain cases.
- Requires a verified retrieval match of at least **0.68** for automated reply drafting, according to the documented safety contract.
- Fails closed and escalates if the policy model is unavailable.
- Does not execute account changes, issue refunds or access private Spotify accounts. It is a triage-and-draft system, not an autonomous account-management agent.

**Evaluation and benchmark results reported in the repository:**

The project includes a 165-example curated golden evaluation set and comparisons against trivial keyword-based and zero-shot, no-RAG baselines.

Full pipeline results reported:
- Intent accuracy: **66.67%**
- Intent macro F1: **0.5556**
- Intent macro recall: **0.6667**
- Escalation accuracy: **100%**
- Retrieval hit rate at similarity threshold ≥0.50: **100%**
- LLM-judge groundedness: **4.27/5**
- LLM-judge correctness: **4.67/5**
- LLM-judge tone and empathy: **5.00/5**
- LLM-judge actionability: **5.00/5**
- Overall LLM-judge score: **4.73/5**

**Benchmark interpretation must be honest:**
- The trivial keyword baseline achieved **87.5% raw intent accuracy** on the unstratified test slice because it was dominated by playback-related keywords.
- The full pipeline's value is stronger macro-level classification performance and grounded response quality, not a claim that it beats the trivial baseline on raw accuracy.
- The README reports a **+89% improvement in overall judge score** over the zero-shot baseline (2.50/5 to 4.73/5).
- The repository also includes a human-vs-LLM-judge agreement study using Cohen's Kappa. The README discusses limitations in judge calibration and score variance.

**Links:**
- GitHub: https://github.com/AdrishKarak/support-agent
- Live: https://support-agent-sjt3.vercel.app

---

## 6. Technical Skills

Use these as the current skills inventory. Organize them clearly and avoid adding technologies not listed here.

### Programming Languages
- JavaScript
- TypeScript
- Java

### Frontend
- React.js
- Next.js
- Redux
- Tailwind CSS

### Backend and APIs
- Node.js
- Express.js
- REST APIs
- GraphQL
- tRPC
- JWT Authentication
- OAuth
- Role-Based Access Control (RBAC)
- Microservices

### Databases and Search
- MongoDB
- PostgreSQL
- MySQL
- Redis
- pgvector
- Vector databases
- Prisma ORM

### AI / Applied AI
- LangChain
- Retrieval-Augmented Generation (RAG)
- Vector embeddings
- Semantic search
- LLM integrations
- AI inference integrations
- Multi-agent orchestration

### Cloud and DevOps
- AWS
- Docker
- CI/CD
- GitHub Actions
- Linux

### Computer Science and Engineering
- Object-Oriented Programming (OOP)
- Database Management Systems (DBMS)
- Operating Systems
- Computer Networks
- System Design

### Tools and Testing
- Git
- GitHub
- Postman
- Jest
- Vitest
- Unit testing

---

## 7. Certifications

1. **Frontend Engineering Virtual Experience Program — Forage**  
   Certificate: https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_55G5uAqqwz2XKZNsH_1755970302338_completion_certificate.pdf

2. **AWS EC2 Completion Certificate**  
   Certificate: https://drive.google.com/file/d/1asVrjYrRNhemsVyikS60tsadaERogoHb/view?usp=sharing

---

## 8. Portfolio Content and Design Guidance for the AI Agent

Build the portfolio around the following positioning:

**Primary positioning:** Full-stack Engineer focused on Backend Systems and Applied AI.

### Suggested site sections

1. **Hero**
   - Name: Adrish Karak
   - Concise professional positioning
   - Short summary focused on full-stack development, backend engineering and applied AI
   - Primary calls to action: View Projects, Contact Me
   - GitHub and email links

2. **About**
   - Computer Science undergraduate at Netaji Subhash Engineering College
   - Full-stack and backend engineering experience
   - Interest in RAG, vector search, AI agents and production-oriented software
   - A small personal-interest detail mentioning Pokémon and cats

3. **Experience**
   - Emdee internship
   - ZunekoLabs internship
   - Use the exact dates, contributions and metrics listed above

4. **Featured Projects**
   - Apex
   - Sonic
   - Ping-up
   - AI Content Studio
   - Spotify AI Customer Support Agent
   - Give every project a clear problem statement, solution, architecture/engineering highlights, technology stack and GitHub/live links.
   - Make project cards link to detailed project views or expandable case studies.
   - Do not reduce the projects to generic one-line descriptions.

5. **Technical Skills**
   - Group skills by category as listed above.
   - Do not use arbitrary proficiency percentages or progress bars.

6. **Certifications**
   - Include both certificates with their supplied links.

7. **Contact**
   - Email: runakarak@gmail.com
   - Phone: +91 7811025336
   - GitHub: https://github.com/AdrishKarak

### Design and content principles

- Create a polished, modern, technically credible developer portfolio.
- Prioritize strong typography, clear hierarchy, restrained motion and excellent responsive behavior.
- Make the five projects the centerpiece; they demonstrate the strongest technical work.
- Use real project links and working navigation.
- Keep the writing concise but technically substantive.
- Use metrics only where explicitly supplied in this document.
- Do not fabricate testimonials, clients, employment, awards, open-source contributions or social profiles.
- Do not invent a LinkedIn URL.
- Do not describe mock publishing as real publishing.
- Do not describe the Spotify support agent as autonomously modifying customer accounts.
- Do not invent project screenshots. Use actual screenshots/assets from the project repositories or live sites if available; otherwise use tasteful, clearly illustrative project visuals.
- Ensure accessibility, SEO metadata, keyboard navigation and good performance.
- Do not include job-target companies, salary expectations, DSA problem counts, exam preparation details or unrelated study history in the public portfolio.

---

## 9. Accuracy Rules

This document combines information from Adrish's current resume and the supplied project descriptions/repository documentation.

- Resume experience dates and project metrics should be preserved as written.
- Project benchmark results are documented project results, not independently audited guarantees.
- Clearly distinguish implemented functionality from mock, simulated or planned functionality.
- The AI Content Studio uses mock social publishing adapters; it does not currently claim real Instagram/Facebook/X API publishing.
- The Spotify Support Agent drafts and triages support replies; it does not execute Spotify account actions.
- Video generation in AI Content Studio is a stretch goal, not an MVP feature.
- If a project detail conflicts with a future updated resume or repository, ask Adrish which version is current before changing this profile.
