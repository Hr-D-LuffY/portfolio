import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/portfolio";
import ProjectDetailPage from "./pages/projectDetails";

export default function App() {
	return (
		<>
			<AuroraBackground />
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Portfolio />} />
					<Route path="/projects/:slug" element={<ProjectDetailPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}
