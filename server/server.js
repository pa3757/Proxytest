import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3001;

// 미들웨어 설정
app.use(helmet()); // 보안 헤더 설정
app.use(cors()); // CORS 설정
app.use(morgan('combined')); // 로깅
app.use(express.json()); // JSON 파싱
app.use(express.urlencoded({ extended: true })); // URL 인코딩 파싱

// 메모리 기반 데이터 저장소 (데이터베이스 대신)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35 }
];

let posts = [
  { id: 1, title: '첫 번째 게시글', content: '안녕하세요!', authorId: 1, createdAt: new Date().toISOString() },
  { id: 2, title: '두 번째 게시글', content: '반갑습니다!', authorId: 2, createdAt: new Date().toISOString() }
];

// 라우트 설정

// 루트 경로
app.get('/', (req, res) => {
  res.json({ 
    message: 'Proxytest Express Backend API',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      posts: '/api/posts',
      health: '/api/health'
    }
  });
});

// 헬스 체크
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 사용자 관련 API
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
  }
  res.json(user);
});

app.post('/api/users', (req, res) => {
  const { name, email, age } = req.body;
  
  if (!name || !email || !age) {
    return res.status(400).json({ error: '이름, 이메일, 나이는 필수입니다.' });
  }
  
  const newUser = {
    id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
    name,
    email,
    age: parseInt(age)
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
  }
  
  const { name, email, age } = req.body;
  users[userIndex] = { ...users[userIndex], ...req.body };
  
  res.json(users[userIndex]);
});

app.delete('/api/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
  }
  
  const deletedUser = users.splice(userIndex, 1)[0];
  res.json({ message: '사용자가 삭제되었습니다.', user: deletedUser });
});

// 게시글 관련 API
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.get('/api/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ error: '게시글을 찾을 수 없습니다.' });
  }
  res.json(post);
});

app.post('/api/posts', (req, res) => {
  const { title, content, authorId } = req.body;
  
  if (!title || !content || !authorId) {
    return res.status(400).json({ error: '제목, 내용, 작성자 ID는 필수입니다.' });
  }
  
  // 작성자가 존재하는지 확인
  const author = users.find(u => u.id === parseInt(authorId));
  if (!author) {
    return res.status(400).json({ error: '존재하지 않는 작성자입니다.' });
  }
  
  const newPost = {
    id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
    title,
    content,
    authorId: parseInt(authorId),
    createdAt: new Date().toISOString()
  };
  
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put('/api/posts/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex === -1) {
    return res.status(404).json({ error: '게시글을 찾을 수 없습니다.' });
  }
  
  posts[postIndex] = { ...posts[postIndex], ...req.body };
  res.json(posts[postIndex]);
});

app.delete('/api/posts/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex === -1) {
    return res.status(404).json({ error: '게시글을 찾을 수 없습니다.' });
  }
  
  const deletedPost = posts.splice(postIndex, 1)[0];
  res.json({ message: '게시글이 삭제되었습니다.', post: deletedPost });
});

// 404 에러 핸들링
app.use('*', (req, res) => {
  res.status(404).json({ error: '요청한 경로를 찾을 수 없습니다.' });
});

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '서버 내부 오류가 발생했습니다.' });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`🚀 서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log(`📖 API 문서: http://localhost:${PORT}`);
  console.log(`🏥 헬스 체크: http://localhost:${PORT}/api/health`);
}); 