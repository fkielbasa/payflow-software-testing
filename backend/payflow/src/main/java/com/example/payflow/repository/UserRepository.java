package com.example.payflow.repository;

import com.example.payflow.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByLogin(String login);
    List<User> findAll();

    @Query("SELECT EXISTS (SELECT 1 FROM User WHERE login = ?1)")
    boolean isUserExists(String login);

    Long getUserIdByLogin(String login);
}
