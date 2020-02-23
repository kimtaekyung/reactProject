import React from 'react';
const setDateValue = (state,action) => {

    const today = new Date();
    const targetDate = new Date();

    switch (action) {
        case 'DAY7':
            targetDate.setDate(targetDate.getDate() - 7);
            break;
        case 'DAY15':
            targetDate.setDate(targetDate.getDate() - 15);
            break;
        case 'MONTH1':
            targetDate.setMonth(targetDate.getMonth() - 1);
            break;
        case 'MONTH3':
            targetDate.setMonth(targetDate.getMonth() - 3);
            break;
        case 'MONTH6':
            targetDate.setMonth(targetDate.getMonth() - 6);
            break;
        default:
            break;
    }

    return {starDate : getDateString(targetDate) , endDate : getDateString(today)}
}

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

const DateRange2 = () => {

    const [myDate,setMyDate] = React.useReducer(setDateValue,{
        starDate : getDateString()
        ,endDate : getDateString()
    });

    return (
        <div>
            <h1>dateRange2</h1>
            <p>{myDate.starDate} - {myDate.endDate}</p>
            <button type="button" onClick={e => setMyDate('DAY7')}>7일</button>
            <button type="button" onClick={e => setMyDate('DAY15')}>15일</button>
            <button type="button" onClick={e => setMyDate('MONTH1')}>1개월</button>
            <button type="button" onClick={e => setMyDate('MONTH3')}>3개월</button>
            <button type="button" onClick={e => setMyDate('MONTH6')}>6개월</button>
        </div>
    );
};

export default DateRange2;