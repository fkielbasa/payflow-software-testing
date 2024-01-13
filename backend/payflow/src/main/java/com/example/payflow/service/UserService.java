package com.example.payflow.service;

import com.example.payflow.dto.UserDTO;
import com.example.payflow.dto.mapper.UserDTOMapper;
import com.example.payflow.model.User;
import com.example.payflow.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserDTOMapper userDTOMapper;
public UserDTO getUserById(Long id) {
    return userRepository.findById(id)
            .map(userDTOMapper)
            .orElse(null);
}
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
                .map(userDTOMapper)
                .toList();
    }
}
