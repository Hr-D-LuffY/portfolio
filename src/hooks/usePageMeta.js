import { useEffect } from "react";

const SITE_NAME = "Md. Habibur Rahman";
const DEFAULT_TITLE = `${SITE_NAME} — Full Stack Developer`;

function setMeta(selector, attr, value) {
	const el = document.head.querySelector(selector);
	if (el) el.setAttribute(attr, value);
}

/**
 * Sets the document title and description for the current route (the site is
 * a client-rendered SPA, so index.html only carries the home-page values).
 * Restores the defaults when the page unmounts.
 */
export function usePageMeta({ title, description }) {
	useEffect(() => {
		const prevTitle = document.title;
		const descEl = document.head.querySelector('meta[name="description"]');
		const prevDesc = descEl?.getAttribute("content");

		document.title = title ? `${title} — ${SITE_NAME}` : DEFAULT_TITLE;
		if (description) {
			setMeta('meta[name="description"]', "content", description);
			setMeta('meta[property="og:description"]', "content", description);
		}
		setMeta('meta[property="og:title"]', "content", document.title);
		setMeta('meta[name="twitter:title"]', "content", document.title);

		return () => {
			document.title = prevTitle;
			if (prevDesc) setMeta('meta[name="description"]', "content", prevDesc);
		};
	}, [title, description]);
}
