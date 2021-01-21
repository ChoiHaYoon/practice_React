/* eslint-disable */
/* 
  터미널에 뜨느 warning >> eslint가 잡아주는 문법체크사항
  이게 보기싫으면 
  주석기호 eslint-disable 주석기호
  주석처리까지 다 써서 넣어주면된다 해줘야한다
*/
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

/*
  1. 리액트 설치 
    1) Node.js를 최신버전으로 깐 후 원하는 위치에 프로젝트 폴더를 생성한다
    2) 터미널을 키고 npx create-react-app 프로젝트명 << 명령어 실행
    (npx는 node.js가 깔려져있을때만 실행되는 것이고, create-react-app은 리액트 셋팅 다 된 boilerplate를 만들기 쉽게 도와주는 라이브러리이다)
    3) 모든것을 다 깔면 success가 나오게 되고 만든 프로젝트 명을 다시 파일오픈을 해준다
    4) 우리가 사용할 것은 app.js에서 쓰면된다
    >> 미리보기 실행은 터미널에서 npm start

  node.js설치 이유?
  create react app라이브러리 때문에 설치 >> Npm이라는 툴이 사용가능하기 때문에(부트스트랩이나 제이쿼리등 라이브러리를 설치하기 쉽게 설치도와줌)

  app.js는 메이페이지에 들어갈 html을 짜는 곳
  실제메인페이지는 public의 Index.html
  app.js에 있는것들을 Index.html에 넣을 수 있게 명령을 해둠
  넣는 역할은 index.js에 해놓음

  폴더 정리
  node_modules : 라이브러리를 모아놓은 폴더
  public : 웹사이트의 static파일 보관함(정적인 파일들)
  src : 소스코드 보관함(실질적 코딩) >> 약간 다른 react문법을 사용해서 하는것
  package.json : 설치한 라이브러리 목록(버젼까지)

  1) 여기서 왜 app.js가 메인페이지고 여기서 작성을 하면 화면이 나오는지?
  app.js안에 있는 지금 현재 쓰고있는 Html을 public안에 있는 index.html안에 넣어주세요
  라는 것을 index.js에서 해주고있다. >> getElementById가 root인 곳에
  실제로 렌더링 되는것은 index.html이 보여진다

  2) 우리가 기본적으로 아는 함수 return안에 어떻게 해서 html을 넣을 수 있는지?
  괄호안에 html처럼 사용하면된다(자동완성도 가능) >> 지금사용하고있는것은 jsx이다
  리액트에선 Html대신에 Jsx를 사용하게 된다
  이것도 일종의 자바스크립트이기때문에 class를 넣어주려면 class가아닌 className으로 해줘야한다
  class는 자바스크립트의 예약어이기 때문에 className으로 써줘야한다

  3) 리액트의 장점 >> 리액트에서 데이터바인딩을 쉽게 할 수 있다(react, vue, angular를 사용하는 이유)
  데이터 바인딩이란? 서버에서 가져온 데이터를 html에 넣는것
  html이나 자바스크립트에선 document.getElementById(아이디명).innerHTML = 넣을 값 이런식으로 했다
  하지만
  리액트에서는 jsx문법사용하면 간단하다 >> { 변수명 / 함수명 }
  특이하게 함수를 넣을 수도 있다.

  4) 이미지를 넣는 방법이 틀리다
  보통은 img태그에 src로 이미지를 직접 넣지만 리액트에서는 맨상단의 improt를 이용한다
  문법 >> import 변수명(지정한이름) from svg파일
  img태그에서는 src에 변수명(지정한이름)을 넣어주면되는다 { 변수명(지정한이름) } << 이런식으로 넣어줘야한다
  우리가 원래넣던 src="파일명"도 가능하다

  중괄호는 src, id, href등에서도 중괄호가 사용되기 때문에 상상하는 모든곳에서 {}로 변수를 집어넣을 수 있다.
  className에도 className = { posts }를 하면 클래스명이 강남 고기 맛집으로 된다
  이처럼 어디에서나 사용을 가능하다

*/

function App() {
  // 데이터를 저장하는 법 두가지
  // 1. 변수에 저장
  let posts = '서버에서 가져온 값';
  let postStyle = { color: 'blue', fontSize : '30px' };
  // 2. state사용(변수 대신 쓰는 데이터 저장공간 >> useState()를 이용해서 만들어야한다(꼭 useState()로 사용해야한다))
  // 1) 맨 위에 import React, { use State } from 'react'; 
  //    >> 리액트에 있는 내장함수하나를 사용하겠습니다 라는 뜻
  // 2) useState라는 함수를 사용할 수 있다 / 괄호안에는 object, array모두다 사용이 가능하다
  // let [글제목, 글제목변경] = useState('블로그 글제목');
  let [contentTitle, titleChange] = useState(['오늘의 사과', '호오호오옹오', '여자코트 추천']);
  // 3) useState는 실행하면 결과값은 array가 나온다. >> [a, b]
  // >> 결과배열의 a에는 블로그 글제목이 들어간다(데이터) / b에는 앞에서 지정한 데이터를 수정하기 위한(정정하기 위한) 함수가 들어간다


  /* 
    state을 왜 사용하나?(state의 장점)
    리액트를 웹앱처럼 동작하게 만들고싶어서 사용한다!
    state는 값이 변경될 때 html이 자동으로 재렌더링이 된다 << 제일 중요한 포인트
    그냥 변수로 만들면 값이 변경되면 자동 재렌더링이 안된다(새고를 안하면 원하는 값이 안나옴)
    하지만 state는 새고를 안해도 값이 자동 재렌더링되기 때문에 자주 바뀌거나 중요한 데이터는 state로 사용하는것이 좋다

    ! 여기서, 자바스크립트 최신문법하나!(ES6의 destructuring문법)
    변수명으로 배열을 집어넣으면 어떻게 되나?
    ex)
    let [a, b] >> a와 b라는 변수를 만들겠습니다 여기안에는 useState를 실행했을 때 나오는 데이터 [a, b]를 각각 넣겠습니다
    a변수에는 데이터 a를 / b변수에는 데이터 b를
    let [one, two] = [10, 100];
    one에는 10
    two에는 100이 들어간다
    즉 이거는 array나 object에 있던 자료를 변수에 쉽게 담고싶을때 사용한다
  */
  // 사과 누르면 1씩 증가하기
  let [good, goodChange] = useState(0);
  let appleGood = () => {
    /*
      state는 그냥변경이 안됨
      state변경을 하려면 위에서 이야기했던 앞에서 지정한 데이터를 수정하기 위한(정정하기 위한) 함수를 사용해야한다
      >> 여기서는 goodChange >> 대체를 하는 함수
    */
    goodChange(good + 1);
  }
  // 위에서 이야기했던 것처럼 state를 사용해야 값이 변경되었을 때 변경함수를 이용해서 재렌더링을 할수있다
  // 그렇기 때문에 state를 사용한다


  /* 숙제1 : 버튼을 누르면 첫번째 글 제목이 바뀌게 하기 */
  let changeTitle = () => {
    // 이것은 리액트의 대원칙인 immutable data >> 리액트는 직접적으로 값이 수정이 되면 안된다라는 원칙
    // titleChange(['여자코트추천', '글제목2', '글제목3']); 
    // << 변경함수 쓸 때 만약 원본값이 배열이면 똑같이 배열로 전체수정해줘야한다

    // 위에꺼 말고 다른방법도있음 >> 수정된 데이터를 만들어주면됨(원본state수정x) / 복사본을 만든다고 생각 / 특히 state가 array나 object일 경우
    // let newArray = contentTitle; << 얕은복사(contentTitle의 값을 공유하는것(call by reference)) >>reference data type의 특징
    let newArray = [...contentTitle]; //깊은복사(값공유를 하지않고 새로운 복사를 하는것(call by value)) >> ...이 기존의 중괄호를 없애주고 여기서 다시 중괄호를 입력해주는 것이다
    // newArray[0] = '여자코트추천';
    // titleChange(newArray);
    // 패턴 무조건 외우기
    newArray.sort();
    titleChange(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        {/* 
          <div style="font-size: 16px">개발 Blog</div> << 이거는 안됨
          <div style={{ color: 'blue', fontSize : '30px' }}>개발 Blog</div> 
          이런식으로 객체화 시켜서 넣어줘야한다 >> -는 자바스크립트에서는 뺄셈이기때문에 카멜작명관습에따라 속성명을 바꿔줘야한다
          두단어가 합쳐질때는 두번째 맨처음문자가 대문자
          style={ postStyle } << 스타일 넣을때도 변수에 넣어서 변수명으로 해줘도 된다
        */}
        <div>개발 Blog</div>
      </div>
      {/* 
        <img src={logo}>
        <h4>{ posts }</h4>  변수명만 넣어주면 document.getElementById가 필요 없어진다 / 함수를 넣어도 된다
        <h4>{  test1() }</h4> 
      */}
      <button onClick={changeTitle}>버튼</button>
      <div className="list">
        <h3>{ contentTitle[0] } <span onClick={appleGood}>🍎</span> { good } </h3> 
        {/* 넣은값을 배열로 넣었으면 원하는 값 가져올때는 변수명[index]*/}
        {/* 리액트에서 이벤트 넣기 >> onClick = {클릭될 때 실행할 함수명 or 직접적으로 함수 >> 괄호는 빼줘야한다 함수명만} */}
        <p>1월 21일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ contentTitle[1] }</h3> {/* 넣은값을 배열로 넣었으면 원하는 값 가져올때는 변수명[index]*/}
        <p>1월 21일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ contentTitle[2] }</h3> {/* 넣은값을 배열로 넣었으면 원하는 값 가져올때는 변수명[index]*/}
        <p>1월 21일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
