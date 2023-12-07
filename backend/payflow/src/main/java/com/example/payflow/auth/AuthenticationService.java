package com.example.payflow.auth;

import com.example.payflow.config.JwtService;
import com.example.payflow.user.Role;
import com.example.payflow.user.User;
import com.example.payflow.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager manager;
    public AuthenticationRespone register(RegisterRequest request) {
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .login(request.getLogin())
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
}
