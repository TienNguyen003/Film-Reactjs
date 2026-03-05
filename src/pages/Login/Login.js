import React from 'react';
import classNames from 'classnames/bind';

import styles from '~/assets/css/style.module.scss';
const cx = classNames.bind(styles);

export default function Login() {
    return (
        <>
            <section
                className={cx('normal-breadcrumb set-bg')}
                style={{ backgroundImage: `url(https://t3.ftcdn.net/jpg/05/91/97/64/360_F_591976463_KMZyV6obpsrN2bJJJkYW0bzoH2XxLTlA.jpg)` }}
            >
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('col-lg-12 text-center')}>
                            <div className={cx('normal__breadcrumb__text')}>
                                <h2>Login</h2>
                                <p>Welcome to Anime 24.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={cx('login spad')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('col-lg-6')}>
                            <div className={cx('login__form')}>
                                <h3>Login</h3>
                                <form className={cx('formLogin')}>
                                    <div className={cx('input__item')}>
                                        <input className={cx('username')} type="text" placeholder="Username" name="username" />
                                        <span className={cx('icon_mail')}></span>
                                    </div>
                                    <div className={cx('input__item')}>
                                        <input className={cx('password')} type="password" placeholder="Password" name="password" />
                                        <span className={cx('icon_lock')}></span>
                                    </div>
                                    <button type="submit" className={cx('site-btn')}>
                                        Login Now
                                    </button>
                                </form>
                                <a href="/forgot" className={cx('forget_pass')}>
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>
                        <div className={cx('col-lg-6')}>
                            <div className={cx('login__register')}>
                                <h3>Dont’t Have An Account?</h3>
                                <a href="/signup" className={cx('primary-btn')}>
                                    Register Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={cx('login__social')}>
                        <div className={cx('row d-flex justify-content-center')}>
                            <div className={cx('col-lg-6')}>
                                <div className={cx('login__social__links')}>
                                    <span>or</span>
                                    <ul>
                                        <li>
                                            <a href="/facebook" className={cx('facebook')}>
                                                <i className={cx('fa fa-facebook')}></i> Sign in With Facebook
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/google" className={cx('google')}>
                                                <i className={cx('fa fa-google')}></i>
                                                Sign in With Google
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/twitter" className={cx('twitter')}>
                                                <i className={cx('fa fa-twitter')}></i> Sign in With Twitter
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
