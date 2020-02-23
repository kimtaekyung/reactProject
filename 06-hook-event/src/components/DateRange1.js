import React from 'react';

const getDateString = date => {
    if(!date){
        date = new Date();
    }

    const yy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();

    const str = yy + '-' + (mm < 10 ? '0' + mm : mm) + '-' + (dd < 10 ? '0' + dd : dd);
    return str;
}

const DateRange1 = () => {

    const [myDate,setMyDate] = React.useState(
        {
            startDate : getDateString()
            ,endDate : getDateString()
    
    });
    return (
        <div>
            <h1>DateRange1</h1>
            <p>{myDate.startDate} - {myDate.endDate}</p>
            <button type="button" onClick={e=>{
                const today = new Date();
                const targetDay = new Date();

                targetDay.setDate(targetDay.getDate() - 7);
                setMyDate({
                    startDate : getDateString(today)
                    ,endDate : getDateString(targetDay)
                })
            }}>7일</button>
            <button type="button" onClick={e=>{
                const today = new Date();
                const targetDay = new Date();

                targetDay.setDate(targetDay.getDate() - 15);
                setMyDate({
                    startDate : getDateString(today)
                    ,endDate : getDateString(targetDay)
                })

            }}>15일</button>
            <button type="button" onClick={e=>{
                const today = new Date();
                const targetDay = new Date();

                targetDay.setMonth(targetDay.getMonth() - 1);
                setMyDate({
                    startDate : getDateString(today)
                    ,endDate : getDateString(targetDay)
                })
            }}>1개월</button>
            <button type="button" onClick={e=>{
                const today = new Date();
                const targetDay = new Date();

                targetDay.setMonth(targetDay.getMonth() - 3);
                setMyDate({
                    startDate : getDateString(today)
                    ,endDate : getDateString(targetDay)
                })
            }}>3개월</button>
            <button type="button" onClick={e=>{
                const today = new Date();
                const targetDay = new Date();

                targetDay.setMonth(targetDay.getMonth() - 6);
                setMyDate({
                    startDate : getDateString(today)
                    ,endDate : getDateString(targetDay)
                })
            }}>6개월</button>
        </div>
    );
};

export default DateRange1;