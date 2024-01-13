package com.example.payflow.controller;

import com.example.payflow.dto.PasswordDTO;
import com.example.payflow.dto.UserDTO;
import com.example.payflow.model.User;
import com.example.payflow.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class UserController {

    private final UserService userService;

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        UserDTO user = userService.getUserById(id);
        if(user != null)
            return ResponseEntity.ok(user);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/users")
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    @PatchMapping("/user/{id}/password")
    public ResponseEntity<?> changeUserPassword(@PathVariable Long id, @RequestBody PasswordDTO password){
        UserDTO user = userService.changeUserPassword(id,password);
        if(user != null)
            return new ResponseEntity("Password successfully changed.", HttpStatus.OK);
        return ResponseEntity.badRequest().build();
    }
}
