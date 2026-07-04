import spn from "../images/spn app.png";
import disaster from "../images/disestar.png";
import auction from "../images/auction.png";

export const PROJECTS_DETAIL = [
	{
		slug: "dev-pulse",
		title: "Dev-Pulse",
		tag: "Web App",
		overview:
			"A developer productivity tracker that surfaces workflow insights from your daily activity — helping engineers spot patterns in focus time, context switching, and output without manually logging anything.",
		heroImage:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuCvYH7IbMGMgHWfqDsNzaMuz-uq8jbuaHHLg4EbPCzXKxITDnWqtbRDOenYrrESQy0AMva7reBJYtzb0OeqypZmhGIuUXAkn-Fa9uPXi3Tk02UUDaD9l-obNO1t3ZYguEu6GLJKvZ1CIX7z4tI6suB1CoYjGaHbjtaJpzlDKeUeHSa3JmSQASQzNeiLnO_47Q9QOAa5n7HM_1t4F-4qXHYMNdY3XOr_udfNB8cvLEjSigZCoE3tH0VaZutn1OdCdVHFuG2YiosWFOST",
		links: {
			live: "",
			github: "https://github.com/Hr-D-LuffY/Dev-Pulse",
		},
		techStack: [
			{ icon: "deployed_code", label: "TypeScript" },
			{ icon: "database", label: "REST API" },
			{ icon: "insights", label: "Charts" },
			{ icon: "palette", label: "Tailwind" },
		],
		challenges: [
			"Designing a data model flexible enough to represent many different kinds of developer activity without becoming bloated.",
			"Building charts that stay readable at both a single-day and multi-month zoom level.",
			"Keeping the tracking layer lightweight enough that it never gets in the way of actually coding.",
		],
		improvements: [
			"Add IDE plugin support so activity is captured automatically instead of logged manually.",
			"Introduce team-level dashboards for leads to spot burnout risk early.",
			"Build a weekly digest that summarizes trends instead of raw numbers.",
		],
		highlights: [
			{
				span: "md:col-span-2",
				type: "image",
				title: "Activity Dashboard",
				description: "A single view of focus time, tasks, and streaks.",
				image:
					"https://lh3.googleusercontent.com/aida-public/AB6AXuCWQxPxhfBA64OJJUor4ySJNa5F5vMrcd55OxOKVP9FUK3D5FT75rC6zGd2soRNmnMc8Qhk2oevetB7DkRzRCYhIYs6I62ZOBFmAt5hOo2fcAWuHugevjiAZ-ZdCCA1S8JcHQtlPjCLP-OkGVM0iBJptQjPRPnGDclLC-rxo_PNFw23d7Xg_JNT8gGUmpcY0PofkgfmtDIYOn5NgPb4hXYjBsMbyVvF7VSHPn7WHmarf7o7-jQXNwelOh1hzHoLfHv9qPtkBfMmG8S5",
			},
			{
				span: "",
				type: "stat",
				icon: "bolt",
				title: "Zero-friction Tracking",
				description: "Runs in the background, no manual logging needed.",
				accent: "secondary",
			},
			{
				span: "",
				type: "stat",
				icon: "trending_up",
				title: "Trend Insights",
				description: "Weekly patterns surfaced automatically.",
				accent: "primary",
			},
			{
				span: "md:col-span-2",
				type: "image",
				title: "Mobile Friendly",
				description: "Check your stats from anywhere.",
				image:
					"https://lh3.googleusercontent.com/aida-public/AB6AXuAzjTdniiJqZDomvnGL5TO8VTXWc1X_tzna4U7LwBfu3MNp4sWoOrkFP-f2Wubg6yCdnSInzBi_30Cml2sNvvsnDJnvK0XD3TtMAD28KSET9wQF7JpQo4YkyFiYg-9_rfx3rX_dteN778XbPYO8ARkG1QjGlbNZ0IVK8johKxNQSCeHvPCkNdnJnVuUQ17FYUAAPN3azmJrt_k7ywWBzumZ8X8KnJgG7mkl72i0Hms8sMmCO9iYFigFT1vpNJwCppJsRFlnlJy6_d3u",
			},
		],
	},

	{
		slug: "disaster-relief-platform",
		title: "Disaster Relief Platform",
		tag: "MERN Stack",
		overview:
			"A relief coordination system that connects disaster-affected victims with aid organizations and volunteers in real time. Built to remove the chaos of ad-hoc spreadsheets and phone trees during emergency response, with role-based dashboards for victims, volunteers, and organizations.",
		heroImage: disaster,
		links: {
			live: "",
			github: "https://github.com/Hr-D-LuffY/disaster-platform",
		},
		techStack: [
			{ icon: "deployed_code", label: "React" },
			{ icon: "dns", label: "Node.js / Express" },
			{ icon: "database", label: "MongoDB" },
			{ icon: "share_location", label: "Live Tracking" },
		],
		challenges: [
			"Modeling three distinct user roles (victim, volunteer, organization) with different permissions on one schema.",
			"Keeping the request-to-response pipeline fast when reports spike during an active emergency.",
			"Designing an interface simple enough to use under stress, on a low-end phone, with a bad connection.",
		],
		improvements: [
			"Add SMS fallback for victims without reliable internet access.",
			"Layer in a map-based view of active requests and nearby volunteers.",
			"Add automated triage so critical requests surface first.",
		],
		highlights: [
			{
				span: "md:col-span-2",
				type: "image",
				title: "Coordination Dashboard",
				description: "Live view of active relief requests by region.",
				image:
					"https://lh3.googleusercontent.com/aida-public/AB6AXuCWQxPxhfBA64OJJUor4ySJNa5F5vMrcd55OxOKVP9FUK3D5FT75rC6zGd2soRNmnMc8Qhk2oevetB7DkRzRCYhIYs6I62ZOBFmAt5hOo2fcAWuHugevjiAZ-ZdCCA1S8JcHQtlPjCLP-OkGVM0iBJptQjPRPnGDclLC-rxo_PNFw23d7Xg_JNT8gGUmpcY0PofkgfmtDIYOn5NgPb4hXYjBsMbyVvF7VSHPn7WHmarf7o7-jQXNwelOh1hzHoLfHv9qPtkBfMmG8S5",
			},
			{
				span: "",
				type: "stat",
				icon: "diversity_3",
				title: "Three User Roles",
				description: "Victims, volunteers, and organizations, one platform.",
				accent: "secondary",
			},
			{
				span: "",
				type: "stat",
				icon: "shield",
				title: "Verified Aid",
				description: "Organizations are vetted before they can respond.",
				accent: "primary",
			},
			{
				span: "md:col-span-2",
				type: "image",
				title: "Mobile-first Reporting",
				description: "Report a need in under a minute, from any phone.",
				image:
					"https://lh3.googleusercontent.com/aida-public/AB6AXuAzjTdniiJqZDomvnGL5TO8VTXWc1X_tzna4U7LwBfu3MNp4sWoOrkFP-f2Wubg6yCdnSInzBi_30Cml2sNvvsnDJnvK0XD3TtMAD28KSET9wQF7JpQo4YkyFiYg-9_rfx3rX_dteN778XbPYO8ARkG1QjGlbNZ0IVK8johKxNQSCeHvPCkNdnJnVuUQ17FYUAAPN3azmJrt_k7ywWBzumZ8X8KnJgG7mkl72i0Hms8sMmCO9iYFigFT1vpNJwCppJsRFlnlJy6_d3u",
			},
		],
	},

	{
		slug: "aprende-espanol",
		title: "Aprende Español",
		tag: "Education",
		overview:
			"A personal Spanish study companion built to organize verb conjugations, vocabulary, and grammar rules by CEFR level, backed by a live Supabase database so notes stay in sync across devices instead of scattered across notebooks.",
		heroImage: spn,
		links: {
			live: "https://aprendeespanol-hr.vercel.app/",
			github: "https://github.com/Hr-D-LuffY/Aprende-Espanol",
		},
		techStack: [
			{ icon: "deployed_code", label: "React" },
			{ icon: "database", label: "Supabase" },
			{ icon: "palette", label: "Tailwind" },
		],
		challenges: [
			"Structuring verb conjugation tables in a database schema that's easy to query by tense, mood, and level.",
			"Keeping the UI uncluttered while still surfacing a lot of grammar detail.",
			"Making the app fast to search mid-study, without a heavy client-side index.",
		],
		improvements: [
			"Add spaced-repetition flashcards generated from saved vocabulary.",
			"Introduce audio pronunciation for each entry.",
			"Track personal progress by CEFR level over time.",
		],
		highlights: [
			{
				span: "md:col-span-2",
				type: "image",
				title: "Grammar Reference",
				description: "Verb tables organized by tense and mood.",
				image:
					"https://lh3.googleusercontent.com/aida-public/AB6AXuCWQxPxhfBA64OJJUor4ySJNa5F5vMrcd55OxOKVP9FUK3D5FT75rC6zGd2soRNmnMc8Qhk2oevetB7DkRzRCYhIYs6I62ZOBFmAt5hOo2fcAWuHugevjiAZ-ZdCCA1S8JcHQtlPjCLP-OkGVM0iBJptQjPRPnGDclLC-rxo_PNFw23d7Xg_JNT8gGUmpcY0PofkgfmtDIYOn5NgPb4hXYjBsMbyVvF7VSHPn7WHmarf7o7-jQXNwelOh1hzHoLfHv9qPtkBfMmG8S5",
			},
			{
				span: "",
				type: "stat",
				icon: "auto_stories",
				title: "CEFR Organized",
				description: "Content grouped from A1 through C1.",
				accent: "secondary",
			},
			{
				span: "",
				type: "stat",
				icon: "sync",
				title: "Synced Notes",
				description: "Same notes, any device, always up to date.",
				accent: "primary",
			},
			{
				span: "md:col-span-2",
				type: "image",
				title: "Study on the Go",
				description: "A mobile layout built for quick reference.",
				image:
					"https://lh3.googleusercontent.com/aida-public/AB6AXuAzjTdniiJqZDomvnGL5TO8VTXWc1X_tzna4U7LwBfu3MNp4sWoOrkFP-f2Wubg6yCdnSInzBi_30Cml2sNvvsnDJnvK0XD3TtMAD28KSET9wQF7JpQo4YkyFiYg-9_rfx3rX_dteN778XbPYO8ARkG1QjGlbNZ0IVK8johKxNQSCeHvPCkNdnJnVuUQ17FYUAAPN3azmJrt_k7ywWBzumZ8X8KnJgG7mkl72i0Hms8sMmCO9iYFigFT1vpNJwCppJsRFlnlJy6_d3u",
			},
		],
	},

	{
		slug: "auction-alley",
		title: "Auction Alley",
		tag: "Django",
		overview:
			"A house auction and listing platform built with Django, giving sellers a dashboard to manage listings and documents, and buyers a clean interface to browse and bid on properties.",
		heroImage: auction,
		links: {
			live: "",
			github: "https://github.com/Hr-D-LuffY/Auction-Alley",
		},
		techStack: [
			{ icon: "deployed_code", label: "Django" },
			{ icon: "database", label: "SQLite" },
			{ icon: "description", label: "Document Upload" },
			{ icon: "gavel", label: "Bidding Engine" },
		],
		challenges: [
			"Structuring bid logic so offers update in real time without overwriting each other.",
			"Handling property document uploads (deeds, images) securely per listing.",
			"Building separate dashboards for sellers and buyers on one Django app.",
		],
		improvements: [
			"Add automated bid notifications by email.",
			"Introduce escrow-style payment confirmation before closing an auction.",
			"Add listing verification to reduce fraudulent postings.",
		],
		highlights: [
			{
				span: "md:col-span-2",
				type: "image",
				title: "Seller Dashboard",
				description: "Manage listings, documents, and bid activity.",
				image:
					"https://lh3.googleusercontent.com/aida-public/AB6AXuCWQxPxhfBA64OJJUor4ySJNa5F5vMrcd55OxOKVP9FUK3D5FT75rC6zGd2soRNmnMc8Qhk2oevetB7DkRzRCYhIYs6I62ZOBFmAt5hOo2fcAWuHugevjiAZ-ZdCCA1S8JcHQtlPjCLP-OkGVM0iBJptQjPRPnGDclLC-rxo_PNFw23d7Xg_JNT8gGUmpcY0PofkgfmtDIYOn5NgPb4hXYjBsMbyVvF7VSHPn7WHmarf7o7-jQXNwelOh1hzHoLfHv9qPtkBfMmG8S5",
			},
			{
				span: "",
				type: "stat",
				icon: "gavel",
				title: "Live Bidding",
				description: "Bids update instantly on the listing page.",
				accent: "secondary",
			},
			{
				span: "",
				type: "stat",
				icon: "folder_shared",
				title: "Document Handling",
				description: "House papers uploaded and stored per listing.",
				accent: "primary",
			},
			{
				span: "md:col-span-2",
				type: "image",
				title: "Buyer Experience",
				description: "Browse and bid from a clean mobile view.",
				image:
					"https://lh3.googleusercontent.com/aida-public/AB6AXuAzjTdniiJqZDomvnGL5TO8VTXWc1X_tzna4U7LwBfu3MNp4sWoOrkFP-f2Wubg6yCdnSInzBi_30Cml2sNvvsnDJnvK0XD3TtMAD28KSET9wQF7JpQo4YkyFiYg-9_rfx3rX_dteN778XbPYO8ARkG1QjGlbNZ0IVK8johKxNQSCeHvPCkNdnJnVuUQ17FYUAAPN3azmJrt_k7ywWBzumZ8X8KnJgG7mkl72i0Hms8sMmCO9iYFigFT1vpNJwCppJsRFlnlJy6_d3u",
			},
		],
	},
];
