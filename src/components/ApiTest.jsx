import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:3001/api';

function ApiTest() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // 새 사용자 추가 폼 상태
  const [newUser, setNewUser] = useState({ name: '', email: '', age: '' });
  
  // 새 게시글 추가 폼 상태
  const [newPost, setNewPost] = useState({ title: '', content: '', authorId: '' });

  // 사용자 목록 가져오기
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/users`);
      if (!response.ok) throw new Error('사용자 목록을 가져오는데 실패했습니다.');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 게시글 목록 가져오기
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/posts`);
      if (!response.ok) throw new Error('게시글 목록을 가져오는데 실패했습니다.');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 새 사용자 추가
  const addUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      });
      
      if (!response.ok) throw new Error('사용자 추가에 실패했습니다.');
      
      const addedUser = await response.json();
      setUsers([...users, addedUser]);
      setNewUser({ name: '', email: '', age: '' });
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 새 게시글 추가
  const addPost = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      });
      
      if (!response.ok) throw new Error('게시글 추가에 실패했습니다.');
      
      const addedPost = await response.json();
      setPosts([...posts, addedPost]);
      setNewPost({ title: '', content: '', authorId: '' });
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 사용자 삭제
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) throw new Error('사용자 삭제에 실패했습니다.');
      
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // 게시글 삭제
  const deletePost = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) throw new Error('게시글 삭제에 실패했습니다.');
      
      setPosts(posts.filter(post => post.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  if (loading) return <div className="loading">로딩 중...</div>;

  return (
    <div className="api-test">
      <h2>Express 백엔드 API 테스트</h2>
      
      {error && <div className="error">에러: {error}</div>}
      
      {/* 사용자 추가 폼 */}
      <div className="form-section">
        <h3>새 사용자 추가</h3>
        <form onSubmit={addUser}>
          <input
            type="text"
            placeholder="이름"
            value={newUser.name}
            onChange={(e) => setNewUser({...newUser, name: e.target.value})}
            required
          />
          <input
            type="email"
            placeholder="이메일"
            value={newUser.email}
            onChange={(e) => setNewUser({...newUser, email: e.target.value})}
            required
          />
          <input
            type="number"
            placeholder="나이"
            value={newUser.age}
            onChange={(e) => setNewUser({...newUser, age: e.target.value})}
            required
          />
          <button type="submit">사용자 추가</button>
        </form>
      </div>

      {/* 게시글 추가 폼 */}
      <div className="form-section">
        <h3>새 게시글 추가</h3>
        <form onSubmit={addPost}>
          <input
            type="text"
            placeholder="제목"
            value={newPost.title}
            onChange={(e) => setNewPost({...newPost, title: e.target.value})}
            required
          />
          <textarea
            placeholder="내용"
            value={newPost.content}
            onChange={(e) => setNewPost({...newPost, content: e.target.value})}
            required
          />
          <select
            value={newPost.authorId}
            onChange={(e) => setNewPost({...newPost, authorId: e.target.value})}
            required
          >
            <option value="">작성자 선택</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          <button type="submit">게시글 추가</button>
        </form>
      </div>

      {/* 사용자 목록 */}
      <div className="data-section">
        <h3>사용자 목록</h3>
        <div className="user-list">
          {users.map(user => (
            <div key={user.id} className="user-item">
              <div>
                <strong>{user.name}</strong> ({user.age}세)
                <br />
                <small>{user.email}</small>
              </div>
              <button onClick={() => deleteUser(user.id)}>삭제</button>
            </div>
          ))}
        </div>
      </div>

      {/* 게시글 목록 */}
      <div className="data-section">
        <h3>게시글 목록</h3>
        <div className="post-list">
          {posts.map(post => {
            const author = users.find(u => u.id === post.authorId);
            return (
              <div key={post.id} className="post-item">
                <div>
                  <h4>{post.title}</h4>
                  <p>{post.content}</p>
                  <small>
                    작성자: {author ? author.name : '알 수 없음'} | 
                    작성일: {new Date(post.createdAt).toLocaleDateString()}
                  </small>
                </div>
                <button onClick={() => deletePost(post.id)}>삭제</button>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .api-test {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .form-section {
          margin-bottom: 30px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
        
        .form-section h3 {
          margin-top: 0;
          color: #333;
        }
        
        .form-section form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .form-section input,
        .form-section textarea,
        .form-section select {
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }
        
        .form-section textarea {
          min-height: 80px;
          resize: vertical;
        }
        
        .form-section button {
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
        
        .form-section button:hover {
          background-color: #0056b3;
        }
        
        .data-section {
          margin-bottom: 30px;
        }
        
        .data-section h3 {
          color: #333;
          border-bottom: 2px solid #007bff;
          padding-bottom: 5px;
        }
        
        .user-item,
        .post-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          margin-bottom: 10px;
          border: 1px solid #eee;
          border-radius: 6px;
          background-color: #f9f9f9;
        }
        
        .user-item button,
        .post-item button {
          padding: 5px 10px;
          background-color: #dc3545;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .user-item button:hover,
        .post-item button:hover {
          background-color: #c82333;
        }
        
        .post-item h4 {
          margin: 0 0 10px 0;
          color: #333;
        }
        
        .post-item p {
          margin: 0 0 10px 0;
          color: #666;
        }
        
        .post-item small {
          color: #888;
        }
        
        .loading {
          text-align: center;
          padding: 40px;
          font-size: 18px;
          color: #666;
        }
        
        .error {
          background-color: #f8d7da;
          color: #721c24;
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 20px;
          border: 1px solid #f5c6cb;
        }
      `}</style>
    </div>
  );
}

export default ApiTest; 