package br.lds.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.lds.demo.model.Agente;
import br.lds.demo.model.Agente.TipoAgente;

public interface AgenteRepository extends JpaRepository<Agente, Long> {
    List<Agente> findByTipo(TipoAgente tipo);
}
