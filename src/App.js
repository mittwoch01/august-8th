import React from 'react';
import './App.css';

// App.js는 메인페이지에 들어갈 HTML을 짜는 곳.
// JSX 문법 사용중 = 소괄호()만 열면 안에 Html문법을 작성할 수 있다. 
function App() {
   
  let posts = '강남 고기 맛집'; // 1) 서버에서 가져온 데이터를

  return (
    <div className="App">
      <div className="black-nav">
       <div>개발 blog</div>
      </div>
      <h4>블로그 글</h4> 
    </div>
  );
}

export default App;
  