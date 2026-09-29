# Buddio — UI Style Guide

> This document defines the visual language and interaction principles of the Buddio frontend.
> It is the single source of truth for UI implementation across the application.
>
> Buddio is a **learning workspace**, not an AI chatbot.
> The interface should make students feel that they are studying, exploring,
> organizing knowledge, and making progress.
>
> AI is an assistive capability inside the learning experience, not the visual identity
> of the product.

---

# 1. Product Design Philosophy

Buddio follows one central principle:

> **Learning comes first. AI comes second.**

The UI should communicate:

- calm
- focused
- educational
- structured
- approachable
- spacious
- human
- purposeful

The interface should NOT feel like:

- an AI chatbot
- an AI SaaS dashboard
- a developer tool
- a cryptocurrency dashboard
- a productivity analytics dashboard
- a futuristic "AI" product

## 1.1 Core Design Principles

### 1. Learning First

Every major screen should answer:

> "What am I learning, and what should I do next?"

Learning content, topics, roadmaps, concepts, and progress have visual priority over AI features.

### 2. AI Is Contextual

AI should appear when it helps the current learning activity.

Prefer:

- Explain
- Give an example
- Expand
- Simplify
- Practice
- Review

Avoid constantly exposing:

- AI Mentor
- Ask AI
- AI Assistant
- AI is thinking
- AI-powered
- AI quota

The user should feel like they are learning with a tool available to them,
not chatting with an AI product.

### 3. Calm Interface

Avoid excessive:

- gradients
- glows
- shadows
- floating cards
- decorative animations
- badges
- emojis
- visual noise

Use whitespace and typography to create hierarchy.

### 4. Content Has Priority

The actual learning material should be the strongest visual element on lesson pages.

UI should support the content instead of competing with it.

### 5. Progress Should Be Meaningful

Progress indicators should represent learning activity:

- topic progress
- roadmap progress
- completed concepts
- assessments
- learning activity

Avoid excessive gamification.

### 6. Consistency Over Decoration

Do not introduce new visual patterns simply because they look attractive.

Every component should belong to the same visual system.

---

# 2. Visual Identity

## 2.1 Buddio's Identity

Buddio should visually communicate:

> **A calm digital learning workspace where students can understand,
> connect, and explore knowledge.**

The primary visual metaphor is:

**Workspace + Knowledge Map + Learning Material**

Not:

**Chatbot + AI + SaaS Dashboard**

---

# 3. Color System

The previous design relied heavily on a blue-to-violet gradient.

The new design reduces gradient usage significantly.

Color should create hierarchy rather than advertise AI.

---

## 3.1 Light Theme

| Token | Value | Usage |
|---|---|---|
| `--background` | `#F8FAFC` | Application background |
| `--surface` | `#FFFFFF` | Cards, panels, sidebar |
| `--surface-soft` | `#F1F5F9` | Secondary sections |
| `--foreground` | `#172033` | Main text |
| `--foreground-secondary` | `#475569` | Supporting text |
| `--muted-foreground` | `#64748B` | Captions and metadata |
| `--border` | `#E2E8F0` | Standard borders |
| `--border-soft` | `#EEF2F7` | Subtle separators |
| `--primary` | `#4F8EF7` | Main interaction |
| `--primary-hover` | `#3B76E6` | Hover / pressed |
| `--primary-soft` | `#EFF6FF` | Soft primary background |
| `--success` | `#22C55E` | Completed / success |
| `--warning` | `#F59E0B` | Warning |
| `--danger` | `#EF4444` | Error / destructive |

---

## 3.2 Dark Theme

| Token | Value | Usage |
|---|---|---|
| `--background` | `#0F172A` | Application background |
| `--surface` | `#172033` | Cards and panels |
| `--surface-soft` | `#1E293B` | Secondary surfaces |
| `--foreground` | `#F1F5F9` | Main text |
| `--foreground-secondary` | `#CBD5E1` | Supporting text |
| `--muted-foreground` | `#94A3B8` | Captions |
| `--border` | `#334155` | Standard borders |
| `--border-soft` | `#263449` | Subtle separators |
| `--primary` | `#60A5FA` | Main interaction |
| `--primary-hover` | `#93C5FD` | Hover |
| `--primary-soft` | `rgba(96,165,250,0.10)` | Soft primary background |
| `--success` | `#4ADE80` | Completed |
| `--warning` | `#FBBF24` | Warning |
| `--danger` | `#F87171` | Error |

---

# 4. Gradient Policy

## Previous Behavior

The old system used:

```css
background: linear-gradient(
  to right,
  #4F8EF7,
  #7C5CFF
);

across many components.

This is no longer the default.

New Rule

Gradient is an accent, not the foundation of the interface.

Do NOT use gradients for:

every primary button
every progress bar
active navigation
every avatar
every icon container
large dashboard surfaces
lesson headings
random decorative backgrounds
Allowed Gradient Usage

Gradient may be used selectively for:

Buddio logo
special onboarding visuals
AI-specific actions when necessary
major marketing moments
special achievement states

Maximum rule:

A screen should not contain multiple visually competing gradients.

5. Typography

Buddio uses two fonts.

Heading

Plus Jakarta Sans

Used for:

page titles
section headings
lesson headings
important navigation titles
Body

Inter

Used for:

paragraphs
buttons
inputs
metadata
navigation
learning content
5.1 Typography Scale
Element	Style
Hero	text-5xl / text-6xl, font-bold
Page title	text-3xl / text-4xl, font-bold
Page heading	text-2xl, font-bold
Section heading	text-lg, font-semibold
Card title	text-base, font-semibold
Body	text-sm / text-base
Secondary	text-sm, text-slate-500
Caption	text-xs
Micro label	text-xs font-medium uppercase tracking-wide

Avoid excessive font-extrabold.

Typography should feel confident but not aggressive.

6. Border Radius

Buddio uses moderate rounded corners.

Level	Class	Usage
Small	rounded-lg	Icon buttons, small controls
Standard	rounded-xl	Inputs, buttons, navigation
Large	rounded-2xl	Major cards and panels
Full	rounded-full	Avatars, badges, progress

Do not make every element excessively rounded.

The UI should feel like a workspace rather than a collection of floating bubbles.

7. Shadows

Shadows should be subtle.

Default
shadow-sm
Elevated
shadow-md

Use for:

dropdowns
modals
floating panels
important interactive surfaces

Avoid colored shadows such as:

shadow-[#4F8EF7]/30

as a default.

Blue glow should not be present on every primary interaction.

8. Spacing

Use Tailwind's standard 4px spacing scale.

General principles:

give content room to breathe
avoid dense dashboards
maintain consistent vertical rhythm
use whitespace to separate learning sections

Typical values:

gap-2
gap-3
gap-4
gap-6
gap-8
gap-10

Major learning sections should have more vertical space than utility controls.

9. Buttons

Buttons should communicate action clearly.

9.1 Primary Button

Primary actions use a solid brand color.

className="
inline-flex items-center gap-2
px-5 py-2.5
bg-[#4F8EF7]
text-white
font-semibold
text-sm
rounded-xl
hover:bg-[#3B76E6]
transition-colors
"

Use for:

Continue Learning
Start Learning
Save
Submit
Create Topic
9.2 Secondary Button
className="
inline-flex items-center gap-2
px-5 py-2.5
bg-white
text-slate-700
border border-slate-200
font-medium
text-sm
rounded-xl
hover:bg-slate-50
transition-colors
"
9.3 Soft Button
className="
inline-flex items-center gap-2
px-4 py-2
bg-blue-50
text-blue-600
font-medium
text-sm
rounded-xl
hover:bg-blue-100
transition-colors
"
9.4 AI Context Button

AI actions should look like learning tools.

Prefer:

Explain
Example
Expand
Simplify
Practice
Review

Instead of:

Ask AI
AI Mentor
Generate with AI
AI Assistant

AI-specific controls may use a subtle accent,
but should not visually dominate the screen.

10. Cards

Cards should be used intentionally.

Default Card
className="
bg-white
border border-slate-200
rounded-2xl
"

Cards should not automatically receive large shadows.

Flat Section

When possible, use a flat section instead of a card.

Example:

Continue Learning
────────────────────────────────────────

Intro to Data Science

████████████░░░░░░░░

42% complete

Continue →

This creates a calmer and more editorial interface.

11. Sidebar

The sidebar represents the student's learning environment.

It should not feel like an AI control center.

Navigation
HOME

Dashboard

LEARNING

Topics
Roadmaps
Assessments

INSIGHTS

Progress

────────────────

Settings

Do not place AI Mentor as a top-level navigation item.

AI should be available contextually inside learning experiences.

Active Navigation

Use:

bg-blue-50
text-blue-600

instead of gradient backgrounds.

Dark mode:

bg-blue-400/10
text-blue-400
12. Header

The header should remain simple.

Desktop:

┌─────────────────────────────────────────────────────────┐
│ Buddio     Dashboard        Search        Theme  Profile │
└─────────────────────────────────────────────────────────┘

Prioritize:

page title
search
language
theme
notifications
profile

Avoid decorative AI indicators in the header.

13. Dashboard

The dashboard is a learning home, not an AI control panel.

13.1 Greeting

Avoid:

Hello Reiner 👋

What would you like to learn today?
Your AI mentor is ready to guide your learning journey.

Prefer:

Good morning, Reiner.

Continue where you left off.

or:

Welcome back, Reiner.

Here is your learning progress.
14. Dashboard Priority

The visual hierarchy should be:

1. Continue Learning
2. Current Topics
3. Learning Progress
4. Recent Activity
5. Assessments
6. Statistics

AI should not be the first visual element.

15. Learning Progress

Prefer meaningful learning metrics.

Examples:

Topics in progress
2

Concepts explored
12

Overall progress
42%

Assessments
1 pending

Avoid excessive gamification.

Metrics such as:

AI quota
Chat usage
AI requests

should not appear in the main dashboard.

If usage information is necessary, place it under:

Settings → Usage
16. Learning Topics

Topic cards should communicate learning state.

Example:

Machine Learning

3 of 8 concepts completed

██████████░░░░░░  38%

Continue →

Avoid unnecessary AI labels.

Do not write:

AI-generated topic
AI-powered learning
AI mentor active

unless the information is actually important.

17. Roadmap

Roadmaps are one of Buddio's core visual identities.

The roadmap should visually communicate:

What I know
      ↓
What I'm learning
      ↓
What comes next

Example:

Machine Learning

✓ Introduction
│
✓ Supervised Learning
│
● Regression
│
○ Classification
│
○ Model Evaluation

Completed items should be visually quiet.

The current item receives the strongest emphasis.

Future items remain visible but subdued.

18. Knowledge Map

Knowledge maps should be treated as a primary Buddio experience.

They can use:

nodes
connections
whitespace
zoom
pan
expandable concepts

Avoid making the map look like a futuristic AI visualization.

Prefer a clean educational whiteboard.

19. AI Interaction

AI should be embedded into the learning context.

Example:

Regression

Regression is a method used to
predict a continuous value.

────────────────────────────

Need help with this concept?

[ Explain ] [ Example ] [ Practice ]

When the user selects Explain:

┌─────────────────────────────────┐
│ Regression                      │
│                                 │
│ Think of it as estimating a     │
│ value based on known patterns.  │
│                                 │
│ Example                         │
│ House size → predicted price    │
│                                 │
│ [Got it]                        │
└─────────────────────────────────┘

The AI response should feel like a learning aid,
not a separate chatbot page.

20. AI Chat

A full conversational interface may still exist.

However, it should be visually subordinate.

The user should understand:

I'm learning Machine Learning.
       ↓
I need help.
       ↓
AI helps me understand.
       ↓
I return to learning.

Not:

Open Buddio.
       ↓
Chat with AI.
       ↓
Everything happens inside chat.
21. Lesson / Materi System

The lesson system is one of Buddio's strongest visual identities.

Keep the existing content capabilities:

Markdown rendering
headings
callouts
mathematics
code
links
lists
tables
highlighting

The content should feel like a polished digital textbook,
not an AI-generated response.

22. Lesson Typography
H2

Use a clean heading.

Avoid excessive decorative bars.

Recommended:

Understanding Regression

with a subtle accent rather than a strong gradient decoration.

H3

Use normal typography hierarchy.

Avoid unnecessary symbols such as:

▸

unless they have a meaningful interaction.

23. Callouts

Callouts should feel like textbook notes.

Examples:

┌───────────────────────────────────┐
│ Note                              │
│                                   │
│ Regression predicts continuous    │
│ numerical values.                 │
└───────────────────────────────────┘

Use subtle background colors.

Avoid glowing corners and decorative radial effects.

24. Highlighting

Keep the four existing highlight colors:

yellow
green
blue
red

However, highlighting should resemble a study tool.

The interaction should feel like:

highlighting a textbook

rather than:

activating an AI feature.

25. Forms and Inputs

Inputs should be quiet and functional.

className="
w-full
px-4 py-3
text-sm
bg-white
border border-slate-200
rounded-xl
outline-none
focus:border-blue-400
focus:ring-2
focus:ring-blue-100
"

Avoid strong glowing focus states.

26. Badges

Badges should be used sparingly.

Use badges for:

difficulty
status
language
completion
category

Do not use badges for decorative AI branding.

Prefer:

Beginner
Intermediate
Completed
In Progress

instead of:

AI POWERED
SMART
AI ACTIVE
27. Icons

Use icons to improve navigation and recognition.

Do not use icons as decoration everywhere.

Preferred style:

simple
thin
consistent
18–20px
same visual weight

Avoid mixing many icon styles.

28. Emoji Policy

Emoji should be used minimally.

Avoid using emojis as part of important UI labels.

Prefer:

Good morning, Reiner.

instead of:

Hello Reiner 👋

Emoji can still appear in learning content when appropriate,
but should not define the product's visual language.

29. Landing Page

The landing page should introduce Buddio as a learning workspace.

Do NOT make an AI chat window the primary hero visual.

29.1 Hero Direction

Prefer:

A calmer way
to learn.

Understand concepts.
Connect ideas.
Keep the big picture.

[ Start Learning ]   [ See How It Works ]

Hero visual:

┌───────────────────────────────┐
│ Machine Learning              │
│                               │
│          Machine Learning     │
│                │              │
│       ┌────────┼────────┐     │
│       │        │        │     │
│ Regression Classification Data│
│       │                 │     │
│   Evaluation            │     │
│                               │
└───────────────────────────────┘

The visual should communicate learning,
not chatting.

30. Landing Page Messaging

Avoid:

Your AI Study Buddy

as the primary identity.

Avoid repeatedly mentioning:

AI mentor
AI-powered
AI assistant
AI learning

Prefer:

Your learning workspace.

or:

A calmer way to learn.

or:

Learn concepts. Connect ideas. Keep progressing.

AI can be introduced later as one of the supporting capabilities.

31. Authentication Pages

Authentication should be simple.

Use:

clean background
centered form
subtle brand accent
minimal decoration

Avoid:

large glowing blobs
excessive gradients
futuristic graphics
32. Dark Mode

Dark mode remains fully supported.

However, it should preserve the same learning-first philosophy.

Avoid:

dark background
+ glowing blue cards
+ purple gradients
+ neon buttons
+ glowing icons

Instead use:

dark background
+ readable surfaces
+ subtle borders
+ restrained blue accent
+ strong typography

Dark mode should feel like a comfortable study environment.

33. Motion

Motion should communicate state changes.

Use:

fade
slide
expand
collapse
progress

Avoid unnecessary:

scale
bounce
glow
spin
floating
33.1 Recommended Motion

Page entrance:

animate-in fade-in duration-200

Dropdown:

animate-in fade-in slide-in-from-top-1 duration-150

Drawer:

animate-in slide-in-from-left duration-200

Progress:

transition-all duration-500
34. Hover Behavior

Avoid excessive scaling.

Old:

hover:scale-[1.02]
hover:shadow-lg

New default:

hover:bg-slate-50
transition-colors duration-150

Cards can receive a subtle border/background change.

Interactive elements should feel responsive,
not animated.

35. Loading States

Loading should communicate what is happening.

Avoid:

AI is thinking...

when the operation is simply loading.

Prefer:

Loading lesson...
Preparing your roadmap...
Generating questions...

If an AI operation is actually occurring:

Building your learning map...

This keeps the language focused on the user's goal.

36. Empty States

Empty states should encourage learning.

Example:

No topics yet.

Start with something you want to understand.

[ Create Topic ]

Avoid:

No AI conversations yet.

unless the page is specifically a conversation history.

37. Error States

Errors should be human-readable.

Example:

Something went wrong.

We couldn't load this lesson.
Please try again.

[ Try Again ]

Avoid exposing technical AI/API terminology to students.

38. Responsive Design
Mobile
sidebar becomes drawer
content becomes single column
controls remain touch-friendly
learning content gets maximum width
knowledge maps support pan/zoom
avoid horizontal overflow
Tablet
compact navigation
content remains readable
cards may become two-column
Desktop
full sidebar
generous content width
learning workspace can use multiple panels when useful
39. Application Shell

Desktop:

┌──────────────┬───────────────────────────────────────┐
│              │ Header                                │
│              ├───────────────────────────────────────┤
│   Sidebar    │                                       │
│              │ Main Learning Workspace              │
│              │                                       │
│              │                                       │
└──────────────┴───────────────────────────────────────┘

The main workspace should feel more important than the shell.

The shell should stay visually quiet.

40. Content Width

For normal learning content:

max-w-4xl mx-auto

For knowledge maps or workspace interfaces:

max-w-6xl mx-auto

For full-screen whiteboard experiences:

w-full h-full

Do not unnecessarily constrain interactive learning maps.

41. Accessibility

All components must support:

keyboard navigation
visible focus states
sufficient color contrast
readable text
screen-reader labels
reduced motion preferences
touch-friendly targets

Never rely on color alone to communicate state.

42. Component Rules

Every new component should answer:

Does this help the student learn?
Is this visually consistent with Buddio?
Does this introduce unnecessary visual noise?
Does it make AI look more important than learning?
Can the same information be communicated more simply?

If the answer to #4 is yes, redesign the component.

43. AI-Specific Visual Rules

AI components may use a subtle secondary accent,
but they must not dominate the interface.

Avoid:

✨ AI
✨ Smart
✨ AI Powered
✨ AI Mentor

as decorative labels.

Prefer contextual actions:

Explain
Expand
Simplify
Example
Practice
Review

The user should care about the learning action,
not the technology performing it.

44. Do
prioritize learning content
use whitespace
use typography for hierarchy
use solid primary buttons
use subtle borders
use restrained shadows
use gradients sparingly
keep light mode calm
make AI contextual
make roadmaps and knowledge maps visually important
make progress meaningful
keep lessons readable
use consistent icons
preserve responsive behavior
preserve dark mode
45. Don't

Do not:

make every component gradient
make every card float
use blue glow everywhere
make AI the first thing users see
expose AI quota on the main dashboard
make AI Mentor a primary navigation destination
use excessive emojis
use excessive animations
turn every interaction into a chatbot
add unnecessary badges
create futuristic/neon visuals
introduce random colors
use excessive rounded containers
make dashboards feel like analytics software
sacrifice readability for visual effects
46. Design Decision Priority

When two design choices conflict, follow this order:

1. Learning clarity
2. Content readability
3. Usability
4. Visual hierarchy
5. Consistency
6. Brand identity
7. Decoration

Never sacrifice learning clarity for decoration.

47. Buddio's Visual Personality

Buddio should feel:

Calm
     ↓
Clear
     ↓
Structured
     ↓
Friendly
     ↓
Interactive

Not:

Futuristic
     ↓
Glowing
     ↓
AI-heavy
     ↓
Chat-centric
     ↓
SaaS-like
48. Final Design Rule

When designing any new Buddio screen, ask:

"If I removed the AI completely, would this still feel like a good learning product?"

If the answer is yes:

The design is on the right track.

If the answer is no:

The UI is probably relying too heavily on AI visual language.

49. Target Experience

The final Buddio experience should feel like:

A digital study desk.

The student opens Buddio and sees:

What am I learning?
        ↓
Where am I in the topic?
        ↓
What should I learn next?
        ↓
What don't I understand?
        ↓
How can I explore it?
        ↓
How much have I understood?

AI exists throughout this journey,
but it stays in the background until it is useful.

50. Design System Summary
PRODUCT
Learning Workspace

PRIMARY PRINCIPLE
Learning first, AI second

VISUAL STYLE
Calm / Clean / Educational / Spacious

PRIMARY COLOR
#4F8EF7

SECONDARY ACCENTS
Success / Warning / Danger

GRADIENT
Limited accent only

TYPOGRAPHY
Plus Jakarta Sans + Inter

CARDS
White / subtle border / moderate radius

SHADOWS
Subtle

ANIMATION
Purposeful and restrained

SIDEBAR
Learning-oriented

DASHBOARD
Progress-oriented

LESSON
Content-oriented

ROADMAP
Core experience

KNOWLEDGE MAP
Core experience

AI
Contextual assistant

DARK MODE
Supported, calm, non-neon

OVERALL FEEL
Digital Study Workspace
51. Implementation Principle

This document is the source of truth for future UI work.

When modifying existing components:

Preserve functionality.
Preserve existing data flow.
Preserve API behavior.
Preserve accessibility.
Preserve responsive behavior.
Preserve the lesson rendering pipeline.
Change visual presentation according to this guide.
Do not introduce a new visual system without updating this document first.

The goal is not to rebuild Buddio from scratch.

The goal is to evolve Buddio from:

AI SaaS Dashboard

into:

Learning Workspace with AI Assistance.
