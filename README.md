# Proxytest

Vite + React + Express 백엔드가 포함된 풀스택 웹 애플리케이션입니다.

## 프로젝트 구조

```
Proxytest/
├── src/                    # React 프론트엔드
│   ├── components/         # React 컴포넌트
│   │   ├── ApiTest.jsx    # 백엔드 API 테스트 컴포넌트
│   │   └── Navigation.jsx # 네비게이션 컴포넌트
│   ├── pages/             # 페이지 컴포넌트
│   │   ├── Home.jsx       # 홈 페이지
│   │   ├── About.jsx      # 프로젝트 소개 페이지
│   │   └── Contact.jsx    # 문의 페이지
│   ├── App.jsx            # 메인 App 컴포넌트 (라우팅)
│   └── main.jsx           # React 진입점
├── server/                 # Express 백엔드
│   ├── server.js          # Express 서버 메인 파일
│   ├── package.json       # 백엔드 의존성
│   ├── install.bat        # Windows 의존성 설치 스크립트
│   └── start.bat          # Windows 서버 시작 스크립트
├── index.html              # HTML 진입점
└── package.json            # 프론트엔드 의존성
```

## 설치 및 실행

### 1. 프론트엔드 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (포트 5173)
npm run dev
```

### 2. 백엔드 실행

```bash
# server 디렉토리로 이동
cd server

# 백엔드 의존성 설치
npm install

# 개발 서버 실행 (포트 3001)
npm run dev

# 또는 프로덕션 모드로 실행
npm start
```

## 페이지 및 기능

### 🏠 홈 페이지 (`/`)
- 프로젝트 소개 및 특징
- 시작 가이드
- 반응형 카드 레이아웃

### 📖 소개 페이지 (`/about`)
- 프로젝트 목표 및 기술 스택
- 프로젝트 구조 시각화
- 향후 개발 로드맵

### 🔧 API 테스트 페이지 (`/api-test`)
- Express 백엔드 API 테스트
- 사용자 및 게시글 CRUD 작업
- 실시간 데이터 동기화

### 📧 문의 페이지 (`/contact`)
- 연락처 정보
- 문의 양식
- 자주 묻는 질문 (FAQ)

## API 엔드포인트

### 사용자 관리
- `GET /api/users` - 모든 사용자 조회
- `GET /api/users/:id` - 특정 사용자 조회
- `POST /api/users` - 새 사용자 생성
- `PUT /api/users/:id` - 사용자 정보 수정
- `DELETE /api/users/:id` - 사용자 삭제

### 게시글 관리
- `GET /api/posts` - 모든 게시글 조회
- `GET /api/posts/:id` - 특정 게시글 조회
- `POST /api/posts` - 새 게시글 생성
- `PUT /api/posts/:id` - 게시글 수정
- `DELETE /api/posts/:id` - 게시글 삭제

### 기타
- `GET /` - API 정보 및 사용 가능한 엔드포인트
- `GET /api/health` - 서버 상태 확인

## 데이터 저장

현재는 데이터베이스 없이 메모리 기반으로 동작합니다:
- 서버 재시작 시 데이터가 초기화됩니다
- 개발 및 테스트 목적으로 적합합니다

## 기술 스택

### 프론트엔드
- React 19
- Vite
- React Router (페이지 라우팅)
- CSS-in-JS (styled-jsx)

### 백엔드
- Express.js
- CORS
- Helmet (보안)
- Morgan (로깅)

## 주요 기능

### 🎨 반응형 디자인
- 모바일 우선 접근법
- CSS Grid 및 Flexbox 활용
- 미디어 쿼리로 다양한 화면 크기 지원

### 🧭 네비게이션
- 스티키 네비게이션 바
- 모바일 햄버거 메뉴
- 현재 페이지 하이라이트
- 부드러운 애니메이션 효과

### 📱 사용자 경험
- 로딩 상태 표시
- 에러 처리 및 메시지
- 폼 유효성 검사
- 성공/실패 피드백

## 개발 팁

1. **동시 실행**: 프론트엔드와 백엔드를 별도 터미널에서 실행하세요
2. **포트 확인**: 백엔드는 3001, 프론트엔드는 5173 포트를 사용합니다
3. **API 테스트**: 브라우저에서 `/api/health` 엔드포인트로 백엔드 연결을 확인하세요
4. **CORS**: 백엔드에서 CORS가 설정되어 있어 프론트엔드에서 API 호출이 가능합니다
5. **라우팅**: React Router를 사용하여 SPA(Single Page Application) 구조로 구현되었습니다

## 향후 계획

- [ ] 사용자 인증 시스템 (JWT)
- [ ] 데이터베이스 연동 (MongoDB/PostgreSQL)
- [ ] 파일 업로드 기능
- [ ] 실시간 채팅
- [ ] 알림 시스템
- [ ] 다국어 지원
