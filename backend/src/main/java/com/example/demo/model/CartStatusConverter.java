package com.example.demo.model;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;



@Converter(autoApply = true)
public class CartStatusConverter implements AttributeConverter<CartStatus, String> {

    @Override
    public String convertToDatabaseColumn(CartStatus attribute) {
        return attribute == null ? null : attribute.toString();
    }

    @Override
    public CartStatus convertToEntityAttribute(String dbData) {
        if (dbData == null) return null;
        return CartStatus.fromString(dbData);
    }
}
