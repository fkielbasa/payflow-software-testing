package com.example.payflow.controller;

import com.example.payflow.dto.AddressDTO;
import com.example.payflow.model.Address;
import com.example.payflow.model.AddressType;
import com.example.payflow.service.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class AddressController {

    private final AddressService addressService;

    @PutMapping("/user/{id}/address")
    public ResponseEntity<?> changeUserAddress(@PathVariable Long id, @RequestParam(name = "type", required = true) AddressType addressType, @RequestBody AddressDTO address){
        Address a = addressService.changeUserAddress(id,addressType,address);
        if(a != null){
            return ResponseEntity.ok().body(a);
        }
        return ResponseEntity.badRequest().build();
    }
}
