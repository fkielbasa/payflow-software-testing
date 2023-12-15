package com.example.payflow.controller;

import com.example.payflow.DTO.AddressDTO;
import com.example.payflow.DTO.UserDTO;
import com.example.payflow.DTO.UserDetailsDTO;
import com.example.payflow.auth.AuthenticationService;
import com.example.payflow.service.AddressService;
import com.example.payflow.service.UserDetailsServices;
import com.example.payflow.service.UserService;
import com.example.payflow.user.User;
import com.example.payflow.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/auth")
public class UserController {
    private final UserRepository userRepository;
    private final UserService userService;
    private final AddressService addressService;
    private final UserDetailsServices userDetailsService;

    @GetMapping("/users/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        User user = userService.getUserById(userId);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Autowired
    public UserController(UserRepository userRepository, UserService userService, AddressService addressService, UserDetailsServices userDetailsService) {
        this.userRepository = userRepository;
        this.userService = userService;
        this.addressService = addressService;
        this.userDetailsService = userDetailsService;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public AuthenticationService service;

    @PostMapping("/createUser")
    public ResponseEntity<String> createUser(@RequestBody UserDTO userDTO,
                                                            @RequestBody AddressDTO addressDTO,
                                                            @RequestBody UserDetailsDTO userDetailsDTO) {
        userService.saveUser(userDTO);
        addressService.saveAddress(addressDTO);
        userDetailsService.saveUserDetails(userDetailsDTO);
        return ResponseEntity.ok("OK");
    }
}
