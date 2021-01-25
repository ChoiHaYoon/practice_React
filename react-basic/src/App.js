import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';
import Movie from './components/Movie';

// 원래 리액트는 class를 이용해서 만들었다(React.Componet를 상속받은 class로 만듬)
// 하지만 1~2년전에 리액트 훅서가 나오면서 컴포넌트를 함수로 작성하기 시작했다
// 지금도 class를 이용해서 만들수도 있다. 
// class App extends React.Component{
// }

// 얘도 컴포넌트라는 것을 잊지말자!
function App() {
  
  // useState사용하기
  const [text, changeText] = useState('hi');

  function onSubmit(){
    alert("Hello world");
  }
  
  const onKeyup = (event) => {
    // console.log('key up');
    // 키보드의 엔터를 눌렀을때 submit버튼을 실행시키고 싶으면? >> 함수의 매개변수로 event를 넣어준 뒤(기본적으로 받아오게된다)
    // event.keyCode >> 누른 키의 코드를 받아오는것 / 13은 enter의 번호
    if(event.keyCode === 13){
      onSubmit();
    } else {
      console.log("엔터가 아님");
    }
  }
  
  // let text = "hello";
  
  const updateText = () => {
    // useState의 값을 바꿀때는 배열의 두번째인 변경함수를 사용해줘야한다(여기서는 changeText)
    changeText('Coder');
  }

  const [username, changeUserName] = useState('');
  const [password, changePassword] = useState('');

  const goLogin = (event) => {
    // form은 항상 submit을 하게되면 새로고침이 된다
    // 그것을 event인자를 받아와서 preventDefault를 해줘야 새고방지가 된다
    event.preventDefault(); // 새로고침 방지
    alert(`${username} 과 ${password}`);
  }

  // useEffect사용법
  // const [count, changeCount] = useState(0);
  // const [count2, changeCount2] = useState(0);
  // const [count3, changeCount3] = useState(0);
  // useEffect(() => {
  //   // 이 함수안에 있는 로직을 랜더링이 되고 실행시켜준다
  //   console.log(count);
  //   // 즉 렌더링 될 때마다 계속실행시키는 것!
  // }/*, [count]*/);

  // const plusCount  = () => {
  //   changeCount(count + 1);
  // }

  // const plusCount1  = () => {
  //   changeCount2(count2 + 1);
  // }

  // const plusCount2  = () => {
  //   changeCount3(count3 + 1);
  // }
  // 같은게 반복이 된다 >> 재사용성이 아님
  // 이 반복들을 없애기 위해서는 컴포넌트를 사용해 주면 된다
  // 컴포넌트는 여기서 지정해줘도 되고 따로 컴포넌트 파일을 만들어줘도된다(js파일) >> 여기서는 따로 파일을 만들어보기

  // props로 State보내기
  const[buttonName, changeButtonName] = useState('클릭하기');
  const clickButton = () => {
    changeButtonName('클릭을 누르면 버튼이 바뀐다!');
  }


  // 컨디션 만들기
  const [condition, setCondition] = useState(false);
  const toggle = () => {
    setCondition(!condition);
  }
  // 삼항연산자 사용
  const renderCondition = condition ? "True" : "False";

  
  // 반복문 만들기
  const movie = [
    {title : '물랑 루즈', year : 2001},
    {title : '소울', year : 2021},
    {title : '리틀 포레스트', year : 2018}
  ]
  // map >> array를 돌려서 아이템하나하나를 원하는 형식으로 바꿔줌
  const renderMovies = movie.map(itme => {
    // itme은 매개변수이기때문에 우리가 지정해주면됨(movie안에있는 값들을 가져옴)
    return (
      // 여기에는 JSX로 바꿔주면된다 >> 밑에서 return이랑 같음 
      // 유니크한 key를 넣어줘야한다 >> id값을 넣어준다고 생각하면된다(db에서 처럼 인식할 수 있는 고유번호)
      // <div className="movie" key={itme.title}>
      //   <div class="movie-title">{itme.title}</div>
      //   <div class="movie-year">{itme.year}</div>
      // </div>
      // 컴포넌트로 받아오기 >> 컴포넌트로 Props를 보낼때는 여기서는 movie라는 키값으로 props를 보내는 것이다
      // 여기서 주의! 보내는 props의 키값이 mo이면 컴포넌트에서도 props.mo.~ 이런식으로 써줘야한다
      // 즉!, 키값이 같아야한다!
      <Movie mo={itme} key={movie.title}/>
      // 아까 넣어주었던 유니크키를 여기서 넣어주면 된다
    );
  });

  return (
    // 여기안에서는 사용하는것이 html과 비슷한 JSX라는것도 잊지말자!
    <div className="App">
      1. 이벤트란? <br/>
      어떤사건이 일어났을때를 이야기한다. - 버튼을 클릭하는것도 이벤트<br/>
      1) onClick : 클릭이벤트를 사용할때 <br/> 
      onClick = 중괄호안에 함수(함수를 지정안해주고 그냥 명령어(자바스크립트코드)를 입력하면 클릭이벤트가 아닌 바로 실행되는 이벤트가 된다)<br/>
      보통은 바로 함수를 넣지않고 함수를 만들어준다음에 함수명을 넣어주는 방식으로 한다<br/>
      <button onClick={onSubmit}>Submit</button><br/><br/>
      2) onKeyUp : 키보드의 키를 눌렀다가 올라올때 인식을 하는 이벤트<br/>
      <input type="text" onKeyUp={onKeyup}/>

      <br/><br/><br/>

      2. 리액트 훅스 - useState<br/>
      좀 더 간결한 코딩을 위해서 사용함()<br/>
      <span>{text}</span>
      <button onClick={updateText}>Update</button><br/>

      <br/><br/><br/>

      3. 폼에서 useState 사용하기<br/>
      여기서 이벤트 하나 더!<br/>
      3) onChange : input안의 값이 바뀔 때 마다 실행되는 이벤트<br/>
      (e) =&gt; changeUserName(e.target)<br/>
      e는 이벤트가 들어오는 것을 이야기하며 이벤트가 들어오면 changeUserName이라는 콜백함수를 실행시킨다<br/>
      이 콜백함수는 username의 값을 바꾸는 함수<br/>
      e.target은 이벤트 타겟을 가르키는것으로 여기서는 input을 이야기하는것<br/>
      e.target.value는 이벤트 타겟인 input의 value값을 이야기하는 것 &gt;&gt; 즉 입력값이 들어오면 username의 값을 바꾸어서 input안에 넣어주자! 라는 뜻<br/>
      <form onSubmit={goLogin}>
        <input placeholder="UserName" type="text" value={username} onChange={(e) => changeUserName(e.target.value)}/><br/>
        <input placeholder="Password" type="password" value={password} onChange={(e) => changePassword(e.target.value)}/><br/>
        <button type="submit">Login</button>
      </form>

      <br/><br/><br/>

      4. useEffect 사용하기<br/>
      컴포넌트가 렌더링 될 때마다 리액트에게 어떤일을 실행시켜달라고 할 수 있다.<br/>
      {/* <span>{count}</span> */}
      {/* <button onClick={plusCount}>Plus</button><br/> */}
      버튼을 누를 때 마다 재렌더링이 된다 &gt;&gt; useEffect가 실행이 계속된다<br/>

      <br/>
      여기서 버튼이 두개고 useState를 사용했기 때문에 재렌더링이 되는 상황이라면? <br/>
      {/* <button onClick={plusCount1}>Plus2 : {count2}</button><br/> */}
      Plus2의 버튼을 클릭시에도 useState를 이용했기 때문에 useEffect는 계속 실행이 된다 <br/>
      &gt;&gt; 하지만 console.log에는 count2가아닌 count가 들어가 있기때문에 0만 계속나온다<br/><br/>
      이것을 count값이 변경될 때만 useEffect를 실행시키게 하고싶으면 어떻게 하는게 좋을까? <br/>
      useEffect(() =&gt; &#123; ~코딩~ &#125;, [변화조건 state명1, state명2...])<br/>
      여기서는<br/>
      &gt;&gt; useEffect(() =&gt; &#123; console.log(count); &#125;, [count]);<br/>
      useEffect는 여러개 사용이 가능하며 변화조건배열이 empty일 경우 &gt;&gt; [] 은 useEffect를 한번만 실행하고 재렌더링이 되더라도 실행이 되지 않는다.
      
      <br/><br/><br/>
      
      5. Components 사용하기<br/>
      컴포넌트는 코더가 반복이 되면 나중에 유지보수가 어려워지고 코드가 지저분해지기 때문에 복잡도를 낮추기 위해서 사용한다<br/>
      &gt;&gt; 재사용성이 높다<br/>
      사용방법<br/>
      &lt; import해온 js의 변수명 /&gt;<br/>
      <Counter/><br/>
      <Counter/><br/>
      <Counter/><br/>

      <br/><br/><br/>

      6. 부모 컴포넌트와 자식 컴포넌트<br/>
      다른컴포넌트를 improt해서 사용을 하는 컴포넌트 &gt;&gt; 부모 컴포넌트<br/>
      사용되어지는 컴포넌트 &gt;&gt; 자식 컴포넌트<br/>
      여기서 부모는 App이고 자식은 Counter가 된다<br/>
      부모 컴포넌트에서 자식컴포넌트로 데이터를 보내고 싶을 때는 props를 사용하게 된다<br/>
      <h4>부모에서 자식컴포넌트한테 값 보내기</h4>
      공식 : &lt;Counter click="보낼 값"/ &gt;<br/>
      <Counter click="click1"/><br/>
      위에처럼 작성을 하면 컴포넌트는 function이기 때문에 counter.js에서 지정한<br/> 
      매개변수 props에 string값으로 click1이라는 값이 들어가게 된다.<br/><br/>
      즉, 부모에서 click이라는 props를 보냈다. &gt;&gt; props안에는 click이라는 key값이 들어가있다 &gt;&gt; value는 click1<br/>
      <br/>
      <Counter/><br/>
      <Counter/><br/>
      여기서 두번째 세번째버튼에는 안나타나는 이유?<br/>
      두개의 버튼에는 click이라는 props를 지정해주지 않았기 때문에 넘어가는 값이 없다. &gt;&gt; Counter.js에서 default를 지정 해 줄 수 있다.<br/>
      props로 String뿐만 아니라 State도 보낼 수 있다.(위로 올라가기)<br/>
      <Counter click={buttonName} /><br/>
      useState의 변경기능도 가능하다<br/>
      <button onClick={clickButton}>바로위에 버튼 값 변경시키기</button>
    
      <br/><br/><br/>

      7. 조건 랜더링<br/>
      조건에 따라서 컨텐츠를 보여주기도 하고 안보여 줄 수 있기도 하다.<br/>
      <div>True</div>
      <div>False</div>
      버튼을 누를때 마다 useState의 boolean값이 변경되도록 하기<br/>
      <button onClick={toggle}>Toggle</button><br/>
      삼항연산자를 사용해서 변수에 true면 어떤게 실행되고 flase면 다른걸 실행하게 하는 방법<br/>
      <br/>조건 랜더링의 공식 <br/>
      const 변수명 = boolean값으로 나오는 변수 혹은 식 ? true일 때 나오는 값 : false일 때 나오는 값;<br/>

      <div>{renderCondition}</div>

      <br/><br/><br/>

      8. 리액트 반복문<br/>
      <h1>Move List</h1>
      {/* 
        <div className="movie">
          <div class="movie-title">타이틀이 들어가게 >> {movie.title}</div>
          <div class="movie-year">연도가 들어가게 >> {movie.year}</div>
        </div> 
        >> 위에서 map을 이용해서 movie를 돌렸기 때문에 여기서는 중괄호를 이용해서 변수명을 적어주면 된다
      */}
      {renderMovies}

      <br/><br/><br/>

      쉬어가기! 컴포넌트와 props데이터 보내기 복습<br/>

      
      

    </div>
  );
}

export default App;
