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
<<<<<<< Updated upstream
 * Konfiguracja aplikacji Spring Security.
=======
 * Configuration class for application settings.
>>>>>>> Stashed changes
 */
@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {

    private final UserRepository repository;
    /**
<<<<<<< Updated upstream
     * Tworzy serwis obsługujący szczegóły użytkowników.
     *
     * @return Serwis obsługujący szczegóły użytkowników.
=======
     * Bean for retrieving user details.
     *
     * @return UserDetailsService bean
>>>>>>> Stashed changes
     */
    @Bean
    public UserDetailsService userDetailsService(){
        return username -> repository.findByLogin(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
    /**
<<<<<<< Updated upstream
     * Tworzy dostawcę uwierzytelniania.
     *
     * @return Dostawca uwierzytelniania.
=======
     * Bean for providing authentication.
     *
     * @return AuthenticationProvider bean
>>>>>>> Stashed changes
     */
    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }
    /**
<<<<<<< Updated upstream
     * Tworzy menedżera uwierzytelniania.
     *
     * @param config Obiekt konfiguracji uwierzytelniania.
     * @return Menedżer uwierzytelniania.
     * @throws Exception Jeśli wystąpi błąd podczas uzyskiwania menedżera uwierzytelniania.
=======
     * Bean for retrieving the authentication manager.
     *
     * @param config Authentication configuration
     * @return AuthenticationManager bean
     * @throws Exception if an error occurs while retrieving the authentication manager
>>>>>>> Stashed changes
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
    /**
<<<<<<< Updated upstream
     * Tworzy enkoder hasła.
     *
     * @return Enkoder hasła.
=======
     * Bean for encoding passwords.
     *
     * @return PasswordEncoder bean
>>>>>>> Stashed changes
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
