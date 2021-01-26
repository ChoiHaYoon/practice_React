import React, {useState} from 'react';
import Movie from './component/Movie';
import MovieForm from './component/MovieForm';

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
    <div className="App">
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
    </div>
  );
}

export default App;
