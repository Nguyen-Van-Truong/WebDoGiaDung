package com.example.demo.repository;

import com.example.demo.model.InventoryTransactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryTransactionsRepository extends JpaRepository<InventoryTransactions, Long> {
    // Add any custom query methods if needed
}
