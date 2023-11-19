package com.example.payflow.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {

//    @Value("${secret_key}")
    private static final String SECRET_KEY = "TrFK2COp+8CP6b/FMMC6MmSgU5buUJPE4PU+AaaSiOGn+3uBADvpxk6P2BIE6Nl+NqpmnQKtfyetAcs2XyvRTL4FgJzZFw7nU7y+rnRfHDuJakVaXoywep2JIyzgk0hYUHF36lNOEVzepmdt9VOp++MqRZwTQ5IWSzHotimo9Gm+X0Nuup4zGFT/JCAm6m2TES8wSoaswpEFUfQKDr+NJ4vVnDsytbdunBT/HXaFHe5xL1JkAWbKVJn7ahNkBnhWLOYEqhOU4iYoJC5H6s6lD4T0CNtkrSiruiSQrWqf/UXmlxehGuVeZV3xtlDYjE/hbgO08VlH1qQf9nVFpqGBsVpOd+PU/0VGqeoBmsLcSC4=";
    public String extractUserLogin(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String generateToken(
            UserDetails userDetails
    ){
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails
    ){
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 30))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

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
