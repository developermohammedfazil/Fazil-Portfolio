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
      github: "https://vidtube2o.netlify.app/"
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
    
    setTimeout(() => {
      setClickedCard(null);
      window.open(card.github, '_blank');
    }, 600);
  };

  return (
    <>
      <style>{`
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

        /* Desktop Timeline */
        .desktop-timeline {
          display: block;
        }

        .mobile-timeline {
          display: none;
        }

        /* Mobile Layout */
        @media (max-width: 768px) {
          .desktop-timeline {
            display: none;
          }

          .mobile-timeline {
            display: block;
          }

          .mobile-card {
            width: 100% !important;
            max-width: 320px !important;
            margin: 0 auto 2rem auto !important;
          }
        }
      `}</style>

      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg,rgb(28, 28, 29) 0%,rgb(47, 45, 50) 100%)',
        padding: '2rem 1rem',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4rem)', 
            fontWeight: '900', 
            color: '#fff',
            textShadow: '2px 2px 4px rgba(197, 177, 177, 0.1)',
            marginBottom: '1rem'
          }}>
            ROADMAP
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 4vw, 1.5rem)', 
            color: '#fff',
            fontWeight: '600'
          }}>
            8-month self-learning journey
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="desktop-timeline">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ position: 'relative', paddingTop: '2rem' }}>
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
              {Array.from({ length: roadmapData.length }, (_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: `${i * (100 / (roadmapData.length - 1))}%`,
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
                      width: '350px',
                      maxWidth: '350px',
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

                    <div>
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

                    {/* Click indicator */}
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
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="mobile-timeline">
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            {roadmapData.map((card, index) => (
              <div key={card.id} style={{ marginBottom: '2rem' }}>
                {/* Mobile Timeline Dot */}
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: '#2d3436',
                    borderRadius: '50%',
                    margin: '0 auto',
                    border: '3px solid white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}></div>
                  {index < roadmapData.length - 1 && (
                    <div style={{
                      width: '2px',
                      height: '40px',
                      background: 'linear-gradient(to bottom, #2d3436, #636e72)',
                      margin: '10px auto'
                    }}></div>
                  )}
                </div>

                {/* Mobile Card */}
                <div
                  className="roadmap-card mobile-card"
                  onClick={() => handleCardClick(card)}
                  style={{
                    background: card.gradient,
                    borderRadius: '20px',
                    padding: '1.5rem',
                    color: 'white',
                    cursor: 'pointer',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transform: clickedCard === card.id ? 'scale(0.95)' : 'scale(1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    overflow: 'hidden',
                    willChange: 'transform',
                    position: 'relative'
                  }}
                  onTouchStart={(e) => {
                    if (clickedCard !== card.id) {
                      e.currentTarget.style.transform = 'scale(0.98)';
                    }
                  }}
                  onTouchEnd={(e) => {
                    if (clickedCard !== card.id) {
                      e.currentTarget.style.transform = 'scale(1)';
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

                  <div>
                    <h3 style={{ 
                      fontSize: '1.6rem', 
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
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        marginBottom: '1rem'
                      }}>
                        {card.level}
                      </span>
                    )}

                    {card.subtitle && (
                      <p style={{ 
                        fontSize: '0.95rem', 
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
                            fontSize: '0.9rem', 
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

                  {/* Click indicator */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '15px',
                    fontSize: '1.1rem',
                    opacity: '0.7',
                    animation: 'bounce 2s infinite'
                  }}>
                    👆
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Message */}
        <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem' }}>
          <h2 style={{ 
            color: '#fff',
            fontSize: 'clamp(1.5rem, 5vw, 2rem)', 
            fontWeight: '700',
            textShadow: '1px 1px 2px rgba(254, 247, 247, 0.5)'
          }}>
            8-month self-learning journey
          </h2>
          <p style={{ 
            color: '#636e72', 
            fontSize: 'clamp(1rem, 3vw, 1.2rem)', 
            fontWeight: '600',
            marginTop: '1rem'
          }}>
            🎯 Ready to work in frontend development!
          </p>
        </div>
      </div>
    </>
  );
};

export default LearningRoadmap;