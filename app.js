/**
 * Hackathon Hunters - Main Application Engine
 * Top-Notch Executive Radar Engine & Bulletproof PDF Dossier Exporter
 */

// Global Fallback Dataset to guarantee rendering even if external script tags fail
const FALLBACK_HACKATHONS_DATA = [
  {
    id: "unstop-amazon-hackon-6",
    title: "HackOn with Amazon 6.0",
    organizer: "Amazon & Unstop",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-images/6571520626359_amazon.svg",
    bannerGradient: "from-amber-600 via-orange-700 to-slate-900",
    status: "live",
    statusLabel: "🔥 Live Submissions Open",
    mode: "Online",
    location: "Unstop Virtual & India",
    totalPrizePool: 225000,
    currency: "₹",
    featured: true,
    tags: ["Unstop", "Amazon", "Software Dev", "PPI Opportunities", "Engineering"],
    shortTeaser: "Amazon's flagship student hackathon on Unstop. Solve real e-commerce, cloud, and AI engineering challenges for cash prizes & Pre-Placement Interviews (PPIs).",
    timelines: {
      registrationDeadline: new Date(Date.now() + 10 * 86400000).toISOString(),
      revealDate: new Date(Date.now() - 5 * 86400000).toISOString(),
      submissionDeadline: new Date(Date.now() + 8 * 86400000).toISOString(),
      winnerAnnouncement: new Date(Date.now() + 20 * 86400000).toISOString()
    },
    eligibility: {
      minAge: 18,
      allowedRoles: ["B.Tech/B.E.", "M.Tech", "MCA Students"],
      teamSizeMin: 2,
      teamSizeMax: 4,
      geography: "India & South Asia Engineering Students",
      studentOnly: true,
      prerequisites: "Must register through Unstop platform."
    },
    tracks: [
      {
        id: "amazon-track-1",
        title: "Track 1: High-Scale E-Commerce & AI Customer Experience",
        prize: "₹2,25,000 + Amazon Pre-Placement Interviews (PPI)",
        problemStatement: "Architect a resilient, fault-tolerant microservice that predicts inventory demand spikes and handles 100,000 requests/sec during festive sales.",
        keyRequirements: [
          "Use Java, Python, or Go for core backend logic",
          "Include architectural system design diagram",
          "Demonstrate load testing results"
        ],
        evaluationCriteria: "40% System Scalability, 30% Code Architecture, 30% Prototype Demo"
      }
    ],
    judges: [
      {
        name: "Amazon Tech Leaders",
        role: "Principal Software Engineers, Amazon",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        focusArea: "Distributed systems, low latency, and operational excellence."
      }
    ],
    rules: {
      repoRequirement: "Public GitHub repository with system architecture documentation",
      demoVideoMaxSecs: 180,
      liveUrlRequired: true,
      slideDeckRequired: true,
      codeFreshness: "Authored specifically for HackOn with Amazon 6.0."
    },
    winningPlaybook: {
      techStackRecommendation: "Java Spring Boot / Python FastAPI + AWS DynamoDB + Docker + React",
      proTips: [
        "Include load testing benchmarks (JMeter / K6) in your submission deck to impress Amazon judges."
      ]
    },
    registrationUrl: "https://unstop.com/hackathons/hackon-with-amazon-60-amazon-1150000",
    submissionUrl: "https://unstop.com"
  },
  {
    id: "unstop-iitg-innovatex",
    title: "IIT Guwahati Pitch & Build InnovateX 2026",
    organizer: "IIT Guwahati & Unstop",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding/unstop-logo.png",
    bannerGradient: "from-emerald-800 via-teal-900 to-slate-900",
    status: "live",
    statusLabel: "🔥 Live Submissions Open",
    mode: "Hybrid",
    location: "IIT Guwahati Campus & Unstop",
    totalPrizePool: 10000000,
    currency: "₹",
    featured: true,
    tags: ["Unstop", "IIT Guwahati", "DeepTech", "₹1 Crore Pool", "Startup Grants"],
    shortTeaser: "Massive pan-India DeepTech & AI pitchathon hosted by IIT Guwahati on Unstop with ₹1 Crore (~$120,000 USD) in cash rewards & incubation grants.",
    timelines: {
      registrationDeadline: new Date(Date.now() + 14 * 86400000).toISOString(),
      revealDate: new Date(Date.now() - 10 * 86400000).toISOString(),
      submissionDeadline: new Date(Date.now() + 12 * 86400000).toISOString(),
      winnerAnnouncement: new Date(Date.now() + 25 * 86400000).toISOString()
    },
    eligibility: {
      minAge: 18,
      allowedRoles: ["Students", "Research Scholars", "Early Startups"],
      teamSizeMin: 1,
      teamSizeMax: 5,
      geography: "Global & India",
      studentOnly: false,
      prerequisites: "Working functional prototype required for round 2."
    },
    tracks: [
      {
        id: "iitg-track-1",
        title: "Track 1: AI, Robotics & Sustainable Hardware Innovation",
        prize: "₹1 Crore Total Fund Pool & IIT Incubation",
        problemStatement: "Develop hardware or software solutions addressing clean energy, agricultural automation, or medical robotics.",
        keyRequirements: ["Functional MVP demo", "10-slide pitch deck"],
        evaluationCriteria: "40% Market Potential, 30% Technical Feasibility, 30% Prototype Quality"
      }
    ],
    judges: [
      {
        name: "IITG Incubation Board",
        role: "Professors & Venture Partners",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        focusArea: "Commercial viability and IP patent potential."
      }
    ],
    rules: {
      repoRequirement: "GitHub repo or hardware CAD / code archive",
      demoVideoMaxSecs: 240,
      liveUrlRequired: false,
      slideDeckRequired: true,
      codeFreshness: "Original startup project or prototype."
    },
    winningPlaybook: {
      techStackRecommendation: "Python PyTorch / ROS2 + React + Embedded Microcontrollers",
      proTips: ["Highlight unit economics and patent applications in your deck."]
    },
    registrationUrl: "https://unstop.com/hackathons",
    submissionUrl: "https://unstop.com"
  },
  {
    id: "google-ai-2026",
    title: "Google AI Hackathon 2026",
    organizer: "Google DeepMind & Google Cloud",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    bannerGradient: "from-blue-600 via-indigo-700 to-purple-900",
    status: "live",
    statusLabel: "🔥 Live Submissions Open",
    mode: "Online",
    location: "Global Virtual",
    totalPrizePool: 100000,
    currency: "$",
    featured: true,
    tags: ["AI/ML", "Gemini 2.0", "Google Cloud", "Multimodal", "Open to All"],
    shortTeaser: "Build next-gen autonomous multimodal AI agents and developer tools using Gemini 1.5/2.0 Pro & Flash APIs.",
    timelines: {
      registrationDeadline: new Date(Date.now() + 7 * 86400000).toISOString(),
      revealDate: new Date(Date.now() - 10 * 86400000).toISOString(),
      submissionDeadline: new Date(Date.now() + 5 * 86400000).toISOString(),
      winnerAnnouncement: new Date(Date.now() + 18 * 86400000).toISOString()
    },
    eligibility: {
      minAge: 18,
      allowedRoles: ["Students", "Professionals", "Researchers", "Indie Hackers"],
      teamSizeMin: 1,
      teamSizeMax: 4,
      geography: "Global (excluding sanctioned regions)",
      studentOnly: false,
      prerequisites: "Must use Google AI Studio API or Google Cloud Vertex AI."
    },
    tracks: [
      {
        id: "google-track-1",
        title: "Track 1: Multimodal AI Agents for High-Impact Workflows",
        prize: "$40,000 + $10k Cloud Credits",
        problemStatement: "Design an end-to-end autonomous agent capable of processing unstructured video, audio, code, and document streams simultaneously to solve healthcare, legal, logistics, or scientific research problems.",
        keyRequirements: [
          "Process at least 2 distinct modal inputs (e.g., Video + PDF text)",
          "Implement function calling with Gemini 1.5 Pro or Flash",
          "Provide structured JSON responses or dynamic UI output"
        ],
        evaluationCriteria: "35% Technical Innovation, 25% Real-World Utility, 20% UI/UX Design, 20% Pitch & Demo Quality"
      }
    ],
    judges: [
      {
        name: "Demis Hassabis",
        role: "CEO, Google DeepMind",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        focusArea: "Scientific breakthroughs, algorithmic elegance, and multi-step agent reasoning."
      }
    ],
    rules: {
      repoRequirement: "Public GitHub repository with Apache 2.0 or MIT license",
      demoVideoMaxSecs: 180,
      liveUrlRequired: true,
      slideDeckRequired: true,
      codeFreshness: "All core code must be created during the official hackathon window."
    },
    winningPlaybook: {
      techStackRecommendation: "Next.js 15 (App Router) + Tailwind CSS + Google AI Studio SDK + Vercel Deployment",
      proTips: [
        "Record a crisp 2-minute video pitch highlighting the exact problem statement within the first 15 seconds."
      ]
    },
    registrationUrl: "https://googleai.devpost.com",
    submissionUrl: "https://googleai.devpost.com/submit"
  },
  {
    id: "vercel-ship-ai-2026",
    title: "Vercel Ship AI Hackathon",
    organizer: "Vercel & Next.js Foundation",
    logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
    bannerGradient: "from-slate-900 via-zinc-800 to-black",
    status: "live",
    statusLabel: "🔥 Live Submissions Open",
    mode: "Online",
    location: "Global Virtual",
    totalPrizePool: 75000,
    currency: "$",
    featured: true,
    tags: ["Next.js 15", "Vercel AI SDK", "Tailwind CSS", "Frontend", "UI/UX"],
    shortTeaser: "Ship ultra-fast AI web apps with Generative UI, fluid micro-interactions, and instant streaming on Vercel's Edge Network.",
    timelines: {
      registrationDeadline: new Date(Date.now() + 4 * 86400000).toISOString(),
      revealDate: new Date(Date.now() - 12 * 86400000).toISOString(),
      submissionDeadline: new Date(Date.now() + 3 * 86400000).toISOString(),
      winnerAnnouncement: new Date(Date.now() + 10 * 86400000).toISOString()
    },
    eligibility: {
      minAge: 18,
      allowedRoles: ["Full-Stack Developers", "UI/UX Designers", "Frontend Engineers"],
      teamSizeMin: 1,
      teamSizeMax: 3,
      geography: "Global",
      studentOnly: false,
      prerequisites: "Must be deployed live on Vercel with open source GitHub repo."
    },
    tracks: [
      {
        id: "vercel-track-1",
        title: "Track 1: Generative UI & Fluid Agentic Workflows",
        prize: "$35,000 + Vercel Enterprise Deployment Credits",
        problemStatement: "Build a web app where the UI dynamically renders customized React components, interactive charts, and live forms based on AI model outputs instead of raw Markdown text.",
        keyRequirements: [
          "Use Vercel AI SDK `useChat` or `streamUI`",
          "Sub-100ms Time To First Byte (TTFB)",
          "Responsive dark mode UI"
        ],
        evaluationCriteria: "40% Design Excellence & Speed, 30% Code Quality, 30% Practical Utility"
      }
    ],
    judges: [
      {
        name: "Guillermo Rauch",
        role: "CEO, Vercel",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        focusArea: "Frontend velocity, design aesthetics, and instant user delight."
      }
    ],
    rules: {
      repoRequirement: "Public GitHub repo with Vercel deployment link in header",
      demoVideoMaxSecs: 120,
      liveUrlRequired: true,
      slideDeckRequired: false,
      codeFreshness: "Created during hackathon week."
    },
    winningPlaybook: {
      techStackRecommendation: "Next.js 15 + Vercel AI SDK 4.0 + Shadcn UI + Tailwind CSS v4",
      proTips: [
        "Deploy early and continuously test on Vercel preview environments."
      ]
    },
    registrationUrl: "https://vercel.com/ship/hackathon",
    submissionUrl: "https://vercel.com/ship/hackathon/submit"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Determine robust initial hackathons list
  const initialHackathons = (window.HACKATHONS_DATA && Array.isArray(window.HACKATHONS_DATA) && window.HACKATHONS_DATA.length > 0)
    ? window.HACKATHONS_DATA
    : FALLBACK_HACKATHONS_DATA;

  // Application State
  const state = {
    hackathons: [...initialHackathons],
    tickerUpdates: (window.LIVE_TICKER_UPDATES && window.LIVE_TICKER_UPDATES.length > 0) ? window.LIVE_TICKER_UPDATES : [
      { tag: "1-HOUR SYNC", text: "Global Hackathon Radar active — Auto-syncs every 1 hour!", time: "Just Now" },
      { tag: "UNSTOP", text: "HackOn with Amazon 6.0 & IIT Guwahati InnovateX live on Unstop!", time: "10m ago" },
      { tag: "DEVPOST", text: "$100,000 Google AI Hackathon & Vercel Ship active!", time: "25m ago" }
    ],
    bookmarks: new Set(JSON.parse(localStorage.getItem('hh_bookmarks')) || []),
    kanban: JSON.parse(localStorage.getItem('hh_kanban')) || {},
    
    // Filters
    searchQuery: '',
    selectedStatus: 'all',
    selectedMode: 'all',
    selectedTag: 'all',
    sortBy: 'deadline',

    // Active Modal
    activeModalEventId: null,
    activeModalTab: 'overview'
  };

  // Initialize Kanban defaults
  state.hackathons.forEach(h => {
    if (!state.kanban[h.id]) {
      state.kanban[h.id] = state.bookmarks.has(h.id) ? 'bookmarked' : 'none';
    }
  });

  // DOM Cache
  const elements = {
    tickerMove: document.getElementById('tickerMove'),
    statLiveCount: document.getElementById('statLiveCount'),
    statPrizeTotal: document.getElementById('statPrizeTotal'),
    statRevealedCount: document.getElementById('statRevealedCount'),
    
    searchInput: document.getElementById('searchInput'),
    statusTabs: document.getElementById('statusTabs'),
    modeFilter: document.getElementById('modeFilter'),
    tagFilter: document.getElementById('tagFilter'),
    sortFilter: document.getElementById('sortFilter'),
    
    hackathonsGrid: document.getElementById('hackathonsGrid'),
    emptyState: document.getElementById('emptyState'),
    
    viewRadar: document.getElementById('viewRadar'),
    viewKanban: document.getElementById('viewKanban'),
    
    navRadarBtn: document.getElementById('navRadarBtn'),
    navKanbanBtn: document.getElementById('navKanbanBtn'),
    navAddBtn: document.getElementById('navAddBtn'),

    intelModal: document.getElementById('intelModal'),
    intelModalTitle: document.getElementById('intelModalTitle'),
    intelModalOrganizer: document.getElementById('intelModalOrganizer'),
    intelModalBanner: document.getElementById('intelModalBanner'),
    intelModalContent: document.getElementById('intelModalContent'),
    intelTabBtns: document.querySelectorAll('.intel-tab-btn'),
    closeIntelModalBtn: document.getElementById('closeIntelModalBtn'),
    intelBookmarkBtn: document.getElementById('intelBookmarkBtn'),
    intelApplyBtn: document.getElementById('intelApplyBtn'),
    exportPdfBtn: document.getElementById('exportPdfBtn'),

    kanbanCols: {
      bookmarked: document.getElementById('colBookmarked'),
      applied: document.getElementById('colApplied'),
      building: document.getElementById('colBuilding'),
      submitted: document.getElementById('colSubmitted'),
      won: document.getElementById('colWon')
    },

    addEventModal: document.getElementById('addEventModal'),
    closeAddEventModalBtn: document.getElementById('closeAddEventModalBtn'),
    addEventForm: document.getElementById('addEventForm')
  };

  initApp();

  function initApp() {
    renderTicker();
    renderHeaderStats();
    populateTagFilterOptions();
    renderGrid();
    setupEventListeners();
    startCountdownTimerEngine();
  }

  function renderTicker() {
    if (!elements.tickerMove) return;
    const items = [...state.tickerUpdates, ...state.tickerUpdates];
    elements.tickerMove.innerHTML = items.map(u => `
      <span class="inline-flex items-center space-x-2 mx-6 text-sm">
        <span class="px-2 py-0.5 text-xs font-bold rounded bg-cyan-950 text-cyan-400 border border-cyan-800">${u.tag}</span>
        <span class="text-slate-200 font-medium">${u.text}</span>
        <span class="text-slate-500 text-xs">(${u.time})</span>
      </span>
    `).join('');
  }

  function renderHeaderStats() {
    const liveCount = state.hackathons.filter(h => h.status === 'live').length;
    const revealedCount = state.hackathons.filter(h => h.status === 'revealed').length;
    const totalPrize = state.hackathons.reduce((acc, h) => acc + (h.totalPrizePool || 0), 0);

    if (elements.statLiveCount) elements.statLiveCount.textContent = liveCount;
    if (elements.statRevealedCount) elements.statRevealedCount.textContent = revealedCount;
    if (elements.statPrizeTotal) elements.statPrizeTotal.textContent = '$' + totalPrize.toLocaleString();
  }

  function populateTagFilterOptions() {
    if (!elements.tagFilter) return;
    const tagsSet = new Set();
    state.hackathons.forEach(h => (h.tags || []).forEach(t => tagsSet.add(t)));
    
    let html = `<option value="all">All Domains & Tags</option>`;
    Array.from(tagsSet).sort().forEach(tag => {
      html += `<option value="${tag}">${tag}</option>`;
    });
    elements.tagFilter.innerHTML = html;
  }

  function getFilteredHackathons() {
    return state.hackathons.filter(h => {
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        const titleMatch = h.title.toLowerCase().includes(q);
        const orgMatch = h.organizer.toLowerCase().includes(q);
        const tagMatch = (h.tags || []).some(t => t.toLowerCase().includes(q));
        const teaserMatch = (h.shortTeaser || '').toLowerCase().includes(q);
        if (!titleMatch && !orgMatch && !tagMatch && !teaserMatch) return false;
      }

      if (state.selectedStatus !== 'all' && h.status !== state.selectedStatus) return false;
      if (state.selectedMode !== 'all' && h.mode !== state.selectedMode) return false;
      if (state.selectedTag !== 'all' && !(h.tags || []).includes(state.selectedTag)) return false;

      return true;
    }).sort((a, b) => {
      if (state.sortBy === 'prize') return (b.totalPrizePool || 0) - (a.totalPrizePool || 0);
      if (state.sortBy === 'title') return a.title.localeCompare(b.title);
      return new Date(a.timelines.submissionDeadline).getTime() - new Date(b.timelines.submissionDeadline).getTime();
    });
  }

  function renderGrid() {
    const list = getFilteredHackathons();
    
    if (list.length === 0) {
      elements.hackathonsGrid.classList.add('hidden');
      elements.emptyState.classList.remove('hidden');
      return;
    }

    elements.emptyState.classList.add('hidden');
    elements.hackathonsGrid.classList.remove('hidden');

    elements.hackathonsGrid.innerHTML = list.map(h => createHackathonCardHTML(h)).join('');
    
    list.forEach(h => {
      const cardEl = document.getElementById(`card-${h.id}`);
      if (!cardEl) return;

      const intelBtn = cardEl.querySelector('.btn-deep-intel');
      if (intelBtn) intelBtn.addEventListener('click', () => openDeepIntelModal(h.id));

      const bookmarkBtn = cardEl.querySelector('.btn-bookmark');
      if (bookmarkBtn) {
        bookmarkBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleBookmark(h.id);
        });
      }
    });

    updateCountdowns();
  }

  function createHackathonCardHTML(h) {
    const isBookmarked = state.bookmarks.has(h.id);
    const statusBadgeClass = h.status === 'live' 
      ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800' 
      : h.status === 'revealed'
      ? 'bg-cyan-950/80 text-cyan-400 border-cyan-800'
      : h.status === 'judging'
      ? 'bg-amber-950/80 text-amber-400 border-amber-800'
      : 'bg-purple-950/80 text-purple-400 border-purple-800';

    const pulseDot = h.status === 'live' ? '<span class="pulse-live mr-1.5"></span>' 
      : h.status === 'revealed' ? '<span class="pulse-revealed mr-1.5"></span>' : '';

    const tagsHTML = (h.tags || []).slice(0, 3).map(t => 
      `<span class="px-2 py-0.5 text-xs font-medium rounded badge-tag text-slate-300">${t}</span>`
    ).join('');

    return `
      <div id="card-${h.id}" class="glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800 relative group">
        
        <div class="h-32 bg-gradient-to-r ${h.bannerGradient || 'from-blue-900 to-indigo-900'} p-5 flex flex-col justify-between relative overflow-hidden">
          <div class="absolute inset-0 bg-black/20"></div>
          
          <div class="flex justify-between items-start z-10">
            <span class="px-2.5 py-1 text-xs font-semibold rounded-full border ${statusBadgeClass} flex items-center backdrop-blur-md">
              ${pulseDot} ${h.statusLabel || h.status.toUpperCase()}
            </span>
            
            <button class="btn-bookmark p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-slate-300 hover:text-amber-400 transition-colors backdrop-blur-md" title="Bookmark Event">
              <svg class="w-5 h-5 ${isBookmarked ? 'text-amber-400 fill-amber-400' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>

          <div class="z-10 flex items-center justify-between">
            <span class="text-xs font-mono font-medium text-slate-300 bg-slate-950/60 px-2.5 py-1 rounded-md backdrop-blur-sm border border-slate-800/80">
              ${h.mode} • ${h.location}
            </span>
            <span class="text-lg font-bold font-heading text-amber-400 glow-gold-text">
              ${h.currency}${(h.totalPrizePool || 0).toLocaleString()}
            </span>
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <div class="flex items-center space-x-3 mb-2">
              <img src="${h.logo}" alt="${h.title}" class="w-8 h-8 rounded-lg object-contain bg-slate-900 p-1 border border-slate-800" onerror="this.src='https://via.placeholder.com/40'"/>
              <div>
                <h3 class="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">${h.title}</h3>
                <p class="text-xs text-slate-400 font-medium">${h.organizer}</p>
              </div>
            </div>

            <p class="text-xs text-slate-300 line-clamp-2 mt-2 leading-relaxed">
              ${h.shortTeaser}
            </p>
          </div>

          <div class="bg-slate-950/80 rounded-xl p-3 border border-slate-800/80 flex items-center justify-between font-mono text-xs">
            <span class="text-slate-400 text-[11px] font-sans">Deadline In:</span>
            <div class="flex items-center space-x-1.5 text-cyan-400 font-bold" id="countdown-${h.id}">
              <span class="bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 text-white">00d</span>:
              <span class="bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 text-white">00h</span>:
              <span class="bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 text-white">00m</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-1.5 pt-1">
            ${tagsHTML}
          </div>

          <div class="pt-2 flex items-center space-x-2">
            <button class="btn-deep-intel flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-cyan-950/50 flex items-center justify-center space-x-1.5">
              <span>🔍 Deep Intel Dossier</span>
            </button>
            
            <a href="${h.registrationUrl}" target="_blank" class="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors" title="External Apply Link">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    `;
  }

  function startCountdownTimerEngine() {
    updateCountdowns();
    setInterval(updateCountdowns, 1000);
  }

  function updateCountdowns() {
    state.hackathons.forEach(h => {
      const el = document.getElementById(`countdown-${h.id}`);
      if (!el) return;

      const target = new Date(h.timelines.submissionDeadline).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        el.innerHTML = `<span class="text-rose-400 font-bold">EXPIRED / CLOSED</span>`;
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      el.innerHTML = `
        <span class="bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 text-white">${String(days).padStart(2, '0')}d</span>:
        <span class="bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 text-white">${String(hours).padStart(2, '0')}h</span>:
        <span class="bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 text-white">${String(mins).padStart(2, '0')}m</span>:
        <span class="bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 text-cyan-400">${String(secs).padStart(2, '0')}s</span>
      `;
    });
  }

  function toggleBookmark(eventId) {
    if (state.bookmarks.has(eventId)) {
      state.bookmarks.delete(eventId);
      if (state.kanban[eventId] === 'bookmarked') state.kanban[eventId] = 'none';
    } else {
      state.bookmarks.add(eventId);
      state.kanban[eventId] = 'bookmarked';
    }
    saveState();
    renderGrid();
    renderKanban();
  }

  function saveState() {
    localStorage.setItem('hh_bookmarks', JSON.stringify(Array.from(state.bookmarks)));
    localStorage.setItem('hh_kanban', JSON.stringify(state.kanban));
  }

  function openDeepIntelModal(eventId) {
    const h = state.hackathons.find(item => item.id === eventId);
    if (!h) return;

    state.activeModalEventId = eventId;
    state.activeModalTab = 'overview';

    elements.intelModalTitle.textContent = h.title;
    elements.intelModalOrganizer.textContent = `Organized by ${h.organizer} • ${h.mode}`;
    elements.intelModalBanner.className = `h-40 bg-gradient-to-r ${h.bannerGradient || 'from-blue-900 to-indigo-900'} p-6 flex flex-col justify-between relative overflow-hidden rounded-t-2xl`;
    
    elements.intelApplyBtn.href = h.registrationUrl;
    updateModalBookmarkBtnState();
    renderIntelTabContent();

    elements.intelModal.classList.remove('hidden');
    elements.intelModal.classList.add('flex');
  }

  function updateModalBookmarkBtnState() {
    const isBookmarked = state.bookmarks.has(state.activeModalEventId);
    elements.intelBookmarkBtn.innerHTML = isBookmarked ? `⭐ Bookmarked` : `☆ Bookmark`;
  }

  function renderIntelTabContent() {
    const h = state.hackathons.find(item => item.id === state.activeModalEventId);
    if (!h) return;

    elements.intelTabBtns.forEach(btn => {
      if (btn.dataset.tab === state.activeModalTab) {
        btn.className = 'intel-tab-btn px-4 py-2.5 text-xs font-bold rounded-xl bg-cyan-600 text-white shadow-lg border border-cyan-500 transition-all';
      } else {
        btn.className = 'intel-tab-btn px-4 py-2.5 text-xs font-semibold rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-all';
      }
    });

    let html = '';

    if (state.activeModalTab === 'overview') {
      html = `
        <div class="space-y-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <span class="text-[11px] text-slate-400 font-medium">Total Prize Pool</span>
              <p class="text-xl font-bold font-heading text-amber-400 mt-0.5">${h.currency}${(h.totalPrizePool||0).toLocaleString()}</p>
            </div>
            <div class="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <span class="text-[11px] text-slate-400 font-medium">Format & Location</span>
              <p class="text-sm font-bold text-white mt-1">${h.mode} (${h.location})</p>
            </div>
            <div class="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <span class="text-[11px] text-slate-400 font-medium">Team Constraints</span>
              <p class="text-sm font-bold text-cyan-400 mt-1">${h.eligibility.teamSizeMin} - ${h.eligibility.teamSizeMax} Members</p>
            </div>
            <div class="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <span class="text-[11px] text-slate-400 font-medium">Student Restricted?</span>
              <p class="text-sm font-bold ${h.eligibility.studentOnly ? 'text-rose-400' : 'text-emerald-400'} mt-1">
                ${h.eligibility.studentOnly ? 'Yes (Students Only)' : 'No (Open to All)'}
              </p>
            </div>
          </div>

          <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <h4 class="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Executive Summary</h4>
            <p class="text-sm text-slate-200 leading-relaxed">${h.shortTeaser}</p>
            <p class="text-xs text-slate-400 mt-3"><strong class="text-slate-300">Prerequisites:</strong> ${h.eligibility.prerequisites}</p>
          </div>
        </div>
      `;
    } 
    else if (state.activeModalTab === 'tracks') {
      html = `
        <div class="space-y-4">
          ${(h.tracks || []).map((t) => `
            <div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-start">
                <h4 class="text-base font-bold text-white font-heading">${t.title}</h4>
                <span class="px-3 py-1 text-xs font-bold rounded-lg bg-amber-950/80 text-amber-400 border border-amber-800 shrink-0">
                  ${t.prize}
                </span>
              </div>
              <div class="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                <span class="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">Problem Statement</span>
                <p class="text-xs text-slate-200 mt-1 leading-relaxed">${t.problemStatement}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
    else if (state.activeModalTab === 'judges') {
      html = `
        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${(h.judges || []).map(j => `
              <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex space-x-4 items-start">
                <img src="${j.avatar}" alt="${j.name}" class="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/40 shrink-0" onerror="this.src='https://via.placeholder.com/60'"/>
                <div class="space-y-1.5 flex-1">
                  <h4 class="text-sm font-bold text-white">${j.name}</h4>
                  <p class="text-xs text-cyan-400 font-medium">${j.role}</p>
                  <p class="text-xs text-slate-300"><strong class="text-slate-400">Core Focus:</strong> ${j.focusArea}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    else if (state.activeModalTab === 'rules') {
      html = `
        <div class="space-y-4">
          <div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-4">
            <h4 class="text-xs font-bold text-cyan-400 uppercase tracking-wider">Required Deliverables & Compliance</h4>
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
              <span class="text-slate-400 font-bold">Repository Requirement:</span>
              <p class="text-slate-200 mt-1">${h.rules.repoRequirement}</p>
            </div>
          </div>
        </div>
      `;
    }
    else if (state.activeModalTab === 'playbook') {
      html = `
        <div class="space-y-4">
          <div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-4">
            <h4 class="text-xs font-bold text-amber-400 uppercase tracking-wider">Hunter's Secret Winning Playbook</h4>
            <div class="p-4 bg-slate-950 rounded-xl border border-cyan-900/40 text-xs">
              <span class="text-cyan-400 font-bold">Recommended Tech Stack</span>
              <p class="text-slate-200 mt-1 font-mono">${h.winningPlaybook.techStackRecommendation}</p>
            </div>
          </div>
        </div>
      `;
    }

    elements.intelModalContent.innerHTML = html;
  }

  // --- COMPREHENSIVE MULTI-PAGE VECTOR PDF EXPORT ENGINE ---
  function exportEventDossierPDF() {
    const h = state.hackathons.find(item => item.id === state.activeModalEventId);
    if (!h) {
      alert("Please select a hackathon first before exporting PDF!");
      return;
    }

    const exportBtn = elements.exportPdfBtn;
    const originalBtnText = exportBtn ? exportBtn.innerHTML : '📄 Export PDF Dossier';
    if (exportBtn) {
      exportBtn.innerHTML = '<span>⏳ Downloading PDF...</span>';
      exportBtn.disabled = true;
    }

    try {
      if (window.jspdf && window.jspdf.jsPDF) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
          orientation: 'portrait',
          unit: 'pt',
          format: 'a4'
        });

        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 40;
        const contentWidth = pageWidth - (margin * 2);
        let y = 45;

        function checkPageBreak(neededHeight) {
          if (y + neededHeight > pageHeight - 50) {
            doc.addPage();
            y = 45;
            // Running top header for continuation pages
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(8.5);
            doc.setTextColor(148, 163, 184);
            doc.text(`${h.title} — Deep Intel Dossier (Continuation)`, margin, y);
            doc.setDrawColor(226, 232, 240);
            doc.line(margin, y + 6, pageWidth - margin, y + 6);
            y += 24;
          }
        }

        // 1. Top Accent Banner
        doc.setFillColor(2, 132, 199); // Sky Blue #0284c7
        doc.rect(margin, y, contentWidth, 4, 'F');
        y += 18;

        // 2. Header Title & Details
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(17);
        doc.setTextColor(15, 23, 42); // #0f172a
        const titleLines = doc.splitTextToSize(h.title, contentWidth - 120);
        doc.text(titleLines, margin, y);
        
        // Prize Pool Badge (Top Right)
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(2, 132, 199);
        const prizeText = `${h.currency}${(h.totalPrizePool || 0).toLocaleString()} Pool`;
        doc.text(prizeText, pageWidth - margin - doc.getTextWidth(prizeText), y + 4);
        
        y += (titleLines.length * 15) + 4;

        // Subtitle: Organizer, Mode, Status
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(71, 85, 105);
        doc.text(`Organized by ${h.organizer} • ${h.mode} (${h.location}) • Status: ${h.statusLabel || h.status.toUpperCase()}`, margin, y);
        y += 14;

        // Divider
        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(1);
        doc.line(margin, y, pageWidth - margin, y);
        y += 14;

        // 3. Eligibility & Constraints Box
        doc.setFillColor(248, 250, 252);
        doc.roundedRect(margin, y, contentWidth, 40, 4, 4, 'F');
        doc.setDrawColor(226, 232, 240);
        doc.roundedRect(margin, y, contentWidth, 40, 4, 4, 'S');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(2, 132, 199);
        doc.text('TEAM SIZE', margin + 12, y + 13);
        doc.text('STUDENT ONLY?', margin + 130, y + 13);
        doc.text('GEOGRAPHY', margin + 250, y + 13);
        doc.text('DEADLINE', margin + 380, y + 13);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(15, 23, 42);
        doc.text(`${h.eligibility.teamSizeMin} - ${h.eligibility.teamSizeMax} Members`, margin + 12, y + 28);
        
        doc.setTextColor(h.eligibility.studentOnly ? 225 : 5, h.eligibility.studentOnly ? 29 : 150, h.eligibility.studentOnly ? 72 : 105);
        doc.text(h.eligibility.studentOnly ? 'Yes (Student Only)' : 'No (Open to All)', margin + 130, y + 28);
        
        doc.setTextColor(15, 23, 42);
        doc.text(doc.splitTextToSize(h.eligibility.geography || 'Global', 120)[0], margin + 250, y + 28);
        
        const deadlineDate = new Date(h.timelines.submissionDeadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        doc.text(deadlineDate, margin + 380, y + 28);
        
        y += 52;

        // 4. Executive Summary & Prerequisites
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(2, 132, 199);
        doc.text('Executive Summary & Mission', margin, y);
        y += 13;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(51, 65, 85);
        const teaserLines = doc.splitTextToSize(h.shortTeaser || 'No summary provided.', contentWidth);
        doc.text(teaserLines, margin, y);
        y += (teaserLines.length * 12) + 6;

        if (h.eligibility.prerequisites) {
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8.5);
          doc.setTextColor(71, 85, 105);
          doc.text('Prerequisites: ', margin, y);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(100, 116, 139);
          const prereqLines = doc.splitTextToSize(h.eligibility.prerequisites, contentWidth - 65);
          doc.text(prereqLines, margin + 62, y);
          y += (prereqLines.length * 11) + 14;
        }

        // 5. Tracks & Problem Statements
        if (h.tracks && h.tracks.length > 0) {
          checkPageBreak(60);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(11);
          doc.setTextColor(2, 132, 199);
          doc.text('Tracks & Deep Problem Statements', margin, y);
          y += 13;

          h.tracks.forEach((t) => {
            const probLines = doc.splitTextToSize(t.problemStatement || '', contentWidth - 24);
            const reqLines = (t.keyRequirements && t.keyRequirements.length > 0) 
              ? doc.splitTextToSize('• ' + t.keyRequirements.join('  • '), contentWidth - 24)
              : [];
            
            const itemHeight = 32 + (probLines.length * 11) + (reqLines.length > 0 ? (reqLines.length * 11) + 6 : 0);
            checkPageBreak(itemHeight + 8);

            doc.setFillColor(248, 250, 252);
            doc.roundedRect(margin, y, contentWidth, itemHeight, 4, 4, 'F');
            doc.setDrawColor(226, 232, 240);
            doc.roundedRect(margin, y, contentWidth, itemHeight, 4, 4, 'S');

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(9);
            doc.setTextColor(15, 23, 42);
            doc.text(t.title, margin + 12, y + 14);

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(8.5);
            doc.setTextColor(217, 119, 6);
            doc.text(t.prize, pageWidth - margin - 12 - doc.getTextWidth(t.prize), y + 14);

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8.5);
            doc.setTextColor(51, 65, 85);
            doc.text(probLines, margin + 12, y + 27);

            let innerY = y + 27 + (probLines.length * 11);
            if (reqLines.length > 0) {
              doc.setFont('helvetica', 'italic');
              doc.setFontSize(8);
              doc.setTextColor(100, 116, 139);
              doc.text(reqLines, margin + 12, innerY + 4);
            }

            y += itemHeight + 8;
          });
          y += 6;
        }

        // 6. Judges & Evaluation Criteria
        if (h.judges && h.judges.length > 0) {
          checkPageBreak(50);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(11);
          doc.setTextColor(2, 132, 199);
          doc.text('Judges & Evaluation Roster', margin, y);
          y += 13;

          h.judges.forEach((j) => {
            checkPageBreak(30);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(8.5);
            doc.setTextColor(15, 23, 42);
            doc.text(`• ${j.name} (${j.role})`, margin + 6, y);
            y += 10;

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8);
            doc.setTextColor(100, 116, 139);
            const focusLines = doc.splitTextToSize(`Core Focus: ${j.focusArea}`, contentWidth - 20);
            doc.text(focusLines, margin + 14, y);
            y += (focusLines.length * 10) + 4;
          });
          y += 6;
        }

        // 7. Rules, Deliverables & Winning Playbook
        checkPageBreak(80);
        doc.setFillColor(240, 249, 255); // Sky Blue tint
        const playbookHeight = 56;
        doc.roundedRect(margin, y, contentWidth, playbookHeight, 4, 4, 'F');
        doc.setDrawColor(186, 230, 253);
        doc.roundedRect(margin, y, contentWidth, playbookHeight, 4, 4, 'S');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(3, 105, 161);
        doc.text('RULES & COMPLIANCE:', margin + 12, y + 15);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(51, 65, 85);
        doc.text(doc.splitTextToSize(`Repo: ${h.rules.repoRequirement || 'Public Repo'} • Max Video: ${h.rules.demoVideoMaxSecs ? h.rules.demoVideoMaxSecs + 's' : 'N/A'} • Slide Deck: ${h.rules.slideDeckRequired ? 'Required' : 'Optional'}`, contentWidth - 24), margin + 12, y + 27);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(3, 105, 161);
        doc.text('RECOMMENDED STACK & PLAYBOOK:', margin + 12, y + 40);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(51, 65, 85);
        doc.text(doc.splitTextToSize(h.winningPlaybook.techStackRecommendation || 'Next.js + Tailwind + Cloud API', contentWidth - 24), margin + 12, y + 51);

        y += playbookHeight + 20;

        // 8. Add Running Page Numbers & Timestamp Footer to All Pages
        const totalPages = doc.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
          doc.setPage(i);
          doc.setDrawColor(226, 232, 240);
          doc.line(margin, pageHeight - 34, pageWidth - margin, pageHeight - 34);

          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7.5);
          doc.setTextColor(148, 163, 184);
          doc.text(`Hackathon Hunters Intelligence • Synced Live via 30-Min Auto-Radar • Apply at: ${h.registrationUrl}`, margin, pageHeight - 22);
          
          const pageStr = `Page ${i} of ${totalPages}`;
          doc.text(pageStr, pageWidth - margin - doc.getTextWidth(pageStr), pageHeight - 22);
        }

        // DIRECT BINARY PDF DOWNLOAD
        const fileName = `${h.title.replace(/[^a-zA-Z0-9]/g, '_')}_Intel_Dossier.pdf`;
        doc.save(fileName);
      } else {
        window.print();
      }
    } catch (err) {
      console.warn("jsPDF error, falling back to window.print():", err);
      window.print();
    } finally {
      if (exportBtn) {
        exportBtn.innerHTML = originalBtnText;
        exportBtn.disabled = false;
      }
    }
  }

  function renderKanban() {
    Object.values(elements.kanbanCols).forEach(col => {
      if (col) col.innerHTML = '';
    });

    const categories = ['bookmarked', 'applied', 'building', 'submitted', 'won'];
    
    categories.forEach(cat => {
      const colEl = elements.kanbanCols[cat];
      if (!colEl) return;

      const items = state.hackathons.filter(h => state.kanban[h.id] === cat);
      
      if (items.length === 0) {
        colEl.innerHTML = `<div class="p-4 text-center text-xs text-slate-600 italic">No events in this status</div>`;
        return;
      }

      colEl.innerHTML = items.map(h => `
        <div class="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3 shadow-md group">
          <div class="flex items-center space-x-2">
            <img src="${h.logo}" class="w-6 h-6 rounded object-contain bg-slate-950 p-0.5" onerror="this.src='https://via.placeholder.com/30'"/>
            <h4 class="text-xs font-bold text-white line-clamp-1 flex-1">${h.title}</h4>
          </div>

          <div class="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span class="text-amber-400 font-bold">${h.currency}${(h.totalPrizePool||0).toLocaleString()}</span>
            <span>${h.mode}</span>
          </div>
        </div>
      `).join('');
    });
  }

  function setupEventListeners() {
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderGrid();
    });

    if (elements.statusTabs) {
      elements.statusTabs.querySelectorAll('.status-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          elements.statusTabs.querySelectorAll('.status-tab-btn').forEach(b => {
            b.className = 'status-tab-btn px-4 py-2 text-xs font-semibold rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-all';
          });
          e.target.className = 'status-tab-btn px-4 py-2 text-xs font-bold rounded-xl bg-cyan-600 text-white shadow-lg border border-cyan-500 transition-all';
          state.selectedStatus = e.target.dataset.status;
          renderGrid();
        });
      });
    }

    elements.modeFilter.addEventListener('change', (e) => {
      state.selectedMode = e.target.value;
      renderGrid();
    });

    elements.tagFilter.addEventListener('change', (e) => {
      state.selectedTag = e.target.value;
      renderGrid();
    });

    elements.sortFilter.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderGrid();
    });

    elements.navRadarBtn.addEventListener('click', () => switchMainView('radar'));
    elements.navKanbanBtn.addEventListener('click', () => switchMainView('kanban'));
    
    elements.navAddBtn.addEventListener('click', () => toggleAddEventModal(true));
    elements.closeAddEventModalBtn.addEventListener('click', () => toggleAddEventModal(false));

    elements.closeIntelModalBtn.addEventListener('click', () => {
      elements.intelModal.classList.add('hidden');
      elements.intelModal.classList.remove('flex');
    });

    elements.intelTabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        state.activeModalTab = e.target.dataset.tab;
        renderIntelTabContent();
      });
    });

    elements.intelBookmarkBtn.addEventListener('click', () => {
      if (state.activeModalEventId) {
        toggleBookmark(state.activeModalEventId);
        updateModalBookmarkBtnState();
      }
    });

    if (elements.exportPdfBtn) {
      elements.exportPdfBtn.addEventListener('click', exportEventDossierPDF);
    }

    elements.addEventForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('addTitle').value;
      const organizer = document.getElementById('addOrganizer').value;
      const prize = parseInt(document.getElementById('addPrize').value) || 10000;
      const mode = document.getElementById('addMode').value;
      const tags = document.getElementById('addTags').value.split(',').map(s => s.trim());
      const teaser = document.getElementById('addTeaser').value;

      const newEvent = {
        id: 'custom-' + Date.now(),
        title: title,
        organizer: organizer,
        logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80',
        bannerGradient: 'from-cyan-900 via-blue-950 to-slate-900',
        status: 'live',
        statusLabel: '🔥 Live Submissions Open',
        mode: mode,
        location: mode === 'Online' ? 'Global Virtual' : 'In-Person Location',
        totalPrizePool: prize,
        currency: '$',
        featured: false,
        tags: tags,
        shortTeaser: teaser,
        timelines: {
          registrationDeadline: new Date(Date.now() + 14 * 86400000).toISOString(),
          revealDate: new Date().toISOString(),
          submissionDeadline: new Date(Date.now() + 14 * 86400000).toISOString(),
          winnerAnnouncement: new Date(Date.now() + 21 * 86400000).toISOString()
        },
        eligibility: {
          minAge: 18,
          allowedRoles: ["Developers"],
          teamSizeMin: 1,
          teamSizeMax: 4,
          geography: "Global",
          studentOnly: false,
          prerequisites: "Open submission."
        },
        tracks: [],
        judges: [],
        rules: { repoRequirement: "Public GitHub Repo" },
        winningPlaybook: { techStackRecommendation: "Next.js" },
        registrationUrl: "#",
        submissionUrl: "#"
      };

      state.hackathons.unshift(newEvent);
      renderHeaderStats();
      populateTagFilterOptions();
      renderGrid();
      toggleAddEventModal(false);
      elements.addEventForm.reset();
    });
  }

  function switchMainView(viewName) {
    elements.viewRadar.classList.add('hidden');
    elements.viewKanban.classList.add('hidden');

    if (viewName === 'radar') {
      elements.viewRadar.classList.remove('hidden');
      renderGrid();
    } else if (viewName === 'kanban') {
      elements.viewKanban.classList.remove('hidden');
      renderKanban();
    }
  }

  function toggleAddEventModal(show) {
    if (show) {
      elements.addEventModal.classList.remove('hidden');
      elements.addEventModal.classList.add('flex');
    } else {
      elements.addEventModal.classList.add('hidden');
      elements.addEventModal.classList.remove('flex');
    }
  }
});
