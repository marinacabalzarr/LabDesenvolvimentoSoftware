package br.lds.demo.handler;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class CustomLoginSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        boolean isCliente = authentication.getAuthorities().stream()
            .anyMatch(r -> r.getAuthority().equals("ROLE_CLIENTE"));

        boolean isAgente = authentication.getAuthorities().stream()
            .anyMatch(r -> r.getAuthority().equals("ROLE_AGENTE"));

        if (isCliente) {
            response.sendRedirect("/dashboard-cliente");
        } else if (isAgente) {
            response.sendRedirect("/dashboard-agente");
        } else {
            response.sendRedirect("/login?error");
        }
    }
}
