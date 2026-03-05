import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from '~/assets/css/style.module.scss';
import routes from '~/config/routes';
import SimilarMovie from '../SimilarMovie/SimilarMovie';

const cx = classNames.bind(styles);

export default function DetailMovie() {
    const path = window.location.pathname.replace('/movie/', '');

    const [film, setFilm] = useState([]);
    const [films, setFilms] = useState([]);

    const getFilms = async () => {
        try {
            const response = await fetch(`https://ophim1.com/v1/api/danh-sach/phim-moi`);
            const data = await response.json();
            if (data.status === 'success') setFilms(data.data.items);
        } catch (error) {
            console.log(error);
        }
    };

    const getFilm = async () => {
        try {
            const response = await fetch(`https://ophim1.com/phim/${path}`);
            const data = await response.json();
            const date = data.movie.modified.time;
            if (data.status) {
                setFilm([data.movie]);
                document.title = 'Phim 24h | ' + data.movie.name;
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        (async () => {
            await getFilm();
            await getFilms();
        })();
    }, []);

    function convertDate(date) {
        var date = new Date(date);
        var options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'UTC',
        };
        var formattedDate = date.toLocaleString('en-GB', options);
        return formattedDate.replace(',', '');
    }

    const RatingComponent = (vote_average) => {
        const point = (vote_average / 10) * 5;
        const totalStar = 5;
        const star = Math.floor(point);
        const starElements = [];
        for (let index = 0; index < star; index++) {
            starElements.push(
                <a>
                    <i className={cx('fa fa-star')}></i>
                </a>,
            );
        }

        if (point % 1 != 0) {
            starElements.push(
                <a>
                    <i className={cx('fa fa-star-half-o')}></i>
                </a>,
            );
        }

        const noStar = totalStar - Math.ceil(point);
        for (let index = 0; index < noStar; index++) {
            starElements.push(
                <a>
                    <i className={cx('fa', 'fa-star-o')}></i>
                </a>,
            );
        }
        return starElements;
    };

    return (
        <>
            <div className={cx('breadcrumb-option')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('pc-12 t-12 m-12')}>
                            <div className={cx('breadcrumb__links')}>
                                <a href="/">
                                    <i className={cx('fa fa-home')}></i> Trang chủ
                                </a>
                                {film.map((item) => (
                                    <span key={item._id} className={cx('filmName')}>
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className={cx('anime-details', 'spad')}>
                <div className={cx('container')}>
                    <div className={cx('anime__details__content')}>
                        {film.map((item) => (
                            <div className={cx('row')} key={item._id}>
                                <div className={cx('pc-3 t-3 m-12')}>
                                    <div className={cx('anime__details__pic', 'set-bg')} style={{ backgroundImage: `url(${item.thumb_url})`, width: '262px' }}>
                                        <div className={cx('comment')}>
                                            <i className={cx('fa fa-globe')}></i> {item.lang}
                                        </div>
                                        <div className={cx('view')}>
                                            <i className={cx('fa fa-eye')}></i> {item.view}
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('pc-9 t-9 m-12')}>
                                    <div className={cx('anime__details__text')}>
                                        <div className={cx('anime__details__title')}>
                                            <h3>{item.name}</h3>
                                            <span>{item.origin_name}</span>
                                        </div>
                                        <div className={cx('anime__details__rating')}>
                                            <div className={cx('rating')}>{RatingComponent(item.tmdb.vote_average)}</div>
                                            <span>
                                                {((item.tmdb.vote_average / 10) * 5).toFixed(2)}/5 ({item.tmdb.vote_count} Votes)
                                            </span>
                                        </div>
                                        <div>
                                            <p></p>
                                            <p dangerouslySetInnerHTML={{ __html: item.content }} />
                                            <p></p>
                                        </div>
                                        <div className={cx('anime__details__widget')}>
                                            <div className={cx('row')}>
                                                <div className={cx('pc-6 m-12')}>
                                                    <ul>
                                                        <li>
                                                            <span>Type:</span> <span className={cx('typePost')}>{item.type}</span>
                                                        </li>
                                                        <li>
                                                            <span>Produced:</span> {item.year}
                                                        </li>
                                                        <li>
                                                            <span>Date update:</span> {convertDate(item.modified.time)}
                                                        </li>
                                                        <li>
                                                            <span>Status:</span> {item.status}
                                                        </li>
                                                        <li>
                                                            <span>Genre:</span>{' '}
                                                            {item.category.map((items) => (
                                                                <>
                                                                    <button key={items.id} type="button" className={cx('btn', 'btn-secondary')}>
                                                                        {items.name}
                                                                    </button>{' '}
                                                                </>
                                                            ))}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('pc-6 m-12')}>
                                                    <ul>
                                                        <li>
                                                            <span>Country:</span> {item.country.map((items) => items.name + ' ')}
                                                        </li>
                                                        <li>
                                                            <span>Episode:</span> {item.episode_current}
                                                        </li>
                                                        <li>
                                                            <span>Duration:</span> {item.time}
                                                        </li>
                                                        <li>
                                                            <span>Quality:</span> {item.quality}
                                                        </li>
                                                        <li>
                                                            <span>Views:</span> {item.view}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('anime__details__btn')}>
                                            <input type="submit" className={cx('follow-btn', 'showFl')} value="Theo Dõi 🤍" />

                                            <a href={routes.watch.replace(':name', item.slug + '?episodes=1')} className={cx('watch-btn')}>
                                                <span>Xem Ngay</span> <i className={cx('fa fa-angle-right')}></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={cx('row')}>
                        <div className={cx('pc-8 m-12')}>
                            <div className={cx('anime__details__review')}>
                                <div className={cx('section-title')}>
                                    <h5 className={cx('watched_episode')}></h5>
                                </div>
                                <div className={cx('section-title')}>
                                    <h5 className={cx('totalCmt')}>Bình luận</h5>
                                </div>
                                <div className={cx('comments')} id="comments">
                                    <div className={cx('anime__details__review')}>
                                        <div className={cx('anime__review__item')}>
                                            <div className={cx('anime__review__item__pic')}>
                                                <img
                                                    src="https://res.cloudinary.com/dwn20guz0/image/upload/v1714118761/avatarUser/618f083c61a7460ce0a6064319af41bd_dthlvw.gif"
                                                    alt=""
                                                />
                                                <img src="/img/avatar/khung.gif" alt="" className={cx('frame_avatar')} />
                                            </div>
                                            <div className={cx('anime__review__item__text')}>
                                                <div className={cx('comment_header')}>
                                                    <div className={cx('comment_author')}>Tao Là Tiến</div>
                                                    <div className={cx('mycred-wrap')}>
                                                        <img alt="" src="https://res.cloudinary.com/dwn20guz0/image/upload/v1712661636/samples/landscapes/o-thien-co.webp" />
                                                        <img alt="" src="https://res.cloudinary.com/dwn20guz0/image/upload/v1712661637/samples/landscapes/lam-ngan-thao.gif" />
                                                        <img alt="" src="https://res.cloudinary.com/dwn20guz0/image/upload/v1713012427/samples/landscapes/kiem-han-lap.gif" />
                                                    </div>
                                                    <span className={cx('displayTime')}>191 ngày trước</span>
                                                    <input value="10:31:54AM 16/4/2024" type="hidden" className={cx('hiddenTime')} />
                                                </div>
                                                <input className={cx('contentComment')} value="test 321" readOnly />
                                                <span className={cx('settingComment')}>
                                                    <i className={cx('fa fa-cog')}></i>
                                                </span>
                                                <div className={cx('isCheckEditCM')}>
                                                    <i className={cx('fa fa-pencil-square-o')}></i> Đã chỉnh sửa
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('anime__details__review')}>
                                        <div className={cx('anime__review__item')}>
                                            <div className={cx('anime__review__item__pic')}>
                                                <img
                                                    src="https://res.cloudinary.com/dwn20guz0/image/upload/v1714118761/avatarUser/618f083c61a7460ce0a6064319af41bd_dthlvw.gif"
                                                    alt=""
                                                />
                                                <img src="/img/avatar/khung.gif" alt="" className={cx('frame_avatar')} />
                                            </div>
                                            <div className={cx('anime__review__item__text')}>
                                                <div className={cx('comment_header')}>
                                                    <div className={cx('comment_author')}>Tao Là Tiến</div>
                                                    <div className={cx('mycred-wrap')}>
                                                        <img alt="" src="https://res.cloudinary.com/dwn20guz0/image/upload/v1712661636/samples/landscapes/o-thien-co.webp" />
                                                        <img alt="" src="https://res.cloudinary.com/dwn20guz0/image/upload/v1712661637/samples/landscapes/lam-ngan-thao.gif" />
                                                        <img alt="" src="https://res.cloudinary.com/dwn20guz0/image/upload/v1713012427/samples/landscapes/kiem-han-lap.gif" />
                                                    </div>
                                                    <span className={cx('displayTime')}>191 ngày trước</span>
                                                    <input value="10:31:54AM 16/4/2024" type="hidden" className={cx('hiddenTime')} />
                                                </div>
                                                <input className={cx('contentComment')} value="test 321" readOnly />
                                                <span className={cx('settingComment')}>
                                                    <i className={cx('fa fa-cog')}></i>
                                                </span>
                                                <div className={cx('isCheckEditCM')}>
                                                    <i className={cx('fa fa-pencil-square-o')}></i> Đã chỉnh sửa
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('anime__details__review')}>
                                        <div className={cx('anime__review__item')}>
                                            <div className={cx('anime__review__item__pic')}>
                                                <img
                                                    src="https://res.cloudinary.com/dwn20guz0/image/upload/v1714118761/avatarUser/618f083c61a7460ce0a6064319af41bd_dthlvw.gif"
                                                    alt=""
                                                />
                                                <img src="/img/avatar/khung.gif" alt="" className={cx('frame_avatar')} />
                                            </div>
                                            <div className={cx('anime__review__item__text')}>
                                                <div className={cx('comment_header')}>
                                                    <div className={cx('comment_author')}>Tao Là Tiến</div>
                                                    <div className={cx('mycred-wrap')}>
                                                        <img alt="" src="https://res.cloudinary.com/dwn20guz0/image/upload/v1712661636/samples/landscapes/o-thien-co.webp" />
                                                        <img alt="" src="https://res.cloudinary.com/dwn20guz0/image/upload/v1712661637/samples/landscapes/lam-ngan-thao.gif" />
                                                        <img alt="" src="https://res.cloudinary.com/dwn20guz0/image/upload/v1713012427/samples/landscapes/kiem-han-lap.gif" />
                                                    </div>
                                                    <span className={cx('displayTime')}>191 ngày trước</span>
                                                    <input value="10:31:54AM 16/4/2024" type="hidden" className={cx('hiddenTime')} />
                                                </div>
                                                <input className={cx('contentComment')} value="test 321" readOnly />
                                                <span className={cx('settingComment')}>
                                                    <i className={cx('fa fa-cog')}></i>
                                                </span>
                                                <div className={cx('isCheckEditCM')}>
                                                    <i className={cx('fa fa-pencil-square-o')}></i> Đã chỉnh sửa
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('infoUser')}>
                                <div>
                                    <p className={cx('idUserCmt')}></p>
                                    <div className={cx('anime__details__form')}>
                                        <div className={cx('section-title')}>
                                            <h5>Your Comment</h5>
                                        </div>
                                        <div className={cx('formNoClick')}>
                                            <textarea placeholder="Your Comment" id="contentCm"></textarea>
                                            <button type="submit">
                                                <i className={cx('fa fa-location-arrow')}></i> Bình luận
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-4 col-md-4')}>
                            <div className={cx('anime__details__sidebar')}>
                                <SimilarMovie film={films} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
