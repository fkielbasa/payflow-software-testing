package com.example.payflow.controller;

import com.example.payflow.dto.EmailDTO;
import com.example.payflow.service.UserDetailsServices;
import com.example.payflow.model.UserDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class UserDetailsController {

    private final UserDetailsServices userDetailsService;

//    @GetMapping("/users/{id}/details")
//    public ResponseEntity<UserDetails> getUserDetailsById(@PathVariable Long id) {
//        UserDetails userDetails = userDetailsService.getUserDetailsById(id);
//        return ResponseEntity.ok(userDetails);
//    }
    @PatchMapping("/user/{id}/change-email")
    public ResponseEntity<?> changeUserEmail(@PathVariable Long id, @RequestBody EmailDTO email){
        UserDetails userDetails = userDetailsService.changeUserEmail(id,email);
        if(userDetails != null)
            return new ResponseEntity("Email successfully changed.", HttpStatus.OK);
        return new ResponseEntity("Invalid body or email already exists.",HttpStatus.BAD_REQUEST);
    }
}
