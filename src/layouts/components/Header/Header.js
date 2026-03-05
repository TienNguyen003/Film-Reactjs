import React from 'react';
import classNames from 'classnames/bind';

import images from '~/assets';
import styles from '~/assets/css/style.module.scss';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

export default function Header() {
    const genresFilm = [
        {
            title: 'Phim Mới',
            slug: 'phim-moi',
        },
        {
            title: 'Phim Lẻ',
            slug: 'phim-le',
        },
        {
            title: 'Phim Hoạt Hình',
            slug: 'hoat-hinh',
        },
        {
            title: 'Phim Vietsub',
            slug: 'phim-vietsub',
        },
        {
            title: 'Phim Bộ',
            slug: 'phim-bo',
        },
    ];

    const typeFilm = [
        {
            title: 'Hành Động',
            slug: 'hanh-dong',
        },
        {
            title: 'Chiến Tranh',
            slug: 'chien-tranh',
        },
        {
            title: 'Cổ Trang',
            slug: 'co-trang',
        },
        {
            title: 'Võ Thuật',
            slug: 'vo-thuat',
        },
        {
            title: 'Viễn Tưởng',
            slug: 'vien-tuong',
        },
        {
            title: 'Đố biết',
            slug: 'phim-18',
        },
    ];

    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('row', 'no-gutters')}>
                    <div className={cx('pc-2')}>
                        <div className={cx('header__logo')}>
                            <a href="/">
                                <img src={images.logo} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className={cx('pc-8')}>
                        <div className={cx('header__nav')}>
                            <nav className={cx('header__menu')}>
                                <ul>
                                    <li className={cx('pc-2')}>
                                        <a href="/">Trang chủ</a>
                                    </li>
                                    <li className={cx('pc-2')}>
                                        <a href="/categories">
                                            Loại phim <i className={cx('fa-solid fa-angle-down', 'icon')}></i>
                                        </a>
                                        <ul className={cx('dropdown')}>
                                            {genresFilm.map((item, index) => (
                                                <li key={index}>
                                                    <a href={routes.genres.replace(':name', item.slug)}>{item.title}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li className={cx('pc-2')}>
                                        <a href="#">
                                            Thể loại <i className={cx('fa-solid fa-angle-down', 'icon')}></i>
                                        </a>
                                        <ul className={cx('dropdown')}>
                                            {typeFilm.map((item, index) => (
                                                <li key={index}>
                                                    <a href={routes.genres.replace(':name', item.slug)}>{item.title}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li className={cx('pc-2')}>
                                        <a href={routes.blog}>Bài viết</a>
                                    </li>
                                    <li className={cx('pc-2')}>
                                        <a href="#">Liên hệ</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className={cx('pc-2')}>
                        <div className={cx('header__right')}>
                            <a href="/historyFilm" title="Lịch sử">
                                <i className={cx('fa-solid fa-clock')}></i>
                            </a>
                            <a href="/favmovie" title="Yêu thích">
                                <i className={cx('fa-solid fa-bookmark')}></i>
                            </a>
                            <a href='#'>
                                <i className={cx('fa-solid fa-magnifying-glass')}></i>
                            </a>
                            <a href={routes.login}>
                                <i className={cx('fa-solid fa-user')}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
        </header>
    );
}
