package com.example.payflow.repository;

import com.example.payflow.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailsRepository extends JpaRepository<UserDetails,Long> {
    UserDetails findByPhoneNumber(String phoneNumber);
}
