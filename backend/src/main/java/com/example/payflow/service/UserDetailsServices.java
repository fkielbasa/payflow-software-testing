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

/**
 * Service class for managing user details.
 */

@RequiredArgsConstructor
@Service
public class UserDetailsServices {

    private final UserDetailsRepository userDetailsRepository;
    private final UserRepository userRepository;


    /**
     * Changes the email address of a user.
     *
     * @param id    The ID of the user.
     * @param email The new email address.
     * @return The updated user details if successful, or null otherwise.
     */
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

    /**
     * Changes the phone number of a user.
     *
     * @param id     The ID of the user.
     * @param number The new phone number.
     * @return The updated user details if successful, or null otherwise.
     */
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
    /**
     * Checks if the provided email address is valid (i.e., not already in use).
     *
     * @param email The email address to validate.
     * @return true if the email is valid, false otherwise.
     */
    private boolean isEmailValid(String email){
        return !userDetailsRepository.isEmailExists(email);
    }
    /**
     * Checks if the provided phone number is valid (i.e., not already in use).
     *
     * @param number The phone number to validate.
     * @return true if the phone number is valid, false otherwise.
     */
    private boolean isPhoneNumberValid(String number){
        return !userDetailsRepository.isPhoneNumberExists(number);
    }
}
