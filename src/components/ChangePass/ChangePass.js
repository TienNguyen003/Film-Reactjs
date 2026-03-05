import React from 'react';

export default function ChangePass() {
    return (
        <>
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="/">
                                    <i className="fa fa-home"></i> Trang chủ
                                </a>
                                <a href="/my-account"> Thông tin</a>
                                <span className="titlePage">Đổi mật khẩu</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="updateDisplayName spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 ud_name">
                            <div className="section-title">
                                <h4 className="titleGenres">Đổi mật khẩu</h4>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 editPoint">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <form>
                                                <label for="display_oldpass">Mật khẩu cũ:</label>
                                                <input
                                                    maxlength="20"
                                                    type="text"
                                                    id="new-display-name"
                                                    name="display_oldpass"
                                                    className="form-control"
                                                    placeholder="Nhập mật khẩu cũ"
                                                    style={{ margin: '10px 0 15px' }}
                                                />
                                                <label for="display_newpass">Mật khẩu mới:</label>
                                                <input
                                                    maxlength="20"
                                                    type="text"
                                                    id="new-display-name"
                                                    name="display_newpass"
                                                    className="form-control"
                                                    placeholder="Nhập mật khẩu mới"
                                                    style={{ margin: '10px 0 15px' }}
                                                />
                                                <label for="display_newpass">Nhập lại mật khẩu:</label>
                                                <input
                                                    maxlength="20"
                                                    type="text"
                                                    id="new-display-name"
                                                    name="display_anewpass"
                                                    className="form-control"
                                                    placeholder="Nhập lại mật khẩu mới"
                                                    style={{ margin: '10px 0 15px' }}
                                                />
                                                <br />
                                                <span></span>
                                                <br />
                                                <button type="submit" className="btn btn-success" style={{ padding: '5px 15px', fontSize: '16px' }}>
                                                    Đổi
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
