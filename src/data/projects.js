const GITHUB_USER = "Hr-D-LuffY";

export const projects = [
	{
		slug: "fixitnow",
		name: "FixItNow",
		tagline: "Home Services Marketplace API",
		status: "deployed",
		featured: true,
		order: 1,
		tech: [
			"Node.js",
			"Express",
			"TypeScript",
			"PostgreSQL",
			"Prisma",
			"Stripe",
			"JWT",
			"RBAC",
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
		status: "deployed",
		featured: true,
		order: 2,
		tech: ["React", "Node.js", "Express", "MongoDB"],
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
			"Real-time request tracking and status updates across victim, volunteer, and organization roles",
			"Request-routing that links victims to nearby available responders",
			"Role-based dashboards and access control for three distinct user types",
			"React front end backed by a Node/Express REST API over MongoDB",
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
		order: 5,
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
		image: "dev-pulse",
	},
	{
		slug: "aprende-espanol",
		name: "Aprende Español",
		tagline: "Spanish Study Dashboard",
		status: "deployed",
		featured: true,
		order: 3,
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
		status: "Not deployed",
		featured: false,
		order: 4,
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
		role: "One of three contributors on this CSE471 coursework project. [Fill in your specific contribution — e.g. which models/views/features you owned.]",
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
