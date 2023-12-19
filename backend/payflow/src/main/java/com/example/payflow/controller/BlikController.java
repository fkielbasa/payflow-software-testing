package com.example.payflow.controller;


import com.example.payflow.model.Blik;
import com.example.payflow.service.BlikService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/blik")
public class BlikController {

    private final BlikService service;


    @GetMapping
    public Blik getBlikCode(){
        return service.getBlikCode();
    }
}
