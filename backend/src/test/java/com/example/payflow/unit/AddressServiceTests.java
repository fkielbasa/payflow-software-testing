package com.example.payflow.unit;

import com.example.payflow.dto.AddressDTO;
import com.example.payflow.model.Address;
import com.example.payflow.model.AddressType;
import com.example.payflow.model.User;
import com.example.payflow.repository.AddressRepository;
import com.example.payflow.repository.UserRepository;
import com.example.payflow.service.AddressService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class AddressServiceTests {

    @Mock
    private AddressRepository addressRepository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private AddressService addressService;

    @Test
    void givenExistingUser_whenChangingResidentialAddress_thenAddressIsUpdated() {
        // Given
        Long userId = 1L;
        AddressType addressType = AddressType.RESIDENTIAL;

        AddressDTO address = new AddressDTO("23A", "Tarnow", "Poland", "21", "Krakowska", "33-100");
        Address residentialAddress = Address.builder()
                .street("Krakowska")
                .houseNumber("10")
                .apartmentNumber("12")
                .zipCode("33-100")
                .city("Tarnow")
                .country("Poland")
                .build();

        User user = User.builder()
                .id(userId)
                .residentialAddress(residentialAddress)
                .correspondenceAddress(null)
                .build();

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(addressRepository.save(any(Address.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // When
        Address newAddress = addressService.changeUserAddress(userId, addressType, address);

        // Then
        assertNotNull(newAddress);
        assertEquals(address.getStreet(), newAddress.getStreet());
        assertEquals(address.getHouseNumber(), newAddress.getHouseNumber());
        assertEquals(address.getApartmentNumber(), newAddress.getApartmentNumber());
        assertEquals(address.getZipCode(), newAddress.getZipCode());
        assertEquals(address.getCity(), newAddress.getCity());
        assertEquals(address.getCountry(), newAddress.getCountry());

        verify(addressRepository).save(residentialAddress);
        verify(userRepository).findById(userId);
    }
}
