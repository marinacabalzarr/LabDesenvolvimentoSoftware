package br.lds.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.lds.demo.config.JwtService;
import br.lds.demo.dto.ClienteDTO;
import br.lds.demo.model.Cliente;
import br.lds.demo.model.Usuario;
import br.lds.demo.model.Usuario.TipoUsuario;
import br.lds.demo.repository.UsuarioRepository;

// service/AuthService.java
@Service
public class AuthService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private JwtService jwtService;
    
    public String registrarCliente(ClienteDTO clienteDTO) {
        if (usuarioRepository.findByEmail(clienteDTO.getEmail())) {
            throw new RuntimeException("Email já está em uso");
        }
        
        Cliente cliente = new Cliente();
        // Mapear campos do DTO para a entidade
        cliente.setEmail(clienteDTO.getEmail());
        cliente.setSenha(passwordEncoder.encode(clienteDTO.getSenha()));
        cliente.setTipo(TipoUsuario.CLIENTE);
        // Outros campos
        
        usuarioRepository.save(cliente);
        
        return jwtService.generateToken(cliente);
    }
    
    public String autenticar(String email, String senha) {
        Usuario usuario = usuarioRepository.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
            
        if (!passwordEncoder.matches(senha, usuario.getSenha())) {
            throw new RuntimeException("Credenciais inválidas");
        }
        
        return jwtService.generateToken(usuario);
    }
}
