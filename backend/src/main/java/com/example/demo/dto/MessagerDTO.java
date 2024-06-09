package com.example.demo.dto;

import java.sql.Timestamp;

public class MessagerDTO {
    private String user_send;
    private String user_rec;
    private String message;
    private Timestamp create;

    public MessagerDTO(String user_send, String user_rec, String message, Timestamp create) {
        this.user_send = user_send;
        this.user_rec = user_rec;
        this.message = message;
        this.create = create;
    }

    public MessagerDTO(String user_send) {
        this.user_send = user_send;
    }

    public String getUser_send() {
        return user_send;
    }

    public void setUser_send(String user_send) {
        this.user_send = user_send;
    }

    public String getUser_rec() {
        return user_rec;
    }

    public void setUser_rec(String user_rec) {
        this.user_rec = user_rec;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Timestamp getCreate() {
        return create;
    }

    public void setCreate(Timestamp create) {
        this.create = create;
    }
}
