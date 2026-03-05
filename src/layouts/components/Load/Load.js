import React from 'react';
import classNames from 'classnames/bind';

import styles from './Load.module.scss';

const cx = classNames.bind(styles);

export default function Load() {
    return (
        <div id="preloder">
            <div className={cx('loader')}></div>
        </div>
    );
}
