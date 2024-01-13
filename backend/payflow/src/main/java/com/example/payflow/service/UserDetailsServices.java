package com.example.payflow.service;

import com.example.payflow.dto.EmailDTO;
import com.example.payflow.dto.PhoneNumberDTO;
import com.example.payflow.model.User;
import com.example.payflow.model.UserDetails;
import com.example.payflow.repository.UserDetailsRepository;
import com.example.payflow.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserDetailsServices {

    private final UserDetailsRepository userDetailsRepository;
    private final UserRepository userRepository;


//    public UserDetails getUserDetailsById(Long id) {
//        return userDetailsRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("UserDetails not found"));
//    }
    public UserDetails changeUserEmail(Long id, EmailDTO email) {
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent() && isEmailValid(email.email())){
            UserDetails u = user.get().getUserDetails();
            u.setEmail(email.email());
            userDetailsRepository.save(u);
            return u;
        }
        return null;
    }
    public UserDetails changeUserPhoneNumber(Long id, PhoneNumberDTO number) {
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent() && isPhoneNumberValid(number.phoneNumber())){
            UserDetails u = user.get().getUserDetails();
            u.setPhoneNumber(number.phoneNumber());
            userDetailsRepository.save(u);
            return u;
        }
        return null;
    }
    private boolean isEmailValid(String email){
        return !userDetailsRepository.isEmailExists(email);
    }
    private boolean isPhoneNumberValid(String number){
        return !userDetailsRepository.isPhoneNumberExists(number);
    }
}
