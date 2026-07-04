import spn from "../images/spn app.png";
import disaster from "../images/disestar.png";
import auction from "../images/auction.png";

export const PROJECTS = [
	{
		slug: "aprende-espanol",
		title: "Aprende Español",
		tag: "React App",
		description:
			"A personal Spanish learning dashboard with verb conjugations, vocabulary, and grammar rules organized by CEFR level, powered by a live Supabase backend.",
		image: spn,
		stagger: "stagger-4",
	},

	{
		slug: "disaster-relief-platform",
		title: "Disaster Relief Platform",
		tag: "MERN Stack",
		description:
			"A relief coordination system connecting disaster-affected victims with aid organizations and volunteers, featuring role-based dashboards, live tracking, and analytics.",
		image: disaster,
		stagger: "stagger-3",
	},

	{
		slug: "auction-alley",
		title: "Auction Alley",
		tag: "Django",
		description:
			"A house auction and listing platform built with Django, featuring dashboards, document management, and a user-facing bidding interface.",
		image: auction,
		stagger: "stagger-5",
	},
	{
		slug: "dev-pulse",
		title: "Dev-Pulse",
		tag: "Web App",
		description:
			"A TypeScript-based web application for tracking developer productivity and workflow insights.",
		image:'',
		stagger: "stagger-2",
	},
];
