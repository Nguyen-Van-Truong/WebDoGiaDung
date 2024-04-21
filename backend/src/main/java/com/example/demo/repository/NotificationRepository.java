package com.example.demo.repository;

import com.example.demo.model.Notifications;
import com.example.demo.model.Products;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface NotificationRepository extends JpaRepository<Notifications, Integer> {
    @Query("select count(*) from Notifications n where n.user.user_id = :user_id and n.is_read=false ")
    int countNotification(@Param("user_id") int user_id);

    /**
     * lấy cái thông báo dựa trên user id
     * @param user_id
     * @return
     */
    @Query("SELECT u FROM Notifications u WHERE u.user.user_id = :user_id")
    List<Notifications> getNotificationsBy(@Param("user_id") int user_id);


}
