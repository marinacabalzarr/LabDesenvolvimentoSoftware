package br.lds.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.lds.demo.model.Automovel;

public interface AutomovelRepository extends JpaRepository<Automovel, Long> {
}