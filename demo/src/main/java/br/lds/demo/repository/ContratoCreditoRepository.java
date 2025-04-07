package br.lds.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import br.lds.demo.model.ContratoCredito;

public interface ContratoCreditoRepository extends JpaRepository<ContratoCredito, Long> {
}