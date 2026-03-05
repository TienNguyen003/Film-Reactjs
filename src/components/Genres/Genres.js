import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from '~/assets/css/style.module.scss';
import routes from '~/config/routes';
import Page from '~/layouts/components/Pagination/pagination';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function Genres() {
    const path = window.location.pathname.replace('/genres/', '');

    const [film, setFilm] = useState([]);
    const [page, setPage] = useState([]);
    const location = useLocation();

    const getFilm = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const page = urlParams.get('page') || 1;
        try {
            let genres;
            genres = (path.includes('phim') && !path.includes('18')) || path.includes('hoat-hinh') ? 'danh-sach' : 'the-loai';
            const response = await fetch(`https://ophim1.com/v1/api/${genres}/${path}?page=${page}`);
            const data = await response.json();
            if (data.status) {
                setFilm(data.data.items);
                setPage(data.data.params.pagination);
                document.title = data.data.titlePage;
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        (async () => {
            await getFilm();
        })();
    }, [location]);

    return (
        <>
            <div className={cx('breadcrumb-option')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('pc-12 t-12 m-12')}>
                            <div className={cx('breadcrumb__links')}>
                                <a href="/">
                                    <i className={cx('fa fa-home')}></i> Home
                                </a>
                                <span className={cx('titlePage')}>{document.title}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className={cx('product-page', 'spad')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('pc-12 t-12 m-12')}>
                            <div className={cx('product__page__content')}>
                                <div className={cx('product__page__title')}>
                                    <div className={cx('row')}>
                                        <div className={cx('pc-8 t-8 m-8')}>
                                            <div className={cx('section-title')}>
                                                <h4 className={cx('titleGenres')}>{document.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('row', 'genres')}>
                                    {film.map((item, index) => (
                                        <div key={index} className={cx('pc-2-7 pc-o-2-7 t-4 m-12')}>
                                            <div className={cx('product__item')}>
                                                <a href={routes.detailMovie.replace(':name', item.slug)}>
                                                    <div className={cx('product__item__pic', 'set-bg')}>
                                                        <div
                                                            className={cx('product__item__image')}
                                                            style={{
                                                                backgroundImage: `url(https://img.ophim.live/uploads/movies/${item.thumb_url})`,
                                                            }}
                                                        ></div>
                                                        <div className={cx('ep')}>{item.episode_current}</div>
                                                        <div className={cx('comment')}>
                                                            <i className={cx('fa fa-comments')}></i> {item.time}
                                                        </div>
                                                        <div className={cx('view')}>
                                                            <i className={cx('fa fa-eye')}></i> {item.year}
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className={cx('product__item__text')}>
                                                    <ul></ul>
                                                    <h5>
                                                        <a href={routes.detailMovie.replace(':name', item.slug)}>{item.name}</a>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={cx('pagination', 'pc-12')} style={{ margin: '50px 0' }}>
                                <Page total={page.totalItems} page={page.currentPage} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
