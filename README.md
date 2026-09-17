<div align="center">

# Buddio

### An AI-Driven Personalized Learning Companion

A formal project report and developer reference for Buddio, an intelligent tutoring system that adapts to each learner's academic level — from elementary school to professional self-learning.

<br/>

![Next.js](https://img.shields.io/badge/Next.js%2016-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL%2016-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![pgvector](https://img.shields.io/badge/pgvector-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Gemini](https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=googlegemini&logoColor=white)

<br/>

_**"No one should have to learn alone."**_

</div>

---

## Abstract

Buddio is a full-stack web application that functions as an intelligent tutoring companion. The system generates personalized, step-by-step learning roadmaps and produces complete, pedagogically structured lesson materials for individual topics. Through continuous AI interaction, Buddio accompanies the learner at every stage of the learning process — offering on-demand explanations, adaptive quizzes, and structured progress tracking. The platform is designed to accommodate multiple educational levels, from primary school students (SD) through university students and independent learners.

The system is implemented as a monorepo containing a Next.js frontend and a FastAPI backend, backed by PostgreSQL with pgvector. Google Gemini serves as the primary large-language-model engine, with a rule-based fallback generator that guarantees full application functionality in the absence of an API key.

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Core Features](#2-core-features)
3. [Technical Architecture](#3-technical-architecture)
4. [Repository Structure](#4-repository-structure)
5. [Getting Started](#5-getting-started)
6. [Configuration](#6-configuration)
7. [API Reference](#7-api-reference)
8. [Quality Assurance](#8-quality-assurance)
9. [Project Documentation](#9-project-documentation)
10. [Project Status & Roadmap](#10-project-status--roadmap)
11. [Contribution Guidelines](#11-contribution-guidelines)
12. [License](#12-license)

---

## 1. Introduction

### 1.1 Background and Motivation

Independent learners frequently face a structural disadvantage: educational content is rarely tailored to the individual. A student who struggles with a concept is often left to reconcile generic study materials with personal comprehension gaps, without any mechanism for immediate clarification. Buddio addresses this gap by combining generative AI with a structured pedagogical framework to deliver a one-on-one tutoring experience at scale.

### 1.2 Project Objective

The principal objective of Buddio is to provide a complete, end-to-end personalized learning environment that:

1. Assesses the learner's educational level through an onboarding process;
2. Constructs a personalized learning roadmap for a given subject; and
3. Generates full-length teaching materials, interactive mentoring, and adaptive assessments, all within a governed daily AI-usage quota.

### 1.3 Scope

This report describes the system's architecture, core functionality, setup procedure, configuration parameters, API surface, and quality-assurance status of the current MVP.

---

## 2. Core Features

| Feature | Description |
|---------|-------------|
| **Level-Based Onboarding** | The learner selects an educational stage (SD, SMP/SMA, university, self-learner); all AI interactions adapt language and difficulty accordingly. |
| **AI-Generated Learning Roadmap** | A personalized, step-by-step study plan constructed from the learner's topic and goals. |
| **Full-Length Teaching Materials** | Each roadmap step yields a comprehensive lesson generated in a one-on-one tutor format: intuition, worked examples, misconceptions, and practice. |
| **24/7 AI Mentor** | An on-demand conversational assistant that responds to learner questions with accessible explanations and analogies. |
| **Adaptive Quizzes** | AI-authored assessments aligned to the lesson content, complete with scoring and solution explanations. |
| **Progress Tracking** | Learnded hours, streaks, and per-topic completion percentages are recorded and visualized. |
| **Daily AI Quota** | Chat, roadmap, and quiz generation are rate-limited per day to encourage deliberate usage of AI resources. |
| **Demo Mode** | In the absence of an API key, the system operates entirely on rule-based mock generators, preserving the full user experience. |

---

## 3. Technical Architecture

### 3.1 System Overview

Buddio follows a client–server model. The React frontend communicates with a REST API served by FastAPI. Persistent state is stored in PostgreSQL, with vector search capability provided by the pgvector extension. All AI-driven generation is abstracted behind a single service layer that selects between the live Gemini integration and deterministic mock generators.

### 3.2 Frontend

| Component | Technology |
|-----------|------------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | Lucide |
| Typography | Plus Jakarta Sans (headings) · Inter (body) |

### 3.3 Backend

| Component | Technology |
|-----------|------------|
| Framework | FastAPI |
| ORM | SQLAlchemy 2 |
| Validation | Pydantic v2 |
| Security | bcrypt (password hashing) · PyJWT (Bearer tokens) |
| AI Engine | Google Gemini (`google-genai`), with rule-based mock generators |

### 3.4 Data Storage

PostgreSQL 16 is provisioned via Docker Compose with the `pgvector` extension enabled, enabling future retrieval-augmented generation workflows. The default connection targets `localhost:5432`.

### 3.5 AI Engine and Fallback Behavior

The AI service layer (`services/api/app/ai/`) exposes a unified interface. Two operational modes are supported:

- **Live Mode** — requests are dispatched to the configured Gemini model and the response is validated and repaired before persistence.
- **Demo Mode** — when `GEMINI_API_KEY` is unset or `FORCE_MOCK_AI=true`, fully coherent deterministic generators produce the roadmap, lesson, quiz, and mentor responses.

This design guarantees that the application remains fully functional regardless of API-key availability.

### 3.6 Authentication

Access is authenticated through JWT Bearer tokens. Passwords are stored using bcrypt hashing. Route ownership checks ensure that a user may only access topics, roadmaps, lessons, and progress records belonging to their own account.

---

## 4. Repository Structure

```
buddio/
├── apps/
│   └── web/                    # Next.js frontend
│       └── src/
│           ├── app/            # Pages (landing, auth, onboarding, dashboard)
│           ├── components/     # Shared components
│           ├── context/        # Application context (language, auth)
│           ├── services/       # API clients
│           └── lib/            # Types and utilities
│
├── services/
│   └── api/                    # FastAPI backend
│       └── app/
│           ├── ai/             # Gemini client + mock generators
│           ├── core/           # Configuration, security, database
│           ├── models/         # SQLAlchemy models
│           ├── routers/        # REST endpoints
│           ├── schemas/        # Pydantic schemas
│           └── services/       # Business logic
│
├── docs/                       # Product and architecture documentation
└── docker-compose.yml          # PostgreSQL 16 + pgvector
```

---

## 5. Getting Started

### 5.1 Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) (WSL2 on Windows)
- Python 3.11 or later
- Node.js 18 or later

### 5.2 Database

```bash
docker compose up -d
```

PostgreSQL 16 with pgvector runs at `localhost:5432` (database: `buddio_db`, user: `buddio_user`, password: `buddio_password`).

### 5.3 Backend

```bash
cd services/api
python -m venv venv

# Windows
venv\Scripts\activate
# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt

# Create database tables (Alembic migration planned)
python -c "from app.models import Base; from app.core.database import engine; Base.metadata.create_all(bind=engine)"

# Start the server
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

The backend is served at **http://localhost:8000**. Interactive API documentation is available at **http://localhost:8000/docs**, and the health check endpoint is **`GET /api/health`**.

### 5.4 Frontend

```bash
cd apps/web
npm install
npm run dev
```

The frontend is served at **http://localhost:3000**.

---

## 6. Configuration

Copy the `.env.example` file (located at the repository root) to `.env` at either the repository root or the `services/api/` directory.

| Variable | Default | Description |
|----------|---------|-------------|
| `GEMINI_API_KEY` | — | Google Gemini API key (optional; the application runs in demo mode without it) |
| `GEMINI_MODEL` | `gemini-flash-lite-latest` | Gemini model used for generation |
| `FORCE_MOCK_AI` | `false` | Forces demo mode even when an API key is present |
| `SECRET_KEY` | dev-only | JWT signing key — **must be changed in production** |
| `DATABASE_URL` | `postgresql+psycopg://buddio_user:buddio_password@localhost:5432/buddio_db` | Database connection string |
| `CORS_ORIGINS` | `http://localhost:3000`, `http://127.0.0.1:3000`, `https://buddio-ai.vercel.app` | Permitted frontend origins |
| `QUOTA_CHAT_DAILY` | `20` | Daily AI chat quota |
| `QUOTA_ROADMAP_DAILY` | `2` | Daily roadmap generation quota |
| `QUOTA_QUIZ_DAILY` | `3` | Daily quiz generation quota |

---

## 7. API Reference

All REST endpoints are served under the **`/api`** prefix. Interactive documentation is available at **http://localhost:8000/docs**.

| Domain | Endpoints | Purpose |
|--------|-----------|---------|
| Auth | `POST /auth/register` · `POST /auth/login` | Registration and login (JWT) |
| Users | `GET/PATCH /users/me` · `PATCH /users/me/password` | Profile retrieval and password change |
| Onboarding | `POST /onboarding/grade-level` · `/learning-goal` | Educational level and goal configuration |
| Topics | `GET/POST /topics` · `DELETE /topics/{id}` | Manage learning topics |
| Roadmaps | `POST /roadmaps/generate` · `GET /roadmaps/topic/{id}` · `PATCH /roadmaps/steps/{id}` | AI roadmap generation and progress |
| Lessons | `GET /lessons/{id}` · `POST /lessons/generate/{step_id}` · `PATCH /lessons/{id}/complete` | Lesson content generation and completion |
| Mentor | `POST /mentor/chat` · `GET /mentor/history/{topicId}` | Conversational AI mentoring |
| Quiz | `POST /quiz/generate` · `POST /quiz/{id}/submit` | AI quiz generation and grading |
| Progress | `GET /progress/statistics` · `GET /progress/all` | Progress summary |
| Usage | `GET /usage/me` | Remaining daily AI quota |

---

## 8. Quality Assurance

The following quality gates are enforced on the codebase:

- **API smoke tests: 41/41 passing** — a complete user journey is exercised (registration → onboarding → topic → roadmap → lesson → mentor → quiz → progress → quota → auth).
- **Lint: clean** (`npm run lint`).
- **Production build: green** (`npm run build` — 13 routes).

---

## 9. Project Documentation

The repository contains a planning and design archive in the `docs/` directory:

| Document | Content |
|----------|---------|
| [Product & Stack Decisions](docs/00-keputusan-produk-dan-stack.md) | Locked decisions (monetization, levels, language, stack) |
| [Product Requirement Document](docs/01-product-requirement-document.md) | PRD v1.1 |
| [Technical Architecture](docs/02-technical-architecture.md) | FastAPI, React, AI pipeline |
| [Development Roadmap](docs/03-development-roadmap.md) | Phases 0–5 |
| [Design System](docs/05-design-system.md) | Philosophy, color, typography, components |
| [Brand Guideline](docs/12-brand-guideline.md) | Identity and tone of voice |
| [User Flow](docs/06-user-flow.md) · [IA](docs/07-information-architecture.md) · [Wireframe](docs/08-ui-wireframe.md) | User experience deliverables |

---

## 10. Project Status & Roadmap

**Status: MVP.** All core features operate end-to-end against a live PostgreSQL instance, with real Gemini AI generation (or demo mode) and a passing 41/41 smoke-test suite.

Planned next steps:

- [ ] Database migration management with Alembic (replacing `create_all`)
- [ ] Production configuration hardening (`SECRET_KEY` via environment, strict CORS)
- [ ] Usage analytics and feedback loops
- [ ] Richer quiz attempt history

---

## 11. Contribution Guidelines

Pull requests are welcome. For substantial changes, please open an issue first to discuss the proposed modification before implementation.

---

## 12. License

MIT © 2026 Buddio