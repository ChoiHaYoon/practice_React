import React, {useState} from 'react';


// 부모컴포넌트에서 보내는 key값을 {}안에 적어주기
const MovieForm = ({addMovie}) => {
    // form만 따로 빼내기
    const [movieTitle, setTitle] = useState('');
    const [movieYear, setYear] = useState('');

    const resetForm = () => {
        setTitle('');
        setYear('');
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addMovie({id: Date.now(), title: movieTitle, year: movieYear});
        // setMovies([...movies, {title: movieTitle, year: movieYear}]);
        resetForm();
    }    

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={movieTitle} placeholder="영화제목" onChange={(e) => setTitle(e.target.value)} /><br/>
            <input type="text" value={movieYear} placeholder="개봉년도" onChange={(e) => setYear(e.target.value)} /><br/>
            <button>영화추가</button>
        </form>
    )
};

export default MovieForm;