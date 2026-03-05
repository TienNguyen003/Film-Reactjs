import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from '~/assets/css/style.module.scss';
import routes from '~/config/routes';
import Slider from '~/layouts/components/Slider/Slider';
import SimilarMovie from '~/components/SimilarMovie/SimilarMovie';

const cx = classNames.bind(styles);

export default function Index() {
    const [film, setFilm] = useState([]);

    const getFilm = async () => {
        try {
            const response = await fetch(`https://ophim1.com/v1/api/danh-sach/phim-moi`);
            const data = await response.json();
            if (data.status === 'success') setFilm(data.data.items);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        (async () => {
            await getFilm();
        })();
    }, []);

    const handleMouseOver = (e) => {
        e.target.stop();
    };

    const handleMouseOut = (e) => {
        e.target.start();
    };

    return (
        <>
            <section className={cx('hero')}>
                <marquee className={cx('marqueeNoti')} onMouseOver={(e) => handleMouseOver(e)} onMouseOut={(e) => handleMouseOut(e)} hspace="40px">
                    Chúc mừng cường giả
                    <span style={{ fontWeight: 'bolder', textShadow: '2px 2px 3px #d73d3d' }}> Vương Lâm</span> tấn cấp thành công tiến đến
                    <span style={{ fontWeight: 'bolder', textShadow: '2px 2px 3px #d73d3d' }}> Hoàng Thiên Cảnh</span>
                </marquee>
                <div className={cx('container')}>
                    <Slider />
                    {/* <div className={cx('hero__slider', 'owl-carousel', 'owl-loaded')} style={{ position: 'relative' }}>
                        <div
                            className={cx('hero__items', 'set-bg')}
                            style={{
                                height: '600px',
                                backgroundImage: `url("https://img.ophim.live/uploads/movies/nguyet-dao-di-gioi-phan-2-poster.jpg")`,
                            }}
                        >
                            <div className={cx('row', 'no-gutters')}>
                                <div className={cx('pc-12')}>
                                    <div className={cx('hero__text')}>
                                        <div className={cx('label')}>Tập 2</div>
                                        <h2>Hananoi Và Triệu Chứng Tình Yêu</h2>
                                        <p className={cx('contents')}>
                                            \u003Cp\u003EMakoto Misumi chỉ là một học sinh trung học bình thường sống
                                            một cuộc sống bình thường, nhưng đột nhiên bị triệu hồi đến thế giới khác để
                                            trở thành một “anh hùng”. Tuy nhiên, nữ thần của thế giới đó đã lăng mạ anh
                                            ta vì sự khác biệt và tước bỏ danh hiệu “anh hùng” của anh ta, trước khi
                                            tống cổ anh ta đến vùng hoang dã ở rìa thế giới. Khi đi lang thang trong
                                            vùng hoang dã, Makoto chạm trán với rồng, nhện, Orc, người lùn
                                        </p>
                                        <a>
                                            <span>Watch Now</span> <i className={cx('fa fa-angle-right')}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('owl-nav')}>
                            <button type="button" role="presentation" className={cx('owl-prev')}>
                                <span className={cx('arrow_carrot-left')}></span>
                            </button>
                            <button type="button" role="presentation" className={cx('owl-next')}>
                                <span className={cx('arrow_carrot-right')}></span>
                            </button>
                        </div>
                    </div> */}
                </div>
            </section>

            <section className={cx('product', 'spad')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('pc-8')}>
                            <div className={cx('trending__product')}>
                                <div style={{ display: 'flex' }}>
                                    <div className={cx('pc-8', 't-8', 'm-8')}>
                                        <div className={cx('section-title')}>
                                            <h4>Phim Mới</h4>
                                        </div>
                                    </div>
                                    <div className={cx('pc-3', 't-3', 'm-4')}>
                                        <div className={cx('btn__all')}>
                                            <a href="/genres\phim-moi-cap-nhat" className={cx('primary-btn')}>
                                                View All <span className={cx('arrow_right')}></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('row')}>
                                    {film.map((item) => (
                                        <div className={cx('pc-3-4', 'pc-o-3-4', 'm-12', 't-5-6', 't-o-6')} key={item._id}>
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
                                                        <div className={cx('comment')}>{item.year}</div>
                                                        <div className={cx('view')}>{item.quality}</div>
                                                    </div>
                                                </a>
                                                <div className={cx('product__item__text')}>
                                                    <ul>
                                                        {item.category.map((items) => (
                                                            <li key={items.id} style={{ marginRight: '2px' }}>
                                                                {items.name}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <h5>
                                                        <a href={routes.detailMovie.replace(':name', item.slug)}>{item.name}</a>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={cx('pc-4')}>
                            <SimilarMovie film={film} />
                            <div className={cx('product__sidebar__comment')}>
                                <div className={cx('section-title')}>
                                    <h5>New Comment</h5>
                                </div>
                                {film.slice(16, 20).map((item) => (
                                    <div className={cx('product__sidebar__comment__item')} key={item._id}>
                                        <div className={cx('product__sidebar__comment__item__pic')}>
                                            <img src={`https://img.ophim.live/uploads/movies/${item.thumb_url}`} style={{ width: '90px', height: '130px' }} />
                                        </div>
                                        <div className={cx('product__sidebar__comment__item__text')}>
                                            <ul>
                                                {item.category.map((items) => (
                                                    <li key={items.id} style={{ marginRight: '2px' }}>
                                                        {items.name}
                                                    </li>
                                                ))}
                                            </ul>
                                            <h5>
                                                <a href={routes.detailMovie.replace(':name', item.slug)}>{item.name}</a>
                                            </h5>
                                            <span>
                                                <i className={cx('fa fa-earth-americas')}></i> {item.lang}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
