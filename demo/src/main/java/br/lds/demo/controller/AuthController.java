package br.lds.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.lds.demo.dto.ClienteDTO;
import br.lds.demo.dto.LoginDTO;
import br.lds.demo.service.AuthService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

// controller/AuthController.java
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @Autowired
    private AuthService authService;
    
    @PostMapping("/registrar")
    public ResponseEntity<String> registrarCliente(@RequestBody ClienteDTO clienteDTO) {
        try {
            String token = authService.registrarCliente(clienteDTO);
            return ResponseEntity.ok(token);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    @PostMapping("/login")
    public ResponseEntity<String> autenticar(@RequestBody LoginDTO loginDTO) {
        try {
            String token = authService.autenticar(loginDTO.getEmail(), loginDTO.getSenha());
            return ResponseEntity.ok(token);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}