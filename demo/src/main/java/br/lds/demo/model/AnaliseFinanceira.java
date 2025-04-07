package br.lds.demo.model;

import java.time.LocalDate;

import jakarta.persistence.*;

// model/AnaliseFinanceira.java
@Entity
public class AnaliseFinanceira {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne
    @JoinColumn(name = "pedido_id")
    private PedidoAluguel pedido;
    
    @ManyToOne
    @JoinColumn(name = "agente_id")
    private Agente analista;
    
    private LocalDate dataAnalise;
    private boolean aprovado;
    private String parecer;
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
    public Agente getAnalista() {
        return analista;
    }
    public void setAnalista(Agente analista) {
        this.analista = analista;
    }
    public LocalDate getDataAnalise() {
        return dataAnalise;
    }
    public void setDataAnalise(LocalDate dataAnalise) {
        this.dataAnalise = dataAnalise;
    }
    public boolean isAprovado() {
        return aprovado;
    }
    public void setAprovado(boolean aprovado) {
        this.aprovado = aprovado;
    }
    public String getParecer() {
        return parecer;
    }
    public void setParecer(String parecer) {
        this.parecer = parecer;
    }
    
    
}

