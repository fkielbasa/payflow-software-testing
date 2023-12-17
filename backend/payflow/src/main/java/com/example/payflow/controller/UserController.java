package com.example.payflow.controller;

import com.example.payflow.service.UserService;
import com.example.payflow.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class UserController {

    private final UserService userService;

    @GetMapping("/users/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        User user = userService.getUserById(userId);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

//    @PostMapping("/createUser")
//    public ResponseEntity<String> createUser(@RequestBody UserDTO userDTO,
//                                                            @RequestBody AddressDTO addressDTO,
//                                                            @RequestBody UserDetailsDTO userDetailsDTO) {
//        userService.saveUser(userDTO);
//        addressService.saveAddress(addressDTO);
//        userDetailsService.saveUserDetails(userDetailsDTO);
//        return ResponseEntity.ok("OK");
//    }
}
