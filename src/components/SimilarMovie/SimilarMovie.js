import React from 'react';
import classNames from 'classnames/bind';

import styles from '~/assets/css/style.module.scss';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

export default function SimilarMovie({ film }) {
    return (
        <>
            <div className={cx('pc-12')}>
                <div className={cx('product__sidebar')}>
                    <div className={cx('product__sidebar__view')}>
                        <div className={cx('section-title')}>
                            <h5>you might like...</h5>
                        </div>
                        {film.slice(10, 14).map((item) => (
                            <div className={cx('filter__gallery')} key={item._id}>
                                <div className={cx('product__sidebar__view__item', 'set-bg')}>
                                    <div
                                        className={cx('product__sidebar__view__image')}
                                        style={{
                                            backgroundImage: `url(https://img.ophim.live/uploads/movies/${item.poster_url})`,
                                        }}
                                    ></div>
                                    <div className={cx('ep')}>{item.time}</div>
                                    <div className={cx('view')}>
                                        <i className={cx('fa fa-earth-americas')}></i> <span>{item.lang}</span>
                                    </div>
                                    <h5>
                                        <a href={routes.detailMovie.replace(':name', item.slug)}>{item.name}</a>
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
