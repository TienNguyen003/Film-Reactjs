import React from 'react';
import classNames from 'classnames/bind';

import images from '~/assets';
import styles from '~/assets/css/style.module.scss';

const cx = classNames.bind(styles);

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };


    return (
        <footer className={cx('footer')}>
            <div className={cx('page-up')} onClick={scrollToTop}>
                <a id="scrollToTopButton">
                    <span className={cx('arrow_carrot-up')}></span>
                </a>
            </div>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-lg-3')}>
                        <div className={cx('footer__logo')}>
                            <a href="/">
                                <img src={images.logo} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className={cx('col-lg-6')}>
                        <div className={cx('footer__nav')}>
                            <ul>
                                <li className={cx('active')}>
                                    <a href="/">Trang chủ</a>
                                </li>
                                <li>
                                    <a href="/categories">Loại phim</a>
                                </li>
                                <li>
                                    <a href="/our-blog">Bài viết</a>
                                </li>
                                <li>
                                    <a href="#">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col-lg-3')}>
                        <p style={{ color: '#b7b7b7' }}>
                            Copyright &copy; All rights reserved | This template is made with{' '}
                            <i style={{ color: 'red' }} className={cx('fa fa-heart')}></i> by <a>TienNguyen</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
