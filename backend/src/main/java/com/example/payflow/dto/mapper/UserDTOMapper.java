package com.example.payflow.dto.mapper;

import com.example.payflow.dto.UserDTO;
import com.example.payflow.model.User;
import org.springframework.stereotype.Service;

import java.util.function.Function;
/**
 * Service class responsible for mapping a User entity to a UserDTO.
 *
 * This class implements the Function interface for functional mapping.
 * It converts a User entity to a UserDTO, preserving essential details.
 */
@Service
public class UserDTOMapper implements Function<User, UserDTO> {

    /**
     * Maps a User entity to a UserDTO.
     *
     * @param user The User entity to be mapped.
     * @return UserDTO containing essential details about the user.
     */
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
