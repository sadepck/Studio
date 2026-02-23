import React, { useEffect, useState, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section className={`projects-section ${isVisible ? 'animate' : ''}`} id="projects" ref={projectsRef}>
      {/* Metallic Vine Pattern Background */}
      <div className="metallic-vines">
        <div className="vine-pattern-left"></div>
        <div className="vine-pattern-right"></div>
        <div className="vine-pattern-top"></div>
        <div className="vine-pattern-bottom"></div>
      </div>

      {/* Section Title */}
      <h2 className="section-title">LA SALA DE MÁQUINAS</h2>
      <p className="section-subtitle">Obras Maestras de Ingeniería Botánica</p>

      {/* Karü Rayen - Greenhouse Window Card */}
      <div className="projects-container">
        <div className="karu-rayen-card">
          {/* Brass Frame Structure */}
          <div className="card-frame">
            <div className="frame-outer"></div>
            <div className="frame-inner"></div>
            <div className="frame-rivets">
              <div className="rivet rivet-1"></div>
              <div className="rivet rivet-2"></div>
              <div className="rivet rivet-3"></div>
              <div className="rivet rivet-4"></div>
              <div className="rivet rivet-5"></div>
              <div className="rivet rivet-6"></div>
              <div className="rivet rivet-7"></div>
              <div className="rivet rivet-8"></div>
            </div>
          </div>

          {/* Card Content with Image */}
          <div className="card-content">
            <div className="project-header">
              <h3 className="project-title">Karü Rayen</h3>
              <div className="project-subtitle">Vivero Boutique & Diseño Botánico</div>
              <div className="project-location">
                <span className="location-icon">📍</span>
                <span>Temuco, Chile</span>
              </div>
            </div>

            {/* Project Image Placeholder */}
            <div className="project-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">🌿</div>
                  <div className="placeholder-text">Vivero Karü Rayen</div>
                  <div className="placeholder-subtext">Transformación Digital Botánica</div>
                </div>
              </div>
            </div>

            <div className="project-description">
              <p>
                Transformación digital de un negocio botánico local. Incluye diseño de experiencia de usuario, 
                catálogo digital y estrategia de marketing orientada a la estética boutique.
              </p>
            </div>

            <div className="project-tags">
              <span className="tag tag-react">React</span>
              <span className="tag tag-ecommerce">E-commerce</span>
              <span className="tag tag-botanical">Diseño Botánico</span>
              <span className="tag tag-business">Estrategia de Negocios</span>
            </div>

            <div className="project-actions">
              <button className="action-button primary">
                <span className="button-text">Ver Proyecto</span>
                <span className="button-rivets">
                  <span className="rivet-small"></span>
                  <span className="rivet-small"></span>
                </span>
              </button>
              <button className="action-button secondary">
                <span className="button-text">Plan de Negocios</span>
                <span className="button-rivets">
                  <span className="rivet-small"></span>
                  <span className="rivet-small"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Botanical Elements Embracing the Card */}
      <div className="botanical-embrace">
        {/* Left Side - Refined Climbing Vine */}
        <svg className="embrace-vine-left" viewBox="0 0 180 400" style={{ top: '20%', left: '-2%' }}>
          <defs>
            <linearGradient id="vineRefined1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4CAF50"/>
              <stop offset="50%" stopColor="#2E8B57"/>
              <stop offset="100%" stopColor="#1e3b22"/>
            </linearGradient>
            <filter id="vineRefinedShadow1">
              <feDropShadow dx="0" dy="15" stdDeviation="20" floodOpacity="0.7"/>
            </filter>
          </defs>
          
          {/* Refined main stem */}
          <path d="M90 350 Q100 300 110 250 130 200 Q150 150 170 100 Q190 50 200 10" 
                stroke="url(#vineRefined1)" strokeWidth="8" fill="none" filter="url(#vineRefinedShadow1)"/>
          
          {/* Detailed leaf clusters */}
          <g opacity="0.6">
            <path d="M90 10 Q80 30 70 50 Q50 70 30 90 Q10 110 10 130 Q30 150 90 170" 
                  fill="url(#vineRefined1)" opacity="0.8"/>
            <path d="M90 10 Q80 30 70 50 Q50 70 30 90 Q10 110 10 130 Q30 150 90 170" 
                  fill="url(#vineRefined1)" opacity="0.3"/>
            {/* Vein details */}
            <path d="M90 10 L80 40 M90 10 L100 40 M80 40 L60 70 M100 40 L120 70" 
                  stroke="#1a4d2e" strokeWidth="1" opacity="0.4"/>
          </g>
          
          <g opacity="0.5">
            <path d="M110 130 Q90 150 70 180 Q50 210 30 240 Q10 270 -20 300" 
                  fill="url(#vineRefined1)" opacity="0.7"/>
            <path d="M110 130 Q90 150 70 180 Q50 210 30 240 Q10 270 -20 300" 
                  fill="url(#vineRefined1)" opacity="0.25"/>
            {/* Veins */}
            <path d="M110 130 L95 160 M110 130 L125 160 M95 160 L75 190 M125 160 L145 190" 
                  stroke="#1a4d2e" strokeWidth="1" opacity="0.3"/>
          </g>
          
          <g opacity="0.4">
            <path d="M130 250 Q110 280 90 310 Q50 340 10 370 Q-30 400 -70 370 Q-110 340 -90 310 Q-130 280 -150 250" 
                  fill="url(#vineRefined1)" opacity="0.6"/>
            <path d="M130 250 Q110 280 90 310 Q50 340 10 370 Q-30 400 -70 370 Q-110 340 -150 250" 
                  fill="url(#vineRefined1)" opacity="0.2"/>
            {/* Veins */}
            <path d="M130 250 L115 280 M130 250 L145 280 M115 280 L95 310 M145 280 L175 310" 
                  stroke="#1a4d2e" strokeWidth="1" opacity="0.2"/>
          </g>
        </svg>

        {/* Right Side - Refined Fern Fronds */}
        <svg className="embrace-fern-right" viewBox="0 0 200 450" style={{ top: '15%', right: '-2%' }}>
          <defs>
            <linearGradient id="fernRefined1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4CAF50"/>
              <stop offset="50%" stopColor="#2E8B57"/>
              <stop offset="100%" stopColor="#1e3b22"/>
            </linearGradient>
            <filter id="fernRefinedShadow1">
              <feDropShadow dx="0" dy="15" stdDeviation="20" floodOpacity="0.7"/>
            </filter>
          </defs>
          
          {/* Refined main stem */}
          <path d="M100 400 Q90 350 80 300 Q70 250 60 200 Q50 150 40 100 Q20 50 10 10" 
                stroke="url(#fernRefined1)" strokeWidth="10" fill="none" filter="url(#fernRefinedShadow1)"/>
          
          {/* Refined fern fronds */}
          <g opacity="0.7">
            <path d="M80 300 Q60 320 40 340 Q20 360 0 340 Q-20 320 -40 300 Q-60 280 -80 260" 
                  fill="url(#fernRefined1)"/>
            <path d="M80 300 Q60 320 40 340 Q20 360 0 340 Q-20 320 -40 300 Q-60 280 -80 260" 
                  fill="url(#fernRefined1)" opacity="0.3"/>
            {/* Central vein */}
            <path d="M80 300 L60 330 M80 300 L100 330 M60 330 L40 360 M100 330 L140 360" 
                  stroke="#1a4d2e" strokeWidth="2" opacity="0.5"/>
          </g>
          
          <g opacity="0.6">
            <path d="M60 200 Q40 220 20 240 Q0 260 -20 240 Q-40 220 -60 200 Q-80 180 -100 160" 
                  fill="url(#fernRefined1)"/>
            <path d="M60 200 Q40 220 20 240 Q0 260 -20 240 Q-40 220 -60 200 Q-80 180 -100 160" 
                  fill="url(#fernRefined1)" opacity="0.25"/>
            {/* Veins */}
            <path d="M60 200 L40 230 M60 200 L80 230 M40 230 L20 260 M80 230 L120 260" 
                  stroke="#1a4d2e" strokeWidth="2" opacity="0.4"/>
          </g>
          
          <g opacity="0.5">
            <path d="M40 100 Q20 120 0 140 Q-20 160 -40 160 Q-60 140 -80 120 Q-100 100 -120 80" 
                  fill="url(#fernRefined1)"/>
            <path d="M40 100 Q20 120 0 140 Q-20 160 -40 160 Q-60 140 -80 120 Q-100 100 -120 80" 
                  fill="url(#fernRefined1)" opacity="0.2"/>
            {/* Veins */}
            <path d="M40 100 L20 130 M40 100 L60 130 M20 130 L0 160 M60 130 L80 160" 
                  stroke="#1a4d2e" strokeWidth="2" opacity="0.3"/>
          </g>
        </svg>

        {/* Bottom - Refined Falling Leaves */}
        <svg className="embrace-leaves-bottom" viewBox="0 0 300 150" style={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}>
          <defs>
            <linearGradient id="leavesRefined1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4CAF50"/>
              <stop offset="50%" stopColor="#2E8B57"/>
              <stop offset="100%" stopColor="#1e3b22"/>
            </linearGradient>
            <filter id="leavesRefinedShadow1">
              <feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.6"/>
            </filter>
          </defs>
          
          <g opacity="0.6">
            <path d="M50 120 Q30 90 10 60 Q-10 30 30 60 Q50 90 90 120 Q110 90 130 120" 
                  fill="url(#leavesRefined1)" filter="url(#leavesRefinedShadow1)"/>
            <path d="M50 120 Q30 90 10 60 Q-10 30 30 60 Q50 90 90 120 Q110 90 130 120" 
                  fill="url(#leavesRefined1)" opacity="0.2"/>
            {/* Central vein */}
            <path d="M50 120 L30 150 M50 120 L70 150 M30 150 L70 150" 
                  stroke="#1a4d2e" strokeWidth="1" opacity="0.4"/>
          </g>
          
          <g opacity="0.5">
            <path d="M150 130 Q130 100 110 70 Q90 40 70 10 Q50 20 30 -10 Q10 -20 30 -10" 
                  fill="url(#leavesRefined1)" filter="url(#leavesRefined1)"/>
            <path d="M150 130 Q130 100 110 70 Q90 40 70 10 Q50 20 30 -10 Q10 -20 30 -10" 
                  fill="url(#leavesRefined1)" opacity="0.15"/>
            {/* Central vein */}
            <path d="M150 130 L130 160 M150 130 L170 160 M130 160 L170 160" 
                  stroke="#1a4d2e" strokeWidth="1" opacity="0.3"/>
          </g>
          
          <g opacity="0.4">
            <path d="M250 140 Q230 110 210 80 Q190 50 170 20 Q150 -10 130 -40 Q110 -70 90 -100" 
                  fill="url(#leavesRefined1)" filter="url(#leavesRefinedShadow1)"/>
            <path d="M250 140 Q230 110 210 80 Q190 50 170 20 Q150 -10 130 -40 Q110 -70 90 -100" 
                  fill="url(#leavesRefined1)" opacity="0.1"/>
            {/* Central vein */}
            <path d="M250 140 L230 170 M250 140 L270 170 M230 170 L270 170" 
                  stroke="#1a4d2e" strokeWidth="1" opacity="0.2"/>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Projects;
