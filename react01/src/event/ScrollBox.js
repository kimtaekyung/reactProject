import React, { Component, Fragment } from 'react';

export default class ScrollBox extends Component {


    // ref 로 설정된 컴포넌트에 직접 접근
    handleScrollBox = () =>{
        const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = (scrollHeight - clientHeight);
        console.log('handleScrollBox');
    }

    render() {
        const style = {
            border : '1px solid black'
            ,height : '300px'
            ,width : '300px'
            ,overflow : 'scroll'
            ,position : 'relative'
        }

        const innerStyle = {
            width : '100%'
            ,height : '650px'
            ,background : 'linear-gradient(white,black)'
        }
        return (
            <Fragment>
                <div
                    style = {style}
                    ref={(ref) => {this.box=ref}}>
                    <div style={innerStyle}></div>
                </div>
            </Fragment>
            
        );
    }
}
