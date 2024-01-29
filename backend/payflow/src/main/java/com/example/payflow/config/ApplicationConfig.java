package com.example.payflow.config;

import com.example.payflow.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
/**
 * Konfiguracja aplikacji Spring Security.
 */
@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {

    private final UserRepository repository;
    /**
     * Tworzy serwis obsługujący szczegóły użytkowników.
     *
     * @return Serwis obsługujący szczegóły użytkowników.
     */
    @Bean
    public UserDetailsService userDetailsService(){
        return username -> repository.findByLogin(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
    /**
     * Tworzy dostawcę uwierzytelniania.
     *
     * @return Dostawca uwierzytelniania.
     */
    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }
    /**
     * Tworzy menedżera uwierzytelniania.
     *
     * @param config Obiekt konfiguracji uwierzytelniania.
     * @return Menedżer uwierzytelniania.
     * @throws Exception Jeśli wystąpi błąd podczas uzyskiwania menedżera uwierzytelniania.
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
    /**
     * Tworzy enkoder hasła.
     *
     * @return Enkoder hasła.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
