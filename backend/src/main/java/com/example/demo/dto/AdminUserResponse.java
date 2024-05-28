package com.example.demo.dto;

import com.example.demo.model.User;

import java.sql.Timestamp;
import java.util.List;

public class AdminUserResponse {
    private int user_id;
    private String email;
    private String full_name;
    private String address;
    private boolean is_admin;
    private Timestamp created_at;
    private int total_orders;
    private List<OrderAdminDTO> orders;
    private long totalOrdersCount;

    public AdminUserResponse(User user, List<OrderAdminDTO> orders, long totalOrdersCount) {
        this.user_id = user.getUser_id();
        this.email = user.getEmail();
        this.full_name = user.getFull_name();
        this.address = user.getAddress();
        this.is_admin = user.isIs_admin();
        this.orders = orders;
        this.totalOrdersCount = totalOrdersCount;
    }

    public AdminUserResponse(User user, Integer total_orders) {
        this.user_id = user.getUser_id();
        this.email = user.getEmail();
        this.full_name = user.getFull_name();
        this.address = user.getAddress();
        this.is_admin = user.isIs_admin();
        this.created_at = user.getCreated_at();
        this.total_orders = total_orders;
    }

    public long getTotalOrdersCount() {
        return totalOrdersCount;
    }

    public void setTotalOrdersCount(long totalOrdersCount) {
        this.totalOrdersCount = totalOrdersCount;
    }

    public List<OrderAdminDTO> getOrders() {
        return orders;
    }

    public void setOrders(List<OrderAdminDTO> orders) {
        this.orders = orders;
    }

    public int getTotal_orders() {
        return total_orders;
    }

    public void setTotal_orders(int total_orders) {
        this.total_orders = total_orders;
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
