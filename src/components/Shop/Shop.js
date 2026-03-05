import React from 'react';

export default function Shop() {
    return (
        <>
            <div className="updateDisplayName spad" style={{ paddingTop: '100px' }}>
                <div className="container" style={{ backgroundColor: '#070720b8', borderRadius: '10px' }}>
                    <div className="row">
                        <div className="col-lg-12 ud_name">
                            <button className="tinh-thach-btn" style={{ margin: '5px 5px 10px', float: 'right' }}>
                                <i className="fa fa-diamond"></i> <span className="totalCrystal">1111</span>
                            </button>
                            <div style={{ display: 'flex', justifyContent: 'center', clear: 'both' }}>
                                <img src="https://res.cloudinary.com/dwn20guz0/image/upload/v1712672529/tu-bao-cac.gif" className="img-checkin" alt="Tụ Bảo Các" />
                            </div>
                            <div
                                className="container mt-4"
                                style={{ backgroundImage: `url(https://hoathinh3d.fan/wp-content/themes/halimmovies-child/pages/assets/image/bg-tbc.jpg?t=12)` }}
                            >
                                <div className="buy-badges">
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4 phapbao-item">
                                        <div className="card">
                                            <img
                                                src="https://res.cloudinary.com/dwn20guz0/image/upload/v1712661636/samples/landscapes/o-thien-co.webp"
                                                className="card-img-top product-img"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title"></h5>
                                                <p className="card-text price-text">
                                                    <i className="fa fa-diamond"></i>
                                                    <span style={{ marginLeft: '10px' }} className="priceBadges">999</span>
                                                </p>
                                                <button className="buyBadgeBtn btn btn-primary">Mua ngay</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h5 className="totalCmt">Bình luận</h5>
                                </div>
                                <div className="infoUser" style={{ marginBottom: '50px' }}>
                                    <div>
                                        <div className="anime__details__form">
                                            <form className="formNoClick">
                                                <textarea placeholder="Your Comment" id="contentCm"></textarea>
                                                <button type="submit">
                                                    <i className="fa fa-location-arrow"></i>
                                                    Bình Luận
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="comments" id="comments"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
