import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './Home.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Footer from './Footer.jsx';


import Sidebar from './Sidebar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar />
    <main className="flex-1 bg-gray-100 min-h-screen">
      <Home className="ml-40 p-10"/>
      <About  className="ml-40 p-10"/>
      <Skills  className="ml-40 p-10"/>
      <Experience  className="ml-40 p-10"/>
      <Projects  className="ml-40 p-10"/>
      <Footer  className="ml-40 p-10"/>
    </main>
    
  </StrictMode>,
)
