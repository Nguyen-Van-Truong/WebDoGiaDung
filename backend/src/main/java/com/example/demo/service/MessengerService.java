package com.example.demo.service;

import com.example.demo.dto.MessagerDTO;
import com.example.demo.model.Messenger;
import com.example.demo.model.User;
import com.example.demo.repository.MessengerRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class MessengerService {
    @Autowired
    private MessengerRepository messengerRepository;

    @Autowired
    private UserRepository userRepository;

    public List<MessagerDTO> sendMessage(int senderId, String messageText) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());

        Optional<User> senderOptional = userRepository.findById(senderId);
        Optional<User> receiverOptional = userRepository.getUserAdmin();

        if (senderOptional.isPresent() && receiverOptional.isPresent()) {
            User sender = senderOptional.get();
            User receiver = receiverOptional.get();

            Messenger message = new Messenger(sender, receiver, messageText, timestamp);
            messengerRepository.save(message);

            return getAllMessagesForUser(senderId);
        } else {
            return null;
        }
    }
    public List<MessagerDTO> sendMessageAdmin(int senderId, String messageText) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());

        Optional<User> senderOptional = userRepository.findById(senderId);
        Optional<User> receiverOptional = userRepository.getUserAdmin();

        if (senderOptional.isPresent() && receiverOptional.isPresent()) {
            User sender = senderOptional.get();
            User receiver = receiverOptional.get();

            Messenger message = new Messenger( receiver,sender, messageText, timestamp);
            messengerRepository.save(message);

            return getAllMessagesForUser(senderId);
        } else {
            return null;
        }
    }
    public List<MessagerDTO> getAllMessagesForUser(int userId) {
        List<MessagerDTO> senderMessages = messengerRepository.findBySenderId(userId);
        List<MessagerDTO> receiverMessages = messengerRepository.findByReceiverId(userId);

        List<MessagerDTO> combinedMessages = new ArrayList<>();
        combinedMessages.addAll(senderMessages);
        combinedMessages.addAll(receiverMessages);

        // Sắp xếp các tin nhắn theo thời gian tăng dần
        Collections.sort(combinedMessages, new Comparator<MessagerDTO>() {
            @Override
            public int compare(MessagerDTO m1, MessagerDTO m2) {
                return m1.getCreate().compareTo(m2.getCreate());
            }
        });

        // In danh sách sau khi sắp xếp để kiểm tra
        for (MessagerDTO message : combinedMessages) {
            System.out.println(message.getCreate() + " " + message.getMessage());
        }

        return combinedMessages;
    }
    public User getUser(String username){
        Optional<User>users = userRepository.findByUsername(username);
        if(users.isPresent()){

            return users.get();
        }else{
            return null;
        }
    }
    public List<MessagerDTO>getName(){
        int id = userRepository.id_admin();
        return messengerRepository.getByReceiver(id);
    }
}