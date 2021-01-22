import React, { useState, useEffect } from 'react';

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
  const [count, changeCount] = useState(0);
  const [count2, changeCount2] = useState(0);
  useEffect(() => {
    // 이 함수안에 있는 로직을 랜더링이 되고 실행시켜준다
    console.log(count);
    // 즉 렌더링 될 때마다 계속실행시키는 것!
  }, [count]);

  const plusCount  = () => {
    changeCount(count + 1);
  }

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
      <span>{count}</span>
      <button onClick={plusCount}>Plus</button><br/>
      버튼을 누를 때 마다 재렌더링이 된다 &gt;&gt; useEffect가 실행이 계속된다<br/>

      <br/>
      여기서 버튼이 두개고 useState를 사용했기 때문에 재렌더링이 되는 상황이라면? <br/>
      <button onClick={() => changeCount2(count2 + 1)}>Plus2</button><br/>
      Plus2의 버튼을 클릭시에도 useState를 이용했기 때문에 useEffect는 계속 실행이 된다 <br/>
      &gt;&gt; 하지만 console.log에는 count2가아닌 count가 들어가 있기때문에 0만 계속나온다<br/><br/>
      이것을 count값이 변경될 때만 useEffect를 실행시키게 하고싶으면 어떻게 하는게 좋을까? <br/>
      useEffect(() =&gt; &#123; ~코딩~ &#125;, [변화조건 state명1, state명2...])<br/>
      여기서는<br/>
      &gt;&gt; useEffect(() =&gt; &#123; console.log(count); &#125;, [count]);<br/>
      useEffect는 여러개 사용이 가능하며 변화조건배열이 empty일 경우 &gt;&gt; [] 은 useEffect를 한번만 실행하고 재렌더링이 되더라도 실행이 되지 않는다.
      
    </div>
  );
}

export default App;
