import React,{useState} from 'react';


const InputField = ({
    // 부모 컴포넌트에서 받아오기위해서 지정
    type, value, placeholder, onChange, errorMessage
}) => {
    return (
        // 만약 div안에 input넣지않고 그냥 Input으로만 넣고싶을땐 div대신 React.Fragment태그를 사용해주면된다
        // 또는 <>로 사용
        // <React.Fragment>
        <>
            <input type={type} value={value} placeholder={placeholder} onChange={onChange} /><br/>
            <div style={{color: "red"}}>{errorMessage}</div>
        {/* </React.Fragment> */}
        </>
    )
};

export default InputField;