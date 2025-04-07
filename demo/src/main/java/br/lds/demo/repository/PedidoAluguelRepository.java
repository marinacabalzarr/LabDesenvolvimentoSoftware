package br.lds.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.lds.demo.model.PedidoAluguel;
import br.lds.demo.model.PedidoAluguel.StatusPedido;

// repository/PedidoAluguelRepository.java
public interface PedidoAluguelRepository extends JpaRepository<PedidoAluguel, Long> {
    List<PedidoAluguel> findByClienteId(Long clienteId);
    List<PedidoAluguel> findByStatus(StatusPedido status);
}