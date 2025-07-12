import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Projects from "./pages/projects";
import ResumeViewer from "./pages/resume";

export default function App() {
  return (
    <div className="transition-colors duration-300 bg-primary text-black dark:bg-secondary dark:text-white min-h-screen w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<ResumeViewer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
