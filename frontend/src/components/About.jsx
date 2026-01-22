import React from 'react';
import { Award, History, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="luxury-about-page page-fade">
      {/* Visual Atmosphere Overlays */}
      <div className="zellige-texture-overlay"></div>
      <div className="ambient-glow"></div>

      {/* Main Heritage Section */}
      <section className="about-hero py-luxury">
        <div className="container">
          <div className="about-grid-premium">
            
            {/* Left: Visual Composition */}
            <div className="about-visual-container">
              <div className="image-frame-gold">
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" 
                  alt="L'Art Culinaire" 
                  className="about-img"
                />
                {/* Gold Shadow & Border effect handled by CSS */}
              </div>
              <div className="since-tag">Depuis 1998</div>
            </div>

            {/* Right: Narrative Content */}
            <div className="about-text-content">
              <header className="about-header">
                <span className="gold-subtitle">L'Excellence en Héritage</span>
                <h1 className="luxury-main-title gold-gradient-text">L'Odyssée de L'Arôme</h1>
                <div className="divider-gold-left"></div>
              </header>

              <div className="about-body-text">
                <p className="lead-text-gold">
                  Fondée au cœur des racines d'Alger, la maison 
                  <strong> L'Arôme Gourmet</strong> est l'épicentre d'une ambition noble : 
                  transformer les trésors de notre terroir en une expérience sensorielle absolue.
                </p>
                
                <p>
                  Ce qui fut autrefois une table d'initiés est devenu le sanctuaire d'un savoir-faire 
                  ancestral. Chaque ingrédient est sélectionné pour sa pureté, respectant 
                  le souffle des saisons et la dignité de nos producteurs locaux.
                </p>

                <p>
                  Sous l'égide de la haute gastronomie, nos créations marient l'audace 
                  berbère à la finesse méditerranéenne, créant un dialogue entre 
                  tradition séculaire et avant-garde culinaire.
                </p>
              </div>

              {/* Values Grid */}
              <div className="philosophy-icons">
                <div className="phil-item">
                  <div className="icon-circle">
                    <Award className="gold-text" size={20} />
                  </div>
                  <span>Excellence</span>
                </div>
                <div className="phil-item">
                  <div className="icon-circle">
                    <History className="gold-text" size={20} />
                  </div>
                  <span>Tradition</span>
                </div>
                <div className="phil-item">
                  <div className="icon-circle">
                    <Heart className="gold-text" size={20} />
                  </div>
                  <span>Passion</span>
                </div>
                <div className="phil-item">
                  <div className="icon-circle">
                    <ShieldCheck className="gold-text" size={20} />
                  </div>
                  <span>Prestige</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Signature & Philosophy Section */}
      <section className="luxury-quote mb-lg">
        <div className="container">
          <div className="quote-wrapper">
            <span className="quote-mark">“</span>
            <blockquote className="chef-quote">
              La gastronomie est le miroir d'une civilisation. Chez L'Arôme, nous ne servons pas 
              seulement des mets, nous célébrons l'âme majestueuse de l'Algérie.
              <cite>— Direction de L'Arôme Gourmet</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}