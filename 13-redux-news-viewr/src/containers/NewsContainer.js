import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


import NewsList from '../components/NewsList';

import * as newsModule from '../modules/News';

const NewsContainer = (props) => {

    const { result , loading, error} = useSelector(state =>{
        return {
            ...state.newsModule
        }
    });

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(newsModule.newsListAsync(props.category));
    },[props.category])

    return (    
        <div>
            
        </div>
    );
};

export default NewsContainer;