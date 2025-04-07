package br.lds.demo.service;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.lds.demo.dto.ClienteDTO;
import br.lds.demo.dto.PedidoAluguelDTO;
import br.lds.demo.model.AnaliseFinanceira;
import br.lds.demo.model.Automovel;
import br.lds.demo.model.Cliente;
import br.lds.demo.model.PedidoAluguel;
import br.lds.demo.model.PedidoAluguel.StatusPedido;
import br.lds.demo.model.Usuario;
import br.lds.demo.model.Usuario.TipoUsuario;
import br.lds.demo.repository.AutomovelRepository;
import br.lds.demo.repository.ClienteRepository;
import br.lds.demo.repository.PedidoAluguelRepository;
import br.lds.demo.repository.UsuarioRepository;
// service/PedidoAluguelService.java
@Service
public class PedidoAluguelService {
    
    @Autowired
    private PedidoAluguelRepository pedidoRepository;
    
    @Autowired
    private ClienteRepository clienteRepository;
    
    @Autowired
    private AutomovelRepository automovelRepository;
    
    public PedidoAluguel criarPedido(Long clienteId, PedidoAluguelDTO pedidoDTO) {
        Cliente cliente = clienteRepository.findById(clienteId)
            .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));
            
        Automovel automovel = automovelRepository.findById(pedidoDTO.getAutomovelId())
            .orElseThrow(() -> new RuntimeException("Automóvel não encontrado"));
            
        PedidoAluguel pedido = new PedidoAluguel();
        pedido.setCliente(cliente);
        pedido.setAutomovel(automovel);
        pedido.setDataPedido(LocalDate.now());
        pedido.setDataInicio(pedidoDTO.getDataInicio());
        pedido.setDataFim(pedidoDTO.getDataFim());
        pedido.setStatus(StatusPedido.PENDENTE);
        
        return pedidoRepository.save(pedido);
    }
    
    public PedidoAluguel atualizarStatusPedido(Long pedidoId, StatusPedido status, Long agenteId) {
        PedidoAluguel pedido = pedidoRepository.findById(pedidoId)
            .orElseThrow(() -> new RuntimeException("Pedido não encontrado"));
            
        pedido.setStatus(status);
        
        if (status == StatusPedido.EM_ANALISE || status == StatusPedido.APROVADO || status == StatusPedido.REPROVADO) {
            AnaliseFinanceira analise = new AnaliseFinanceira();
            analise.setPedido(pedido);
            analise.setAnalista(agenteRepository.findById(agenteId).orElse(null));
            analise.setDataAnalise(LocalDate.now());
            analise.setAprovado(status == StatusPedido.APROVADO);
            pedido.setAnalise(analise);
        }
        
        return pedidoRepository.save(pedido);
    }
    
    public List<PedidoAluguel> listarPedidosPorCliente(Long clienteId) {
        return pedidoRepository.findByClienteId(clienteId);
    }
    
    public List<PedidoAluguel> listarPedidosPorStatus(StatusPedido status) {
        return pedidoRepository.findByStatus(status);
    }
}
