# Buddio — UI Style Guide (Implemented)

> This document catalogs the **actual, implemented** visual language of the Buddio
> frontend (`apps/web`), based on the production code in `globals.css` and the page
> components. It is the reference for every styling decision — colors, typography,
> radius, shadows, components, the materi (lesson) content system, and dark mode.
>
> For the product-level design philosophy and brand rules, see
> [05-design-system.md](./05-design-system.md) and [12-brand-guideline.md](./12-brand-guideline.md).

---

## 1. Design Principles (in Code)

The codebase follows a single, consistent rule set:

1. **One brand gradient everywhere.** Primary actions, the logo, progress bars, and
   active states all use the blue→violet gradient `#4F8EF7 → #7C5CFF`.
2. **Soft surfaces, thin borders, generous radius.** Every container is a white (or
   slate) surface with a hairline border and `rounded-xl`/`rounded-2xl`.
3. **Friendly motion.** Hover scales (`scale-[1.02]`), fade/slide reveals, and smooth
   `transition-all` at 200–300 ms.
4. **Dark mode is first-class.** Each token has a dark counterpart; components always
   ship `dark:` variants.
5. **Content readability first.** The materi system (KaTeX math, callouts, code) is
   styled so students never see raw markdown.

---

## 2. Color Tokens

Defined in `apps/web/src/app/globals.css` under `:root` (light) and `.dark` (dark),
then mapped to Tailwind theme colors via `@theme`.

### 2.1 Light Theme

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#f8fafc` | App/body background |
| `--foreground` | `#1f2937` | Default text |
| `--surface` | `#ffffff` | Cards, sidebar, panels |
| `--border` | `#e2e8f0` | Hairline borders |
| `--muted` | `#f1f5f9` | Subtle fills, hover backgrounds |
| `--muted-foreground` | `#64748b` | Secondary / caption text |
| `--primary` | `#4f8ef7` | Primary blue (brand) |
| `--primary-dark` | `#3b76e6` | Primary hover / pressed |
| `--primary-foreground` | `#ffffff` | Text on primary |
| `--secondary` | `#7c5cff` | Violet (gradient partner) |
| `--secondary-foreground` | `#ffffff` | Text on secondary |
| `--accent` | `#facc15` | Yellow accent (logos, highlights) |
| `--success` | `#22c55e` | Correct / completed / online |
| `--warning` | `#f59e0b` | Warnings, demo-mode badge |
| `--danger` | `#ef4444` | Errors, destructive actions |
| `--ring` | `#4f8ef7` | Focus rings |

### 2.2 Dark Theme

| Token | Value | Notes |
|-------|-------|-------|
| `--background` | `#0f172a` | Slate-950 app background |
| `--foreground` | `#e2e8f0` | Slate-200 text |
| `--surface` | `#1e293b` | Slate-800 cards / sidebar |
| `--border` | `#334155` | Slate-700 hairline borders |
| `--muted` | `#1e293b` | Muted fills |
| `--muted-foreground` | `#94a3b8` | Slate-400 captions |
| `--primary` | `#60a5fa` | Brighter blue for contrast |
| `--secondary` | `#a78bfa` | Brighter violet |
| `--success` | `#4ade80` | Brighter green |
| `--warning` | `#fbbf24` | Brighter amber |
| `--danger` | `#f87171` | Brighter red |
| `--ring` | `#60a5fa` | Focus rings |

**Rule of thumb:** hard-coded hex values in components use the Slate scale
(`slate-50/100/200/500/700/800/900`, `dark:[#0f172a]/[#1e293b]/[#334155]`), and the
brand gradient is always the literal pair `#4F8EF7 → #7C5CFF`.

### 2.3 The Brand Gradient

The single most recognizable pattern in Buddio:

```jsx
bg-gradient-to-r from-[#4F8EF7] to-[#7C5CFF]
```

Applied to:

- Primary buttons & the "Sign Up Free" CTA
- The logo tile and the gradient SVG mark
- Progress bar fills
- Active sidebar indicator tint (`#4F8EF7/8`, dark `#60a5fa/12`)
- Avatar initials tiles and header icon chips

Supporting variant gradient (complete actions, e.g. "Selesai"):

```jsx
bg-gradient-to-r from-[#22C55E] to-emerald-400
```

---

## 3. Typography

| Token | Value | Usage |
|-------|-------|-------|
| Heading font | **Plus Jakarta Sans** | `--font-heading` — titles, headings, logo |
| Body font | **Inter** | `--font-body` — body, inputs, buttons |
| Fallback stack | `ui-sans-serif, system-ui, sans-serif` | via `--font-sans` |

Weights used: `font-medium` (500), `font-semibold` (600), `font-bold` (700),
`font-extrabold` (800).

| Element | Class pattern | Notes |
|---------|--------------|-------|
| Page title (dashboard) | `text-3xl sm:text-4xl font-extrabold tracking-tight` | Large hero heading |
| Page heading | `text-xl sm:text-2xl font-extrabold tracking-tight` | Materi step, section headers |
| Section title | `text-lg font-bold` | Header bar title |
| Card title | `text-base font-bold` | Small panel headings |
| Body | `text-sm` / `text-xs` | Primary content sizes |
| Caption / meta | `text-[10px] sm:text-[11px] text-slate-400/500` | Labels, timestamps |
| Micro label | `text-xs font-bold text-slate-400 uppercase tracking-wider` | Group labels ("Langkah Belajar", "Highlight:") |

Anti-aliasing and scroll smoothing are set globally; text selection highlights in the
brand blue.

---

## 4. Radius, Shadow, Spacing

### 4.1 Border Radius

| Level | Class | Used for |
|-------|-------|----------|
| Micro | `rounded-lg` | Small buttons, icon chips, tools |
| Standard | `rounded-xl` | Buttons, inputs, sidebar nav, prompts |
| Raised | `rounded-2xl` | Cards, containers, dropdowns, modals |
| Full | `rounded-full` | Avatars, badges, dots, progress containers |

### 4.2 Shadows

| Level | Class | Used for |
|-------|-------|----------|
| Subtle | `shadow-sm`, `shadow-xs` | Step actions, small elements |
| Default | `shadow-md shadow-[#4F8EF7]/15` | Primary CTAs (colored glow) |
| Strong | `shadow-lg` | Dropdowns, search results, modals |
| Hover | `hover:shadow-lg` | Interactive cards/buttons on hover |

### 4.3 Spacing

Tailwind default scale is used throughout (4 px base). Recurring rhythm:

- Page: `max-w-4xl mx-auto py-6 sm:py-8 space-y-8`
- Card interior: `p-4` / `p-5 sm:p-7` / `p-6 sm:p-8`
- Icon gaps: `gap-1.5` / `gap-2` / `gap-3` / `gap-4`

---

## 5. Buttons

### 5.1 Primary (gradient)

```jsx
className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4F8EF7] to-[#7C5CFF]
  text-white font-semibold text-sm rounded-xl shadow-md shadow-[#4F8EF7]/15
  hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
```

### 5.2 Soft / Secondary

```jsx
className="text-[#4F8EF7] bg-[#4F8EF7]/8 hover:bg-[#4F8EF7]/15
  border border-[#4F8EF7]/20 rounded-xl transition-all duration-200"
```

### 5.3 Ghost icon button

```jsx
className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50
  dark:hover:bg-[#334155] hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
```

### 5.4 Success (complete lesson)

```jsx
className="bg-gradient-to-r from-[#22C55E] to-emerald-400 text-white font-semibold rounded-xl
  shadow-md hover:scale-[1.02] transition-all duration-300"
```

### 5.5 Danger / Destructive

```jsx
className="text-rose-500 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10"
```

All buttons disable with `disabled:opacity-50 disabled:cursor-not-allowed`.

---

## 6. Cards, Forms, Badges

### 6.1 Card

```jsx
className="bg-white dark:bg-[#1e293b] border border-slate-100 dark:border-[#334155] rounded-2xl"
```

### 6.2 Input

```jsx
className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-[#0f172a] border border-slate-100
  dark:border-[#334155] rounded-xl outline-none focus:border-[#4F8EF7] focus:bg-white
  dark:focus:bg-[#0f172a] transition-all placeholder-slate-400 dark:placeholder-slate-500"
```

### 6.3 Badge / Chip

```jsx
className="inline-flex items-center px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold
  bg-amber-50 border border-amber-100 rounded-full uppercase tracking-wider"
```

Palette-coded variants use soft 50-level backgrounds with a matching border:
`emerald` (easy/mudah), `amber` (medium/sedang), `rose` (hard/sulit),
`slate` (fallback).

### 6.4 Status dot

```jsx
<span className="absolute top-2 right-2.5 w-2 h-2 bg-[#7C5CFF] rounded-full
  border border-white dark:border-[#1e293b]" />
```

### 6.5 Progress bar

```jsx
<div className="h-2.5 w-full bg-slate-100 dark:bg-[#334155] rounded-full overflow-hidden">
  <div className="h-full bg-gradient-to-r from-[#4F8EF7] to-[#7C5CFF]
    rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
</div>
```

### 6.6 Error banner

```jsx
className="text-xs bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30
  text-rose-600 dark:text-rose-400 rounded-xl px-4 py-3"
```

---

## 7. Application Shell

### 7.1 Sidebar

- Fixed left rail: `bg-white dark:bg-[#1e293b] border-r border-slate-100 dark:border-[#334155]`.
- **Responsive:** desktop `lg:w-64` (full), tablet `sm:w-20` (icon-only), mobile hidden
  (replaced by a sliding drawer with a `bg-slate-900/40 backdrop-blur-xs` backdrop).
- Active nav item: `bg-[#4F8EF7]/8 dark:bg-[#60a5fa]/12 text-[#4F8EF7] dark:text-[#60a5fa] font-semibold`.
- Hover: `hover:bg-slate-50 dark:hover:bg-[#1e293b] hover:text-slate-900 dark:hover:text-slate-100`.
- Collapsed items show a tooltip on hover.
- Bottom profile card: gradient avatar initials + emerald "online" dot; logout in rose.

### 7.2 Header

- `sticky top-0 z-20 h-16` with `bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b`.
- Contains: mobile menu button, page title, search, theme toggle, language toggle
  (ID/EN), notification bell (with violet badge dot), and profile menu.

### 7.3 Main content area

- Offset left by the sidebar (`sm:pl-20 lg:pl-64`), padded `p-4 sm:p-6 lg:p-8`,
  background `bg-[#F8FAFC] dark:bg-[#0f172a]`.

### 7.4 Landing / auth shells

- Sticky blurred navbar (`bg-white/80 backdrop-blur-md`).
- Auth page background uses decorative blurred gradient blobs
  (`bg-[#4F8EF7]/10`, `bg-[#7C5CFF]/10`, `blur-3xl`).

---

## 8. The Materi (Lesson) Content System

Rendered by `HighlightableContent.tsx` with styling in `globals.css` — this is the most
distinctive part of the UI.

### 8.1 Headings

- `h2`: relative positioned; a 4 px gradient bar (`primary → secondary`) appears to the
  left via `::before`, with rounded corners.
- `h3`: prefixed with a `▸` character in brand blue.
- In dark mode: `h2 → #f1f5f9`, `h3 → #e2e8f0`, paragraph/list text `→ #cbd5e1`,
  `strong → #f8fafc`, `em → #94a3b8`.

### 8.2 Callouts

Friendly boxed notes generated from `> [!type]` markdown, class `.materi-callout`:

- Rounded, position-rel, hover translates right 2 px.
- A soft radial glow sits in the top-right corner.
- Light theme uses soft gradated backgrounds (`teal-50`, `slate-50`, etc.); dark theme
  maps each tint to a translucent dark fill (e.g. `rgba(30, 58, 138, 0.25)` for blue).

### 8.3 Mathematics (KaTeX)

- `$...$` inline → `.materi-math-inline`, `$$...$$` display → `.materi-math-block`.
- Display blocks: centered, `white-space: nowrap`, horizontal-scrollable,
  `rounded-lg`, small padding.
- `.katex-display` margin reset inside blocks; a fallback (unparseable formula) renders
  as muted italic text.

### 8.4 Code, links, lists, tables

- Code blocks `.materi-code`: near-black fill (`#0c1222` dark), slate border.
- Inline code: tinted badge (blue text in dark mode).
- Links get a `↗` superscript hint after the text.
- Non-callout blockquotes get a `💬` marker.
- Ordered lists: numbered markers in brand blue, bold.
- Tables: header row tinted with caption color; rows separate on dark. 

### 8.5 Highlighting

- Four colors: **yellow, green, blue, red**, managed via `useHighlights`.
- Toggle button switches to "Mode Aktif" (amber tint) to enable selecting text.
- Marks render with a colored underline; floating `.highlight-card` /
  `.highlight-popup` panels open on mark click (dark-mode aware).

### 8.6 Dark-mode override table

All materi components have explicit dark rules — do not add new dark styles without
consulting `.dark` block near the end of `globals.css`.

---

## 9. Motion & Interaction

| Pattern | Implementation |
|---------|----------------|
| Enter reveal | `animate-in fade-in duration-300` on page containers |
| Dropdown reveal | `animate-in fade-in slide-in-from-top-1 duration-200` |
| Drawer | `animate-in slide-in-from-left duration-300` |
| Button hover | `hover:scale-[1.02]` + `hover:shadow-lg` |
| Icon hover | `group-hover:*` transforms (e.g. `rotate-90`, `scale-105`, `rotate-12`) |
| Progress fill | `transition-all duration-500` |
| Loading | `Loader2` with `animate-spin`, brand blue; overlays use `bg-slate-950/40 backdrop-blur-xs` |

---

## 10. Responsive & Layout Conventions

| Breakpoint | Behavior |
|------------|----------|
| `< sm` (mobile) | Drawer navigation; stacking grids; icon-only search |
| `sm` (tablet) | Collapsed icon sidebar (`sm:w-20`) |
| `lg` (desktop) | Full sidebar (`lg:w-64`); multi-column grids (e.g. `lg:grid-cols-4`) |

Common content shell:
```jsx
<div className="max-w-4xl mx-auto py-6 sm:py-8 space-y-8 animate-in fade-in duration-300">
```

---

## 11. Do / Don't

**Do**
- Use the brand gradient for the primary action on any page.
- Ship `dark:` variants for every surface, border, and text color.
- Use `rounded-xl`/`rounded-2xl` and hairline `slate-100` (dark `#334155`) borders.
- Use Tailwind's semantic classes (`text-sm`, `font-semibold`, `text-slate-500`) — the
  codebase does not use component libraries or CSS-in-JS.

**Don't**
- Introduce new hex colors outside the palette above (or the slate scale).
- Replace the gradient blue→violet with solid fills.
- Add raw markdown-looking text to the materi renderer (math/callouts must go through
  the protect → KaTeX → sanitize pipeline).
- Skip `disabled:` and `loading` states on interactive buttons.