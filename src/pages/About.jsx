import React from 'react';

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>📖 프로젝트 소개</h1>
        <p>Proxytest는 현대적인 웹 개발 기술을 학습하고 실습하기 위한 프로젝트입니다.</p>
      </div>
      
      <div className="about-content">
        <div className="section">
          <h2>🎯 프로젝트 목표</h2>
          <p>
            이 프로젝트는 프론트엔드와 백엔드 개발을 모두 경험할 수 있도록 설계되었습니다. 
            데이터베이스 없이도 동작하는 간단한 API부터 시작하여, 점진적으로 기능을 확장할 수 있습니다.
          </p>
        </div>
        
        <div className="section">
          <h2>🛠️ 사용된 기술</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>프론트엔드</h3>
              <ul>
                <li><strong>React 19</strong> - 최신 React 버전으로 구축</li>
                <li><strong>Vite</strong> - 빠른 빌드 도구</li>
                <li><strong>CSS-in-JS</strong> - 컴포넌트 기반 스타일링</li>
                <li><strong>React Router</strong> - 페이지 라우팅</li>
              </ul>
            </div>
            
            <div className="tech-category">
              <h3>백엔드</h3>
              <ul>
                <li><strong>Express.js</strong> - Node.js 웹 프레임워크</li>
                <li><strong>CORS</strong> - 크로스 오리진 요청 처리</li>
                <li><strong>Helmet</strong> - 보안 헤더 설정</li>
                <li><strong>Morgan</strong> - HTTP 요청 로깅</li>
              </ul>
            </div>
            
            <div className="tech-category">
              <h3>개발 도구</h3>
              <ul>
                <li><strong>ESLint</strong> - 코드 품질 관리</li>
                <li><strong>Git</strong> - 버전 관리</li>
                <li><strong>npm</strong> - 패키지 관리</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="section">
          <h2>📁 프로젝트 구조</h2>
          <div className="structure-tree">
            <div className="folder">
              <span className="folder-icon">📁</span>
              <span className="folder-name">Proxytest/</span>
              <div className="sub-items">
                <div className="file">
                  <span className="file-icon">📄</span>
                  <span>package.json</span>
                </div>
                <div className="file">
                  <span className="file-icon">📄</span>
                  <span>index.html</span>
                </div>
                <div className="folder">
                  <span className="folder-icon">📁</span>
                  <span className="folder-name">src/</span>
                  <div className="sub-items">
                    <div className="file">
                      <span className="file-icon">📄</span>
                      <span>App.jsx</span>
                    </div>
                    <div className="file">
                      <span className="file-icon">📄</span>
                      <span>main.jsx</span>
                    </div>
                    <div className="folder">
                      <span className="folder-icon">📁</span>
                      <span className="folder-name">components/</span>
                      <div className="sub-items">
                        <div className="file">
                          <span className="file-icon">📄</span>
                          <span>ApiTest.jsx</span>
                        </div>
                      </div>
                    </div>
                    <div className="folder">
                      <span className="folder-icon">📁</span>
                      <span className="folder-name">pages/</span>
                      <div className="sub-items">
                        <div className="file">
                          <span className="file-icon">📄</span>
                          <span>Home.jsx</span>
                        </div>
                        <div className="file">
                          <span className="file-icon">📄</span>
                          <span>About.jsx</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="folder">
                  <span className="folder-icon">📁</span>
                  <span className="folder-name">server/</span>
                  <div className="sub-items">
                    <div className="file">
                      <span className="file-icon">📄</span>
                      <span>server.js</span>
                    </div>
                    <div className="file">
                      <span className="file-icon">📄</span>
                      <span>package.json</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section">
          <h2>🚀 향후 계획</h2>
          <div className="roadmap">
            <div className="roadmap-item">
              <div className="roadmap-phase">Phase 1</div>
              <h4>기본 CRUD 기능</h4>
              <p>사용자와 게시글의 기본적인 생성, 조회, 수정, 삭제 기능 구현</p>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-phase">Phase 2</div>
              <h4>인증 시스템</h4>
              <p>JWT를 활용한 사용자 로그인/회원가입 기능 추가</p>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-phase">Phase 3</div>
              <h4>데이터베이스 연동</h4>
              <p>MongoDB 또는 PostgreSQL 연동으로 영구 데이터 저장</p>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-phase">Phase 4</div>
              <h4>고급 기능</h4>
              <p>파일 업로드, 실시간 채팅, 알림 시스템 등 고급 기능 구현</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-page {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .about-header {
          text-align: center;
          padding: 40px 20px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          border-radius: 20px;
          margin-bottom: 40px;
        }
        
        .about-header h1 {
          font-size: 2.5rem;
          margin-bottom: 15px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .about-header p {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .section {
          margin-bottom: 40px;
          padding: 30px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          border: 1px solid #e0e0e0;
        }
        
        .section h2 {
          color: #333;
          margin-bottom: 20px;
          font-size: 1.8rem;
          border-bottom: 3px solid #f093fb;
          padding-bottom: 10px;
        }
        
        .section h3 {
          color: #555;
          margin-bottom: 15px;
          font-size: 1.3rem;
        }
        
        .section p {
          color: #666;
          line-height: 1.7;
          font-size: 1.1rem;
        }
        
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }
        
        .tech-category {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #e9ecef;
        }
        
        .tech-category ul {
          list-style: none;
          padding: 0;
        }
        
        .tech-category li {
          padding: 8px 0;
          border-bottom: 1px solid #dee2e6;
          color: #495057;
        }
        
        .tech-category li:last-child {
          border-bottom: none;
        }
        
        .structure-tree {
          font-family: 'Courier New', monospace;
          background: #f8f9fa;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #e9ecef;
        }
        
        .folder, .file {
          margin: 5px 0;
          padding: 5px 0;
        }
        
        .folder-icon, .file-icon {
          margin-right: 10px;
        }
        
        .folder-name {
          font-weight: bold;
          color: #007bff;
        }
        
        .sub-items {
          margin-left: 30px;
          border-left: 2px solid #dee2e6;
          padding-left: 20px;
        }
        
        .roadmap {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        
        .roadmap-item {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #e9ecef;
          text-align: center;
        }
        
        .roadmap-phase {
          background: #f093fb;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          margin-bottom: 15px;
          display: inline-block;
        }
        
        .roadmap-item h4 {
          color: #333;
          margin-bottom: 10px;
        }
        
        .roadmap-item p {
          color: #666;
          font-size: 0.95rem;
        }
        
        @media (max-width: 768px) {
          .about-header h1 {
            font-size: 2rem;
          }
          
          .tech-grid {
            grid-template-columns: 1fr;
          }
          
          .roadmap {
            grid-template-columns: 1fr;
          }
          
          .sub-items {
            margin-left: 15px;
            padding-left: 15px;
          }
        }
      `}</style>
    </div>
  );
}

export default About; 