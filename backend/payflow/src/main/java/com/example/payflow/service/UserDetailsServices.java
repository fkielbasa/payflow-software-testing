package com.example.payflow.service;

import com.example.payflow.user_details.UserDetails;
import com.example.payflow.user_details.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServices {

    private final UserDetailsRepository userDetailsRepository;

    @Autowired
    public UserDetailsServices(UserDetailsRepository userDetailsRepository) {
        this.userDetailsRepository = userDetailsRepository;
    }

    public UserDetails getUserDetailsById(Long id) {
        return userDetailsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("UserDetails not found"));
    }

}
