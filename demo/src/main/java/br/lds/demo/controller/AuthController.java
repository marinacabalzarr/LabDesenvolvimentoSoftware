package br.lds.demo.controller;

import br.lds.demo.model.User;
import br.lds.demo.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();

        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            response.put("success", false);
            response.put("message", "E-mail já está em uso.");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);

        response.put("success", true);
        response.put("message", "Usuário registrado com sucesso.");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody User loginData) {
        Optional<User> optionalUser = userRepository.findByEmail(loginData.getEmail());
        Map<String, Object> response = new HashMap<>();

        if (optionalUser.isPresent() &&
            passwordEncoder.matches(loginData.getPassword(), optionalUser.get().getPassword())) {

            User user = optionalUser.get();
            response.put("success", true);
            response.put("name", user.getName());
            response.put("email", user.getEmail());
            response.put("id", user.getId());
            return ResponseEntity.ok(response);
        } else {
            response.put("success", false);
            response.put("message", "E-mail ou senha inválidos");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @PostMapping("/profile")
    public ResponseEntity<?> updateProfile(@RequestBody User updatedUser) {
        Optional<User> optionalUser = userRepository.findByEmail(updatedUser.getEmail());
    
        if (optionalUser.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado.");
        }
    
        User user = optionalUser.get();
        user.setName(updatedUser.getName());
        
        if (updatedUser.getPassword() != null && !updatedUser.getPassword().isBlank()) {
            user.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        }
    
        userRepository.save(user);
        return ResponseEntity.ok("Perfil atualizado com sucesso.");
    }    
}
