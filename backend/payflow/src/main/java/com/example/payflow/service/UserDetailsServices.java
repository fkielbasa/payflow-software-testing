package com.example.payflow.service;

import com.example.payflow.model.UserDetails;
import com.example.payflow.repository.UserDetailsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserDetailsServices {

    private final UserDetailsRepository userDetailsRepository;


    public UserDetails getUserDetailsById(Long id) {
        return userDetailsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("UserDetails not found"));
    }

}
