import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import HotJobs from "./pages/HotJobs";
import Jobs from "./pages/Jobs";
import TopCompany from "./pages/TopCompany";
function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/hotjobs" element={<HotJobs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/topcompany" element={<TopCompany />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    );
  }
  
  export default AppRoutes;