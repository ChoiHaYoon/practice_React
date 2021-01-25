import React, { useState } from 'react';

// 컴포넌트 만들기
function Counter(props){
    // props >> 부모컨테이너 인 App에서 보낸 값을 받아주는 매개변수
    // 즉, 부모에서 click이라는 props를 보냈다. >> props안에는 click이라는 key값이 들어가있다 >> value는 click1
    const [count, changeCount] = useState(0);

    const plusCount = () => {
        changeCount(count+1);
    }

    // 받아오는 props의 default 지정해주기
    const clickString = props.click || 'Click';
    // 위의 문법은 props.click이 존재하면 받아온 문자를 사용하고 없을경우에는 뒤에 지정한 Click을 사용하게 하는 문법 >> if와 같음
    

    return (
        <button onClick={plusCount}>
            {/* 받아온 props를 나타나게 하려면 props(매개변수명).key값 */}
            {/* {props.click} + {count} */}
            {/* 위에 default를 지정해주면 */}
            {clickString} + {count}
            {/* 위에서 지정한 변수명으로 해줘야한다. */}
        </button>
    );
};

export default Counter;