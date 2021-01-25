import React, {useState} from 'react';

const Movie = (/*props*/{mo}) => {
    // 위에서 Props가 아닌 object로 받아올 수 도 있다 >> object명과 key값이 같아야한다
    return (
        <div className="movie">
            {/* object로 받아오게되면 앞에 prop를 안붙이고 바로 object명.key 이런식으로 지정해줘도 된다 */}
            <div className="movie-title">{mo.title}</div>
            <div className="movie-year">{mo.year}</div>
        </div>
    );
};

export default Movie;