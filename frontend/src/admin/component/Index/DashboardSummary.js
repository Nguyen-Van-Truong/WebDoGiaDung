import React from 'react';

const DashboardSummary = ({ statistics }) => {
    return (
        <div className="tab-pane fade show active" id="summery-today">
            <div className="row g-1 g-sm-3 mb-3 row-deck">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div className="card">
                        <div
                            className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">
                                <span className="text-muted">Tổng số người dùng</span>
                                <div>
                                    <span className="fs-6 fw-bold me-2">{statistics.totalRegularUsers}</span>
                                </div>
                            </div>
                            <div className="right-icon">
                                <i className="icofont-users-social fs-3 color-light-success"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div className="card">
                        <div
                            className="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-info">
                                <span className="text-muted">Tổng số admin</span>
                                <div>
                                    <span className="fs-6 fw-bold me-2">{statistics.totalAdminUsers}</span>
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
                                <span className="text-muted">Tổng số sản phẩm</span>
                                <div>
                                    <span className="fs-6 fw-bold me-2">{statistics.totalProducts}</span>
                                </div>
                            </div>
                            <div className="right-icon">
                                <div className="avatar rounded no-thumbnail bg-info text-light">
                                    <i className="fa fa-desktop" aria-hidden="true"/>
                                </div>
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
