package com.example.demo.repository;

import com.example.demo.model.User;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findFirstByEmail(String email);

    Optional<User> findById(int id);

    /**
     * @param email
     * @param password
     * @return
     */

    @Query("SELECT u FROM User u WHERE u.email = :email AND u.password = :password")
    Optional<User> login(@Param("email") String email, @Param("password") String password);

    /**
     * lay id nguoi dung dua theo mail
     */
    @Query("SELECT u.user_id FROM User u WHERE u.email = :email")
    int findBy(@Param("email") String email);

    @Query("SELECT COUNT(u) FROM User u WHERE u.is_admin = true")
    Long findTotalAdminUsers();

	@Query("SELECT COUNT(u) FROM User u WHERE u.is_admin = false")
	Long findTotalRegularUsers();

	@Query("SELECT u FROM User u WHERE u.email LIKE %:email%")
	Page<User> findByEmailContaining(@Param("email") String email, Pageable pageable);

    /**
     * lay id cua admin
     */
    @Query("SELECT u FROM User u WHERE u.username = 'admin'")
    Optional<User> getUserAdmin();

    Optional<User> findByUsername(String username);
    @Query("SELECT u.user_id FROM User u WHERE u.username = 'admin'")
    int id_admin();
}
