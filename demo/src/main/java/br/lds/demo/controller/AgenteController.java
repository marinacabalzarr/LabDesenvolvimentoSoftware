package br.lds.demo.controller;

import br.lds.demo.dto.ContratoCreditoDTO;
import br.lds.demo.model.ContratoAluguel;
import br.lds.demo.model.ContratoCredito;
import br.lds.demo.model.PedidoAluguel;
import br.lds.demo.model.PedidoAluguel.StatusPedido;
import br.lds.demo.model.Usuario;
import br.lds.demo.repository.UsuarioRepository;
import br.lds.demo.service.ContratoService;
import br.lds.demo.service.PedidoAluguelService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// controller/AgenteController.java
@RestController
@RequestMapping("/api/agentes")
public class AgenteController {
    
    @Autowired
    private PedidoAluguelService pedidoService;
    
    @Autowired
    private ContratoService contratoService;
    
    @GetMapping("/pedidos")
    public ResponseEntity<List<PedidoAluguel>> listarPedidosPorStatus(
            @RequestParam StatusPedido status) {
        List<PedidoAluguel> pedidos = pedidoService.listarPedidosPorStatus(status);
        return ResponseEntity.ok(pedidos);
    }
    
    @PutMapping("/pedidos/{pedidoId}/status")
    public ResponseEntity<PedidoAluguel> atualizarStatusPedido(
            @PathVariable Long pedidoId,
            @RequestParam StatusPedido status,
            @RequestParam Long agenteId) {
        try {
            PedidoAluguel pedido = pedidoService.atualizarStatusPedido(pedidoId, status, agenteId);
            return ResponseEntity.ok(pedido);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PostMapping("/pedidos/{pedidoId}/contratos")
    public ResponseEntity<ContratoAluguel> gerarContrato(
            @PathVariable Long pedidoId,
            @RequestParam Long agenteId) {
        try {
            ContratoAluguel contrato = contratoService.gerarContratoAluguel(pedidoId, agenteId);
            return ResponseEntity.ok(contrato);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PostMapping("/contratos/{contratoId}/credito")
    public ResponseEntity<ContratoCredito> vincularCredito(
            @PathVariable Long contratoId,
            @RequestBody ContratoCreditoDTO creditoDTO) {
        try {
            ContratoCredito contratoCredito = contratoService.vincularContratoCredito(contratoId, creditoDTO);
            return ResponseEntity.ok(contratoCredito);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}