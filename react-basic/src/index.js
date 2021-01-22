import React from 'react'; // 리액트 관련 function
import ReactDOM from 'react-dom'; // 리액트와 브라우저dom과 연결시켜주는 역할
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* 컴포넌트 */}
  </React.StrictMode>, 
  // stricMode / 렌더링을 하지않으며, 자손들에 대한 부가적인 검사화 경고를 활성화한다(개발모드에서만 활성화) 없어도 작동은 가능하다
  document.getElementById('root') 
  // 컨테이너(위의 컴포넌트를 어디다가 넣어줄건지(리액트 문법으로 만든 html을 index.html안에 id root인 곳에 넣어준다))
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
