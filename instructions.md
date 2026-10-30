# MASTER PROMPT: Build a minimalist "blueprint-style" developer portfolio

You are an expert senior front-end engineer and designer. Build a pixel-perfect, production-ready personal portfolio website that matches the design system described below. Do not invent a different style. Follow every spec literally. Where I give approximate values, stay within about 2px of them.

IMPORTANT ABOUT CONTENT: Every name, initial, photo, quote, bio, project, company, school, handle and link that appeared in my reference screenshots or on the reference site belongs to OTHER people. Never use any of it. I will provide my own details (name, initials/monogram, avatar, bio, experience, education, projects, tech stack, links, resume, quote) later when I start coding. Until then, build everything with clearly marked placeholder data (for example "Your Name", "YN", "Company Name", "Project Title") stored in typed data files, never hard-coded inside components. Make every placeholder trivially easy to replace.

====================================================================
READ FIRST: HOW TO USE THE REFERENCE REPO
====================================================================
This design is inspired by the open-source portfolio at https://github.com/ncdai/chanhdai.com (MIT license) and the live site https://chanhdai.com. Use them in REFERENCE-ONLY mode.

DO:
- Before writing code, open the reference repo and live site. Note the exact spacing, border treatments and component structure for the primitives: header, hatch separator, section title bars, crosshair marks, project card, command palette, collapsible experience items, theme toggle, and the Stack (tech stack) section.
- Study structure, component composition, Tailwind patterns and interaction details there to confirm visual accuracy.
- Then write MY OWN implementation from scratch, following the spec below.

DO NOT:
- Clone or fork the repo, or paste its files wholesale.
- Copy any of the author's personal data, name, wordmark/logo, avatar, copy text, manifest icons or config. His TRADEMARK.md says the names chanhdai / ncdai, the wordmark and mark, his likeness, and any presentation close enough to be mistaken for his site are NOT covered by the MIT license.
- Make a near-identical clone. The result must be recognizably MY site: my monogram, my avatar, my content, my own component code and naming.

If any short snippet is adapted closely from the repo, keep it minimal, keep the MIT notice where required, and add a credit line "Design inspired by chanhdai.com (MIT)" in the README and in the footer.

Where this prompt and the reference differ, THIS PROMPT WINS.

Some sections here (Spotify card, GitHub activity graph, dynamic status line, page-view counter, pixel cat) may not exist in the reference. Build them from this spec.

====================================================================
0. TECH STACK (required)
====================================================================
- Next.js (latest, App Router) + TypeScript (strict)
- Tailwind CSS v4 (CSS-first config with @theme, OKLCH/lab colors, CSS variables for tokens)
- shadcn/ui as the primitive layer (Button, Badge, Collapsible, Command / CommandDialog, DropdownMenu, Tooltip, Sheet for the mobile menu)
- next-themes for dark/light mode (default = DARK, class strategy, no flash on load)
- Fonts via the `geist` package: Geist Sans (body/UI), Geist Mono (kbd, code, tags where needed), Geist Pixel (Square variant for headings and the name; Grid variant for decorative accents). Expose them as CSS variables: --font-sans, --font-mono, --font-pixel-square, --font-pixel-grid. Fall back to system-ui / ui-monospace.
- lucide-react + simple-icons or react-icons for brand icons (GitHub, X/Twitter, LinkedIn, Medium, Spotify, Mail)
- motion (Framer Motion) for subtle animation
- react-activity-calendar (or a custom SVG component) for the GitHub contribution graph
- cmdk (via shadcn Command) for the Ctrl/Cmd+K palette
- MDX or JSON/TS data files for content
- Deploy target: Vercel

====================================================================
1. GLOBAL DESIGN LANGUAGE ("the essence")
====================================================================
Mood: dark, quiet, technical, editorial. It feels like an architect's blueprint or graph paper: a single narrow centered column framed by hairline borders that run the full height of the page, with horizontal hairlines that run the full width of the viewport. Sections are separated by diagonal-hatch bands. Small "+" crosshair marks sit where the lines intersect. Everything is monochrome (black, white, greys); the only color accent is a blue verified badge. Typography is clean Geist, with pixel-font headings for personality.

Layout skeleton:
- Page background fills the full viewport. A centered content container has max-width 768px (Tailwind max-w-3xl), with a 1px vertical border on its left and right edges that spans the ENTIRE page height (top of header to bottom of footer).
- Outside the container (the left and right gutters) the page is empty background, but the horizontal hairlines and hatch bands still extend edge to edge across the whole viewport.
- Every section title sits in a "title bar": a full-viewport-width 1px line above and below the heading row. The heading text itself sits inside the container with ~16px left padding (the text starts roughly 16px inside the left border).
- Between major sections there is a SEPARATOR BAND: a full-width strip about 24-26px tall filled with a diagonal-hatch pattern (thin 45° lines at very low opacity), with a hairline above and below it. Inside the container it is interrupted by the vertical borders (the vertical lines continue through it).
- Crosshair marks: a small "+" (about 11px, 1px stroke, muted color) is drawn exactly at the intersections of the container's vertical borders and certain horizontal hairlines. Place one pair under the top dotted banner (left and right, at the line below the banner) and one pair at the footer's top or bottom line. Build a reusable <CrossMark /> absolutely positioned at -translate-x/y-1/2 on the corner.
- The inner content has horizontal padding of 16px (px-4) on desktop and about 8px (px-2) on mobile outer padding.

Design tokens (dark theme; define as CSS variables, and also define a light theme that mirrors them):
- --background: near-black, approximately #09090b / #0a0a0a (neutral, no blue tint, not pure #000)
- --foreground: approximately #fafafa (lab 98.26 0 0)
- --muted-foreground: approximately #a1a1aa / #8b8b93 (secondary text, subtitles, dates, tags)
- --border: approximately #1f1f1f to #262626 (very subtle hairlines; computed ~lab(21 0 0))
- --card / --secondary (chips, spotify card, link buttons): slightly lighter than background, approximately #0f0f11 to #141416, with a 1px border in --border
- --accent-blue (verified badge only): #1d9bf0
- --status-idle: grey dot (#6b6b73); --status-active: green dot (#22c55e)
- Border radius: 8px for buttons and chips (rounded-lg), 12px for cards (rounded-xl), 6px for small tags (rounded-md), full for the avatar ring and icons in circles
- Light theme: background #ffffff / #fafafa, foreground #09090b, border #e5e5e5, muted #6b7280, the hatch pattern and the dots inverted to dark at low opacity.

Typography scale (desktop):
- Name (hero): Geist Pixel Square, ~28-32px, weight normal, letter-spacing slightly wide, followed by an inline blue verified-check icon (about 20px, optional, controlled by a flag in profile data)
- Section headings (About, Connect, GitHub Activity, Stack, Experience, Education, Projects): Geist Pixel Square, ~24-28px, regular weight, foreground color
- Tagline / subtitle under the name: Geist Sans ~14px, muted color
- Status line: ~12px, muted, with a 6px colored dot before it
- Body text (About bullets): Geist Sans 15px / line-height 24px, foreground at ~90% opacity
- Item titles (company, school, project title): Geist Sans 16px, weight 500-600, foreground
- Role / degree line: 16px weight 500; secondary segments in muted color
- Meta lines (type, dates): 14px muted, with a thin vertical divider ("|") between segments, using a dash format like "MM.YYYY – MM.YYYY"
- Tag chips: 12px, Geist Mono or Geist Sans, padding 2px 8px, 1px border, rounded-md, muted-foreground text, transparent or slightly lighter background
- Tiny caps text ("SYNCED 12:46 PM", quote author): 10-11px uppercase, tracking-wider, muted

Spacing rhythm: sections are built from rows. Each row has py of about 16-24px. Heading bar height ~36px, hatch separator ~25px, list items ~120-155px. Use a 4px base grid.

====================================================================
2. BACKGROUND / DECORATIVE ELEMENTS (all built with pure CSS, nothing imported)
====================================================================
A) Dotted banner (top of the home page, under the header, and again at the very bottom of the footer)
- Height ~130px on top (dots area), ~20px at the bottom. Full container width with ~16px inner margin.
- Pattern: tiny dots (1.5px) on a ~12px grid, color = foreground at ~15-20% opacity. CSS:
  background-image: radial-gradient(circle, color-mix(in oklab, var(--foreground) 18%, transparent) 1px, transparent 1.5px);
  background-size: 12px 12px;
- Optionally add a faint mask/fade at the edges. Optionally allow a subtle animated shimmer: dots near the cursor brighten (nice-to-have, must respect prefers-reduced-motion).

B) Diagonal hatch separator
  .hatch {
    height: 25px;
    background-image: repeating-linear-gradient(
      315deg,
      color-mix(in oklab, var(--foreground) 10%, transparent) 0,
      color-mix(in oklab, var(--foreground) 10%, transparent) 1px,
      transparent 0,
      transparent 50%
    );
    background-size: 8px 8px;
    border-block: 1px solid var(--border);
  }
  It must span the full viewport width (use a full-bleed technique like w-screen + left-1/2 -translate-x-1/2, or place it outside the constrained container).

C) Vertical frame lines: two absolutely positioned 1px elements (or border-x on the container) running the full document height, colored --border.

D) Full-bleed horizontal lines: implement a <ScreenLine /> component (a 1px full-viewport-width line, using the same full-bleed technique) and reuse it above and below every heading bar.

E) Crosshair "+" marks: see section 1.

F) Header shadow: the sticky header gains a faint shadow (0 0 16px 0 rgba(0,0,0,.08) light, rgba(0,0,0,1) dark variants) once the page is scrolled (data-affix attribute toggled by an IntersectionObserver or scroll listener), with a 300ms transition. The header has a bottom hairline that is also full width.

The page background itself is flat near-black. No image, gradient or texture sits behind it.

====================================================================
3. GLOBAL COMPONENTS
====================================================================
3.1 Sticky Header (z-50, bg-background, full-bleed hairline underneath, container max-w-3xl)
Desktop (>=768px), left to right:
- Logo: my initials as a bold chunky blocky/pixel monogram (placeholder "YN"), ~24px tall, foreground color, links to "/". Make it a single replaceable component/SVG.
- Right side nav: "Home", "Projects", a "More" item with a small chevron-down that opens a dropdown (placeholder items: Blog, Certifications, Uses, Bookmarks), 14px, muted by default, foreground on hover/active, with a visible white focus ring on keyboard focus (rounded-sm, 1px offset).
- A search pill: magnifier icon + two <kbd> keycaps "Ctrl" and "K" (rounded, bordered, tiny mono text). Rounded-full, 1px border, height ~30px. Clicking it, or pressing Ctrl/Cmd+K, opens the command palette.
- A thin vertical divider.
- Theme toggle: icon button (moon in dark mode, sun in light), cycles light/dark with an animated icon swap.
Mobile (<768px):
- Logo shown inside a 1px bordered square box (~40px), then a "Search" button (magnifier + "Search" label), theme toggle, and a hamburger menu button that opens a shadcn Sheet with the nav links.

3.2 Command palette (Ctrl/Cmd+K)
shadcn CommandDialog with groups: Navigate (Home, Projects, Blog, ...), Social links (GitHub, Twitter, LinkedIn, Mail, Medium, Resume), Theme (Light, Dark, System), and Copy email. Includes a fuzzy search input and keyboard navigation.

3.3 Section Title Bar component
<SectionTitle>Title</SectionTitle> renders: full-bleed hairline, heading row (pixel font, container-padded), full-bleed hairline below.

3.4 Hatch separator, CrossMark, ScreenLine components (see section 2).

3.5 Footer
- Preceded by a hatch separator.
- Container row (height ~80px): left, two lines of tiny monospace text (~11px, muted): "© <year> <my-handle>" and a configurable footer tagline (placeholder "Built with Next.js, Tailwind and coffee"). Add a small credit line "Design inspired by chanhdai.com". Right, the animated PIXEL CAT (section 3.6).
- Below that: a thin dotted band (see 2A) and the container frame lines end with crosshair marks.

3.6 PIXEL CAT (footer, bottom-right) - exact sprite data provided
Component: <PixelCat />. Size ~48px (3x scale of a 16x16 sprite). Render each sprite as inline SVG: one <rect width="1" height="1"> per non-empty cell inside viewBox="0 0 16 16", with shape-rendering="crispEdges" and CSS image-rendering: pixelated. Do not blur or anti-alias.

Palette (use CSS variables so light/dark can tweak them):
  k = outline  #1a1a1e   (in dark mode the outline blends into the background; that is intended)
  w = fur      #f5f5f5
  g = shade    #c4c4cc
  b = eyes     #3b9cff
  p = pink     #ff96aa   (nose, inner ears, sleeping cheek)
  r = collar   #e5484d
  y = bell     #ffd24a
  z = z-particle #a0a0aa
  . = transparent

Frame SIT_OPEN (sitting upright, blue eyes, collar with bell):
  ................
  ..kk........kk..
  .kwwk......kwwk.
  .kwpwkkkkkkwpwk.
  .kwwwwwwwwwwwwk.
  .kwwbbwwwwbbwwk.
  .kwwbkwwwwbkwwk.
  .kwwwwwppwwwwwk.
  ..kwwwwkkwwwwk..
  ...kkkkkkkkkk...
  ...krrrrrrrrk...
  ..kwwwwyywwwwk..
  ..kwwwwwwwwwwkk.
  ..kwwwwwwwwwwkwk
  ..kwwgkwwkgwwkwk
  ..kkkkkkkkkkkkk.

Frame SIT_BLINK (same as SIT_OPEN but rows 5 and 6 replaced):
  row 5: .kwwkkwwwwkkwwk.
  row 6: .kwwwwwwwwwwwwk.

Frame SLEEP (curled-up loaf, head on the left, closed eye, pink cheek, shaded tail along the bottom):
  ................
  ................
  ................
  ................
  ................
  ..kk............
  .kwwk...........
  .kwwwkkkkkkkk...
  .kwwwwwwwwwwwkk.
  .kwkkwwwwwwwwwk.
  .kwwwwwwwwwwwwwk
  .kwpwwwwwwwwwwwk
  ..kwwwwwwwwwwwgk
  ...kwgggggggggk.
  ....kkkkkkkkkk..
  ................

Behavior:
- Default state: SLEEP, with 2-3 tiny "z" pixel particles (2x2 or 3x3 px squares/letters in color z) that drift up and to the right from the cat's head, fading out, looping every ~2.5s (CSS keyframes, staggered).
- On hover, focus or click: wake up. Show SIT_OPEN, with a SIT_BLINK frame every ~4s for ~150ms. The "z" particles stop.
- After ~8s without hover/focus, return to SLEEP.
- Make it a <button> with aria-label "Pixel cat, click to wake or sleep", keyboard focusable (Enter/Space toggles).
- Respect prefers-reduced-motion: no particles, no blink, just toggle between the two static frames.
- Keep frames in /data/pixel-cat.ts as string arrays + the palette so I can edit the art later.

====================================================================
4. PAGE: HOME ( / )
====================================================================
Order of sections, top to bottom:
1. Dotted banner (130px)
2. Hero / profile
3. Hatch separator
4. About
5. Hatch separator
6. Connect
7. Hatch separator
8. GitHub Activity
9. Hatch separator
10. Stack (tech stack)
11. Hatch separator
12. Experience
13. Hatch separator
14. Education
15. Hatch separator
16. Quote
17. Hatch separator
18. Footer

4.1 HERO / PROFILE ROW (below a hairline with crosshair marks at the container corners)
- Layout: flex row, padding 16-20px, gap 20px.
- Avatar: 128x128px square with rounded-xl corners and a 1px border ring with ~4px inner padding (a framed photo look). Image is my avatar (provided later; placeholder image until then), object-cover. Use next/image with priority.
- Right of avatar, a column:
  - Top row: a small half-filled circle icon button (~14px; a tooltip/button that plays an audio pronunciation of my name; hide it if no audio file is provided). On the far right: an eye icon + live page-view counter (placeholder "1,024" in muted tabular numbers, 12px).
  - Name: "Your Name" in Geist Pixel Square, optionally followed by the blue verified badge (flag in data).
  - Tagline: rotating text under the name. Two placeholder lines ("Your tagline" and "Age • Role") that rotate with a vertical flip/blur transition every ~3-4 seconds. Muted.
  - Status line: a small dot + text like "Idle · Currently sleeping" (grey dot at night) or "Coding · Cooking something" (green dot with a soft pulse). Make this DYNAMIC: derive from the local time in a configurable timezone (placeholder: UTC; I will set mine): sleeping 00:00-07:00 (idle), coding during the day, etc. Later it can be wired to WakaTime or Discord Lanyard presence.
- Mobile: avatar ~160px on the left, text column to its right, same ordering.

4.2 ABOUT
- Title bar "About".
- 3 bullet points (my personal bio goes here, placeholders for now), rendered as a <ul> with tiny muted round bullets (5px, muted color) hanging to the left. Text 15px, line-height 24px, spacing between items 8px, padding 16px.
- Below the bullets: SPOTIFY "LAST PLAYED / NOW PLAYING" CARD, horizontally centered, width ~384px max (full width on mobile), rounded-2xl, 1px border, card background slightly lighter than the page, padding 16px. Inside: a circular album cover (~64px, rotating slowly like a vinyl when currently playing, static when "last played") on the left, then a text stack: tiny muted status ("● Last played" or an animated equalizer + "Now playing"), track title in bold 16px (truncate), artist(s) in muted 12-13px; on the right a Spotify glyph in a ~28px circle. Under the card, tiny uppercase muted text "SYNCED 12:46 PM" (timestamp of last sync) aligned to the card's left edge. The whole card links to the track on Spotify.
- Data source: server route (/api/spotify) using the Spotify Web API refresh-token flow (currently-playing, falling back to recently-played), cached (revalidate ~60s). Use mock data (placeholder track and artist) until I add credentials. Hide the card gracefully if there is no data and no credentials.

4.3 CONNECT
- Title bar "Connect".
- A flex-wrap row of link buttons (gap 8px, padding 16px). Each button: height ~36px, px 12px, rounded-lg, 1px border, secondary background (very dark grey), icon (16px) + label (14px, weight 500). Hover: lighter bg and border brighten. Buttons: GitHub, Twitter (X icon), LinkedIn, Mail, Medium, Resume (paperclip icon, opens PDF). All external links: target="_blank" rel="noopener noreferrer". Driven by /data/socials.ts; skip any entry without a URL.

4.4 GITHUB ACTIVITY
- Title bar "GitHub Activity".
- Above the graph, right-aligned: a small status chip with a tiny icon and text "Didn't code today" (or "Coded today" / "N contributions today") in 12px muted.
- The contribution graph: full calendar year Jan to Dec (53 weeks), cells ~10px with 3px gap, border-radius 2px, MONOCHROME scale (5 levels from nearly invisible dark grey #1b1b1d up to near-white #e5e5e5; no green). Left day labels "Mon", "Wed", "Fri" (10px muted). Top month labels (10px muted) aligned to the week columns. Footer row: left "N activities in <year>" (tiny muted text), right legend "Less [5 squares] More". Horizontally scrollable on mobile. Tooltip on hover per cell ("3 contributions on Mar 4").
- Data from the GitHub GraphQL API (contributionsCollection) via a server route with a PAT env var, cached (revalidate 1h). Mock data until I add a token. Show a skeleton while loading.

4.5 STACK (tech stack) - modeled on the "Stack" section of chanhdai.com
- Title bar "Stack" (same pixel-font title bar as the other sections).
- Content is split into NUMBERED CATEGORY GROUPS, like the reference: each group has a small muted label made of a two-digit index and a name ("01 Language", "02 Frontend", "03 Backend & Database", "04 Workflow & AI", "05 Analytics", "06 Design"), followed by a wrap of technology items. Stack groups vertically with ~16px gaps and keep all padding at the standard 16px.
- Each technology is a link (target="_blank", rel="noopener noreferrer") to the official site, with an aria-label of its name. Render each as a compact chip: rounded-lg, 1px --border border, secondary/card background, a 16-20px brand logo (SVG via simple-icons or inline), and, if the reference chips show a text label, the technology name in 13-14px. Before building this section, open https://chanhdai.com#stack and match the exact chip style (icon-only vs icon + label, sizes, gaps, hover) as closely as the rules in "READ FIRST" allow.
- In dark mode, render dark logos (Next.js, GitHub, Vercel, etc.) in foreground color via currentColor; keep colored logos slightly desaturated so the page stays essentially monochrome.
- Hover: border and background brighten (150ms), optional 1px lift. Add a shadcn Tooltip with the name if the chip is icon-only.
- Data from /data/tech-stack.ts: [{ id: "01", title: "Language", items: [{ key, name, href, icon, theme?: "light" | "dark" | "both" }] }]
- Placeholder groups and items (I will send my final list later):
  01 Language: TypeScript, JavaScript, Python
  02 Frontend: React, Next.js, Tailwind CSS, shadcn/ui
  03 Backend & Database: Node.js, PostgreSQL, Redis
  04 Workflow & AI: Git, GitHub, Docker, Vercel
  05 Design: Figma
- Mobile: groups stack naturally and chips wrap, with no horizontal scroll.

4.6 EXPERIENCE
- Title bar "Experience".
- A list; each entry is a row separated from the next by a full-width hairline, padding ~20px 16px.
- Entry structure:
  - Line 1: a small muted dot bullet + COMPANY NAME (16px, weight 600).
  - Line 2 (the role row): a 32px rounded-lg square icon box with 1px border containing a "</>" code icon (or briefcase), then the ROLE TITLE (16px, weight 500). On the far right a "chevrons up-down" icon button (Collapsible toggle).
  - Line 3 (under the role title, aligned with it): meta "Employment type | MM.YYYY – MM.YYYY" (14px muted; type, vertical divider, date range).
  - Line 4: tech-stack tag chips in a wrap row (gap 6px).
  - The Collapsible content (hidden by default, animated height) reveals 3-5 bullet points describing responsibilities and achievements (muted text, 14px).
- Placeholder entries: two generic roles at "Company Name" with sample skills and sample bullets. Replace with my real data later.
- Data shape: { company, logo?, roles: [{ title, type, start, end, icon, skills[], description[] }] }.

4.7 EDUCATION
- Same pattern as Experience, but the icon box holds a graduation-cap icon.
- Line 1: institution name. Line 2: DEGREE (500 weight, foreground) · FIELD (muted), plus the expand chevron on the right. Line 3: years "YYYY – YYYY" (muted 14px). Expandable details (optional: grade, achievements).
- Placeholder: 3 generic entries (university, high school, junior school).

4.8 QUOTE BLOCK
- Wrapped in hatch separators above and below. Content centered with ~64px vertical padding.
- A large, bold, filled closing-quote glyph (~48px, muted grey) at the top center.
- The quote in italic Geist Sans ~24px / line-height 32px, foreground, max-width ~640px, centered, wrapped in straight quotes. Below it, the author in uppercase 12px tracking-widest muted text, flanked by short horizontal rules ("—— AUTHOR NAME ——").
- Placeholder quote and author in /data/quote.ts. Hide the block entirely if the data is empty.

====================================================================
5. PAGE: PROJECTS ( /projects )
====================================================================
- Same header and frame. Start with a hatch band under the header, then a title bar "Projects" (pixel font).
- Intro paragraph (16px, muted, ~2 lines, placeholder text) inside the container with a hairline below.
- Project grid: 2 columns on desktop (each column ~50% of the container, with a 1px vertical divider between columns), 1 column on mobile. Each row of cards is separated by a full-bleed hairline (and has padding).
- PROJECT CARD (key component):
  - Outer: rounded-xl, DASHED 1px border (border-dashed, --border color), padding 8px, subtle bg.
  - Thumbnail: 16:9-ish (about 340x208) rounded-lg image, object-cover, with a 1px inner border; on hover the image scales ~1.03 smoothly. Supports a video preview that plays on hover (optional).
  - Title row: project name (Geist Sans 16px, weight 600) left; date "MM.YYYY" (14px muted, tabular) right.
  - Description: 14px muted, line-height 20px, 4-6 lines max.
  - Tech tags (wrap row, gap 6px, same chip style as experience).
  - Footer bar: a dashed top border, split into two equal buttons separated by a dashed vertical divider: "Live link" (centered text, optional external-arrow icon) | "GitHub" + GitHub icon. Each is a full-height hover-highlight target (hover: bg lighter). If a project has only one link, show a single full-width button.
- Placeholder projects: 4 cards (a web app, an AI/LLM app, a backend/API project, an ML app) with placeholder images. I'll provide the real data, images and links later. Data shape: { slug, title, date, description, image, tags[], liveUrl?, githubUrl? }.
- Optional: a /projects/[slug] detail page rendered from MDX with the same frame and title bars.

====================================================================
6. OTHER PAGES ("More" menu)
====================================================================
Create minimal stub pages that reuse the same frame, hatch separators and title bars: /blog (list + MDX posts), /certifications, /uses (optional). Hide anything I don't fill in.

====================================================================
7. INTERACTIONS AND MOTION
====================================================================
- Sections fade/slide up 8-12px on first view (motion whileInView, once, 300-400ms ease-out), with a light stagger on list items. Respect prefers-reduced-motion.
- Link/button hover: border and background brighten, 150ms transitions.
- Collapsible chevron rotates and content height animates (Radix Collapsible + CSS keyframes).
- Theme switch: smooth color transition, with a View Transition circular reveal if supported (nice-to-have).
- Header gains a shadow on scroll (see 2F).
- Avatar: subtle hover tilt or a hidden easter egg (optional).
- Page-view counter: increments once per session via a server route backed by Upstash Redis (or Vercel KV / Supabase). Display with animated number counting. Fall back to hiding the counter if no backend is configured.
- Keyboard shortcut Ctrl/Cmd+K opens the palette; Esc closes. All interactive elements have visible focus rings (2px white/foreground ring, rounded).
- Pixel cat behavior: see 3.6.

====================================================================
8. RESPONSIVENESS
====================================================================
- Mobile-first. Breakpoints: sm 640, md 768, lg 1024.
- Below 768px the container uses the full width with 8px outer padding and the vertical frame lines sit at the screen edges; hatch bands, hairlines and the dotted banner still show.
- Header collapses as described in 3.1. Projects grid collapses to 1 column. The GitHub graph scrolls horizontally with the latest weeks visible first. Spotify card is full width. Stack groups wrap.
- Use overflow-x-clip on main and body to avoid horizontal scroll caused by the full-bleed lines.

====================================================================
9. SEO, PERFORMANCE, ACCESSIBILITY
====================================================================
- Metadata API: title "<My Name> | <My Role>", description, Open Graph and Twitter cards with a dynamic OG image (app/opengraph-image.tsx), canonical URL, favicon (my monogram), sitemap.xml, robots.txt, JSON-LD Person schema. All values come from /data/profile.ts.
- next/image everywhere, fonts via next/font (self-hosted), no layout shift, Lighthouse 95+ on every category.
- Semantic HTML (header, main, section, footer, nav, h1 only once), aria-labels on icon buttons, sufficient contrast (muted text >= 4.5:1 on the background), keyboard operable everything.

====================================================================
10. PROJECT STRUCTURE
====================================================================
/app (layout.tsx, page.tsx, projects/page.tsx, blog/..., api/spotify, api/github, api/views)
/components (header, command-menu, theme-toggle, section-title, screen-line, cross-mark, hatch-separator, dotted-banner, hero, about, spotify-card, connect-links, github-activity, tech-stack, experience-list, education-list, quote-block, footer, pixel-cat, project-card, project-grid, logo)
/data (profile.ts, experience.ts, education.ts, projects.ts, tech-stack.ts, socials.ts, quote.ts, pixel-cat.ts) with Zod or TS types
/lib (utils, fetchers) and /styles/globals.css (tokens, hatch, dots, keyframes)
/public (avatar, project images, resume.pdf, pronunciation.mp3)
.env.example listing SPOTIFY_CLIENT_ID/SECRET/REFRESH_TOKEN, GITHUB_TOKEN, UPSTASH_REDIS_REST_URL/TOKEN.

====================================================================
11. DELIVERY INSTRUCTIONS
====================================================================
1. Before writing code, open the reference repo and live site (reference-only mode, see "READ FIRST") and note the exact spacing and component structure for the primitives, including the Stack section.
2. Scaffold the project, global CSS tokens, fonts and the decorative primitives (ScreenLine, CrossMark, HatchSeparator, DottedBanner, SectionTitle) and show me the empty frame to confirm the look.
3. Build the header and command palette, then the Home sections in order, then Projects, then the stub pages. Add the PixelCat using the exact sprite data in 3.6.
4. Use realistic PLACEHOLDER content, centralized in /data, so I can swap in my real details. Never hard-code personal info inside components, and never reuse any name, text, image or link seen in the reference material.
5. Do not add colors, gradients, shadows or fonts that aren't specified. Keep it flat, monochrome and hairline-driven.
6. Write all component code yourself. Do not copy the reference repo's files, data, branding or text.
7. When done, give me a README with setup steps, env vars, how to edit my data (a checklist of every file in /data and every image in /public to replace), and the credit line "Design inspired by chanhdai.com (MIT)".
8. After the placeholder version works, I will send my name, initials, avatar, bio, experience, education, projects, tech stack, links, resume, quote and credentials. Then replace the placeholders and, if needed, regenerate the monogram, favicon and OG image.