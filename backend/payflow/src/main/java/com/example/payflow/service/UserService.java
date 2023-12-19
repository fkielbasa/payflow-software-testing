package com.example.payflow.service;

import com.example.payflow.dto.UserDTO;
import com.example.payflow.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
//    public User getUserById(Long userId) {
//        return userRepository.findById(userId).orElse(null);
//    }
    public List<UserDTO> getUserById(Long userId) {
        return  userRepository.findById(userId).stream()
                .map(user -> new UserDTO(user.getId(),user.getFirstName(),user.getLastName(),user.getNationality(),
                        user.getDateOfBirth(),user.getLogin(), user.getUserDetails().getEmail(),
                        user.getUserDetails().getPhoneNumber(), user.getCorrespondenceAddress(),user.getResidentialAddress()))
                .toList();
    }

    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
                .map(user -> new UserDTO(user.getId(),user.getFirstName(),user.getLastName(),user.getNationality(),
                        user.getDateOfBirth(),user.getLogin(), user.getUserDetails().getEmail(),
                        user.getUserDetails().getPhoneNumber(), user.getCorrespondenceAddress(),user.getResidentialAddress()))
                .toList();
    }
}
