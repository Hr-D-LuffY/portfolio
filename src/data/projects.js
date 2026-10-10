const GITHUB_USER = "Hr-D-LuffY";

export const projects = [
	{
		slug: "carenest",
		name: "CareNest",
		tagline: "Childcare & Transport Booking Platform",
		status: "deployed",
		featured: true,
		order: 1,
		tech: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"TanStack Query",
			"Node.js",
			"Express",
			"PostgreSQL",
			"Prisma",
			"Redis",
			"JWT",
			"Google OAuth",
			"bKash",
			"Zod",
			"Cloudinary",
		],
		links: {
			live: "https://care-nest-hr.vercel.app",
			client: `https://github.com/${GITHUB_USER}/CareNest-Client`,
			server: `https://github.com/${GITHUB_USER}/CareNest-Server`,
		},
		summary:
			"A full-stack platform where guardians book supervised childcare and rides run by admin-verified staff — with a fair waitlist, a real bKash-funded wallet, and an audit trail behind every booking.",
		description: [
			"Parents who need supervised childcare, with a ride to and from the session, usually arrange it informally: a sitter from a group chat, no way to see whether a room has space, no fair process when it's full, and no record of who was paid. CareNest replaces that with one auditable system for bookings, staff verification, and payments.",
			"The backend is a TypeScript REST API on Express 5 with PostgreSQL and Prisma, plus Redis for seat-availability caching and rate limiting (it fails open if Redis is down). The client is a Next.js 16 app with a backend-for-frontend layer: sessions live in httpOnly cookies on the frontend's own domain, so no token ever reaches browser code.",
			"The differentiator is the waitlist. A full room never returns an error — the booking joins a queue ranked by wait time, the child's care tier, and the guardian's cancellation history, and the top entry is promoted automatically the instant a seat is cancelled.",
		],
		features: [
			"Weighted waitlist that auto-promotes the top-ranked guardian the moment a seat frees up — a full room gets a clear 'waitlisted' state, never an error",
			"In-app wallet topped up through bKash Tokenized Checkout, credited only after the backend independently verifies the payment with the gateway",
			"Admin-verified staff: sitters and drivers sign in with JWT or Google OAuth and must pass review of an uploaded ID before being assigned to a room",
			"Three role-based dashboards — guardian, staff, admin — protected by route guards plus role-aware UI, with a multi-step booking wizard and optimistic updates",
			"Supervised transport booking tied to a care session, with trip logging and automatic fare deduction",
			"Full audit log and admin analytics covering verification, role changes, booking status, and every wallet movement",
		],
		role: "Built solo, end to end — the Prisma schema, the Express API, the waitlist priority engine, the bKash payment flow, and the Next.js client with its cookie-based BFF session layer.",
		challenges: [
			"Payments can't be trusted to a redirect: the wallet is credited only after the backend confirms the transaction with bKash, and the client success page reads the verified result rather than the status in the URL.",
			"The backend sets cookies on its own domain, which a Vercel-hosted frontend would never receive. I built a backend-for-frontend layer that stores tokens as httpOnly cookies on the frontend domain, refreshes them once on a 401, and forwards the visitor's real IP so rate limiting doesn't treat everyone as one user.",
			"Ranking a waitlist fairly — and promoting the next child atomically when a cancellation lands — meant doing the cancellation, the audit entry, and the promotion in a single database transaction behind a row lock on the room, so two concurrent bookings can never take the same seat.",
		],
		image: "carenest",
		note: "The API runs on Render's free tier and sleeps when idle, so the first request can take 30–60 seconds. Hit \"Activate Backend\" in the app's navbar first, then use the one-click demo logins on the sign-in page to explore the guardian, staff, and admin views.",
	},
	{
		slug: "fixitnow",
		name: "FixItNow",
		tagline: "Home Services Marketplace API",
		status: "deployed",
		featured: true,
		order: 2,
		tech: [
			"Node.js",
			"Express",
			"TypeScript",
			"PostgreSQL",
			"Prisma",
			"Stripe",
			"JWT",
			"RBAC",
			"Next.js",
			"React",
			"Tailwind CSS",
			"Zod",
		],
		links: {
			live: "https://fixitnow-hr.vercel.app/",
			client: `https://github.com/${GITHUB_USER}/FixItNow_Frontend`,
			server: `https://github.com/${GITHUB_USER}/FixItNow_Backend`,
		},
		summary:
			"A full-stack marketplace that puts customers, technicians, and admins on rails: book a job, get matched, get paid, all through one role-aware API.",
		description: [
			"FixItNow is a home-services marketplace built around the idea that three very different users — a customer booking a repair, a technician managing a schedule, and an admin overseeing the platform — need three different views of the same underlying data, not three different apps.",
			"The backend is a TypeScript REST API on Node.js and Express, with PostgreSQL and Prisma handling the relational side of bookings, technician availability, and payment records. Stripe Checkout handles the money: customers pay through a hosted checkout flow, and webhooks confirm payment server-side so booking status only changes once funds are actually captured.",
		],
		features: [
			"Role-based booking and scheduling for three distinct user types — customer, technician, admin",
			"End-to-end payments via Stripe Checkout with webhook-confirmed order status",
			"JWT authentication paired with fine-grained RBAC on every route",
			"Relational schema and migrations managed with Prisma over PostgreSQL",
		],
		role: "Designed and built the backend end to end — schema, auth, booking logic, and the Stripe integration — including the role-permission model that governs what each user type can see and do.",
		challenges: [
			"Stripe webhooks arrive asynchronously and can be retried, so booking status updates had to be made idempotent — the same webhook firing twice could not double-confirm a payment or double-book a slot.",
			"Modeling RBAC at the route layer (rather than scattering role checks through controllers) took a couple of iterations before permissions were easy to reason about and to extend as new roles came up.",
		],
		image: "fixitnow",
	},
	{
		slug: "disaster-relief-platform",
		name: "Disaster Relief Platform",
		tagline: "Emergency Coordination System",
		status: "completed",
		featured: true,
		order: 3,
		tech: [
			"React",
			"Node.js",
			"Express",
			"MongoDB",
			"JWT",
			"React-Leaflet",
			"Recharts",
			"Nodemailer",
		],
		links: {
			live: "",
			client: `https://github.com/${GITHUB_USER}/disaster-platform/tree/main/client`,
			server: `https://github.com/${GITHUB_USER}/disaster-platform/tree/main/server`,
		},
		summary:
			"A MERN-stack coordination layer for disaster response — connecting victims, volunteers, and aid organizations through live, role-based dashboards.",
		description: [
			"When a disaster hits, the hard problem usually isn't a lack of help — it's routing that help to the right place fast. This platform gives victims a way to request aid, gives volunteers a live queue of nearby requests, and gives aid organizations a coordination view across everything happening in their area.",
			"The stack is a straightforward MERN split: a React front end talks to a Node.js/Express REST API, backed by MongoDB for the flexible, fast-changing shape of requests, responder locations, and status updates.",
		],
		features: [
			"SOS requests automatically matched to the nearest available volunteer using MongoDB geospatial $near queries, replacing manual dispatch",
			"Live rescue tracking — volunteer location and task status update via polling on a React-Leaflet / OpenStreetMap view",
			"Four-chart admin analytics dashboard (Recharts) covering incident trends, response times, and resource distribution",
			"Role-based dashboards and access control for victims, volunteers, and NGOs, with JWT authentication",
		],
		role: "Built the request-routing logic and the role-based dashboard views, and worked across the stack connecting the React front end to the Express API.",
		challenges: [
			"Keeping three different dashboards (victim, volunteer, org) in sync with the same underlying request data meant being deliberate about what each role's view actually needed, rather than sending every role the full record.",
			"Matching requests to nearby responders needed a routing approach that stayed simple enough to reason about under time pressure — the scenario itself doesn't allow for a fragile system.",
		],
		image: "disaster-relief-platform",
	},
	{
		slug: "dev-pulse",
		name: "Dev-Pulse",
		tagline: "Developer Productivity Tracker",
		status: "in progress",
		featured: false,
		order: 6,
		tech: ["TypeScript", "Node.js"],
		links: {
			live: "",
			server: `https://github.com/${GITHUB_USER}/Dev-Pulse`,
		},
		summary:
			"A TypeScript tool that tracks focus time and context-switching automatically, and turns it into a dashboard you'd actually check.",
		description: [
			"Dev-Pulse grew out of a simple annoyance: manually logging what you worked on is friction nobody keeps up with. It tracks focus time and context-switching in the background, then surfaces the pattern — not just the raw log — through a visual dashboard of daily and weekly trends.",
			'The tracking core and dashboard are both TypeScript, which mattered here more than usual: the data model for "a session" and "a switch" needed to stay strict as the tracking logic grew, or the trend charts downstream would silently go wrong.',
		],
		features: [
			"Automated tracking of focus time and context-switching — no manual activity logging",
			"Visual dashboard summarizing daily and weekly development activity trends",
			"Typed data model for sessions and switches to keep the tracking logic reliable",
		],
		role: "Built solo — the tracking core, the data model, and the dashboard that turns raw activity events into daily and weekly trends.",
		challenges: [
			'Deciding what actually counts as a "context switch" (versus normal jumping between a file and its test) took some tuning — too sensitive and the trends are noise, too loose and it misses real thrash.',
			"Keeping the tracker itself lightweight enough to run constantly in the background without becoming the thing slowing the machine down.",
		],
		image: null,
	},
	{
		slug: "aprende-espanol",
		name: "Aprende Español",
		tagline: "Spanish Study Dashboard",
		status: "deployed",
		featured: false,
		order: 4,
		tech: [
			"React",
			"Vite",
			"Tailwind CSS",
			"Supabase",
			"PostgreSQL",
			"React Router",
		],
		links: {
			live: "https://aprendeespanol-hr.vercel.app/",
			client: `https://github.com/${GITHUB_USER}/Aprende-Espanol`,
		},
		summary:
			"A personal Spanish study dashboard — verb conjugations, vocabulary, grammar, and daily phrases, organized by CEFR level and pulled live from Supabase.",
		description: [
			"Aprende Español isn't a course platform — it's a fast, focused reference tool built around how I actually study: conjugation tables I can filter by verb type, vocabulary grouped by topic, and grammar notes I can find in seconds instead of digging through a textbook.",
			"The front end is React and Vite, styled with Tailwind, with all study content — phrases, vocabulary, grammar rules, verb conjugations — stored in and queried live from Supabase (PostgreSQL). Content is organized against the CEFR framework (A1 → C2), starting with a complete A1 foundation.",
		],
		features: [
			"Verb conjugation tables filterable by category — regular, GO verbs, stem-changing, spelling-change, irregular",
			"Vocabulary and daily phrases organized by topic, plus grammar notes covering rules like ser/estar and gustar",
			"Content structured against the CEFR roadmap (A1 through C2)",
			"Two full themes — dark (zinc & amber) and light (sage & amber) — built on a deliberate DM Mono / Lora type pairing",
		],
		role: "Built solo, end to end — the Supabase content schema, the React front end, and the CEFR-based content structure.",
		challenges: [
			"Modeling verb conjugations so they stayed filterable by category without duplicating data across regular, irregular, and stem-changing tables took a couple of schema passes in Supabase.",
			"Keeping both themes equally readable rather than just inverting one palette — the dark and light modes needed their own accent tuning against very different backgrounds.",
		],
		image: "aprende-espanol",
	},
	{
		slug: "auction-alley",
		name: "Auction Alley",
		tagline: "Django Online Auction Platform",
		status: "not deployed",
		featured: false,
		order: 5,
		tech: ["Python", "Django", "SQLite", "HTML/CSS", "Django Templates"],
		links: {
			live: "",
			client: `https://github.com/${GITHUB_USER}/Auction-Alley`,
		},
		summary:
			"A full-featured Django auction platform — list items, place live bids, and manage listings from a user dashboard, built as a team project for BRACU CSE471.",
		description: [
			"Auction Alley lets users register, list items for auction with a starting bid and image, and place bids on active listings, with the highest bidder winning once the seller closes the auction. A user dashboard tracks a user's own listings and bids, and Django's built-in admin panel handles full site management.",
			"Built as a 3-person team project for the CSE471 course at BRAC University, on a Django backend with server-rendered templates and a SQLite database.",
		],
		features: [
			"User registration, login, and auction listing creation with images and starting bids",
			"Live bidding on active listings, with sellers able to close their own auctions",
			"User dashboard for tracking personal listings and bids",
			"Django admin panel for full site management",
		],
		role: "One of three contributors on this CSE471 coursework project. Worked in a shared Django codebase alongside two teammates.",
		challenges: [
			"Coordinating a shared Django codebase across three contributors — keeping models, views, and templates from colliding as the listing and bidding features grew in parallel.",
		],
		image: "auction-alley",
	},
];

export function getFeaturedProjects() {
	return [...projects]
		.sort((a, b) => a.order - b.order)
		.filter((p) => p.featured);
}

export function getAllProjects() {
	return [...projects].sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug) {
	return projects.find((p) => p.slug === slug);
}
