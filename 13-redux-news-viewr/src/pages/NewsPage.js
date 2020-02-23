import React from 'react';
import Category from '../components/Category';
import NewsContainer from '../containers/NewsContainer';

const NewsPage = ( {match} ) => {

    const {params} = match;

    return (
        <div>
            <Category></Category>
            <hr></hr>
            <NewsContainer category={params.category}></NewsContainer>
        </div>
    );
};

export default NewsPage;