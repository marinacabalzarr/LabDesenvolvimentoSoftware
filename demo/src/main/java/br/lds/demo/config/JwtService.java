package br.lds.demo.config;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import br.lds.demo.model.Agente;
import br.lds.demo.model.Usuario;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

// config/JwtService.java
@Service
public class JwtService {
    
    private final String SECRET_KEY = "sua_chave_secreta_muito_segura";
    private final long EXPIRATION_TIME = 864_000_000; // 10 dias
    
    public String generateToken(Usuario usuario) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("sub", usuario.getEmail());
        claims.put("id", usuario.getId());
        claims.put("tipo", usuario.getTipo().name());
        
        if (usuario instanceof Agente) {
            claims.put("tipoAgente", ((Agente) usuario).getTipo().name());
        }
        
        return Jwts.builder()
            .setClaims(claims)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
            .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
            .compact();
    }
    
    public String getEmailFromToken(String token) {
        return Jwts.parser()
            .setSigningKey(SECRET_KEY)
            .parseClaimsJws(token)
            .getBody()
            .getSubject();
    }
    
    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
