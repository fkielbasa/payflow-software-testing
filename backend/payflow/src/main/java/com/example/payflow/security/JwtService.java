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

/**
 * Serwis do obsługi tokenów JWT.
 */

@Service
@RequiredArgsConstructor
public class JwtService {

    private final UserRepository repository;

    @Value("${jwt.secret_key}")
    private String SECRET_KEY;
    @Value("${jwt.expiration}")
    private Long EXPIRATION_TIME;


    /**
     * Wyodrębnia nazwę użytkownika z tokena JWT.
     *
     * @param token Token JWT.
     * @return Nazwa użytkownika.
     */
    public String extractUserLogin(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    /**
     * Wyodrębnia dowolny element z tokena JWT.
     *
     * @param token          Token JWT.
     * @param claimsResolver Funkcja rozwiązująca elementy tokena.
     * @param <T>            Typ elementu.
     * @return Wyodrębniony element.
     */
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    /**
     * Generuje token JWT na podstawie szczegółów użytkownika.
     *
     * @param userDetails Szczegóły użytkownika.
     * @return Wygenerowany token JWT.
     */
    public String generateToken(
            UserDetails userDetails
    ){
        return generateToken(new HashMap<>(), userDetails);
    }
    /**
     * Generuje token JWT na podstawie dodatkowych atrybutów i szczegółów użytkownika.
     *
     * @param extraClaims   Dodatkowe atrybuty tokena.
     * @param userDetails   Szczegóły użytkownika.
     * @return Wygenerowany token JWT.
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
     * Sprawdza, czy token JWT jest ważny dla danego użytkownika.
     *
     * @param token        Token JWT.
     * @param userDetails Szczegóły użytkownika.
     * @return true, jeśli token jest ważny; w przeciwnym razie false.
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
