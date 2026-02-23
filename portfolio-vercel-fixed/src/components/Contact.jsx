import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSteam, setShowSteam] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSteam(true);
      
      // Show success message
      alert('SISTEMA: Mensaje enviado con éxito a la terminal de Benjamín Soto.');
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Hide steam after animation
      setTimeout(() => {
        setShowSteam(false);
      }, 3000);
    }, 2000);
  };

  const transmissionLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/benjamintapia',
      label: 'Perfil Profesional'
    },
    {
      name: 'GitHub',
      icon: '⚙️',
      url: 'https://github.com/benjamintapia',
      label: 'Repositorio de Código'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:benjamin.tapia@example.com',
      label: 'Contacto Directo'
    }
  ];

  return (
    <section className="contact-section" id="contact" ref={formRef}>
      {/* Steam Animation Container */}
      {showSteam && (
        <div className="steam-animation">
          <div className="steam-particle steam-1"></div>
          <div className="steam-particle steam-2"></div>
          <div className="steam-particle steam-3"></div>
          <div className="steam-particle steam-4"></div>
          <div className="steam-particle steam-5"></div>
        </div>
      )}

      {/* Section Title */}
      <h2 className="section-title">BITÁCORA DE INGENIERÍA</h2>
      <p className="section-subtitle">Transmisiones y Conexiones Victoriana</p>

      {/* Communication Panel */}
      <div className="communication-panel">
        {/* Panel Frame */}
        <div className="panel-frame">
          <div className="panel-header">
            <div className="panel-title">PANEL DE COMUNICACIONES</div>
            <div className="panel-status">
              <div className="status-light active"></div>
              <span>EN LÍNEA</span>
            </div>
          </div>

          {/* Form Content */}
          <div className="panel-content">
            <form className="transmission-form" onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="input-group">
                <label htmlFor="name" className="input-label">
                  <span className="label-icon">👤</span>
                  IDENTIFICACIÓN
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="metal-input"
                  placeholder="Ingrese su nombre..."
                  required
                />
                <div className="input-rivets">
                  <div className="rivet-small"></div>
                  <div className="rivet-small"></div>
                </div>
              </div>

              {/* Email Input */}
              <div className="input-group">
                <label htmlFor="email" className="input-label">
                  <span className="label-icon">📡</span>
                  CANAL DE TRANSMISIÓN
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="metal-input"
                  placeholder="su.correo@victorian.com"
                  required
                />
                <div className="input-rivets">
                  <div className="rivet-small"></div>
                  <div className="rivet-small"></div>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="input-group">
                <label htmlFor="message" className="input-label">
                  <span className="label-icon">📜</span>
                  MENSAJE CODIFICADO
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="metal-textarea"
                  placeholder="Transmita su mensaje..."
                  rows="6"
                  required
                ></textarea>
                <div className="input-rivets">
                  <div className="rivet-small"></div>
                  <div className="rivet-small"></div>
                </div>
              </div>

              {/* Submit Button - Brass Lever */}
              <button 
                type="submit" 
                className={`transmission-lever ${isSubmitting ? 'transmitting' : ''}`}
                disabled={isSubmitting}
              >
                <div className="lever-handle">
                  <div className="lever-base"></div>
                  <div className="lever-grip"></div>
                </div>
                <span className="lever-text">
                  {isSubmitting ? 'TRANSMITIENDO...' : 'ENVIAR TRANSMISIÓN'}
                </span>
                <div className="lever-indicator"></div>
              </button>
            </form>

            {/* Transmission Links */}
            <div className="transmission-links">
              <h3 className="links-title">CANALES DE COMUNICACIÓN</h3>
              <div className="links-grid">
                {transmissionLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transmission-link"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="link-gauge">
                      <div className="gauge-face">
                        <div className="gauge-needle"></div>
                        <div className="gauge-center">
                          <span className="gauge-icon">{link.icon}</span>
                        </div>
                      </div>
                      <div className="gauge-label">{link.name}</div>
                    </div>
                    <div className="link-description">{link.label}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Victorian Footer */}
      <footer className="victorian-footer">
        <div className="footer-content">
          <div className="footer-divider">
            <div className="divider-pipe"></div>
            <div className="divider-joint"></div>
            <div className="divider-pipe"></div>
          </div>
          
          <div className="footer-text">
            <p className="footer-main">
              © 2026 BENJAMÍN SOTO - CONSTRUIDO CON VAPOR Y SAVIA
            </p>
            <p className="footer-location">
              📍 Temuco, Chile
            </p>
          </div>

          {/* BSV Emblem - Clone from Hero */}
          <div className="wax-seal">BSV</div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
