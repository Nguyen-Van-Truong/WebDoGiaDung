package com.example.demo.repository;

import com.example.demo.model.Payments;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PaymentRepository extends JpaRepository<Payments, Integer> {

    Optional<Payments> findById(int integer);
}
