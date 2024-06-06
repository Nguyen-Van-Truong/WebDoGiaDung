package com.example.demo.repository;

import com.example.demo.dto.MessagerDTO;
import com.example.demo.model.Messenger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MessengerRepository extends JpaRepository<Messenger, Integer> {

    @Query("SELECT new com.example.demo.dto.MessagerDTO(sender.username, receiver.username, m.messageText, m.createdAt) " +
            "FROM Messenger m " +
            "JOIN User sender ON m.sender.user_id = sender.user_id " +
            "JOIN User receiver ON m.receiver.user_id = receiver.user_id " +
            "WHERE m.sender.user_id = :senderId")
    List<MessagerDTO> findBySenderId(@Param("senderId") int senderId);

    @Query("SELECT new com.example.demo.dto.MessagerDTO(sender.username, receiver.username, m.messageText, m.createdAt) " +
            "FROM Messenger m " +
            "JOIN User sender ON m.sender.user_id = sender.user_id " +
            "JOIN User receiver ON m.receiver.user_id = receiver.user_id " +
            "WHERE m.receiver.user_id = :receiverId")
    List<MessagerDTO> findByReceiverId(@Param("receiverId") int receiverId);
    @Query("SELECT new com.example.demo.dto.MessagerDTO(sender.username) " +
            "FROM Messenger m " +
            "JOIN User sender ON m.sender.user_id = sender.user_id " +
            "JOIN User receiver ON m.receiver.user_id = receiver.user_id " +
            "WHERE m.receiver.user_id = :receiverId group by m.sender.user_id "  )
    List<MessagerDTO> getByReceiver(@Param("receiverId") int receiverId);
}
