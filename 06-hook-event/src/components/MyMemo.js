import React from 'react';

const getAverage = myInputList => {
    const sum = myInputList.reduce( (a,v,i) => a + v );
    return sum / myInputList.length;
}

const MyMemo = () => {

    const myNumberInputRef = React.useRef();
    const [myInputList,setMyInputList] = React.useState([]);

    const myAvg = React.useMemo( () => getAverage(myInputList), [myInputList]);

    const onButtonClick = React.useCallback( (e) => {
        const numberInput = myNumberInputRef.current;
        console.log(numberInput.value);
        if(!numberInput.value || isNaN(numberInput.value)){
            alert('숫자만 입력 가능합니다.');
            return false;
        };

        const nextList = myInputList.concat(parseInt(numberInput.value));
        setMyInputList(nextList);

        console.group();
        console.debug(nextList);
        console.groupEnd();

        numberInput.value = '';
    },[myInputList]);

    return (
        <div>
            <h1>myMemo</h1>
            <input type="text" ref={myNumberInputRef}  placeholder="input...number"></input>
            <button onClick={onButtonClick}>등록</button>
            <h3>입력값 내역</h3>
            <p>평균  : {myAvg}</p>
            <ul>
                {myInputList.map((value,idnex) => (
                    <li key={idnex}>{value}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyMemo;