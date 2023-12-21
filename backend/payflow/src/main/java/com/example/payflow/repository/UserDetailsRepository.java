package com.example.payflow.repository;

import com.example.payflow.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserDetailsRepository extends JpaRepository<UserDetails,Long> {
    UserDetails findByPhoneNumber(String phoneNumber);

    @Query("SELECT EXISTS (SELECT 1 FROM UserDetails WHERE phoneNumber = ?1)")
    boolean isPhoneNumberExists(String phoneNumber);

    @Query("SELECT EXISTS (SELECT 1 FROM UserDetails WHERE email = ?1)")
    boolean isEmailExists(String email);
}
