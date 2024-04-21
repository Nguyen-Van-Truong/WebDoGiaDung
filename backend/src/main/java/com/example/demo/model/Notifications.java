package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "notifications")
public class Notifications {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int notification_id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false, referencedColumnName = "user_id")
    @JsonBackReference
    private  User user;

    @Column(name = "type")
    private  String type;

    @Column(name = "message")
    private String message;
    @Column(name = "is_read")
    private boolean is_read;

    @Column(name = "created_at")
    private Timestamp created_at;

    public Notifications(int notification_id, User user, String type, String message, boolean is_read, Timestamp created_at) {
        this.notification_id = notification_id;
        this.user = user;
        this.type = type;
        this.message = message;
        this.is_read = is_read;
        this.created_at = created_at;
    }
    public Notifications() {

    }
    public int getNotification_id() {
        return notification_id;
    }

    public void setNotification_id(int notification_id) {
        this.notification_id = notification_id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isIs_read() {
        return is_read;
    }

    public void setIs_read(boolean is_read) {
        this.is_read = is_read;
    }

    public Timestamp getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Timestamp created_at) {
        this.created_at = created_at;
    }
}
