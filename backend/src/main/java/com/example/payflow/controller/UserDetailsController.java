package com.example.payflow.controller;

import com.example.payflow.dto.EmailDTO;
import com.example.payflow.dto.PhoneNumberDTO;
import com.example.payflow.service.UserDetailsServices;
import com.example.payflow.model.UserDetails;
import lombok.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
/**
 * Controller class responsible for managing operations related to user details.
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class UserDetailsController {

    /**
     * Service for handling user details operations.
     */
    private final UserDetailsServices userDetailsServices;

    /**
     * Changes the email for a user using a HTTP PATCH request.
     *
     * @param id    User ID for whom to change the email.
     * @param email EmailDTO containing the new email.
     * @return ResponseEntity with a success message if the email is successfully changed, else returns a 400 status.
     */
    @PatchMapping("/user/{id}/email")
    public ResponseEntity<?> changeUserEmail(@PathVariable Long id, @RequestBody EmailDTO email){
        UserDetails userDetails = userDetailsServices.changeUserEmail(id,email);
        if(userDetails != null)
            return new ResponseEntity("Email successfully changed.", HttpStatus.OK);
        return new ResponseEntity("Invalid body or email already exists.",HttpStatus.BAD_REQUEST);
    }

    /**
     * Changes the phone number for a user using a HTTP PATCH request.
     *
     * @param id     User ID for whom to change the phone number.
     * @param number PhoneNumberDTO containing the new phone number.
     * @return ResponseEntity with a success message if the phone number is successfully changed, else returns a 400 status.
     */
    @PatchMapping("/user/{id}/phone-number")
    public ResponseEntity<?> changeUserPhoneNumber(@PathVariable Long id, @RequestBody PhoneNumberDTO number){
        UserDetails userDetails = userDetailsServices.changeUserPhoneNumber(id,number);
        if(userDetails != null)
            return new ResponseEntity("Phone number successfully changed.", HttpStatus.OK);
        return new ResponseEntity("Invalid body or phone number already exists.",HttpStatus.BAD_REQUEST);
    }
}
