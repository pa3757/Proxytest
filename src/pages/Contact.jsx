import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 실제로는 백엔드 API로 데이터를 전송합니다
    // 여기서는 시뮬레이션만 합니다
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // 3초 후 상태 초기화
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>📧 문의하기</h1>
        <p>프로젝트에 대한 질문이나 제안사항이 있으시면 언제든 연락주세요!</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2>📞 연락처 정보</h2>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>이메일</h3>
                <p>contact@proxytest.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">🌐</div>
              <div>
                <h3>웹사이트</h3>
                <p>https://proxytest.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h3>전화번호</h3>
                <p>+82-2-1234-5678</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>주소</h3>
                <p>서울특별시 강남구 테헤란로 123</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-section">
          <h2>✍️ 문의 양식</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">이름 *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="홍길동"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">이메일 *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="hong@example.com"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">제목 *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="문의 제목을 입력하세요"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">메시지 *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="문의 내용을 자세히 입력하세요..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? '전송 중...' : '문의하기'}
            </button>
          </form>
          
          {submitStatus === 'success' && (
            <div className="success-message">
              ✅ 문의가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.
            </div>
          )}
        </div>
        
        <div className="faq-section">
          <h2>❓ 자주 묻는 질문</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Q: 이 프로젝트는 어떤 목적으로 만들어졌나요?</h3>
              <p>A: 현대적인 웹 개발 기술을 학습하고 실습하기 위한 교육용 프로젝트입니다.</p>
            </div>
            
            <div className="faq-item">
              <h3>Q: 백엔드 API는 어떻게 사용하나요?</h3>
              <p>A: Express 서버를 실행한 후, 프론트엔드에서 API 엔드포인트로 데이터를 주고받을 수 있습니다.</p>
            </div>
            
            <div className="faq-item">
              <h3>Q: 데이터베이스 없이 어떻게 데이터를 저장하나요?</h3>
              <p>A: 현재는 메모리 기반으로 동작하며, 서버 재시작 시 데이터가 초기화됩니다. 향후 데이터베이스 연동을 계획하고 있습니다.</p>
            </div>
            
            <div className="faq-item">
              <h3>Q: 새로운 기능을 추가하고 싶습니다. 어떻게 해야 하나요?</h3>
              <p>A: GitHub 저장소에 이슈를 등록하거나 Pull Request를 보내주시면 검토 후 반영하겠습니다.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-page {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .contact-header {
          text-align: center;
          padding: 40px 20px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
          border-radius: 20px;
          margin-bottom: 40px;
        }
        
        .contact-header h1 {
          font-size: 2.5rem;
          margin-bottom: 15px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .contact-header p {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .contact-content {
          display: grid;
          gap: 40px;
        }
        
        .contact-info,
        .contact-form-section,
        .faq-section {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          border: 1px solid #e0e0e0;
        }
        
        .contact-info h2,
        .contact-form-section h2,
        .faq-section h2 {
          color: #333;
          margin-bottom: 25px;
          font-size: 1.8rem;
          border-bottom: 3px solid #4facfe;
          padding-bottom: 10px;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        
        .info-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 10px;
          border: 1px solid #e9ecef;
        }
        
        .info-icon {
          font-size: 2rem;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #4facfe;
          color: white;
          border-radius: 50%;
        }
        
        .info-item h3 {
          color: #333;
          margin: 0 0 5px 0;
          font-size: 1.1rem;
        }
        
        .info-item p {
          color: #666;
          margin: 0;
          font-size: 0.95rem;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
        }
        
        .form-group label {
          color: #333;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 1rem;
        }
        
        .form-group input,
        .form-group textarea {
          padding: 12px;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #4facfe;
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .submit-btn {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(79, 172, 254, 0.3);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .success-message {
          background: #d4edda;
          color: #155724;
          padding: 15px;
          border-radius: 8px;
          border: 1px solid #c3e6cb;
          text-align: center;
          margin-top: 20px;
          font-weight: 600;
        }
        
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .faq-item {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #e9ecef;
        }
        
        .faq-item h3 {
          color: #333;
          margin: 0 0 10px 0;
          font-size: 1.1rem;
        }
        
        .faq-item p {
          color: #666;
          margin: 0;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .contact-header h1 {
            font-size: 2rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .info-grid {
            grid-template-columns: 1fr;
          }
          
          .info-item {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact; 