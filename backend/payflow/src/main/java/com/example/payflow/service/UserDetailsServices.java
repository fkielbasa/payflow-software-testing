package com.example.payflow.service;

import com.example.payflow.DTO.UserDetailsDTO;
import com.example.payflow.user_details.UserDetails;
import com.example.payflow.user_details.UserDetailsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserDetailsServices {

    private final UserDetailsRepository userDetailsRepository;

    public void saveUserDetails(UserDetailsDTO userDetailsDTO) {
        UserDetails userDetails = new UserDetails();
        userDetails.setEmail(userDetailsDTO.getEmail());
        userDetails.setPhoneNumber(userDetailsDTO.getPhoneNumber());
        userDetailsRepository.save(userDetails);
    }

    public UserDetails getUserDetailsById(Long id) {
        return userDetailsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("UserDetails not found"));
    }

}
