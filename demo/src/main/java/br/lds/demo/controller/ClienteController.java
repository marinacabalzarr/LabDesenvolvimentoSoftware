package br.lds.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.lds.demo.dto.ClienteDTO;
import br.lds.demo.dto.LoginDTO;
import br.lds.demo.dto.PedidoAluguelDTO;
import br.lds.demo.model.PedidoAluguel;
import br.lds.demo.model.PedidoAluguel.StatusPedido;
import br.lds.demo.service.AuthService;
import br.lds.demo.service.PedidoAluguelService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
// controller/ClienteController.java
@RestController
@RequestMapping("/api/clientes")
public class ClienteController {
    
    @Autowired
    private PedidoAluguelService pedidoService;
    
    @PostMapping("/{clienteId}/pedidos")
    public ResponseEntity<PedidoAluguel> criarPedido(
            @PathVariable Long clienteId,
            @RequestBody PedidoAluguelDTO pedidoDTO) {
        try {
            PedidoAluguel pedido = pedidoService.criarPedido(clienteId, pedidoDTO);
            return ResponseEntity.ok(pedido);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/{clienteId}/pedidos")
    public ResponseEntity<List<PedidoAluguel>> listarPedidos(@PathVariable Long clienteId) {
        List<PedidoAluguel> pedidos = pedidoService.listarPedidosPorCliente(clienteId);
        return ResponseEntity.ok(pedidos);
    }
    
    @DeleteMapping("/pedidos/{pedidoId}")
    public ResponseEntity<Void> cancelarPedido(@PathVariable Long pedidoId) {
        try {
            pedidoService.atualizarStatusPedido(pedidoId, StatusPedido.CANCELADO, null);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
