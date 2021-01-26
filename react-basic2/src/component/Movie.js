import React, {useState} from 'react';

const Movie = ({movie, removeMovie}) => {
    return (
        <div className="movie">
            <div className="movie-title">
                {movie.title}
                <span className="movie-year">{movie.year}</span>
            </div>
            <div>
                <button onClick={() => {removeMovie(movie.id)}}>삭제</button>
                {/* 버튼을 누르면 콜백함수로 removeMovie함수가 실행되게 하고 movie안에있는 id를 보내줘야한다. */}
            </div>
        </div>
    );
};

export default Movie;