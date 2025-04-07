package br.lds.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import br.lds.demo.repository.UsuarioRepository;

// SistemaAluguelApplication.java
@SpringBootApplication
public class SistemaAluguelApplication {

    public static void main(String[] args) {
        SpringApplication.run(SistemaAluguelApplication.class, args);
    }

    @Bean
    public CommandLineRunner initData(
            UsuarioRepository usuarioRepository,
            PasswordEncoder passwordEncoder) {
        return args -> {
            // Inicializar dados de teste se necessário
        };
    }
}
