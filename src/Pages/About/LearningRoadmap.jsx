import React, { useState } from 'react';

const LearningRoadmap = () => {
  const [clickedCard, setClickedCard] = useState(null);

  const roadmapData = [
    {
      id: 1,
      title: "HTML & CSS",
      level: "Beginner",
      items: ["SuperSimpleDev channel", "freeCodeCamp", "Practice projects"],
      position: "left",
      gradient: "linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)",
      github: "https://github.com/developermohammedfazil/HTML-CSS-learning"
    },
    {
      id: 2,
      title: "JAVASCRIPT",
      level: "Intermediate",
      subtitle: "Functional",
      items: ["Error Makes Clever", "SuperSimpleDev channel", "More JS-based projects"],
      position: "right",
      gradient: "linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)",
      github: "https://github.com/developermohammedfazil/CODSOFT"
    },
    {
      id: 3,
      title: "REACT",
      level: "Intermediate",
      items: ["ChatGPT", "Anton channel", "Dynamic projects"],
      position: "left",
      gradient: "linear-gradient(135deg, #55efc4 0%, #00b894 100%)",
      github: "vidtube2o.netlify.app/"
    },
    {
      id: 4,
      title: "BOOTSTRAP",
      subtitle: "Portfolio with React & Vite",
      items: [],
      position: "right",
      gradient: "linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)",
      github: "https://github.com/yourusername/bootstrap-portfolio"
    },
    {
      id: 5,
      title: "GITHUB",
      subtitle: "Push all projects",
      items: [],
      position: "left",
      gradient: "linear-gradient(135deg, #ddd 0%, #999 100%)",
      github: "https://github.com/developermohammedfazil"
    },
    {
      id: 6,
      title: "REDUX",
      level: "Advanced",
      items: ["Core Concepts", "API Integration"],
      position: "right",
      gradient: "linear-gradient(135deg, #fd79a8 0%, #e84393 100%)",
      github: "https://github.com/yourusername/redux-projects"
    },
    {
      id: 7,
      title: "REDUX + VITE",
      level: "Advanced",
      items: ["Core Concepts", "API Integration"],
      position: "left",
      gradient: "linear-gradient(135deg, #ff7675 0%, #d63031 100%)",
      github: "https://github.com/yourusername/redux-vite-projects"
    }
  ];

  const handleCardClick = (card) => {
    setClickedCard(card.id);
    
    // Add pulse animation
    setTimeout(() => {
      setClickedCard(null);
      // Redirect to GitHub
      window.open(card.github, '_blank');
    }, 600);
  };

  return (
    <div className="roadmap-container" style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg,rgb(28, 28, 29) 0%,rgb(47, 45, 50) 100%)',
      padding: '2rem 0',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: '900', 
            color: '#fff',
            textShadow: '2px 2px 4px rgba(197, 177, 177, 0.1)',
            marginBottom: '1rem'
          }}>
            ROADMAP
          </h1>
          <p style={{ 
            fontSize: '1.5rem', 
            color: '#fff',
            fontWeight: '600'
          }}>
            8-month self-learning journey
          </p>
        </div>

        {/* Timeline */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="timeline-container" style={{ position: 'relative', paddingTop: '2rem' }}>
              {/* Timeline Line */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                bottom: '0',
                width: '4px',
                background: 'linear-gradient(to bottom, #2d3436, #636e72)',
                transform: 'translateX(-50%)',
                zIndex: 1
              }}></div>

              {/* Timeline Dots */}
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: `${i * 14.28}%`,
                    width: '20px',
                    height: '20px',
                    background: '#2d3436',
                    borderRadius: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    border: '3px solid white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                ></div>
              ))}

              {/* Cards */}
              {roadmapData.map((card, index) => (
                <div
                  key={card.id}
                  className={`timeline-item ${card.position === 'right' ? 'right-card' : 'left-card'}`}
                  style={{
                    position: 'relative',
                    minHeight: '180px',
                    marginBottom: index === roadmapData.length - 1 ? '0' : '3rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <div
                    className="roadmap-card"
                    onClick={() => handleCardClick(card)}
                    style={{
                      background: card.gradient,
                      borderRadius: '20px',
                      padding: '1.5rem',
                      width: '320px',
                      maxWidth: '320px',
                      color: 'white',
                      cursor: 'pointer',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                      transform: clickedCard === card.id ? 'scale(0.95)' : 'scale(1)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      position: 'absolute',
                      overflow: 'hidden',
                      left: card.position === 'left' ? '0' : 'calc(50% + 30px)',
                      willChange: 'transform'
                    }}
                    onMouseEnter={(e) => {
                      if (clickedCard !== card.id) {
                        e.target.style.transform = 'scale(1.05) translateY(-5px)';
                        e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (clickedCard !== card.id) {
                        e.target.style.transform = 'scale(1) translateY(0)';
                        e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                      }
                    }}
                  >
                    {/* Pulse animation overlay */}
                    {clickedCard === card.id && (
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '20px',
                        height: '20px',
                        background: 'rgba(248, 248, 248, 0.8)',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)',
                        animation: 'pulse 0.6s ease-out'
                      }}></div>
                    )}

                    <div className="card-content">
                      <h3 style={{ 
                        fontSize: '1.8rem', 
                        fontWeight: '800', 
                        marginBottom: '0.5rem',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                      }}>
                        {card.title}
                      </h3>
                      
                      {card.level && (
                        <span style={{
                          display: 'inline-block',
                          background: 'rgba(255,255,255,0.2)',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '15px',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          marginBottom: '1rem'
                        }}>
                          {card.level}
                        </span>
                      )}

                      {card.subtitle && (
                        <p style={{ 
                          fontSize: '1rem', 
                          fontWeight: '600', 
                          marginBottom: '1rem',
                          opacity: '0.9'
                        }}>
                          {card.subtitle}
                        </p>
                      )}

                      {card.items.length > 0 && (
                        <ul style={{ 
                          listStyle: 'none', 
                          padding: '0', 
                          margin: '0'
                        }}>
                          {card.items.map((item, i) => (
                            <li key={i} style={{ 
                              fontSize: '0.95rem', 
                              marginBottom: '0.5rem',
                              paddingLeft: '1rem',
                              position: 'relative'
                            }}>
                              <span style={{
                                position: 'absolute',
                                left: '0',
                                top: '0.2rem',
                                width: '6px',
                                height: '6px',
                                background: 'white',
                                borderRadius: '50%'
                              }}></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Click indicator arrow */}
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '15px',
                      fontSize: '1.2rem',
                      opacity: '0.7',
                      animation: 'bounce 2s infinite'
                    }}>
                      👆
                    </div>
                  </div>
                </div>
              ))}

              {/* Final Message */}
              <div className="text-center mt-5 pt-4">
                <h2 style={{ 
                  color: '#fff',
                  fontSize: '2rem', 
                  fontWeight: '700',
                  textShadow: '1px 1px 2px rgba(254, 247, 247, 0.5)'
                }}>
                  8-month self-learning journey
                </h2>
                <p style={{ 
                  color: '#636e72', 
                  fontSize: '1.2rem', 
                  fontWeight: '600',
                  marginTop: '1rem'
                }}>
                  🎯 Ready to work in frontend development!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            width: 20px;
            height: 20px;
            opacity: 0.8;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .roadmap-card {
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
        }

        @media (max-width: 768px) {
          .roadmap-card {
            position: relative !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            max-width: 280px !important;
          }
          
          .timeline-item {
            justify-content: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LearningRoadmap;