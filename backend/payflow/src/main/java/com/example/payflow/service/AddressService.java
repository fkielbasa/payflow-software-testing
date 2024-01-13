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

@RequiredArgsConstructor
@Service
public class AddressService {

    private final AddressRepository addressRepository;
    private final UserRepository userRepository;

    public Address changeUserAddress(Long id, AddressType addressType, AddressDTO address) {
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            User u = user.get();
            switch (addressType){
                case RESIDENTIAL -> {
                    Address a = u.getResidentialAddress();
                    a.setStreet(address.getStreet());
                    a.setHouseNumber(address.getHouseNumber());
                    a.setHouseNumber(address.getHouseNumber());
                    a.setZipCode(address.getZipCode());
                    a.setCity(address.getCity());
                    a.setCountry(address.getCountry());
                    addressRepository.save(a);
                    return a;
                }
                case CORRESPONDENCE -> {
                    Address a = u.getCorrespondenceAddress();
                    a.setStreet(address.getStreet());
                    a.setHouseNumber(address.getHouseNumber());
                    a.setHouseNumber(address.getHouseNumber());
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
