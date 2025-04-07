package br.lds.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.lds.demo.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
