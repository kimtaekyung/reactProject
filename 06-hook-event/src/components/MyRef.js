import React from 'react';

const MyRef = () => {

    const myInputRef = React.useRef();
    const myLabelRef = React.useRef();
 
    //출력을 목적으로 하는 참조변수 생성
    const myName = React.useRef('리액트');

    console.log("컴포넌트 구동시:::" + myName.current);


    return (
        <div>
            <h1>myRef</h1>
            <h2 ref={myLabelRef}></h2>
            <h2>{myName.current}</h2>
            <input type="text" ref={myInputRef}></input>
            
            <button onClick={e =>{
                console.log(myInputRef);
                {/*myInputRef 를 등록하여 dom element 를 찾을때 사용한다. document.getElementById 사용하면 안됨 */}
                alert(myInputRef.current.value);
                myLabelRef.current.innerHTML = myInputRef.current.value;
                myName.current = myInputRef.current.value;
                myInputRef.current.value = "";
                console.log("이벤트 발생시 ::: " + myName.current);
            }}>클릭</button>
        </div>
    );
};

export default MyRef;