import React, {useState} from 'react';
import InputField from './inputField';


// 부모컴포넌트에서 보내는 key값을 {}안에 적어주기
const MovieForm = ({addMovie}) => {
    // form만 따로 빼내기
    const [movieTitle, setTitle] = useState('');
    const [movieYear, setYear] = useState('');

    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');

    const resetForm = () => {
        setTitle('');
        setYear('');
    }

    // 빈칸이 있을 경우 오류메세지 띄우게 하기
    const validateForm = () => {
        errorReset();
        let validated = true;
        if(!movieTitle) {
            setTitleError('영화 제목을 입력하세요');
            validated = false;
        }
        if(!movieYear){
            setYearError('연도를 입력하세요');
            validated = false;
        }
        return validated;
    };

    const errorReset = () => {
        setTitleError('');
        setYearError('');
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(validateForm()){
            addMovie({id: Date.now(), title: movieTitle, year: movieYear});
            // setMovies([...movies, {title: movieTitle, year: movieYear}]); 
            errorReset();
            resetForm();  
        }
    }    

    return (
        <form onSubmit={onSubmit}>
            {/* <input type="text" value={movieTitle} placeholder="영화제목" onChange={(e) => setTitle(e.target.value)} /><br/>
            <div style={{color: "red"}}>{titleError}</div> */}
            <InputField 
            type="text" 
            value={movieTitle} 
            placeholder="영화제목" 
            onChange={(e) => setTitle(e.target.value)} 
            errorMessage={titleError}/>
            {/* <input type="number" value={movieYear} placeholder="개봉년도" onChange={(e) => setYear(e.target.value)} /><br/>
            <div style={{color: "red"}}>{yearError}</div> */}
            <InputField 
            type="number" 
            value={movieYear} 
            placeholder="제작연도" 
            onChange={(e) => setYear(e.target.value)} 
            errorMessage={yearError}/>
            <button type="submit">영화추가</button>
        </form>
    )
};

export default MovieForm;