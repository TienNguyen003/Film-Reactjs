import React from 'react';

export default function Info() {
    return (
        <>
            <div className="myAccount spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 infoAccount">
                            <img src="http://res.cloudinary.com/dwn20guz0/image/upload/v1714118761/avatarUser/618f083c61a7460ce0a6064319af41bd_dthlvw.gif" className="img__myAccount" />
                            <label htmlFor="avatarInput">
                                <span>Thay đổi avatar</span>
                            </label>
                            <div className="mycred-users-badges">
                                <div className="the-badge">
                                    <img
                                        src="https://res.cloudinary.com/dwn20guz0/image/upload/v1712661636/samples/landscapes/o-thien-co.webp"
                                        className="mycred-badge-image badge-level3"
                                        width="100"
                                        height="100"
                                    />
                                </div>
                            </div>
                            <span className="level__myAccount">Hoàng Thiên Cảnh</span>
                            <blockquote style={{ width: '100%' }}>
                                <p className="text-muted maxim">Nguyen Dinh Tien</p>
                            </blockquote>
                            <div className="button-group">
                                <a href="/my-account/diem-danh" className="btn btn-danger">
                                    <i className="fa fa-calendar"></i> Điểm Danh
                                </a>
                                <a href="/tu-bao-cac" className="btn btn-danger">
                                    <i className="fa fa-calendar"></i> Tụ Bảo Các
                                </a>
                                <a href="/bang-xep-hang-tu-vi" className="btn btn-danger">
                                    <i className="fa fa-star"></i> BXH Tu Vi
                                </a>
                                <a href="/phong-chat-version-2-0" className="btn btn-danger">
                                    <i className="fa fa-comments"></i>Phòng Chat
                                </a>
                                <a href="/gop-y" className="btn btn-danger">
                                    <i className="fa fa-comment"></i> Góp Ý
                                </a>
                                <a href="/my-account/edit-pass" className="btn btn-danger">
                                    <i className="fa fa-lock"></i>Thay Đổi Mật Khẩu
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 edit-account">
                            <div className="card">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="new_display_name">Biệt danh:</label>
                                        <input type="text" className="form-control" />
                                        <a href="/my-account/cap-nhat-biet-danh" className="btn btn-info">
                                            Đổi Biệt Danh
                                        </a>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tu_vi">Tu vi: </label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="user_bio">Châm ngôn:</label>
                                        <textarea maxLength="300" name="user_bio" className="form-control" rows="3"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="user_name">Tên tài khoản:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="user_email">Email:</label>
                                        <input type="text" className="form-control" />
                                        <a href="/thay-doi-email" className="btn btn-info">
                                            Đổi Email
                                        </a>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="registration_date">Ngày đăng ký:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <button className="btn btn-success" style={{ padding: '5px 10px', fontSize: '16px' }}>
                                        Cập nhật
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
