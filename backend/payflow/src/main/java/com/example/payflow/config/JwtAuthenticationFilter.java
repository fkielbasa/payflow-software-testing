package com.example.payflow.config;

import com.example.payflow.security.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
<<<<<<< Updated upstream

/**
 * Filtr do uwierzytelniania żądań przy użyciu tokenów JWT.
 */

=======
/**
 * Filter for JWT authentication.
 */
>>>>>>> Stashed changes
@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
<<<<<<< Updated upstream

    /**
     * Filtruje żądanie w celu uwierzytelnienia przy użyciu tokenu JWT.
     *
     * @param request     Żądanie HTTP.
     * @param response    Odpowiedź HTTP.
     * @param filterChain Łańcuch filtrów.
     * @throws ServletException Jeśli wystąpi błąd podczas przetwarzania żądania.
     * @throws IOException      Jeśli wystąpi błąd wejścia/wyjścia.
=======
    /**
     * Performs the actual filter logic.
     *
     * @param request     HTTP servlet request
     * @param response    HTTP servlet response
     * @param filterChain filter chain for invoking next filters
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException      if an I/O error occurs during the filtering process
>>>>>>> Stashed changes
     */
    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userLogin;
        if (authHeader == null || !authHeader.startsWith("Bearer ")){
            filterChain.doFilter(request, response);
            return;
        }
        jwt = authHeader.substring(7);
        userLogin = jwtService.extractUserLogin(jwt);
        if (userLogin != null && SecurityContextHolder.getContext().getAuthentication() == null){
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(userLogin);
            if (jwtService.isTokenValid(jwt, userDetails)) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );
                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}
