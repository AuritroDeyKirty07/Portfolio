import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Skills } from '@/pages/Skills';
import { Projects } from '@/pages/Projects';
import { Blog } from '@/pages/Blog';
import { Certifications } from '@/pages/Certifications';
import { Contact } from '@/pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
