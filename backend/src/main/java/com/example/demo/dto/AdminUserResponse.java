package com.example.demo.dto;

import com.example.demo.model.User;

import java.sql.Timestamp;

public class AdminUserResponse {
    private int user_id;
    private String email;
    private String full_name;
    private String address;
    private boolean is_admin;
    private Timestamp created_at;

    public AdminUserResponse(int user_id, String email, String full_name, String address, boolean is_admin, Timestamp created_at) {
        this.user_id = user_id;
        this.email = email;
        this.full_name = full_name;
        this.address = address;
        this.is_admin = is_admin;
        this.created_at = created_at;
    }

    public AdminUserResponse(User user) {
        this.user_id = user.getUser_id();
        this.email = user.getEmail();
        this.full_name = user.getFull_name();
        this.address = user.getAddress();
        this.is_admin = user.isIs_admin();
        this.created_at = user.getCreated_at();
    }
    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean isIs_admin() {
        return is_admin;
    }

    public void setIs_admin(boolean is_admin) {
        this.is_admin = is_admin;
    }

    public Timestamp getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Timestamp created_at) {
        this.created_at = created_at;
    }

    @Override
    public String toString() {
        return "AdminUserResponse{" +
                "user_id=" + user_id +
                ", email='" + email + '\'' +
                ", full_name='" + full_name + '\'' +
                ", address='" + address + '\'' +
                ", is_admin=" + is_admin +
                ", created_at=" + created_at +
                '}';
    }
}
