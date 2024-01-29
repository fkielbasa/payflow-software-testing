package com.example.payflow.controller;

import com.example.payflow.dto.AddressDTO;
import com.example.payflow.model.Address;
import com.example.payflow.model.AddressType;
import com.example.payflow.service.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
/**
 * Controller class responsible for managing operations related to user addresses.
 * Handles HTTP requests for updating user addresses.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class AddressController {

    /**
     * Service for handling address operations.
     */
    private final AddressService addressService;

    /**
     * Updates the address of a user using a HTTP PUT request.
     *
     * @param id          User ID for whom to update the address.
     * @param addressType Type of the address to update (e.g., HOME, WORK).
     * @param address     AddressDTO containing the updated address details.
     * @return ResponseEntity with the updated Address if successful, else returns a 400 status.
     */
    @PutMapping("/user/{id}/address")
    public ResponseEntity<?> changeUserAddress(@PathVariable Long id, @RequestParam(name = "type", required = true) AddressType addressType, @RequestBody AddressDTO address){
        Address a = addressService.changeUserAddress(id,addressType,address);
        if(a != null){
            return ResponseEntity.ok().body(a);
        }
        return ResponseEntity.badRequest().build();
    }
}
