import React from 'react';

const MyCallback = () => {

    const [myText,setMyText] = React.useState('HelloReact!!')

    //컴포넌트가 로드 될때마다 함수를 정의 하기 때문에 성능상의 문제가 있다.
    // const onInputChange = e => {
    //     setMyText(e.currentTarget.value);
    // }

    //useCallBack 사용시 최초 렌더링 될때만 함수를 정의 이후는 계속 재사용 만약 2번째 파라미터의 배열에 특정 스테이트 값을 지정 할경우는
    //해당 스테이트 값이 수정될때만 이벤트가 정의 된다.
    const onInputChange = React.useCallback(e =>{
        setMyText(e.currentTarget.value);
    },[myText]);


    return (
        <div>
            <h1>MyCallBack</h1>
            <h3>{myText}</h3>
            <input type="text" onChange={onInputChange}></input>
        </div>
    );
};

export default MyCallback;