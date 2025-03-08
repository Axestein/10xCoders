import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Index from './pages/Index';
import Community from './pages/Community';
import Esmoai from './pages/Esmoai';
import Roadmap from './pages/Roadmap';
import Findevents from './pages/Findevents';
import Profile from './components/Profile';
import Interview from './components/Interview';
import InterviewIndex from './components/InterviewIndex';
import Career from './components/Career';
import PlanYourDay from './pages/Planyourday';
import ResumeForm from './pages/ResumeForm';
import ResumePreview from './pages/ResumePreview';
import { useState, useEffect } from 'react';

// Import your LandingPage components
import Home1 from './lp/components/Home1'; // Example path for your landing page components
import Features from '../src/lp/components/Features'; // Assuming Features component exists
import Aboutus from '../src/lp/components/Aboutus'; // Assuming Aboutus component exists
import Footer from '../src/lp/components/Footer'; // Assuming Footer component exists
import Navbar from '../src/lp/components/Navbar';
import PersonalizedRoadmap from './pages/PersonalizedRoadmap';
import EnhanceResume from "./pages/EnhanceResume";
import AdditionalInterview from "../src/components/AdditionalInterview"
import MachineCode from './pages/MachineCode';
import Social from './pages/Social';
import LinkedInEnhancementPage from './pages/Linkedin';
import GitHubEnhancementPage from './pages/Github';
import LeetCodeEnhancementPage from './pages/Leetcode';
import TypingTest from './pages/TypingTest';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [resumeData, setResumeData] = useState(null); // Step 1: Define resumeData state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      {/* Routes for landing page, login/signup */}
      <Routes>
        {/* Landing page route (no sidebar) */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home1 />
              <Features />
              <Aboutus />
              <Footer />
            </>
          }
        />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

      {isAuthenticated && (
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-0">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/userprofile" element={<Profile />} />
              <Route path="/skills" element={<Index />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/community" element={<Community />} />
              <Route path="/esmoai" element={<Esmoai />} />
              <Route path="/findevents" element={<Findevents />} />
              <Route path="/interview" element={<InterviewIndex />} />
              <Route path="/interview/:role" element={<Interview />} />
              {/* 
              <Route path="/interview-analytics" element={<InterviewAnalytics />} /> 
              */}
              <Route path="/career" element={<Career />} />
              <Route path="/personalized-roadmap" element={<PersonalizedRoadmap />} />
              <Route path="/resume-enchancer" element={<EnhanceResume />} />
              <Route path="/more-interviews" element={<AdditionalInterview />} />
              <Route path="/machine-coding" element={<MachineCode />} />
              <Route path="/enhance-social" element={<Social />} />
              <Route path="/linkedin" element={<LinkedInEnhancementPage />} />
              <Route path="/github" element={<GitHubEnhancementPage />} />
              <Route path="/leetcode" element={<LeetCodeEnhancementPage />} />
              <Route path="/typing-test" element={<TypingTest />} />
              <Route
                path="/resume-form"
                element={<ResumeForm setResumeData={setResumeData} />}
              />
              <Route
                path="/resume-preview"
                element={<ResumePreview resumeData={resumeData} />}
              />
              <Route path="/planyourday" element={<PlanYourDay />} />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
