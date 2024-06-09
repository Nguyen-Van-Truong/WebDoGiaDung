package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "messages")
public class Messenger {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int messageId;

    @ManyToOne
    @JoinColumn(name = "sender_id", nullable = false, referencedColumnName = "user_id")
    @JsonBackReference
    private User sender;

    @ManyToOne
    @JoinColumn(name = "receiver_id", nullable = false, referencedColumnName = "user_id")
    @JsonBackReference
    private User receiver;

    @Column(name = "message_text")
    private String messageText;

    @Column(name = "created_at")
    private Timestamp createdAt;

    public Messenger() {}

    public Messenger(User sender, User receiver, String messageText, Timestamp createdAt) {
        this.sender = sender;
        this.receiver = receiver;
        this.messageText = messageText;
        this.createdAt = createdAt;
    }


    public int getMessageId() {
        return messageId;
    }

    public void setMessageId(int messageId) {
        this.messageId = messageId;
    }

    public User getSender() {
        return sender;
    }

    public void setSender(User sender) {
        this.sender = sender;
    }

    public User getReceiver() {
        return receiver;
    }

    public void setReceiver(User receiver) {
        this.receiver = receiver;
    }

    public String getMessageText() {
        return messageText;
    }

    public void setMessageText(String messageText) {
        this.messageText = messageText;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }
}
