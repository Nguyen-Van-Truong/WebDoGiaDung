package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Fetch all users from the database
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Find a single user by ID
    public Optional<User> getUserById(int userId) {
        return userRepository.findById(userId);
    }

    // Save a new user to the database
    public User saveUser(User newUser) {
        return userRepository.save(newUser);
    }

    // Update an existing user
    public Optional<User> updateUser(int userId, User updatedUser) {
        return userRepository.findById(userId).map(user -> {
            user.setUsername(updatedUser.getUsername());
            user.setPassword(updatedUser.getPassword()); // Consider using a password encoder
            user.setEmail(updatedUser.getEmail());
            user.setFull_name(updatedUser.getFull_name());
            user.setAddress(updatedUser.getAddress());
            user.setIs_admin(updatedUser.isIs_admin());
            return userRepository.save(user);
        });
    }

    // Delete a user from the database
    public boolean deleteUser(int userId) {
        return userRepository.findById(userId).map(user -> {
            userRepository.delete(user);
            return true;
        }).orElse(false);
    }
}
