package br.lds.demo.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.*;
// model/ContratoAluguel.java
@Entity
public class ContratoAluguel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne
    @JoinColumn(name = "pedido_id")
    private PedidoAluguel pedido;
    
    private LocalDate dataContrato;
    private BigDecimal valor;
    private Integer prazo;
    
    @ManyToOne
    @JoinColumn(name = "agente_id")
    private Agente responsavel;
    
    @OneToOne(mappedBy = "contratoAluguel", cascade = CascadeType.ALL)
    private ContratoCredito contratoCredito;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PedidoAluguel getPedido() {
        return pedido;
    }

    public void setPedido(PedidoAluguel pedido) {
        this.pedido = pedido;
    }

    public LocalDate getDataContrato() {
        return dataContrato;
    }

    public void setDataContrato(LocalDate dataContrato) {
        this.dataContrato = dataContrato;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public Integer getPrazo() {
        return prazo;
    }

    public void setPrazo(Integer prazo) {
        this.prazo = prazo;
    }

    public Agente getResponsavel() {
        return responsavel;
    }

    public void setResponsavel(Agente responsavel) {
        this.responsavel = responsavel;
    }

    public ContratoCredito getContratoCredito() {
        return contratoCredito;
    }

    public void setContratoCredito(ContratoCredito contratoCredito) {
        this.contratoCredito = contratoCredito;
    }
    
    
}
