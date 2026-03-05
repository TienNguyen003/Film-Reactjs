import React from 'react';
import classNames from 'classnames/bind';

import styles from '~/assets/css/style.module.scss';

const cx = classNames.bind(styles);

export default function BlogDetail() {
    return (
        <>
            <section className={cx('blog-details spad')}>
                <div className={cx('container')}>
                    <div className={cx('row d-flex justify-content-center')}>
                        <div className={cx('col-lg-8')}>
                            <div className={cx('blog__details__title')}>
                                <h6>
                                    Action, Magic <span>- March 08, 2020</span>
                                </h6>
                                <h2>Anime for Beginners: 20 Pieces of Essential Viewing</h2>
                                <div className={cx('blog__details__social')}>
                                    <a href="#" className={cx('facebook')}>
                                        <i className={cx('fa fa-facebook-square')}></i> Facebook
                                    </a>
                                    <a href="#" className={cx('pinterest')}>
                                        <i className={cx('fa fa-pinterest')}></i> Pinterest
                                    </a>
                                    <a href="#" className={cx('linkedin')}>
                                        <i className={cx('fa fa-linkedin-square')}></i> Linkedin
                                    </a>
                                    <a href="#" className={cx('twitter')}>
                                        <i className={cx('fa fa-twitter-square')}></i> Twitter
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-12')}>
                            <div className={cx('blog__details__pic')}>
                                <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/09/2025-new-isekai-anime-1.jpg" alt="" />
                            </div>
                        </div>
                        <div className={cx('col-lg-8')}>
                            <div className={cx('blog__details__content')}>
                                <div className={cx('blog__details__text')}>
                                    <p>
                                        As a result the last couple of eps haven’t been super exciting for me, because they’ve been more like settling into a familiar and
                                        comfortable routine.  We’re seeing character growth here but it’s subtle (apart from Shouyou, arguably).  I mean, Tobio being an asshole is
                                        nothing new – it’s kind of the foundation of his entire character arc.  Confronting whether his being an asshole is a problem for the Crows
                                        this directly is a bit of an evolution, and probably an overdue one at that, but the overall dynamic with Kageyama is basically unchanged.
                                    </p>
                                </div>
                                <div className={cx('blog__details__item__text')}>
                                    <h4>Tobio-Nishinoya showdown:</h4>
                                    <img src="https://cdn.popsww.com/blog/sites/2/2021/12/cac-nhan-vat-trong-thanh-guom-diet-quy.jpg" alt="" />
                                    <p>
                                        In Japan the idea of a first-year speaking to a senior the way Kageyama did to Asahi is a lot more shocking than it would be in the West,
                                        but Tobio calling out teammates in genuinely rude fashion in the middle of a match is what got him isolated in the first place.  It’s better
                                        for the Crows to sort this out in practice matches than the real deal, but this is really on Tobio – he has to figure out how to co-exist
                                        with others in a team environment.
                                    </p>
                                </div>
                                <div className={cx('blog__details__item__text')}>
                                    <h4>Nanatsu no Taizai: Kamigami No Gekirin</h4>
                                    <img src="https://img-cdn.2game.vn/2022/01/28/the-seven-deadly-sins-origin-that-hinh-dai-toi-hap-dan-cua-netmarble-5.jpg" alt="" />
                                    <p>
                                        In Japan the idea of a first-year speaking to a senior the way Kageyama did to Asahi is a lot more shocking than it would be in the West,
                                        but Tobio calling out teammates in genuinely rude fashion in the middle of a match is what got him isolated in the first place.  It’s better
                                        for the Crows to sort this out in practice matches than the real deal, but this is really on Tobio – he has to figure out how to co-exist
                                        with others in a team environment.
                                    </p>
                                </div>
                                <div className={cx('blog__details__item__text')}>
                                    <h4>ID:Ianvaded:</h4>
                                    <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/tobio-kageyama-header.jpg" alt="" />
                                    <p>
                                        In Japan the idea of a first-year speaking to a senior the way Kageyama did to Asahi is a lot more shocking than it would be in the West,
                                        but Tobio calling out teammates in genuinely rude fashion in the middle of a match is what got him isolated in the first place.  It’s better
                                        for the Crows to sort this out in practice matches than the real deal, but this is really on Tobio – he has to figure out how to co-exist
                                        with others in a team environment.
                                    </p>
                                </div>
                                <div className={cx('blog__details__tags')}>
                                    <a href="#">Healthfood</a>
                                    <a href="#">Sport</a>
                                    <a href="#">Game</a>
                                </div>
                                <div className={cx('blog__details__btns')}>
                                    <div className={cx('row')}>
                                        <div className={cx('col-lg-6')}>
                                            <div className={cx('blog__details__btns__item')}>
                                                <h5>
                                                    <a href="#">
                                                        <span className={cx('arrow_left')}></span> Building a Better LiA...
                                                    </a>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className={cx('col-lg-6')}>
                                            <div className={cx('blog__details__btns__item next__btn')}>
                                                <h5>
                                                    <a href="#">
                                                        Mugen no Juunin: Immortal – 21 <span className={cx('arrow_right')}></span>
                                                    </a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('blog__details__comment')}>
                                    <h4>2 Comments</h4>
                                    <div className={cx('blog__details__comment__item')}>
                                        <div className={cx('blog__details__comment__item__pic')}>
                                            <img src="https://i.pinimg.com/736x/b7/91/44/b79144e03dc4996ce319ff59118caf65.jpg" alt="" />
                                        </div>
                                        <div className={cx('blog__details__comment__item__text')}>
                                            <span>Sep 08, 2020</span>
                                            <h5>John Smith</h5>
                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi</p>
                                            <a href="#">Like</a>
                                            <a href="#">Reply</a>
                                        </div>
                                    </div>
                                    <div className={cx('blog__details__comment__item blog__details__comment__item--reply')}>
                                        <div className={cx('blog__details__comment__item__pic')}>
                                            <img src="https://i.pinimg.com/736x/b7/91/44/b79144e03dc4996ce319ff59118caf65.jpg" alt="" />
                                        </div>
                                        <div className={cx('blog__details__comment__item__text')}>
                                            <span>Sep 08, 2020</span>
                                            <h5>Elizabeth Perry</h5>
                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi</p>
                                            <a href="#">Like</a>
                                            <a href="#">Reply</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('blog__details__form')}>
                                    <h4>Leave A Commnet</h4>
                                    <form action="#">
                                        <div className={cx('row')}>
                                            <div className={cx('col-lg-6 col-md-6 col-sm-6')}>
                                                <input type="text" placeholder="Name" />
                                            </div>
                                            <div className={cx('col-lg-6 col-md-6 col-sm-6')}>
                                                <input type="text" placeholder="Email" />
                                            </div>
                                            <div className={cx('col-lg-12')}>
                                                <textarea placeholder="Message"></textarea>
                                                <button type="submit" className={cx('site-btn')}>
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
