package until;

import com.example.demo.dto.OrderAdminDTO;
import com.example.demo.model.*;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class OrderConverter {

    public OrderAdminDTO convertToOrderAdminDTO(Orders order) {
        OrderAdminDTO dto = new OrderAdminDTO();
        dto.setOrderId(order.getOrderId());
        dto.setOrderDate(order.getOrderDate());
        dto.setStatus(order.getStatus());
        dto.setTotal(order.getTotal());
        dto.setShippingAddress(order.getShippingAddress());
        dto.setUser(convertUserToDTO(order.getUser()));
        dto.setOrderDetails(order.getOrderDetails().stream()
                .map(this::convertOrderDetailToDTO)
                .collect(Collectors.toList()));
        return dto;
    }

    private OrderAdminDTO.UserDTO convertUserToDTO(User user) {
        OrderAdminDTO.UserDTO dto = new OrderAdminDTO.UserDTO();
        dto.setUserId(user.getUser_id());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        dto.setFullName(user.getFull_name());
        return dto;
    }

    private OrderAdminDTO.OrderDetailDTO convertOrderDetailToDTO(OrderDetails orderDetail) {
        OrderAdminDTO.OrderDetailDTO dto = new OrderAdminDTO.OrderDetailDTO();
        dto.setOrderDetailId(orderDetail.getOrderDetailId());
        dto.setProduct(convertProductToDTO(orderDetail.getProduct()));
        dto.setQuantity(orderDetail.getQuantity());
        dto.setPrice(orderDetail.getPrice());
        return dto;
    }

    private OrderAdminDTO.ProductDTO convertProductToDTO(Products product) {
        OrderAdminDTO.ProductDTO dto = new OrderAdminDTO.ProductDTO();
        dto.setProductId(product.getProduct_id());
        dto.setProductName(product.getProduct_name());
        dto.setPrice(product.getPrice());
        dto.setImageUrl(product.getMedias().stream()
                .findFirst()
                .map(Medias::getFile_url)
                .orElse(null));
        return dto;
    }
}
