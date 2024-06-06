package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class StatisticsDTO {
    private Double totalRevenue;
    private Long totalProductsSold;
    private Long totalOrders;
    private Long totalActiveCarts;
    private Long totalAdminUsers;
    private Long totalRegularUsers;
    private Long totalProducts;

}
