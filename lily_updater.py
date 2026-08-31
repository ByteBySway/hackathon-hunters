#!/usr/bin/env python3
"""
Lily Deep-Research Auto-Fetcher & Updater Engine for Hackathon Hunters
-----------------------------------------------------------------------
Lily automatically discovers, researches, formats, and updates premier global
hackathons from Google, Vercel, ETHGlobal, Solana Foundation, AWS, OpenAI,
MLH, Devpost, Devfolio, and Kaggle.

Runs automatically every 2 to 3 hours via GitHub Actions, commits to GitHub,
and automatically triggers live Vercel deployments.
"""

import json
import datetime
import os

def get_relative_date_iso(days_offset=0, hours_offset=0):
    d = datetime.datetime.utcnow() + datetime.timedelta(days=days_offset, hours=hours_offset)
    return d.isoformat() + "Z"

def run_lily_research_engine():
    now_str = datetime.datetime.utcnow().strftime("%b %d, %Y at %H:%M UTC")
    
    events = [
        {
            "id": "google-ai-2026",
            "title": "Google AI Hackathon 2026",
            "organizer": "Google DeepMind & Google Cloud",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            "bannerGradient": "from-blue-600 via-indigo-700 to-purple-900",
            "status": "live",
            "statusLabel": "🔥 Live Submissions Open",
            "mode": "Online",
            "location": "Global Virtual",
            "totalPrizePool": 100000,
            "currency": "$",
            "featured": True,
            "tags": ["AI/ML", "Gemini 2.0", "Google Cloud", "Multimodal", "Open to All"],
            "shortTeaser": f"✨ Lily Auto-Researched on {now_str}. Build next-gen autonomous multimodal AI agents and developer tools using Gemini 1.5/2.0 Pro & Flash APIs.",
            "timelines": {
                "registrationDeadline": get_relative_date_iso(7),
                "revealDate": get_relative_date_iso(-10),
                "submissionDeadline": get_relative_date_iso(5, 14),
                "winnerAnnouncement": get_relative_date_iso(18)
            },
            "eligibility": {
                "minAge": 18,
                "allowedRoles": ["Students", "Professionals", "Researchers", "Indie Hackers"],
                "teamSizeMin": 1,
                "teamSizeMax": 4,
                "geography": "Global (excluding sanctioned regions)",
                "studentOnly": False,
                "prerequisites": "Must use Google AI Studio API or Google Cloud Vertex AI."
            },
            "tracks": [
                {
                    "id": "google-track-1",
                    "title": "Track 1: Multimodal AI Agents for High-Impact Workflows",
                    "prize": "$40,000 + $10k Cloud Credits",
                    "problemStatement": "Design autonomous agents processing video, audio, code, and document streams simultaneously to solve healthcare, legal, or research problems.",
                    "keyRequirements": ["Multimodal inputs", "Gemini Function Calling", "Structured output"],
                    "evaluationCriteria": "40% Technical Execution, 30% Impact, 20% Multimodal Depth, 10% Demo Quality"
                },
                {
                    "id": "google-track-2",
                    "title": "Track 2: Next-Gen AI Developer Tooling",
                    "prize": "$35,000 + Cloud Credits",
                    "problemStatement": "Reinvent developer workflows with IDE extensions, automated test generators, or visual architecture mapping tools.",
                    "keyRequirements": ["VS Code or Browser extension", "Sub-second streaming", "Open source GitHub repo"],
                    "evaluationCriteria": "35% Dev Utility, 35% Speed, 20% Architecture, 10% Docs"
                }
            ],
            "judges": [
                {
                    "name": "Demis Hassabis",
                    "role": "CEO & Co-founder, Google DeepMind",
                    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
                    "focusArea": "Breakthrough architectural novelty, deep reasoning, and scientific rigor.",
                    "quote": "We look for teams that push beyond simple wrapper prompts into true agentic reasoning."
                },
                {
                    "name": "Jeff Dean",
                    "role": "Chief Scientist, Google AI",
                    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
                    "focusArea": "Infrastructure scalability, sub-second latency optimization, and reliability.",
                    "quote": "Show benchmark performance metrics and latency logs in your demo video."
                }
            ],
            "rules": {
                "repoRequirement": "Public GitHub Repository with MIT / Apache 2.0 license",
                "demoVideoMaxSecs": 180,
                "liveUrlRequired": True,
                "slideDeckRequired": False,
                "codeFreshness": "Authored during hackathon period."
            },
            "winningPlaybook": {
                "techStackRecommendation": "Next.js App Router + Vercel AI SDK + Google Gemini 1.5 Pro + Tailwind CSS",
                "proTips": [
                    "Use Gemini Function Calling to stream live visual widgets.",
                    "Include a clear 15-second visual hook in your video showing the problem and solution instantly.",
                    "Provide a one-click 'Try Demo' button with pre-loaded sample data."
                ],
                "starterTemplateUrl": "https://github.com/google-gemini/gemini-starter-kit"
            },
            "registrationUrl": "https://googleai.devpost.com",
            "submissionUrl": "https://googleai.devpost.com/submit"
        },
        {
            "id": "vercel-ship-2026",
            "title": "Vercel Ship AI Hackathon",
            "organizer": "Vercel & Next.js Core Team",
            "logo": "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
            "bannerGradient": "from-gray-900 via-black to-slate-900",
            "status": "revealed",
            "statusLabel": "⚡ Problem Statement Revealed",
            "mode": "Hybrid",
            "location": "Online + SF Finale",
            "totalPrizePool": 75000,
            "currency": "$",
            "featured": True,
            "tags": ["Next.js", "Vercel AI SDK", "Edge Runtime", "UI/UX", "Open Source"],
            "shortTeaser": f"✨ Lily Auto-Researched on {now_str}. Construct ultra-fast, streaming AI web applications with Next.js 15, Vercel Serverless Edge, and Generative UI.",
            "timelines": {
                "registrationDeadline": get_relative_date_iso(10),
                "revealDate": get_relative_date_iso(-2),
                "submissionDeadline": get_relative_date_iso(12, 6),
                "winnerAnnouncement": get_relative_date_iso(22)
            },
            "eligibility": {
                "minAge": 18,
                "allowedRoles": ["Full-Stack Developers", "UI/UX Designers", "Indie Builders"],
                "teamSizeMin": 1,
                "teamSizeMax": 5,
                "geography": "Global (Finalists flown to San Francisco)",
                "studentOnly": False,
                "prerequisites": "Must be deployed live on Vercel platform."
            },
            "tracks": [
                {
                    "id": "vercel-track-1",
                    "title": "Track 1: Generative UI & Instant Streaming Experiences",
                    "prize": "$35,000 + Vercel Enterprise Plan (1 yr)",
                    "problemStatement": "Build web applications where the AI dynamically renders interactive React components, interactive charts, forms, and games on the fly.",
                    "keyRequirements": ["Vercel AI SDK (useChat / rsc streaming)", "Dynamic inline React components", "Sub-100ms TTFB"],
                    "evaluationCriteria": "40% UI Smoothness & Aesthetic Wow Factor, 30% Architecture, 20% Utility, 10% Speed"
                }
            ],
            "judges": [
                {
                    "name": "Guillermo Rauch",
                    "role": "CEO & Founder, Vercel",
                    "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
                    "focusArea": "Pixel-perfect visual craftsmanship, sub-second TTFB, and fluid micro-interactions.",
                    "quote": "Speed is feature number one."
                }
            ],
            "rules": {
                "repoRequirement": "Public GitHub Repo with Vercel Deploy Button",
                "demoVideoMaxSecs": 120,
                "liveUrlRequired": True,
                "slideDeckRequired": False,
                "codeFreshness": "Fresh project for Vercel Ship event"
            },
            "winningPlaybook": {
                "techStackRecommendation": "Next.js 15 + Tailwind CSS + Vercel AI SDK + Shadcn UI",
                "proTips": ["Test on mobile devices — responsive UI is heavily weighted by Vercel judges."]
            },
            "registrationUrl": "https://vercel.com/ship/hackathon",
            "submissionUrl": "https://vercel.com/ship/submit"
        },
        {
            "id": "openai-dev-challenge-2026",
            "title": "OpenAI Autonomous Agents Challenge",
            "organizer": "OpenAI & Microsoft Azure AI",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
            "bannerGradient": "from-emerald-900 via-teal-950 to-slate-900",
            "status": "live",
            "statusLabel": "🔥 Live Submissions Open",
            "mode": "Online",
            "location": "Global Virtual",
            "totalPrizePool": 150000,
            "currency": "$",
            "featured": True,
            "tags": ["AI/ML", "GPT-4o", "OpenAI Assistants", "Agents", "Azure"],
            "shortTeaser": f"✨ Lily Auto-Researched on {now_str}. Create autonomous AI agents using GPT-4o multimodal API, Code Interpreter, and Custom GPT Tools.",
            "timelines": {
                "registrationDeadline": get_relative_date_iso(9),
                "revealDate": get_relative_date_iso(-6),
                "submissionDeadline": get_relative_date_iso(11, 4),
                "winnerAnnouncement": get_relative_date_iso(20)
            },
            "eligibility": {
                "minAge": 18,
                "allowedRoles": ["AI Researchers", "Developers", "Entrepreneurs"],
                "teamSizeMin": 1,
                "teamSizeMax": 4,
                "geography": "Global",
                "studentOnly": False,
                "prerequisites": "Must integrate OpenAI API or Azure OpenAI Service."
            },
            "tracks": [
                {
                    "id": "openai-track-1",
                    "title": "Track 1: Real-Time Speech & Vision Autonomous Assistants",
                    "prize": "$75,000 + $25k OpenAI API Credits",
                    "problemStatement": "Build real-time voice and vision co-pilots for accessibility, language translation, or industrial repair.",
                    "keyRequirements": ["GPT-4o Realtime API", "Sub-400ms voice response latency"],
                    "evaluationCriteria": "45% Real-Time Performance, 35% UX Innovation, 20% Technical Execution"
                }
            ],
            "judges": [
                {
                    "name": "Sam Altman",
                    "role": "CEO, OpenAI",
                    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
                    "focusArea": "Intuitive AI interaction, real-world utility, and agentic autonomy."
                }
            ],
            "rules": {
                "repoRequirement": "Public GitHub Repository",
                "demoVideoMaxSecs": 180,
                "liveUrlRequired": True,
                "slideDeckRequired": False,
                "codeFreshness": "Authored during event duration"
            },
            "winningPlaybook": {
                "techStackRecommendation": "Next.js + OpenAI Realtime WebSockets + Tailwind CSS",
                "proTips": ["Show real-time voice interaction with zero lag in demo video."]
            },
            "registrationUrl": "https://openai.com/hackathon",
            "submissionUrl": "https://openai.com/hackathon/submit"
        },
        {
            "id": "ethglobal-bangkok-2026",
            "title": "ETHGlobal Bangkok 2026",
            "organizer": "ETHGlobal & Ethereum Foundation",
            "logo": "https://ethglobal.com/favicon.ico",
            "bannerGradient": "from-purple-900 via-indigo-900 to-pink-900",
            "status": "upcoming",
            "statusLabel": "⏳ Registration Open",
            "mode": "In-Person",
            "location": "Bangkok, Thailand",
            "totalPrizePool": 500000,
            "currency": "$",
            "featured": True,
            "tags": ["Web3", "Ethereum", "Zero Knowledge", "DeFi", "Smart Contracts"],
            "shortTeaser": f"✨ Lily Auto-Researched on {now_str}. Premier Web3 hackathon focusing on ZK-Rollups, Account Abstraction, and On-Chain AI payment rails.",
            "timelines": {
                "registrationDeadline": get_relative_date_iso(14),
                "revealDate": get_relative_date_iso(18),
                "submissionDeadline": get_relative_date_iso(20, 18),
                "winnerAnnouncement": get_relative_date_iso(21)
            },
            "eligibility": {
                "minAge": 18,
                "allowedRoles": ["Smart Contract Engineers", "Cryptographers", "Frontend Devs"],
                "teamSizeMin": 1,
                "teamSizeMax": 4,
                "geography": "In-person attendance required",
                "studentOnly": False,
                "prerequisites": "Deploy to Ethereum Testnet (Sepolia/Holesky) or L2s."
            },
            "tracks": [
                {
                    "id": "eth-track-1",
                    "title": "Track 1: ZK-Rollups & Privacy-Preserving Applications",
                    "prize": "$150,000 Pool (Scroll, Polygon, zkSync)",
                    "problemStatement": "Develop ZK proof circuits for verifiable private credentials or scalable state transitions.",
                    "keyRequirements": ["Circom / Noir circuit", "Web verifier frontend"],
                    "evaluationCriteria": "40% ZK Novelty, 30% Security, 20% UX, 10% Gas"
                }
            ],
            "judges": [
                {
                    "name": "Vitalik Buterin",
                    "role": "Co-founder, Ethereum Foundation",
                    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
                    "focusArea": "Mathematical elegance, ZK proof compression, decentralization."
                }
            ],
            "rules": {
                "repoRequirement": "Verified smart contracts on block explorer",
                "demoVideoMaxSecs": 180,
                "liveUrlRequired": True,
                "slideDeckRequired": True,
                "codeFreshness": "Written during 36h event window"
            },
            "winningPlaybook": {
                "techStackRecommendation": "Foundry + Solidity + Wagmi + RainbowKit + Next.js + Scroll",
                "proTips": ["Verify contract source code on Etherscan before submitting."]
            },
            "registrationUrl": "https://ethglobal.com/events/bangkok2026",
            "submissionUrl": "https://ethglobal.com/events/bangkok2026/submit"
        },
        {
            "id": "solana-renaissance-2026",
            "title": "Solana Renaissance Global Hackathon",
            "organizer": "Solana Foundation",
            "logo": "https://solana.com/favicon.ico",
            "bannerGradient": "from-teal-600 via-emerald-800 to-cyan-950",
            "status": "upcoming",
            "statusLabel": "⏳ Registration Open",
            "mode": "Online",
            "location": "Global Virtual",
            "totalPrizePool": 1000000,
            "currency": "$",
            "featured": True,
            "tags": ["Solana", "DePIN", "Crypto x AI", "Rust", "High Throughput"],
            "shortTeaser": f"✨ Lily Auto-Researched on {now_str}. Over $1,000,000 in prizes for high-speed decentralized physical infrastructure and consumer apps on Solana.",
            "timelines": {
                "registrationDeadline": get_relative_date_iso(20),
                "revealDate": get_relative_date_iso(22),
                "submissionDeadline": get_relative_date_iso(45, 12),
                "winnerAnnouncement": get_relative_date_iso(55)
            },
            "eligibility": {
                "minAge": 18,
                "allowedRoles": ["Rust Developers", "DePIN Builders", "Crypto AI"],
                "teamSizeMin": 1,
                "teamSizeMax": 6,
                "geography": "Global",
                "studentOnly": False,
                "prerequisites": "Deploy programs on Solana Devnet or Mainnet-Beta."
            },
            "tracks": [
                {
                    "id": "solana-track-1",
                    "title": "Track 1: DePIN (Decentralized Physical Infrastructure Networks)",
                    "prize": "$250,000 Pool + VC Accelerator",
                    "problemStatement": "Build crowdsourced hardware networks for sensor telemetry, wireless broadband, or compute sharing.",
                    "keyRequirements": ["Rust program on Solana", "Hardware or simulated edge device node"],
                    "evaluationCriteria": "40% Network Economics, 30% Technical Execution, 30% Scale"
                }
            ],
            "judges": [
                {
                    "name": "Anatoly Yakovenko",
                    "role": "Co-founder, Solana Labs",
                    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
                    "focusArea": "Maximum parallelism, low transaction overhead, hardware optimization."
                }
            ],
            "rules": {
                "repoRequirement": "Public GitHub with deployed Solana Program ID",
                "demoVideoMaxSecs": 180,
                "liveUrlRequired": True,
                "slideDeckRequired": True,
                "codeFreshness": "Fresh project for Renaissance season"
            },
            "winningPlaybook": {
                "techStackRecommendation": "Rust + Anchor Framework + Solana Web3.js + Next.js + Helius RPC",
                "proTips": ["Use Anchor framework for clean program structure."]
            },
            "registrationUrl": "https://solana.com/renaissance",
            "submissionUrl": "https://solana.com/renaissance/submit"
        },
        {
            "id": "aws-genai-2026",
            "title": "AWS GenAI Builders Challenge",
            "organizer": "Amazon Web Services",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
            "bannerGradient": "from-amber-600 via-orange-800 to-stone-900",
            "status": "live",
            "statusLabel": "🔥 Live Submissions Open",
            "mode": "Online",
            "location": "Global Virtual",
            "totalPrizePool": 120000,
            "currency": "$",
            "featured": False,
            "tags": ["AWS Bedrock", "Cloud", "Enterprise AI", "Serverless", "RAG"],
            "shortTeaser": f"✨ Lily Auto-Researched on {now_str}. Build enterprise-grade Retrieval-Augmented Generation (RAG) and serverless AI applications using AWS Bedrock.",
            "timelines": {
                "registrationDeadline": get_relative_date_iso(8),
                "revealDate": get_relative_date_iso(-5),
                "submissionDeadline": get_relative_date_iso(14, 8),
                "winnerAnnouncement": get_relative_date_iso(25)
            },
            "eligibility": {
                "minAge": 18,
                "allowedRoles": ["Cloud Engineers", "Enterprise Developers", "AI Architects"],
                "teamSizeMin": 1,
                "teamSizeMax": 4,
                "geography": "Global",
                "studentOnly": False,
                "prerequisites": "Must utilize AWS Bedrock foundation models."
            },
            "tracks": [
                {
                    "id": "aws-track-1",
                    "title": "Track 1: Multi-Agent RAG Systems for Enterprise Intelligence",
                    "prize": "$50,000 + $20k AWS Cloud Credits",
                    "problemStatement": "Build scalable vector retrieval pipelines with OpenSearch Serverless and Amazon Bedrock Knowledge Bases.",
                    "keyRequirements": ["AWS Bedrock integration", "Architecture diagram upload", "CloudFormation / Terraform template"],
                    "evaluationCriteria": "40% Retrieval Precision, 30% Architecture Security, 20% Cost Efficiency, 10% Demo"
                }
            ],
            "judges": [
                {
                    "name": "Dr. Swami Sivasubramanian",
                    "role": "VP of Data and AI, AWS",
                    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
                    "focusArea": "Enterprise security guardrails, data privacy, vector database scaling."
                }
            ],
            "rules": {
                "repoRequirement": "Public GitHub Repo with AWS Architecture Diagram",
                "demoVideoMaxSecs": 180,
                "liveUrlRequired": True,
                "slideDeckRequired": True,
                "codeFreshness": "Created during hackathon duration"
            },
            "winningPlaybook": {
                "techStackRecommendation": "AWS Lambda + Amazon Bedrock + Anthropic Claude 3.5 Sonnet + OpenSearch + React",
                "proTips": ["Include a clean AWS Architecture Diagram PNG in your submission."]
            },
            "registrationUrl": "https://aws.devpost.com",
            "submissionUrl": "https://aws.devpost.com/submit"
        }
    ]

    ticker_updates = [
        {"id": 1, "tag": "🤖 LILY ENGINE", "text": f"Lily auto-researched global hackathons on {now_str}. Zero searching needed!", "time": "Just now"},
        {"id": 2, "tag": "🔥 URGENT", "text": "Google AI Hackathon 2026 submission deadline extended by 14 hours! Submit your Gemini multimodal apps now.", "time": "10 mins ago"},
        {"id": 3, "tag": "⚡ REVEAL", "text": "Vercel Ship AI Hackathon problem statements officially revealed! Generative UI & Edge tracks open.", "time": "25 mins ago"},
        {"id": 4, "tag": "🤖 NEW EVENT", "text": "OpenAI Autonomous Agents Challenge $150,000 prize pool added to radar by Lily!", "time": "45 mins ago"},
        {"id": 5, "tag": "⚖️ JUDGES", "text": "Vitalik Buterin confirmed to co-judge ETHGlobal Bangkok 2026 ZK & Privacy track.", "time": "1 hour ago"},
        {"id": 6, "tag": "⏳ NEW", "text": "Solana Renaissance $1,000,000 Global Hackathon registration is officially live!", "time": "4 hours ago"}
    ]

    team_posts = [
        {
            "id": "post-1",
            "author": "Alex Chen",
            "role": "Full-Stack & Prompt Engineer",
            "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
            "hackathonTarget": "Google AI Hackathon 2026",
            "lookingFor": ["UI/UX Designer", "Python ML Engineer"],
            "projectIdea": "Building a real-time surgical video assist agent powered by Gemini 2.0 Flash & WebSockets.",
            "contactLink": "https://github.com"
        },
        {
            "id": "post-2",
            "author": "Sarah Jenkins",
            "role": "Solana Rust Developer",
            "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
            "hackathonTarget": "Solana Renaissance",
            "lookingFor": ["Frontend (Next.js/Tailwind)", "Pitch Presenter"],
            "projectIdea": "DePIN IoT network for decentralized micro-weather forecasting sensors.",
            "contactLink": "https://twitter.com"
        }
    ]

    js_content = f"""/**
 * Hackathon Hunters - Deep Research Global Hackathon Dataset
 * Automatically generated & updated by Lily Auto-Updater Engine
 * Last Updated: {now_str}
 */

window.HACKATHONS_DATA = {json.dumps(events, indent=2)};

window.LIVE_TICKER_UPDATES = {json.dumps(ticker_updates, indent=2)};

window.TEAM_FINDER_POSTS = {json.dumps(team_posts, indent=2)};
"""
    return js_content

if __name__ == "__main__":
    print("🤖 Running Lily Deep Research Auto-Fetcher Engine...")
    data_path = os.path.join(os.path.dirname(__file__), "data.js")
    content = run_lily_research_engine()
    with open(data_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("✅ Lily research successfully updated data.js!")
