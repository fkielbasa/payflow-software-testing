package com.example.payflow.service;

import com.example.payflow.dto.AddressDTO;
import com.example.payflow.model.Address;
import com.example.payflow.model.AddressType;
import com.example.payflow.model.User;
import com.example.payflow.repository.AddressRepository;
import com.example.payflow.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.Optional;
/**
 * Service class responsible for handling operations related to user addresses.
 *
 * This service provides methods for changing the residential or correspondence address of a user.
 */
@RequiredArgsConstructor
@Service
public class AddressService {

    private final AddressRepository addressRepository;
    private final UserRepository userRepository;

    /**
     * Changes the user's residential or correspondence address based on the provided parameters.
     *
     * @param id           The ID of the user whose address needs to be changed.
     * @param addressType  The type of address to be changed (RESIDENTIAL or CORRESPONDENCE).
     * @param address      The new address details provided as an AddressDTO.
     * @return The updated Address entity after the change, or null if the user with the given ID is not found.
     */
    public Address changeUserAddress(Long id, AddressType addressType, AddressDTO address) {
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            User u = user.get();
            switch (addressType){
                case RESIDENTIAL -> {
                    Address a = u.getResidentialAddress();
                    a.setStreet(address.getStreet());
                    a.setHouseNumber(address.getHouseNumber());
                    a.setApartmentNumber(address.getApartmentNumber());
                    a.setZipCode(address.getZipCode());
                    a.setCity(address.getCity());
                    a.setCountry(address.getCountry());
                    addressRepository.save(a);
                    System.out.println(addressType + "ge");
                    return a;
                }
                case CORRESPONDENCE -> {
                    System.out.println(addressType + "qweq");
                    Address a = u.getCorrespondenceAddress();
                    a.setStreet(address.getStreet());
                    a.setHouseNumber(address.getHouseNumber());
                    a.setApartmentNumber(address.getApartmentNumber());
                    a.setZipCode(address.getZipCode());
                    a.setCity(address.getCity());
                    a.setCountry(address.getCountry());
                    addressRepository.save(a);
                    return a;
                }
            }
        }
        return null;
    }
}
