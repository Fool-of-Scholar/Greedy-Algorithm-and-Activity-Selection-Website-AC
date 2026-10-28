const fs = require('fs');
const path = require('path');

const slidesMeta = [
  {
    id: 1,
    tag: 'Topic 01',
    title: 'Introduction to Greedy Algorithms',
    shortTitle: 'Introduction',
    subtitle: 'Coin Change Problem & Core Heuristic Principles',
    badge: 'Overview & Heuristics',
    file: 'introduction-greedy-slide-1.html'
  },
  {
    id: 2,
    tag: 'Topic 02',
    title: 'Greedy-Choice Property & Optimal Substructure',
    shortTitle: 'Greedy Choice & Substructure',
    subtitle: 'The Two Mathematical Pillars of Greedy Algorithms',
    badge: 'Foundations',
    file: 'Greedy-choice property and optimal substructure.html'
  },
  {
    id: 3,
    tag: 'Topic 03',
    title: 'Activity Selection / Unweighted Interval Scheduling',
    shortTitle: 'Activity Selection',
    subtitle: 'Problem Formulation, Compatibility & Maximizing Events',
    badge: 'Core Problem',
    file: 'Activity Selection _ Unweighted Interval Scheduling.html'
  },
  {
    id: 4,
    tag: 'Topic 04',
    title: 'Earliest-Finish-Time Strategy',
    shortTitle: 'EFT Strategy',
    subtitle: 'Step-by-Step Simulation, Activity Timeline & Cutoff Rules',
    badge: 'Strategy & Trace',
    file: 'Earliest-Finish-Time-Strategy.html'
  },
  {
    id: 5,
    tag: 'Topic 05',
    title: 'Tracing the Activity Selection Algorithm',
    shortTitle: 'Interactive Trace',
    subtitle: 'Deep-Dive Interactive Tracing, Visual State Matrix & Step Log',
    badge: 'Visualizer',
    file: 'activity_selection_presentation.html'
  },
  {
    id: 6,
    tag: 'Topic 06',
    title: 'Activity Selection Time Complexity',
    shortTitle: 'Time Complexity',
    subtitle: 'Asymptotic Analysis: Sorting O(n log n) vs Scan O(n)',
    badge: 'Analysis',
    file: 'activity_selection_time_complexity.html'
  },
  {
    id: 7,
    tag: 'Topic 07',
    title: 'Why Earliest Finish Works',
    shortTitle: 'Proof of Correctness',
    subtitle: 'Exchange Argument, Inductive Proof & Case Analysis',
    badge: 'Mathematical Proof',
    file: 'Why_earliest_finish_works_presentaion.html'
  },
  {
    id: 8,
    tag: 'Topic 08',
    title: 'When Greedy Algorithms Fail',
    shortTitle: 'Greedy Failures',
    subtitle: 'Counterexamples, 0-1 Knapsack & When to Use Dynamic Programming',
    badge: 'Limitations',
    file: 'greedy_algorithms_presentation.html'
  },
  {
    id: 9,
    tag: 'Quiz',
    title: 'Topic 1 Quiz: 4 Pics & Matrix Pill Challenge',
    shortTitle: 'Quiz 1',
    subtitle: '4-Item Interactive Quiz: 4 Pics 1 Word & Red/Blue Pill',
    badge: 'Interactive Quiz',
    file: 'quiz-1.html'
  },
  {
    id: 10,
    tag: 'Quiz 2',
    title: 'Quiz 2: EFT Strategy Questions',
    shortTitle: 'EFT Quiz',
    subtitle: 'Identification Challenge: Earliest-Finish-Time Strategy',
    badge: 'Interactive Quiz',
    file: 'EFT Questions (1).html'
  },
  {
    id: 11,
    tag: 'Quiz 3',
    title: 'Quiz 3: Why Earliest Finish Works',
    shortTitle: 'Why EFT Quiz',
    subtitle: 'Conceptual Questions: Correctness & Time Complexity',
    badge: 'Conceptual Check',
    file: 'why_the_earliest_finish_works_quiz.html'
  },
  {
    id: 12,
    tag: 'Quiz 4',
    title: 'Quiz 4: When Greedy Algorithms Fail',
    shortTitle: 'Failures Quiz',
    subtitle: 'Knowledge Check: 0/1 Knapsack & Greedy Limitations',
    badge: 'Knowledge Check',
    file: 'greedy_algorithms_quiz.html'
  },
  {
    id: 13,
    tag: 'Answer Key',
    title: 'Master Answer Key for All Quizzes',
    shortTitle: 'Answer Key',
    subtitle: 'Complete Verified Solutions & Detailed Explanations for All 4 Quizzes',
    badge: 'Master Key',
    file: 'answer_key.html'
  },
  {
    id: 14,
    tag: 'Video Finale',
    title: 'Immersive Interactive Video: Algorithm In Action',
    shortTitle: 'Interactive Video',
    subtitle: 'Dynamic Offline-Ready Video Simulation of Greedy Concepts',
    badge: 'Video Finale',
    file: 'interactive-video.html',
    preferSrc: true
  }
];

const slidesData = slidesMeta.map(s => {
  const filePath = path.join(__dirname, s.file);
  if (!fs.existsSync(filePath)) {
    throw new Error('File not found: ' + s.file);
  }
  const content = fs.readFileSync(filePath, 'utf8');
  return {
    ...s,
    content: content
  };
});

const jsonSlides = JSON.stringify(slidesData).replace(/<\/script>/gi, '<\\/script>');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>CS 05 · Group 2 Presentation: Greedy Algorithms</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-base: #090d16;
      --bg-surface: #0f172a;
      --bg-surface-elevated: #1a243b;
      --border-subtle: rgba(255, 255, 255, 0.08);
      --border-accent: rgba(56, 189, 248, 0.25);
      --primary: #38bdf8;
      --primary-glow: rgba(56, 189, 248, 0.35);
      --accent-emerald: #10b981;
      --accent-purple: #8b5cf6;
      --accent-amber: #f59e0b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-subtle: #64748b;
      --header-h: 60px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html, body {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: var(--bg-base);
      color: var(--text-main);
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    /* Presentation Layout */
    #app-container {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      position: relative;
    }

    /* Master Top Header */
    header.master-header {
      height: var(--header-h);
      flex: 0 0 var(--header-h);
      background: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border-subtle);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      z-index: 50;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
    }

    header.master-header.hidden {
      transform: translateY(-100%);
      opacity: 0;
      pointer-events: none;
    }

    /* Brand Section */
    .brand-section {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      min-width: 0;
    }

    .group-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(56, 189, 248, 0.2));
      border: 1px solid rgba(56, 189, 248, 0.35);
      color: #38bdf8;
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      padding: 0.25rem 0.65rem;
      border-radius: 9999px;
      text-transform: uppercase;
      box-shadow: 0 0 12px rgba(56, 189, 248, 0.15);
      white-space: nowrap;
    }

    .group-badge .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 6px #10b981;
    }

    .title-group {
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .course-title {
      font-size: 0.72rem;
      font-weight: 600;
      color: var(--text-muted);
      letter-spacing: 0.04em;
      white-space: nowrap;
    }

    .current-topic-label {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--text-main);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .current-topic-label .topic-tag {
      color: var(--primary);
      font-weight: 800;
      font-size: 0.8rem;
    }

    /* Center Navigation Tabs (Pills) */
    .nav-tabs-wrapper {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      background: rgba(0, 0, 0, 0.25);
      padding: 0.25rem;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      overflow-x: auto;
      max-width: 48vw;
      scrollbar-width: none;
    }
    .nav-tabs-wrapper::-webkit-scrollbar {
      display: none;
    }

    .nav-tab-pill {
      background: transparent;
      border: 1px solid transparent;
      color: var(--text-muted);
      padding: 0.35rem 0.65rem;
      border-radius: 8px;
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      transition: all 0.2s ease;
      font-family: inherit;
    }

    .nav-tab-pill:hover {
      color: var(--text-main);
      background: rgba(255, 255, 255, 0.05);
    }

    .nav-tab-pill.active {
      background: rgba(56, 189, 248, 0.15);
      border-color: rgba(56, 189, 248, 0.4);
      color: #38bdf8;
      box-shadow: 0 0 14px rgba(56, 189, 248, 0.2);
    }

    .nav-tab-pill .pill-num {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.08);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      font-weight: 700;
    }

    .nav-tab-pill.active .pill-num {
      background: #38bdf8;
      color: #090d16;
    }

    /* Right Action Controls */
    .controls-section {
      display: flex;
      align-items: center;
      gap: 0.45rem;
    }

    .btn-nav {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--text-main);
      padding: 0.4rem 0.75rem;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      transition: all 0.2s ease;
      font-family: inherit;
    }

    .btn-nav:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-1px);
    }

    .btn-nav:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    .btn-nav.primary {
      background: linear-gradient(135deg, #0284c7, #0369a1);
      border-color: rgba(56, 189, 248, 0.4);
      color: #fff;
      box-shadow: 0 2px 8px rgba(2, 132, 199, 0.3);
    }

    .btn-nav.primary:hover:not(:disabled) {
      background: linear-gradient(135deg, #0369a1, #075985);
    }

    .icon-btn {
      width: 34px;
      height: 34px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--text-muted);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 0.95rem;
    }

    .icon-btn:hover {
      color: var(--text-main);
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.2);
    }

    /* Viewport Container for Slides */
    main#viewport-stage {
      flex: 1 1 0%;
      width: 100%;
      height: calc(100vh - var(--header-h));
      position: relative;
      overflow: hidden;
      background: #090d16;
    }

    header.master-header.hidden + main#viewport-stage {
      height: 100vh;
    }

    /* Presentation Iframes */
    .slide-frame {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.3s;
      -webkit-overflow-scrolling: touch;
      overflow-y: auto;
    }

    .slide-frame.active {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      z-index: 10;
    }

    /* Floating Quick Bar for Zen Mode / Quick Navigation */
    #floating-dock {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      padding: 0.35rem 0.65rem;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 1px rgba(255, 255, 255, 0.2);
      z-index: 40;
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    #floating-dock.autohide {
      opacity: 0.25;
      transform: translateX(-50%) translateY(6px);
    }

    #floating-dock.autohide:hover {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    .dock-indicator {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--text-muted);
      padding: 0 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      user-select: none;
    }

    .dock-indicator span.num {
      color: #38bdf8;
      font-weight: 800;
    }

    .dock-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 0.85rem;
    }

    .dock-btn:hover:not(:disabled) {
      color: var(--text-main);
      background: rgba(255, 255, 255, 0.1);
    }

    .dock-btn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    /* Floating Header Revealer (Visible when header is hidden) */
    #zen-revealer {
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%) translateY(-100%);
      background: rgba(15, 23, 42, 0.92);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-top: none;
      padding: 0.3rem 0.85rem;
      border-radius: 0 0 12px 12px;
      color: var(--text-muted);
      font-size: 0.75rem;
      font-weight: 600;
      cursor: pointer;
      z-index: 60;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      align-items: center;
      gap: 0.4rem;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
    }

    #zen-revealer.show {
      transform: translateX(-50%) translateY(0);
    }

    #zen-revealer:hover {
      color: #38bdf8;
      background: rgba(15, 23, 42, 0.98);
    }

    /* Topic Index Modal / Drawer */
    #topics-modal {
      position: fixed;
      inset: 0;
      background: rgba(7, 11, 20, 0.75);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      z-index: 100;
      opacity: 0;
      visibility: hidden;
      transition: all 0.25s ease;
    }

    #topics-modal.open {
      opacity: 1;
      visibility: visible;
    }

    .modal-content {
      background: #0f172a;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      width: min(860px, 100%);
      max-height: 85vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 1px rgba(255, 255, 255, 0.2);
      overflow: hidden;
      transform: scale(0.96) translateY(10px);
      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    #topics-modal.open .modal-content {
      transform: scale(1) translateY(0);
    }

    .modal-header {
      padding: 1.25rem 1.5rem;
      border-bottom: 1px solid var(--border-subtle);
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(255, 255, 255, 0.02);
    }

    .modal-header h2 {
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .modal-header p {
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-top: 2px;
    }

    .modal-body {
      padding: 1.25rem 1.5rem;
      overflow-y: auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 0.85rem;
    }

    .topic-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 14px;
      padding: 1rem 1.15rem;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      gap: 0.85rem;
      align-items: flex-start;
      position: relative;
    }

    .topic-card:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(56, 189, 248, 0.3);
      transform: translateY(-2px);
    }

    .topic-card.active {
      background: rgba(56, 189, 248, 0.1);
      border-color: rgba(56, 189, 248, 0.5);
      box-shadow: 0 0 18px rgba(56, 189, 248, 0.15);
    }

    .topic-card-num {
      flex: 0 0 32px;
      height: 32px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.06);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.82rem;
      font-weight: 800;
      color: var(--text-muted);
    }

    .topic-card.active .topic-card-num {
      background: #38bdf8;
      color: #090d16;
    }

    .topic-card-info {
      flex: 1;
      min-width: 0;
    }

    .topic-card-tag {
      font-size: 0.68rem;
      font-weight: 700;
      color: #38bdf8;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 2px;
    }

    .topic-card-title {
      font-size: 0.92rem;
      font-weight: 700;
      color: var(--text-main);
      line-height: 1.3;
      margin-bottom: 4px;
    }

    .topic-card-desc {
      font-size: 0.78rem;
      color: var(--text-muted);
      line-height: 1.4;
    }

    .active-badge {
      position: absolute;
      top: 10px;
      right: 12px;
      font-size: 0.68rem;
      font-weight: 700;
      color: #10b981;
      background: rgba(16, 185, 129, 0.15);
      padding: 2px 7px;
      border-radius: 9999px;
      border: 1px solid rgba(16, 185, 129, 0.3);
    }

    /* Progress Indicator Bar at Bottom of Header */
    .presentation-progress-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background: linear-gradient(90deg, #10b981, #38bdf8, #8b5cf6);
      transition: width 0.3s ease;
      z-index: 55;
    }

    /* Mobile / Small Screens adjustments */
    @media (max-width: 900px) {
      .nav-tabs-wrapper {
        display: none;
      }
      .course-title {
        display: none;
      }
      .modal-body {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div id="app-container">
    <!-- Master Header -->
    <header class="master-header" id="master-header">
      <div class="brand-section">
        <div class="group-badge">
          <span class="dot"></span>
          <span>Group 2</span>
        </div>
        <div class="title-group">
          <span class="course-title">CS 05 · Algorithms & Complexity</span>
          <div class="current-topic-label" id="header-topic-label">
            <span class="topic-tag" id="current-tag">Topic 01</span>
            <span id="current-title">Introduction to Greedy Algorithms</span>
          </div>
        </div>
      </div>

      <!-- Center Nav Tabs -->
      <nav class="nav-tabs-wrapper" id="nav-tabs-wrapper" aria-label="Presentation topics">
        <!-- Generated by JS -->
      </nav>

      <!-- Right Action Controls -->
      <div class="controls-section">
        <button class="btn-nav" id="btn-prev" title="Previous Topic (Shift+Left)">
          <span>◀</span>
          <span>Prev</span>
        </button>
        <button class="btn-nav primary" id="btn-next" title="Next Topic (Shift+Right)">
          <span>Next</span>
          <span>▶</span>
        </button>
        <button class="icon-btn" id="btn-menu" title="All Topics Overview (Alt+M)" aria-label="Open topics menu">
          <span>☰</span>
        </button>
        <button class="icon-btn" id="btn-zen" title="Toggle Zen Mode / Hide Header" aria-label="Hide header">
          <span>▲</span>
        </button>
        <button class="icon-btn" id="btn-fullscreen" title="Toggle Fullscreen" aria-label="Toggle fullscreen">
          <span>⛶</span>
        </button>
      </div>

      <div class="presentation-progress-bar" id="presentation-progress"></div>
    </header>

    <!-- Zen Mode Revealer button (shown when header is collapsed) -->
    <div id="zen-revealer" title="Click to show presentation header">
      <span>▼ Show Presentation Controls</span>
    </div>

    <!-- Main Presentation Stage (holds 8 sandboxed iframes) -->
    <main id="viewport-stage" aria-label="Presentation viewport">
      <!-- 8 iframes will be instantiated here -->
    </main>

    <!-- Floating Quick Bar for easy slide control -->
    <div id="floating-dock" role="navigation" aria-label="Quick Navigation">
      <button class="dock-btn" id="dock-prev" title="Previous Topic">◀</button>
      <div class="dock-indicator">
        <span>Topic</span>
        <span class="num" id="dock-current">1</span>
        <span>/</span>
        <span>8</span>
      </div>
      <button class="dock-btn" id="dock-next" title="Next Topic">▶</button>
      <button class="dock-btn" id="dock-menu" title="Topics Menu">☰</button>
    </div>

    <!-- Topics Menu Modal -->
    <div id="topics-modal" aria-modal="true" role="dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <h2>📚 Group 2 Presentation Topics</h2>
            <p>CS 05 · Design and Analysis of Greedy Algorithms</p>
          </div>
          <button class="icon-btn" id="modal-close" aria-label="Close modal">✕</button>
        </div>
        <div class="modal-body" id="modal-topics-list">
          <!-- Populated by JS -->
        </div>
      </div>
    </div>
  </div>

  <script>
    // Embedded presentation data containing the exact 8 collaborative works
    const SLIDES_DATA = ${jsonSlides};

    let currentIndex = 0;
    const totalSlides = SLIDES_DATA.length;

    // DOM references
    const stage = document.getElementById('viewport-stage');
    const header = document.getElementById('master-header');
    const zenRevealer = document.getElementById('zen-revealer');
    const currentTag = document.getElementById('current-tag');
    const currentTitle = document.getElementById('current-title');
    const navTabsWrapper = document.getElementById('nav-tabs-wrapper');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnMenu = document.getElementById('btn-menu');
    const btnZen = document.getElementById('btn-zen');
    const btnFullscreen = document.getElementById('btn-fullscreen');
    const progressBar = document.getElementById('presentation-progress');

    // Dock references
    const dockPrev = document.getElementById('dock-prev');
    const dockNext = document.getElementById('dock-next');
    const dockCurrent = document.getElementById('dock-current');
    const dockMenu = document.getElementById('dock-menu');
    const floatingDock = document.getElementById('floating-dock');

    // Modal references
    const topicsModal = document.getElementById('topics-modal');
    const modalClose = document.getElementById('modal-close');
    const modalTopicsList = document.getElementById('modal-topics-list');

    const iframes = [];

    // Initialize all 8 presentations into dedicated isolated iframes
    function initPresentation() {
      SLIDES_DATA.forEach((slide, idx) => {
        // 1. Create Iframe
        const frame = document.createElement('iframe');
        frame.id = 'frame-' + idx;
        frame.className = 'slide-frame' + (idx === 0 ? ' active' : '');
        frame.title = slide.title;
        frame.setAttribute('allow', 'fullscreen *; clipboard-write *; autoplay *; encrypted-media *');
        frame.setAttribute('loading', 'eager');
        frame.setAttribute('scrolling', 'yes');
        if (slide.preferSrc) {
          frame.src = slide.file;
        } else {
          frame.srcdoc = slide.content;
        }
        stage.appendChild(frame);
        iframes.push(frame);

        // 2. Create Navigation Tab Pill
        const pill = document.createElement('button');
        pill.className = 'nav-tab-pill' + (idx === 0 ? ' active' : '');
        pill.innerHTML = '<span class="pill-num">' + (idx + 1) + '</span><span>' + slide.shortTitle + '</span>';
        pill.title = slide.title;
        pill.onclick = () => goToTopic(idx);
        navTabsWrapper.appendChild(pill);

        // 3. Create Modal Card
        const card = document.createElement('div');
        card.className = 'topic-card' + (idx === 0 ? ' active' : '');
        card.id = 'modal-card-' + idx;
        card.innerHTML = 
          '<div class="topic-card-num">' + (idx + 1) + '</div>' +
          '<div class="topic-card-info">' +
            '<div class="topic-card-tag">' + slide.badge + '</div>' +
            '<div class="topic-card-title">' + slide.title + '</div>' +
            '<div class="topic-card-desc">' + slide.subtitle + '</div>' +
          '</div>' +
          (idx === 0 ? '<span class="active-badge">Active</span>' : '');
        card.onclick = () => {
          goToTopic(idx);
          closeModal();
        };
        modalTopicsList.appendChild(card);
      });

      updateUI();
    }

    // Switch to target topic
    function goToTopic(index) {
      if (index < 0 || index >= totalSlides || index === currentIndex) return;

      // Update iframes visibility
      iframes[currentIndex].classList.remove('active');
      iframes[index].classList.add('active');

      currentIndex = index;
      updateUI();
    }

    function updateUI() {
      const current = SLIDES_DATA[currentIndex];

      // Update Header Text
      currentTag.textContent = current.tag;
      currentTitle.textContent = current.title;

      // Update Navigation Buttons state
      btnPrev.disabled = currentIndex === 0;
      btnNext.disabled = currentIndex === totalSlides - 1;
      dockPrev.disabled = currentIndex === 0;
      dockNext.disabled = currentIndex === totalSlides - 1;

      // Update Dock counter
      dockCurrent.textContent = currentIndex + 1;

      // Update Progress Bar
      const pct = ((currentIndex + 1) / totalSlides) * 100;
      progressBar.style.width = pct + '%';

      // Update Tab Pills
      const pills = navTabsWrapper.querySelectorAll('.nav-tab-pill');
      pills.forEach((p, i) => {
        p.classList.toggle('active', i === currentIndex);
      });
      // Scroll active pill into view smoothly if needed
      if (pills[currentIndex]) {
        pills[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }

      // Update Modal Cards
      const cards = modalTopicsList.querySelectorAll('.topic-card');
      cards.forEach((c, i) => {
        const isActive = i === currentIndex;
        c.classList.toggle('active', isActive);
        const existingBadge = c.querySelector('.active-badge');
        if (isActive && !existingBadge) {
          const badge = document.createElement('span');
          badge.className = 'active-badge';
          badge.textContent = 'Active';
          c.appendChild(badge);
        } else if (!isActive && existingBadge) {
          existingBadge.remove();
        }
      });
    }

    // Modal controls
    function openModal() {
      topicsModal.classList.add('open');
    }
    function closeModal() {
      topicsModal.classList.remove('open');
    }

    // Zen Mode (Hide/Show Header)
    function toggleZenMode() {
      const isHidden = header.classList.toggle('hidden');
      zenRevealer.classList.toggle('show', isHidden);
      btnZen.innerHTML = isHidden ? '▼' : '▲';
      btnZen.title = isHidden ? 'Show Header' : 'Hide Header';
    }

    // Fullscreen toggle
    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      }
    }

    // Event Listeners
    btnPrev.onclick = () => goToTopic(currentIndex - 1);
    btnNext.onclick = () => goToTopic(currentIndex + 1);
    dockPrev.onclick = () => goToTopic(currentIndex - 1);
    dockNext.onclick = () => goToTopic(currentIndex + 1);

    btnMenu.onclick = openModal;
    dockMenu.onclick = openModal;
    modalClose.onclick = closeModal;
    topicsModal.onclick = (e) => {
      if (e.target === topicsModal) closeModal();
    };

    btnZen.onclick = toggleZenMode;
    zenRevealer.onclick = toggleZenMode;
    btnFullscreen.onclick = toggleFullscreen;

    // Keyboard navigation (Shift + Arrows or Alt + Arrows for Topic Switching)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && topicsModal.classList.contains('open')) {
        closeModal();
        return;
      }

      // Alt + Left/Right or Shift + Left/Right to switch chapters
      if ((e.shiftKey || e.altKey) && e.key === 'ArrowRight') {
        e.preventDefault();
        goToTopic(currentIndex + 1);
      } else if ((e.shiftKey || e.altKey) && e.key === 'ArrowLeft') {
        e.preventDefault();
        goToTopic(currentIndex - 1);
      } else if (e.altKey && (e.key === 'm' || e.key === 'M')) {
        e.preventDefault();
        if (topicsModal.classList.contains('open')) closeModal();
        else openModal();
      } else if (e.altKey && (e.key === 'z' || e.key === 'Z')) {
        e.preventDefault();
        toggleZenMode();
      }
    });

    // Listen for cross-slide navigation messages (e.g. from Quiz or Slide buttons)
    window.addEventListener('message', (e) => {
      if (!e.data) return;
      if (e.data.type === 'GOTO_TOPIC') {
        if (typeof e.data.index === 'number') {
          goToTopic(e.data.index);
        } else if (e.data.file) {
          const idx = SLIDES_DATA.findIndex(s => s.file === e.data.file);
          if (idx !== -1) goToTopic(idx);
        }
      }
    });

    // Run on startup
    initPresentation();
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');
console.log('Successfully generated index.html!');
