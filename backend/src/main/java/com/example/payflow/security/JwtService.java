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
 * Service for handling JWT (JSON Web Token) operations.
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
     * Extracts the username from the JWT token.
     *
     * @param token JWT token
     * @return Username extracted from the token
     */
    public String extractUserLogin(String token) {
        return extractClaim(token, Claims::getSubject);
    }



    /**
     * Extracts a specific claim from the JWT token.
     *
     * @param token          JWT token
     * @param claimsResolver Function to resolve the claim
     * @param <T>            Type of the claim
     * @return Resolved claim
     */
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }



    /**
     * Generates a JWT token for the given UserDetails.
     *
     * @param userDetails UserDetails object
     * @return Generated JWT token
     */
    public String generateToken(
            UserDetails userDetails
    ){
        return generateToken(new HashMap<>(), userDetails);
    }
    /**
     * Generates a JWT token with extra claims for the given UserDetails.
     *
     * @param extraClaims   Extra claims to be added to the token
     * @param userDetails   UserDetails object
     * @return Generated JWT token
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
     * Checks if a JWT token is valid for the given UserDetails.
     *
     * @param token        JWT token
     * @param userDetails  UserDetails object
     * @return True if the token is valid, false otherwise
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
