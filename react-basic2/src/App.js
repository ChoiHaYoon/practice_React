import React, {useState} from 'react';
import Movie from './component/Movie';
import MovieForm from './component/MovieForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './component/Navbar'

function App() {
  const [movieTitle, setTitle] = useState('');
  const [movieYear, setYear] = useState('');
  const [movies, setMovies] = useState([

  ]);

  const removeMovie = (id) => {
    // 아이디값으로 어떤값을 지울것인지 확인하기 위해서 id를 받아옴
    // 자바스크립트의 filter를 이용해서 삭제하기(콜백함수 이용)
    setMovies(movies.filter((movie)=>{
        return movie.id !== id;
    }));
  }

  const renderMovies = movies.length ? movies.map((movie) => {
    return (
      <Movie movie={movie} key={movie.id} removeMovie={removeMovie}/>
    );
  }) : '추가된 영화가 없습니다.';

  const addMovie = (movie) => {
    // event.preventDefault(); // submit될때 refresh가 안되도록
    // movies.push({ title: movieTitle, year: movieYear});
    // 이렇게 해도 화면에 추가가 안되는 이유 >> state가 작동하지 않기때문에
    // input에 값이들어가는것은 setTitle과 setYear에 값이 들어가는것 >> 즉 변화가 있기 때문에 state가 되고있어 재렌더링 중인것이다.
    // 하지만 버튼을 클릭했을때는 작동이 되는것이 아니기때문에 재렌더링이 되지 않고있다
    // setMovies를 이용해서 추가해야한다
    // setMovies([...movies, {title: movieTitle, year: movieYear}]);
    // MovieForm에 movie객체 보내기
    setMovies([...movies, movie]); // 대괄호에 두개 다 넣어야하는거 까먹지 말기!
    /* 
      전체값을 변경해주는게 아니기 때문에 깊은 복사(...movies)를 해주어서 []<< 대괄호안에 원하는 값을 넣어주는것
      내가 알고있던 [...movies]만 하게되면 기존의 state(여기서는 movies)를 덮어버리게 된다
      하지만 [...movies, 추가를 원하는 값] >> 이렇게 해주면 뒤에 추가가 되는 것 이다.
      ...state명(변수명) >> 이것을 구조분해할당이라고 한다(Destructuring)

      ex)
      const a = ['a', 'b'];
      const b = [a[0], a[1], 'c']; >> 결과값은 ['a', 'b', 'c']가 나온다
      이것을 쉽게하기 위해서는 구조분해할당을 써서
      const c= [...a, 'c']; >> 이렇게 하면 된다
      const d = [...a];를 했을 경우에는
      const a의 값이 d에 들어가게 된다
    
    */
     

    // 값을 입력 후 input안에 들어가있는 useState값을 리셋시켜주기
    // setTitle('');
    // setYear('');
  }

  return (
    /* 
    리액트 라우터 사용방법 
    1. div밖에(앱전체) Router태그로 감싸기
    2. 클릭하는 부분을 link로 감싼다  >> link는 여기서 필요없고 Navbar.js에서 필요함
    3. 보여 줄 컴포넌트 부분을 밑에서 Route태그로 감싸준다
    */
    <Router>
      <div className="App">
        <Navbar />
        {/* 
          Route태그는 Navbar.js에서 걸어준 Link를 눌렀을 때 보여주는 페이지를 이야기한다 >> Link하나에 Route하나 
          Path속성 >> Navbar에서 Link태그의 to속성으로 지정해준 경로를 매칭시켜주는 것
          여기서 기본경로인 path="/"를 하게되면 /이 들어간 모든 경로에 /만 있는 route가 다 나타나게 된다
          >> 이거를 하나만 보여주게 하고싶으면 switch태그를 사용하게 된다
          switch는 내려가면서 체크를 한다 >> 매치해서 맞는게 있으면 그페이지만 보여주게 멈춤
          그렇기 때문에 순서가 중요하다
          즉, 여기서 만약 맨위에 path="/"를 넣게되면 /이 들어간 모든것을 실행시키기때문에 맨처음에 /가 들어가면
          처음껏만 보여주게된다 >> 모든 url에서는 /를 쓰기때문에 맨위에 들어가면 안됨!!

          조금 더 정확하게 지정?하고싶다면 >> exact속성을 쓰게되면 ===의 역할을 하게된다(정확히 일치할때만!)
        */}
        <Switch>
        <Route path="/movies">
          <h1>Movie List</h1>
          {/* MovieForm으로 따로 js를 만들어서 import를 해줌
          <form onSubmit={onSubmit}>
            <input type="text" value={movieTitle} placeholder="영화제목" onChange={(e) => setTitle(e.target.value)} /><br/>
            <input type="text" value={movieYear} placeholder="개봉년도" onChange={(e) => setYear(e.target.value)} /><br/>
            <button>영화추가</button>
          </form> 
          */}
          {/* props로 onSubmit함수 보내기 >> addMovie라는 키값으로 */}
          <MovieForm addMovie={addMovie}/>
          {renderMovies}
        </Route>
        <Route path="/users">
          <h1>Users</h1>
        </Route>
        <Route path="/" exact>
          <h1>HOME</h1>
        </Route>
        </Switch>
      </div>
    </Router>
  );

  // 리액트에서 여러페이지를 가지게 해주는 것 >> react router라는 패키지
  // react Native >> 모바일앱을 만들 때 사용하는 것
  /*
      <BrowserRouter>
      A <Router> that uses the HTML5 history API 
      (pushState, replaceState and the popstate event) to keep 
      your UI in sync with the URL.

      api를 보면 다양한 api가 있는데 browserRouter는 html5부터 사용이 가능한 히스토리 api이다
      이 히스토리 api를 사용하면 브라우저에 url를 쉽게 조작할 수 있다 >> 페이지 리로딩을 할 필요없이 페이지 조작이 가능

  */
  
}

export default App;
