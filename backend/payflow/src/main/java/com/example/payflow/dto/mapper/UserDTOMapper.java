package com.example.payflow.dto.mapper;

import com.example.payflow.dto.UserDTO;
import com.example.payflow.model.User;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class UserDTOMapper implements Function<User, UserDTO> {

    @Override
    public UserDTO apply(User user) {
        return new UserDTO(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getNationality(),
                user.getDateOfBirth(),
                user.getLogin(),
                user.getUserDetails().getEmail(),
                user.getUserDetails().getPhoneNumber(),
                user.getResidentialAddress(),
                user.getCorrespondenceAddress()
        );
    }
}
