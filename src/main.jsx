import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Home from './Home.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Footer from './Footer.jsx';
import Sidebar from './Sidebar.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';

function MainApp() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Sidebar />
      <main className="flex-1 bg-gray-100 min-h-screen overflow-hidden">
        <Home className="ml-0 lg:ml-40 p-10" />
        <About className="ml-0 lg:ml-40 p-10" />
        <Skills className="ml-0 lg:ml-40 p-10" />
        <Experience className="ml-0 lg:ml-40 p-10" />
        <Projects className="ml-0 lg:ml-40 p-10" />
        <Footer className="ml-0 lg:ml-40 p-10" />
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
