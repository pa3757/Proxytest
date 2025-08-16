import React from 'react';

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>🏠 Proxytest에 오신 것을 환영합니다!</h1>
        <p>Vite + React + Express 백엔드로 구축된 풀스택 웹 애플리케이션입니다.</p>
      </div>
      
      <div className="features-grid">
        <div className="feature-card">
          <h3>⚡ 빠른 개발</h3>
          <p>Vite의 빠른 HMR과 React의 효율적인 렌더링으로 빠른 개발 경험을 제공합니다.</p>
        </div>
        
        <div className="feature-card">
          <h3>🔧 Express 백엔드</h3>
          <p>데이터베이스 없이도 동작하는 강력한 Express.js 백엔드 API를 제공합니다.</p>
        </div>
        
        <div className="feature-card">
          <h3>📱 반응형 디자인</h3>
          <p>모든 디바이스에서 최적화된 사용자 경험을 제공합니다.</p>
        </div>
        
        <div className="feature-card">
          <h3>🚀 현대적 기술 스택</h3>
          <p>최신 웹 기술을 활용하여 안정적이고 확장 가능한 애플리케이션을 구축합니다.</p>
        </div>
      </div>
      
      <div className="getting-started">
        <h2>🚀 시작하기</h2>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <p>백엔드 서버 실행: <code>cd server && npm run dev</code></p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <p>프론트엔드 실행: <code>npm run dev</code></p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <p>브라우저에서 <code>http://localhost:5173</code> 접속</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .home-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .hero-section {
          text-align: center;
          padding: 60px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 20px;
          margin-bottom: 40px;
        }
        
        .hero-section h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .hero-section p {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }
        
        .feature-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border: 1px solid #e0e0e0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .feature-card h3 {
          color: #333;
          margin-bottom: 15px;
          font-size: 1.3rem;
        }
        
        .feature-card p {
          color: #666;
          line-height: 1.6;
        }
        
        .getting-started {
          background: #f8f9fa;
          padding: 40px;
          border-radius: 15px;
          border: 1px solid #e9ecef;
        }
        
        .getting-started h2 {
          text-align: center;
          color: #333;
          margin-bottom: 30px;
        }
        
        .steps {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .step {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          background: white;
          border-radius: 10px;
          border: 1px solid #dee2e6;
        }
        
        .step-number {
          background: #007bff;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        
        .step p {
          margin: 0;
          color: #495057;
          font-size: 1.1rem;
        }
        
        .step code {
          background: #e9ecef;
          padding: 4px 8px;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          color: #e83e8c;
        }
        
        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .step {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
        }
      `}</style>
    </div>
  );
}

export default Home; 