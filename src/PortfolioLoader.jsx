import React, { useState, useEffect } from 'react';

const PortfolioLoader = () => {
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const tasks = [
    { name: 'Loading Portfolio', icon: '📁' },
    { name: 'Initializing Components', icon: '⚙️' },
    { name: 'Preparing Assets', icon: '🎨' },
    { name: 'Optimizing Performance', icon: '⚡' },
    { name: 'Ready to Launch', icon: '🚀' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + Math.random() * 8 + 2, 100);
        
        // Update current task based on progress
        const taskIndex = Math.floor((newProgress / 100) * tasks.length);
        setCurrentTask(Math.min(taskIndex, tasks.length - 1));
        
        if (newProgress >= 100) {
          setIsComplete(true);
          clearInterval(interval);
        }
        
        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="modern-loader">
      {/* Background Grid */}
      <div className="grid-background"></div>
      
      {/* Main Container */}
      <div className="loader-content">
        
        {/* Header Section */}
        <div className="header-section">
          <div className="logo-container">
            <div className="logo-circle">
              <span className="logo-text">MF</span>
            </div>
          </div>
          <h1 className="main-title">Mohammed Fazil</h1>
          <p className="subtitle">Frontend Developer & UI/UX Designer</p>
        </div>

        {/* Progress Section */}
        <div className="progress-section">
          <div className="task-display">
            <span className="task-icon">{tasks[currentTask]?.icon}</span>
            <span className="task-name">{tasks[currentTask]?.name}</span>
          </div>
          
          <div className="progress-wrapper">
            <div className="progress-track">
              <div 
                className="progress-fill"
                style={{ '--progress': `${progress}%` }}
              ></div>
              <div className="progress-glow"></div>
            </div>
            <div className="progress-text">{Math.floor(progress)}%</div>
          </div>

          {/* Skills Animation */}
          <div className="skills-container">
            <div className="skill-item" style={{ '--delay': '0s' }}>React</div>
            <div className="skill-item" style={{ '--delay': '0.2s' }}>TypeScript</div>
            <div className="skill-item" style={{ '--delay': '0.4s' }}>Next.js</div>
            <div className="skill-item" style={{ '--delay': '0.6s' }}>Tailwind</div>
            <div className="skill-item" style={{ '--delay': '0.8s' }}>Node.js</div>
          </div>
        </div>

        {/* Bottom Animation */}
        <div className="bottom-animation">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>

      </div>

      <style jsx>{`
        .modern-loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #0d1117;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow: hidden;
          z-index: 10000;
        }

        .grid-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
          opacity: 0.3;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .loader-content {
          position: relative;
          text-align: center;
          z-index: 2;
          width: 90%;
          max-width: 500px;
        }

        /* Header Section */
        .header-section {
          margin-bottom: 4rem;
          animation: slideUp 0.8s ease-out;
        }

        .logo-container {
          margin-bottom: 2rem;
        }

        .logo-circle {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          position: relative;
          animation: logoSpin 3s ease-in-out infinite;
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
        }

        .logo-circle::before {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
          z-index: -1;
          animation: borderRotate 2s linear infinite;
        }

        .logo-text {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .main-title {
          font-size: 2.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          animation: titleGlow 2s ease-in-out infinite alternate;
        }

        .subtitle {
          font-size: 1.1rem;
          color: #94a3b8;
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        /* Progress Section */
        .progress-section {
          margin-bottom: 3rem;
          animation: slideUp 0.8s ease-out 0.2s both;
        }

        .task-display {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          margin-bottom: 2rem;
          padding: 1rem 2rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          animation: taskPulse 1s ease-in-out infinite;
        }

        .task-icon {
          font-size: 1.5rem;
          animation: iconBounce 1s ease-in-out infinite;
        }

        .task-name {
          font-size: 1.1rem;
          color: #e2e8f0;
          font-weight: 500;
        }

        .progress-wrapper {
          position: relative;
          margin-bottom: 3rem;
        }

        .progress-track {
          width: 100%;
          height: 8px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
          border-radius: 4px;
          width: var(--progress);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          animation: progressGlow 1.5s ease-in-out infinite;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 20px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6));
          animation: progressShine 2s ease-in-out infinite;
        }

        .progress-glow {
          position: absolute;
          top: -2px;
          left: 0;
          right: 0;
          bottom: -2px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
          border-radius: 6px;
          opacity: 0;
          animation: glowPulse 2s ease-in-out infinite;
          z-index: -1;
        }

        .progress-text {
          position: absolute;
          top: -35px;
          right: 0;
          font-size: 1.2rem;
          font-weight: 600;
          color: #6366f1;
          animation: numberGlow 1s ease-in-out infinite;
        }

        /* Skills Container */
        .skills-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .skill-item {
          padding: 0.6rem 1.2rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 20px;
          color: #e2e8f0;
          font-size: 0.9rem;
          font-weight: 500;
          animation: skillFloat 2s ease-in-out infinite var(--delay);
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: #6366f1;
          transform: translateY(-2px);
        }

        /* Bottom Animation */
        .bottom-animation {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          overflow: hidden;
        }

        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
          animation: waveMove 3s ease-in-out infinite;
        }

        .wave1 {
          animation-delay: 0s;
          opacity: 0.7;
        }

        .wave2 {
          animation-delay: 1s;
          opacity: 0.5;
        }

        .wave3 {
          animation-delay: 2s;
          opacity: 0.3;
        }

        /* Animations */
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes logoSpin {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
        }

        @keyframes borderRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes titleGlow {
          0% { filter: drop-shadow(0 0 5px rgba(99, 102, 241, 0.5)); }
          100% { filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.8)); }
        }

        @keyframes taskPulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.02); opacity: 1; }
        }

        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes progressGlow {
          0%, 100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.5); }
          50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.8); }
        }

        @keyframes progressShine {
          0% { transform: translateX(-20px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(20px); opacity: 0; }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.3; }
        }

        @keyframes numberGlow {
          0%, 100% { color: #6366f1; text-shadow: 0 0 5px rgba(99, 102, 241, 0.5); }
          50% { color: #8b5cf6; text-shadow: 0 0 15px rgba(139, 92, 246, 0.8); }
        }

        @keyframes skillFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes waveMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }

        /* Performance Optimizations */
        * {
          will-change: auto;
        }

        .progress-fill,
        .logo-circle,
        .wave {
          will-change: transform;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .main-title {
            font-size: 2.2rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .logo-circle {
            width: 60px;
            height: 60px;
          }

          .logo-text {
            font-size: 1.4rem;
          }

          .skills-container {
            gap: 0.5rem;
          }

          .skill-item {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .loader-content {
            width: 95%;
          }

          .task-display {
            padding: 0.8rem 1.5rem;
            gap: 0.6rem;
          }

          .task-name {
            font-size: 1rem;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioLoader;