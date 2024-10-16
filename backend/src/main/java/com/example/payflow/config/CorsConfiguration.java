package com.example.payflow.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
/**
 * Configuration class for CORS (Cross-Origin Resource Sharing) settings.
 */
@Configuration
@EnableWebMvc
public class CorsConfiguration {
    /**
     * Bean for configuring CORS.
     *
     * @return WebMvcConfigurer bean
     */
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry
                        .addMapping("/**")
                        .allowedOriginPatterns("*")
                        .allowedMethods("*")
                        .allowedHeaders("*")
                        .exposedHeaders("Vary")
                        .allowCredentials(true)
                        .maxAge(3600);;


            }
        };
    }
}
