package com.example.demo.service;


import com.example.demo.model.Notifications;
import com.example.demo.model.User;
import com.example.demo.repository.NotificationRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
public class NotificationService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private NotificationRepository notificationRepository;

    public boolean addNotification(int user_id, String message) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Notifications notifications = new Notifications();
        Optional<User> userOptional = userRepository.findById(user_id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            notifications.setUser(user);
            notifications.setType("Mật khẩu");
            notifications.setMessage(message);
            notifications.setIs_read(false);
            notifications.setCreated_at(timestamp);
            notificationRepository.save(notifications);
            return true;
        } else {
            return false;
        }

    }

    public int countNotification(int user_id) {
        return notificationRepository.countNotification(user_id);
    }

    /**
     * tra danh sach thong bao theo nguoi dung
     * @param user_id
     * @return
     */
    public List<Notifications> notifications(int user_id) {
        List<Notifications> listNotifications = notificationRepository.getNotificationsBy(user_id);
        return listNotifications;

    }
    /**
     * cập nhập trạng thái
     */
    public void updateIsRead(int user_id){
        List<Notifications> listNotifications = notificationRepository.getNotificationsBy(user_id);
        if (!listNotifications.isEmpty()){
            for(Notifications n : listNotifications){
                n.setIs_read(true);
                notificationRepository.save(n);
            }
        }
    }
}
