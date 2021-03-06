import React from 'react';
import styles from '../../style/button/button.scss';
import classNames from 'classnames/bind';

console.log(styles);

const cx = classNames.bind(styles);

const Button = ({children, ...rest}) => {
    return (
        <div className={cx('button')} {...rest}>
            {children}
        </div>
    )

}

export default Button;