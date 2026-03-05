import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from '~/assets/css/style.module.scss';
import SimilarMovie from '../SimilarMovie/SimilarMovie';

const cx = classNames.bind(styles);

export default function WatchMovie() {
    const path = window.location.pathname.replace('/watch/', '');
    const urlParams = new URLSearchParams(window.location.search);
    const episode = urlParams.get('episodes') || 'full';

    const [episodes, setEpisodes] = useState([]);
    const [films, setFilms] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);

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
            if (data.status) {
                setEpisodes(data.episodes[0].server_data);
                document.title = 'Phim 24h | ' + data.movie.name;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleEpisodeChange = (episodeSlug) => {
        window.location.href = `/watch/${path}?episodes=${episodeSlug}`;
    };

    const handlePrevEpisode = (e) => {
        e.preventDefault();
        const currentIndex = episodes.findIndex((ep) => ep.slug == episode);
        if (currentIndex > 0) {
            handleEpisodeChange(episodes[currentIndex - 1].slug);
        }
    };

    const handleNextEpisode = (e) => {
        e.preventDefault();
        const currentIndex = episodes.findIndex((ep) => ep.slug == episode);
        if (currentIndex < episodes.length - 1) {
            handleEpisodeChange(episodes[currentIndex + 1].slug);
        }
    };

    useEffect(() => {
        (async () => {
            await getFilm();
            await getFilms();
        })();
    }, []);

    useEffect(() => {
        if (episodes.length > 0) {
            const current = episodes.find((ep) => ep.slug == episode) || episodes[0];
            setCurrentVideo(current);
        }
    }, [episodes, episode]);

    return (
        <>
            <div className={cx('breadcrumb-option')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('pc-12')}>
                            <div className={cx('breadcrumb__links')}>
                                <a href="/">
                                    <i className={cx('fa fa-home')}></i> Trang chủ
                                </a>
                                <span className={cx('filmName')}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className={cx('anime-details', 'spad')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('pc-12')}>
                            <div className={cx('anime__video__player')}>
                                {currentVideo && currentVideo.link_embed && (
                                    <iframe src={currentVideo.link_embed} style={{ width: '100%', height: '500px', border: 'none' }} allowFullScreen title="Video Player" />
                                )}
                                <a href="#" id="iconFilm" className={cx('prevEps')} onClick={handlePrevEpisode}>
                                    <i className={cx('fa fa-angle-double-left')}></i> Tập trước
                                </a>
                                <a href="#" id="iconFilm" className={cx('nextEsp')} onClick={handleNextEpisode}>
                                    Tập tiếp theo <i className={cx('fa fa-angle-double-right')}></i>
                                </a>
                                <a id="iconFilm" className={cx('lightToggle')}>
                                    <i className={cx('fa fa-eye')}></i>Tắt đèn
                                </a>
                            </div>
                            <div className={cx('section-title')}>
                                <h5>Nếu phim load chậm vui lòng tải lại trang</h5>
                            </div>
                            <div className={cx('anime__details__episodes')}>
                                <div className={cx('section-title')}>
                                    <h5>Tập</h5>
                                </div>
                                <div className={cx('episodes')}>
                                    {episodes.map((item, index) => (
                                        <a key={index} href={`/watch/${path}?episodes=${item.slug}`} className={item.slug == episode ? cx('active') : ''}>
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
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
