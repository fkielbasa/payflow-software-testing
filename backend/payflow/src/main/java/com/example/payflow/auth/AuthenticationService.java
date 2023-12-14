package com.example.payflow.auth;

import com.example.payflow.address.Address;
import com.example.payflow.config.JwtService;
import com.example.payflow.user.Role;
import com.example.payflow.user.User;
import com.example.payflow.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager manager;
    public AuthenticationRespone register(RegisterRequest request) {

        var residentalAddress = Address.builder()
                .zipCode(request.getZipCode())
                .city(request.getCity())
                .street(request.getStreet())
                .houseNumber(request.getHomeNumber())
                .apartmentNumber(request.getApartmentNumber())
                .build();

        var correspondenceAddress = Address.builder()
                .zipCode(request.getZipCodeCorrespondence())
                .city(request.getCityCorrespondence())
                .street(request.getStreetCorrespondence())
                .houseNumber(request.getHomeNumberCorrespondence())
                .apartmentNumber(request.getApartmentNumberCorrespondence())
                .build();


        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .login(generateLogin())
                .residentialAddress(residentalAddress)
                .correspondenceAddress(correspondenceAddress)
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();


        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationRespone.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationRespone authenticate(AuthenticationRequest request) {
        System.out.println("test");
        manager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getLogin(),
                        request.getPassword()
                )
        );
        System.out.println("1");
        var user = repository.findByLogin(request.getLogin())
                .orElseThrow();
        System.out.println("2");
        var jwtToken = jwtService.generateToken(user);
        System.out.println("3");
        return AuthenticationRespone.builder()
                .token(jwtToken)
                .build();
    }

    private String generateLogin(){
        Random random = new Random();
        StringBuilder login = new StringBuilder();

        for (int i = 0; i < 8; i++) {
            int randomNumber = random.nextInt(10); // 0-9
            login.append(randomNumber);
        }
        if (isLoginValid(login.toString())){
            generateLogin();
        }
        return login.toString();
    }

    private boolean isLoginValid(String login){
        return !repository.isUserExists(login);
    }
}
