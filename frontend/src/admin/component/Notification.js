import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideNotification } from '../redux/actions/NotificationsActions';

const Notification = () => {
    const notification = useSelector(state => state.notifications);
    const dispatch = useDispatch();

    if (!notification.show) return null;

    const getAlertClass = (type) => {
        switch (type) {
            case 'success': return 'alert-success';
            case 'error': return 'alert-danger';
            case 'warning': return 'alert-warning';
            case 'info': return 'alert-info';
            default: return 'alert-primary';
        }
    };

    return (
        <div className={`alert ${getAlertClass(notification.type)} alert-dismissible fade show`} role="alert">
            {notification.message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => dispatch(hideNotification())}></button>
        </div>
    );
};

export default Notification;
