import React from 'react';
import logo from './logo.svg';
// *이미지 데이터 바인딩 할 때 
// 1) src폴더에 이미지를 넣고 
// 2) import로 불러온다음
// 3) { 변수명 }을 넣어 사용한다.
import './App.css';

// App.js는 메인페이지에 들어갈 HTML을 짜는 곳.
// JSX 문법 사용중 = 소괄호()만 열면 안에 Html문법을 작성할 수 있다. 

function App() {
  // React, Vue, Angular와 같은 프레임워크를 사용하는 이유 : 데이터 바인딩이 쉬워진다.
  // * 데이터 바인딩이란 ? 
  // 1) 서버에서 가져온 데이터를 
  // 2) h4 자리에서 보여줘야 함 > 내가 넣을 자리를 찾아서 { 변수명, 함수 } 을 해준다.

  let posts = '강남 고기 맛집'; 

  return (
    <div className="App">
      <div className="black-nav">
       <div>개발 blog</div>
      </div>
      <img src={ logo } /> 
      <h4> { posts } </h4> 
    </div>
  );
}

export default App;
  