package com.example.demo.repository;

import com.example.demo.dto.UserDTO;
import com.example.demo.model.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	User findFirstByEmail(String email);
    
	 @Query("SELECT u FROM User u WHERE u.email = :email AND u.password = :password")
	  Optional<User> login(@Param("email") String email, @Param("password") String password);
}
