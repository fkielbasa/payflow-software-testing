package com.example.payflow.controller;

import com.example.payflow.dto.UserDTO;
import com.example.payflow.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class UserController {

    private final UserService userService;

    @GetMapping("/users/{id}")
    public ResponseEntity<List<UserDTO>> getUserById(@PathVariable Long userId) {
        List<UserDTO> user = userService.getUserById(userId);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/users")
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }


}
