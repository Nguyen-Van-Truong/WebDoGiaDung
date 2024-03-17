import React from 'react';

const DashboardSummary = () => {
    return (
        <div className="tab-pane fade show active" id="summery-today">
            <div className="row g-1 g-sm-3 mb-3 row-deck">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div className="card">
                        <div
                            className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">
                                <span className="text-muted">Khách hàng</span>
                                <div>
                                    <span className="fs-6 fw-bold me-2">14,208</span>
                                </div>
                            </div>
                            <div className="right-icon">
                                <i className="icofont-student-alt fs-3 color-light-orange"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div className="card">
                        <div
                            className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">
                                <span className="text-muted">Đơn đặt hàng</span>
                                <div>
                                    <span className="fs-6 fw-bold me-2">2314</span>
                                </div>
                            </div>
                            <div className="right-icon">
                                <i className="icofont-shopping-cart fs-3 color-lavender-purple"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div className="card">
                        <div
                            className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">
                                <span className="text-muted">Khách viếng thăm</span>
                                <div>
                                    <span className="fs-6 fw-bold me-2">11452</span>
                                </div>
                            </div>
                            <div className="right-icon">
                                <i className="icofont-users-social fs-3 color-light-success"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Repeat for other cards */}
            </div>
        </div>
    );
};

export default DashboardSummary;
