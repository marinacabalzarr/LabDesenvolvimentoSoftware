package br.lds.demo.model;


import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

// model/PedidoAluguel.java
@Entity
public class PedidoAluguel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;
    
    @ManyToOne
    @JoinColumn(name = "automovel_id")
    private Automovel automovel;
    
    private LocalDate dataPedido;
    private LocalDate dataInicio;
    private LocalDate dataFim;
    
    @Enumerated(EnumType.STRING)
    private StatusPedido status;

    public enum StatusPedido {
        PENDENTE, EM_ANALISE, APROVADO, REPROVADO, CANCELADO, CONTRATADO
    }
    
    @OneToOne(mappedBy = "pedido", cascade = CascadeType.ALL)
    private ContratoAluguel contrato;
    
    @OneToOne(mappedBy = "pedido", cascade = CascadeType.ALL)
    private AnaliseFinanceira analise;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Automovel getAutomovel() {
        return automovel;
    }

    public void setAutomovel(Automovel automovel) {
        this.automovel = automovel;
    }

    public LocalDate getDataPedido() {
        return dataPedido;
    }

    public void setDataPedido(LocalDate dataPedido) {
        this.dataPedido = dataPedido;
    }

    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(LocalDate dataInicio) {
        this.dataInicio = dataInicio;
    }

    public LocalDate getDataFim() {
        return dataFim;
    }

    public void setDataFim(LocalDate dataFim) {
        this.dataFim = dataFim;
    }

    public StatusPedido getStatus() {
        return status;
    }

    public void setStatus(StatusPedido status) {
        this.status = status;
    }

    public ContratoAluguel getContrato() {
        return contrato;
    }

    public void setContrato(ContratoAluguel contrato) {
        this.contrato = contrato;
    }

    public AnaliseFinanceira getAnalise() {
        return analise;
    }

    public void setAnalise(AnaliseFinanceira analise) {
        this.analise = analise;
    }
    
    
}