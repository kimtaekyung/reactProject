import {handleAction, createAction} from 'redux-actions';
import axios from 'axios';

/**
 * 액션
 * 어떤 컴포넌트가 겪는 상황을 구분하기 위한 문자열 변수들
 * 파일이름/상황이름 값을 지정 하면 다른 모듈들과 Action 값이 충돌하는것을 방지 할 수 있다.
 * ajax 연동 기능 하나당 3개의 액션 정의 --> 목록을 가져오는 중, 목록 가져오기 성공, 목록 가져오기 실패
 */

const GET_LIST = "News/GET_LISt";
const GET_LIST_SUCCESS = "News/GET_LIST_SUCCESS";
const GET_LIST_FAILURE = "News/GET_LIST_FAILURE";

export const getListAction = createAction(GET_LIST);
export const getListSuccess = createAction(GET_LIST_SUCCESS);
export const getListFailure = createAction(GET_LIST_FAILURE);

const initalState = {
    result : []
    ,loading : false
    ,error : false
};

export default handleAction(
    [GET_LIST]: (state=initalState,action) => {
        return {
            ...state
            ,loading: true
        }
    },
    [GET_LIST_SUCCESS]: (state = initalState, action) => {
        return {
            ...state
            ,result : action.payload.result
            ,loading : false
        }
    },
    [GET_LIST_FAILURE]: (state = initalState, action) => {
        return {
            ...state
            ,result : action.payload.error
            ,loading : false
        }
    },
    initalState
);

//비동기 수행함수 정의 컨테이너로부터 파라미터를 전달 받는다.
export const newsListAsync = category => async dispatch => {
    try {
        const result = await axios.get('https://newsapi.org/v2/top-headlines', {
            params : {
                country : 'kr'
                ,apikey: ''
                ,category: category
            }
        });
        console.log(result);
    } catch (error) {
        console.error(error);
    }

};




