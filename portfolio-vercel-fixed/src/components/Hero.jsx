import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [steamParticles, setSteamParticles] = useState([]);

  useEffect(() => {
    // Generate steam particles
    const particles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 4
    }));
    setSteamParticles(particles);
  }, []);

  return (
    <section className="hero-greenhouse">
      {/* Steam Particles Effect */}
      <div className="steam-particles">
        <div className="steam-particle particle-1"></div>
        <div className="steam-particle particle-2"></div>
        <div className="steam-particle particle-3"></div>
        <div className="steam-particle particle-4"></div>
      </div>

      {/* Structural Pipes - Steampunk Framework */}
      <div className="structural-pipes">
        <div className="pipe pipe-top"></div>
        <div className="pipe pipe-left"></div>
        <div className="pipe pipe-right"></div>
        <div className="pipe pipe-bottom"></div>
        <div className="pipe-joint joint-1"></div>
        <div className="pipe-joint joint-2"></div>
        <div className="pipe-joint joint-3"></div>
        <div className="pipe-joint joint-4"></div>
        <div className="pipe-joint joint-5"></div>
        <div className="pipe-joint joint-6"></div>
        <div className="particles-container">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
          <div className="particle particle-7"></div>
          <div className="particle particle-8"></div>
        </div>
      </div>

      {/* Steam Effects */}
      {steamParticles.map(particle => (
        <div
          key={particle.id}
          className="steam-particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}

      {/* Background Elements */}
      <div className="greenhouse-frame">
        <div className="glass-panel left-panel"></div>
        <div className="glass-panel right-panel"></div>
        <div className="glass-panel top-panel"></div>
        
        {/* Enhanced 3D Gears with Mechanical Mounts */}
        <div className="gear-mount mount-left"></div>
        
        <div className="gear-mount mount-right"></div>
        
        <div className="gear-mount mount-bottom-left"></div>
      </div>

      {/* Botanical Decorations Frame */}
      <div className="botanical-decorations">
        {/* Victorian Fern with Realistic Details */}
        <svg className="botanical-leaf bottom-left-fern" viewBox="0 0 400 500" style={{ bottom: '-5%', left: '-5%', transform: 'rotate(15deg)' }}>
          <defs>
            <linearGradient id="fernGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4CAF50"/>
              <stop offset="50%" stopColor="#2E8B57"/>
              <stop offset="100%" stopColor="#1e3b22"/>
            </linearGradient>
            <linearGradient id="fernVeins1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a4d2e"/>
              <stop offset="100%" stopColor="#0f2818"/>
            </linearGradient>
            <filter id="fernShadow1">
              <feDropShadow dx="0" dy="15" stdDeviation="20" floodOpacity="0.8"/>
            </filter>
          </defs>
          
          {/* Main stem with volume */}
          <path d="M200 450 Q190 400 180 350 Q170 300 160 250 Q150 200 140 150 Q130 100 120 50 Q110 20 100 10" 
                stroke="url(#fernVeins1)" strokeWidth="10" fill="none" filter="url(#fernShadow1)"/>
          
          {/* Complex fronds with multiple layers */}
          <g opacity="0.9">
            <path d="M100 10 Q80 30 60 50 Q40 70 30 90 Q20 110 25 130 Q30 150 50 140 Q70 130 90 110 Q110 90 120 50" 
                  fill="url(#fernGradient1)"/>
            <path d="M100 10 Q80 30 60 50 Q40 70 30 90 Q20 110 25 130 Q30 150 50 140 Q70 130 90 110 Q110 90 120 50" 
                  fill="url(#fernVeins1)" opacity="0.3"/>
            {/* Veins */}
            <path d="M100 10 L90 40 M100 10 L110 40 M90 40 L70 70 M110 40 L130 70 M70 70 L50 100 M130 70 L150 100" 
                  stroke="url(#fernVeins1)" strokeWidth="1" opacity="0.6"/>
          </g>
          
          <g opacity="0.85">
            <path d="M120 50 Q100 70 80 90 Q60 110 50 130 Q40 150 45 170 Q50 190 70 180 Q90 170 110 150 Q130 130 140 90" 
                  fill="url(#fernGradient1)"/>
            <path d="M120 50 Q100 70 80 90 Q60 110 50 130 Q40 150 45 170 Q50 190 70 180 Q90 170 110 150 Q130 130 140 90" 
                  fill="url(#fernVeins1)" opacity="0.25"/>
            {/* Veins */}
            <path d="M120 50 L110 80 M120 50 L130 80 M110 80 L90 110 M130 80 L150 110 M90 110 L70 140 M150 110 L170 140" 
                  stroke="url(#fernVeins1)" strokeWidth="1" opacity="0.5"/>
          </g>
          
          <g opacity="0.8">
            <path d="M140 90 Q120 110 100 130 Q80 150 70 170 Q60 190 65 210 Q70 230 90 220 Q110 210 130 190 Q150 170 160 130" 
                  fill="url(#fernGradient1)"/>
            <path d="M140 90 Q120 110 100 130 Q80 150 70 170 Q60 190 65 210 Q70 230 90 220 Q110 210 130 190 Q150 170 160 130" 
                  fill="url(#fernVeins1)" opacity="0.2"/>
            {/* Veins */}
            <path d="M140 90 L130 120 M140 90 L150 120 M130 120 L110 150 M150 120 L170 150 M110 150 L90 180 M170 150 L190 180" 
                  stroke="url(#fernVeins1)" strokeWidth="1" opacity="0.4"/>
          </g>
          
          <g opacity="0.75">
            <path d="M160 130 Q140 150 120 170 Q100 190 90 210 Q80 230 85 250 Q90 270 110 260 Q130 250 150 230 Q170 210 180 170" 
                  fill="url(#fernGradient1)"/>
            <path d="M160 130 Q140 150 120 170 Q100 190 90 210 Q80 230 85 250 Q90 270 110 260 Q130 250 150 230 Q170 210 180 170" 
                  fill="url(#fernVeins1)" opacity="0.15"/>
            {/* Veins */}
            <path d="M160 130 L150 160 M160 130 L170 160 M150 160 L130 190 M170 160 L190 190 M130 190 L110 220 M190 160 L210 220" 
                  stroke="url(#fernVeins1)" strokeWidth="1" opacity="0.3"/>
          </g>
        </svg>

        {/* Monstera Deliciosa with Split Details */}
        <svg className="botanical-leaf bottom-right-monstera" viewBox="0 0 450 550" style={{ bottom: '-10%', right: '-5%', transform: 'rotate(-20deg)' }}>
          <defs>
            <linearGradient id="monsteraGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4CAF50"/>
              <stop offset="50%" stopColor="#2E8B57"/>
              <stop offset="100%" stopColor="#1e3b22"/>
            </linearGradient>
            <linearGradient id="monsteraVeins1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#245635"/>
              <stop offset="100%" stopColor="#1a4d2e"/>
            </linearGradient>
            <filter id="monsteraShadow1">
              <feDropShadow dx="0" dy="15" stdDeviation="20" floodOpacity="0.8"/>
            </filter>
          </defs>
          
          {/* Main leaf with volume */}
          <path d="M225 500 Q200 450 180 400 Q160 350 150 300 Q140 250 145 200 Q150 150 165 100 Q180 50 200 20 Q220 50 235 100 Q250 150 255 200 Q260 250 250 300 Q240 350 220 400 Q200 450 175 500" 
                fill="url(#monsteraGradient1)" filter="url(#monsteraShadow1)"/>
          
          {/* Monstera characteristic splits */}
          <ellipse cx="190" cy="150" rx="18" ry="28" fill="#1a1410" opacity="0.8"/>
          <ellipse cx="210" cy="200" rx="15" ry="25" fill="#1a1410" opacity="0.8"/>
          <ellipse cx="195" cy="250" rx="12" ry="20" fill="#1a1410" opacity="0.8"/>
          <ellipse cx="220" cy="300" rx="16" ry="24" fill="#1a1410" opacity="0.8"/>
          
          {/* Detailed vein network */}
          <g stroke="url(#monsteraVeins1)" strokeWidth="2" fill="none" opacity="0.7">
            <path d="M225 500 Q210 450 195 400 Q180 350 170 300 Q160 250 165 200 Q170 150 180 100 Q190 60 200 20"/>
            <path d="M200 20 Q180 40 160 60"/>
            <path d="M200 20 Q220 40 240 60"/>
            <path d="M180 100 Q160 120 140 140"/>
            <path d="M180 100 Q200 120 220 140"/>
            <path d="M160 140 Q140 160 120 180"/>
            <path d="M160 140 Q180 160 200 180"/>
            <path d="M140 180 Q120 200 100 220"/>
            <path d="M140 180 Q160 200 180 220"/>
          </g>
          
          {/* Edge detail */}
          <path d="M225 500 Q200 450 180 400 Q160 350 150 300 Q140 250 145 200 Q150 150 165 100 Q180 50 200 20 Q220 50 235 100 Q250 150 255 200 Q260 250 250 300 Q240 350 220 400 Q200 450 175 500" 
                stroke="url(#monsteraVeins1)" strokeWidth="3" fill="none" opacity="0.5"/>
        </svg>

        {/* Climbing Vine with Multiple Leaves */}
        <svg className="botanical-leaf top-left-vine" viewBox="0 0 300 400" style={{ top: '-8%', left: '-3%', transform: 'rotate(-10deg)' }}>
          <defs>
            <linearGradient id="vineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4CAF50"/>
              <stop offset="50%" stopColor="#2E8B57"/>
              <stop offset="100%" stopColor="#1e3b22"/>
            </linearGradient>
            <filter id="vineShadow1">
              <feDropShadow dx="0" dy="12" stdDeviation="18" floodOpacity="0.7"/>
            </filter>
          </defs>
          
          {/* Main vine stem */}
          <path d="M50 350 Q80 300 110 250 Q140 200 170 150 Q200 100 230 50 Q260 20 280 10" 
                stroke="url(#vineGradient1)" strokeWidth="8" fill="none" filter="url(#vineShadow1)"/>
          
          {/* Multiple detailed leaves */}
          <g opacity="0.7">
            <ellipse cx="80" cy="300" rx="28" ry="42" fill="url(#vineGradient1)" transform="rotate(-30 80 300)"/>
            <ellipse cx="80" cy="300" rx="28" ry="42" fill="url(#vineGradient1)" transform="rotate(-30 80 300)" opacity="0.3"/>
            <path d="M80 300 L65 320 M80 300 L95 320" stroke="#1a4d2e" strokeWidth="1"/>
          </g>
          
          <g opacity="0.65">
            <ellipse cx="110" cy="250" rx="25" ry="38" fill="url(#vineGradient1)" transform="rotate(25 110 250)"/>
            <ellipse cx="110" cy="250" rx="25" ry="38" fill="url(#vineGradient1)" transform="rotate(25 110 250)" opacity="0.25"/>
            <path d="M110 250 L95 270 M110 250 L125 270" stroke="#1a4d2e" strokeWidth="1"/>
          </g>
          
          <g opacity="0.6">
            <ellipse cx="140" cy="200" rx="22" ry="32" fill="url(#vineGradient1)" transform="rotate(-20 140 200)"/>
            <ellipse cx="140" cy="200" rx="22" ry="32" fill="url(#vineGradient1)" transform="rotate(-20 140 200)" opacity="0.2"/>
            <path d="M140 200 L125 220 M140 200 L155 220" stroke="#1a4d2e" strokeWidth="1"/>
          </g>
          
          <g opacity="0.55">
            <ellipse cx="170" cy="150" rx="20" ry="30" fill="url(#vineGradient1)" transform="rotate(30 170 150)"/>
            <ellipse cx="170" cy="150" rx="20" ry="30" fill="url(#vineGradient1)" transform="rotate(30 170 150)" opacity="0.15"/>
            <path d="M170 150 L155 170 M170 150 L185 170" stroke="#1a4d2e" strokeWidth="1"/>
          </g>
          
          <g opacity="0.5">
            <ellipse cx="200" cy="100" rx="18" ry="26" fill="url(#vineGradient1)" transform="rotate(-25 200 100)"/>
            <ellipse cx="200" cy="100" rx="18" ry="26" fill="url(#vineGradient1)" transform="rotate(-25 200 100)" opacity="0.1"/>
            <path d="M200 100 L185 120 M200 100 L215 120" stroke="#1a4d2e" strokeWidth="1"/>
          </g>
          
          <g opacity="0.45">
            <ellipse cx="230" cy="50" rx="15" ry="22" fill="url(#vineGradient1)" transform="rotate(35 230 50)"/>
            <ellipse cx="230" cy="50" rx="15" ry="22" fill="url(#vineGradient1)" transform="rotate(35 230 50)" opacity="0.05"/>
            <path d="M230 50 L215 70 M230 50 L245 70" stroke="#1a4d2e" strokeWidth="1"/>
          </g>
        </svg>

        {/* Falling Leaves with Wind Effect */}
        <svg className="botanical-leaf top-right-falling" viewBox="0 0 250 350" style={{ top: '-5%', right: '-2%', transform: 'rotate(15deg)' }}>
          <defs>
            <linearGradient id="fallingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4CAF50"/>
              <stop offset="50%" stopColor="#2E8B57"/>
              <stop offset="100%" stopColor="#1e3b22"/>
            </linearGradient>
            <filter id="fallingShadow1">
              <feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.6"/>
            </filter>
          </defs>
          
          {/* Falling leaf 1 with detailed shape */}
          <g filter="url(#fallingShadow1)">
            <path d="M100 300 Q80 250 70 200 Q60 150 65 100 Q70 50 85 20 Q100 10 115 20 Q130 50 135 100 Q140 150 130 200 Q120 250 100 300" 
                  fill="url(#fallingGradient1)" opacity="0.6"/>
            <path d="M100 300 Q80 250 70 200 Q60 150 65 100 Q70 50 85 20 Q100 10 115 20 Q130 50 135 100 Q140 150 130 200 Q120 250 100 300" 
                  fill="url(#fallingGradient1)" opacity="0.2"/>
            {/* Central vein */}
            <path d="M100 300 Q85 250 75 200 Q65 150 70 100 Q75 50 85 20 Q100 10 115 20 Q125 50 130 100 Q135 150 125 200 Q115 250 100 300" 
                  stroke="#1a4d2e" strokeWidth="2" fill="none" opacity="0.6"/>
            {/* Side veins */}
            <path d="M85 200 L75 180 M85 200 L95 180 M115 200 L105 180 M115 200 L125 180" 
                  stroke="#1a4d2e" strokeWidth="1" opacity="0.4"/>
          </g>
          
          {/* Falling leaf 2 */}
          <g filter="url(#fallingShadow1)">
            <path d="M150 250 Q130 200 125 150 Q120 100 130 50 Q140 20 155 15 Q170 20 175 50 Q180 100 170 150 Q160 200 150 250" 
                  fill="url(#fallingGradient1)" opacity="0.5"/>
            <path d="M150 250 Q130 200 125 150 Q120 100 130 50 Q140 20 155 15 Q170 20 175 50 Q180 100 170 150 Q160 200 150 250" 
                  fill="url(#fallingGradient1)" opacity="0.15"/>
            {/* Central vein */}
            <path d="M150 250 Q135 200 130 150 Q125 100 130 50 Q140 20 155 15 Q165 20 170 50 Q175 100 165 150 Q160 200 150 250" 
                  stroke="#1a4d2e" strokeWidth="2" fill="none" opacity="0.5"/>
            {/* Side veins */}
            <path d="M135 150 L125 130 M135 150 L145 130 M165 150 L155 130 M165 150 L175 130" 
                  stroke="#1a4d2e" strokeWidth="1" opacity="0.3"/>
          </g>
        </svg>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        {/* BSV Emblem */}
        <div className="emblem-bsv">BSV</div>

        <div className="title-container">
          <h1 className="main-title">
            <span className="title-line">Ingeniería</span>
            <span className="title-line accent">Digital</span>
            <span className="title-line ampersand">&</span>
            <span className="title-line botanical">Crecimiento</span>
            <span className="title-line botanical">Orgánico</span>
          </h1>
          
          <div className="title-ornament">
            <div className="ornament-line"></div>
            <div className="ornament-line"></div>
          </div>
        </div>

        <div className="subtitle-container">
          <p className="main-subtitle">
            Donde la precisión victoriana de las máquinas de vapor 
            se fusiona con la belleza exuberante de la naturaleza digital
          </p>
        </div>

        <div className="cta-container">
          <button className="metal-button brass-button primary">
            <span className="button-text">Explorar Laboratorio</span>
            <div className="button-rivets">
              <div className="rivet"></div>
              <div className="rivet"></div>
              <div className="rivet"></div>
              <div className="rivet"></div>
            </div>
          </button>
          
          <button className="metal-button copper-button secondary">
            <span className="button-text">Ver Mecanismos</span>
            <div className="button-rivets">
              <div className="rivet"></div>
              <div className="rivet"></div>
            </div>
          </button>
        </div>

        {/* Status Indicators */}
        <div className="status-panel">
          <div className="status-indicator">
            <div className="indicator-light green bioluminescent-glow"></div>
            <span className="indicator-text">Sistemas Operativos</span>
          </div>
          <div className="status-indicator">
            <div className="indicator-light copper"></div>
            <span className="indicator-text">Presión: 120 PSI</span>
          </div>
          <div className="status-indicator">
            <div className="indicator-light brass"></div>
            <span className="indicator-text">Temperatura: 87°C</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
