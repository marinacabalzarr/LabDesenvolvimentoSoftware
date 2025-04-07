package br.lds.demo.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.lds.demo.dto.ContratoCreditoDTO;
import br.lds.demo.model.Agente;
import br.lds.demo.model.Agente.TipoAgente;
import br.lds.demo.model.ContratoAluguel;
import br.lds.demo.model.ContratoCredito;
import br.lds.demo.model.PedidoAluguel;
import br.lds.demo.model.PedidoAluguel.StatusPedido;
import br.lds.demo.repository.AgenteRepository;
import br.lds.demo.repository.PedidoAluguelRepository;

// service/ContratoService.java
@Service
public class ContratoService {
    
    @Autowired
    private PedidoAluguelRepository pedidoRepository;
    
    @Autowired
    private AgenteRepository agenteRepository;
    
    public ContratoAluguel gerarContratoAluguel(Long pedidoId, Long agenteId) {
        PedidoAluguel pedido = pedidoRepository.findById(pedidoId)
            .orElseThrow(() -> new RuntimeException("Pedido não encontrado"));
            
        if (pedido.getStatus() != StatusPedido.APROVADO) {
            throw new RuntimeException("Pedido não está aprovado");
        }
        
        Agente agente = agenteRepository.findById(agenteId)
            .orElseThrow(() -> new RuntimeException("Agente não encontrado"));
            
        ContratoAluguel contrato = new ContratoAluguel();
        contrato.setPedido(pedido);
        contrato.setDataContrato(LocalDate.now());
        contrato.setResponsavel(agente);
        // Definir outros campos do contrato
        
        pedido.setStatus(StatusPedido.CONTRATADO);
        pedido.setContrato(contrato);
        
        pedidoRepository.save(pedido);
        
        return contrato;
    }
    
    public ContratoCredito vincularContratoCredito(Long contratoAluguelId, ContratoCreditoDTO creditoDTO) {
        ContratoAluguel contratoAluguel = contratoAluguelRepository.findById(contratoAluguelId)
            .orElseThrow(() -> new RuntimeException("Contrato de aluguel não encontrado"));
            
        Agente banco = agenteRepository.findById(creditoDTO.getBancoId())
            .orElseThrow(() -> new RuntimeException("Banco não encontrado"));
            
        if (banco.getTipo() != TipoAgente.BANCO) {
            throw new RuntimeException("Agente não é um banco");
        }
        
        ContratoCredito contratoCredito = new ContratoCredito();
        contratoCredito.setContratoAluguel(contratoAluguel);
        contratoCredito.setBanco(banco);
        contratoCredito.setValorFinanciado(creditoDTO.getValorFinanciado());
        contratoCredito.setParcelas(creditoDTO.getParcelas());
        contratoCredito.setTaxaJuros(creditoDTO.getTaxaJuros());
        
        return contratoCreditoRepository.save(contratoCredito);
    }
}
