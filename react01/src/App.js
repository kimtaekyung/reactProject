import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import ValidationSample from './event/validationSample'
import EventPracitce from './event/EventPracitce';
import InputCheck from './event/InputCheck';
import Ref from './event/Ref';
import ScrollVBox from './event/ScrollBox';
import Maptest from './event/Maptest';
import IterrationSample from './event/IterrationSample';
import LifeCycle from './event/LifeCycle';

function getRandomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export default class App extends Component {

  state = {
    page : 1,
    color : '#000000'
  }

  handleClick = () => {
    this.setState({
      color : getRandomColor()
    })
  }

  
  render() {

    let el = '<h1>하하하</h1>';

    return (
      <Fragment>
        {/* 주석 */}
        {/* <h1>{this.props.name === 'aaa' ? '이것은 aaa' : '!이것은 aaa'}</h1> */}
        {/* <h1>{this.props.age}</h1> */}
        {/* {this.props.el} */}
        {/* <h1>{this.state.page}</h1> */}
        {/* <button onClick={() => { */}
        {/*   this.setState({ */}
        {/*     page : this.state.page + 1 */}
        {/*   }) */}
        {/* }}>setState</button> */}
        {/* <div> */}
        {/*   <EventPracitce/> */}
        {/* </div> */}
        {/* <div> */}
        {/*   <InputCheck/> */}
        {/* </div> */}
        {/* <div> */}
        {/*   <Ref ref={(ref) => {this.ref = ref}} ></Ref> */}
        {/* </div> */}

        {/* <ValidationSample/> */}
        {/* <ScrollVBox ref={(ref) => this.scrollVBox=ref}/> */}
        {/* <button onClick={() => this.scrollVBox.handleScrollBox()}>내리기</button> */}
        {/* <Maptest/> */}
        {/* <IterrationSample/> */}
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycle color={this.state.color}/>
      </Fragment>
    );
  }
}

App.propTypes = {
  age: PropTypes.number.isRequired
  ,el: PropTypes.node.isRequired
};
App.defaultProps = {
  age : 10
}
//export default App;