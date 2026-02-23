import React, { useEffect, useState, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  // Skills data structure
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "CSS Avanzado", level: 85 },
        { name: "Vite", level: 80 },
        { name: "Diseño UI/UX", level: 75 }
      ]
    },
    {
      category: "Backend & Lógica",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Integración de APIs", level: 88 }
      ]
    },
    {
      category: "Innovación & Herramientas",
      skills: [
        { name: "Prompt Engineering (IA/Gemini)", level: 92 },
        { name: "Desarrollo de Apps", level: 78 },
        { name: "E-commerce", level: 82 }
      ]
    }
  ];

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section className={`skills-section ${isVisible ? 'animate' : ''}`} id="skills" ref={skillsRef}>
      {/* Inter-Section Structural Pipes */}
      <div className="inter-section-pipes">
        <div className="main-pipe-down"></div>
        <div className="pipe-elbow elbow-left"></div>
        <div className="pipe-elbow elbow-center"></div>
        <div className="pipe-elbow elbow-right"></div>
        <div className="branch-pipe-left"></div>
        <div className="branch-pipe-center"></div>
        <div className="branch-pipe-right"></div>
        <div className="structural-joint joint-1"></div>
        <div className="structural-joint joint-2"></div>
        <div className="structural-joint joint-3"></div>
      </div>

      {/* Connecting Pipes from Hero */}
      <div className="connecting-pipes">
        <div className="main-connection"></div>
        <div className="branch-connection branch-left"></div>
        <div className="branch-connection branch-center"></div>
        <div className="branch-connection branch-right"></div>
        <div className="pipe-joint connection-joint-1"></div>
        <div className="pipe-joint connection-joint-2"></div>
        <div className="pipe-joint connection-joint-3"></div>
      </div>

      {/* Decorative Copper Pipe Divider */}
      <div className="copper-divider">
        <div className="pipe-segment"></div>
        <div className="pipe-joint"></div>
        <div className="pipe-segment"></div>
        <div className="pipe-joint"></div>
        <div className="pipe-segment"></div>
      </div>

      <h2 className="section-title">Panel de Control Botánico</h2>
      <p className="section-subtitle">Sistemas de Ingeniería y Crecimiento</p>

      <div className="skills-container">
        {skillsData.map((category, categoryIndex) => (
          <div 
            key={categoryIndex} 
            className="skill-category"
            style={{ animationDelay: `${categoryIndex * 200}ms` }}
          >
            <div className="category-header">
              <h3 className="category-title">{category.category}</h3>
            </div>

            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="skill-item"
                  style={{ animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms` }}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  
                  {/* Crystal Tube Meter */}
                  <div className="skill-meter">
                    <div className="skill-track">
                      <div 
                        className={`skill-fill ${isVisible ? 'fill-animate' : ''}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          '--target-width': `${skill.level}%`
                        }}
                      >
                        <div className="liquid-glow"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Decorative Elements */}
      <div className="bottom-decoration">
        <div className="pressure-gauge">
          <div className="gauge-face">
            <div className="gauge-needle" style={{ transform: `rotate(${45 + Math.random() * 90}deg)` }}></div>
          </div>
        </div>
        <div className="valve-handle">🔧</div>
      </div>

      {/* Section Divider Valve - Transition Element */}
      <div className="section-divider-valve">
        <div className="valve-wheel">
          <div className="wheel-center"></div>
          <div className="wheel-spoke spoke-1"></div>
          <div className="wheel-spoke spoke-2"></div>
          <div className="wheel-spoke spoke-3"></div>
          <div className="wheel-spoke spoke-4"></div>
          <div className="wheel-spoke spoke-5"></div>
          <div className="wheel-spoke spoke-6"></div>
          <div className="wheel-spoke spoke-7"></div>
          <div className="wheel-spoke spoke-8"></div>
        </div>
        <div className="valve-pipe"></div>
        <div className="valve-flange-left"></div>
        <div className="valve-flange-right"></div>
      </div>
    </section>
  );
};

export default Skills;
