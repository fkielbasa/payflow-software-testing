package com.example.payflow.security;

import com.example.payflow.model.User;
import com.example.payflow.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
<<<<<<< Updated upstream

/**
 * Serwis do obsługi tokenów JWT.
 */

=======
/**
 * Service for handling JWT (JSON Web Token) operations.
 */
>>>>>>> Stashed changes
@Service
@RequiredArgsConstructor
public class JwtService {

    private final UserRepository repository;

    @Value("${jwt.secret_key}")
    private String SECRET_KEY;
    @Value("${jwt.expiration}")
    private Long EXPIRATION_TIME;
<<<<<<< Updated upstream


    /**
     * Wyodrębnia nazwę użytkownika z tokena JWT.
     *
     * @param token Token JWT.
     * @return Nazwa użytkownika.
=======
    /**
     * Extracts the username from the JWT token.
     *
     * @param token JWT token
     * @return Username extracted from the token
>>>>>>> Stashed changes
     */
    public String extractUserLogin(String token) {
        return extractClaim(token, Claims::getSubject);
    }
<<<<<<< Updated upstream

    /**
     * Wyodrębnia dowolny element z tokena JWT.
     *
     * @param token          Token JWT.
     * @param claimsResolver Funkcja rozwiązująca elementy tokena.
     * @param <T>            Typ elementu.
     * @return Wyodrębniony element.
=======
    /**
     * Extracts a specific claim from the JWT token.
     *
     * @param token          JWT token
     * @param claimsResolver Function to resolve the claim
     * @param <T>            Type of the claim
     * @return Resolved claim
>>>>>>> Stashed changes
     */
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
<<<<<<< Updated upstream

    /**
     * Generuje token JWT na podstawie szczegółów użytkownika.
     *
     * @param userDetails Szczegóły użytkownika.
     * @return Wygenerowany token JWT.
=======
    /**
     * Generates a JWT token for the given UserDetails.
     *
     * @param userDetails UserDetails object
     * @return Generated JWT token
>>>>>>> Stashed changes
     */
    public String generateToken(
            UserDetails userDetails
    ){
        return generateToken(new HashMap<>(), userDetails);
    }
    /**
<<<<<<< Updated upstream
     * Generuje token JWT na podstawie dodatkowych atrybutów i szczegółów użytkownika.
     *
     * @param extraClaims   Dodatkowe atrybuty tokena.
     * @param userDetails   Szczegóły użytkownika.
     * @return Wygenerowany token JWT.
=======
     * Generates a JWT token with extra claims for the given UserDetails.
     *
     * @param extraClaims   Extra claims to be added to the token
     * @param userDetails   UserDetails object
     * @return Generated JWT token
>>>>>>> Stashed changes
     */
    public String generateToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails
    ){
        User user = repository.findByLogin(userDetails.getUsername()).get();
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .claim("userId",user.getId().toString())
                .claim("login",user.getLogin())
                .claim("name",user.getFirstName())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }
    /**
<<<<<<< Updated upstream
     * Sprawdza, czy token JWT jest ważny dla danego użytkownika.
     *
     * @param token        Token JWT.
     * @param userDetails Szczegóły użytkownika.
     * @return true, jeśli token jest ważny; w przeciwnym razie false.
=======
     * Checks if a JWT token is valid for the given UserDetails.
     *
     * @param token        JWT token
     * @param userDetails  UserDetails object
     * @return True if the token is valid, false otherwise
>>>>>>> Stashed changes
     */
    public Boolean isTokenValid(String token, UserDetails userDetails){
        final String userLogin = extractUserLogin(token);
        return (userLogin.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private Claims extractAllClaims(String token){
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes );
    }
}
