package br.lds.demo.model;


import java.math.BigDecimal;

import jakarta.persistence.*;
import lombok.Data;

// model/ContratoCredito.java
@Entity
public class ContratoCredito {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne
    @JoinColumn(name = "contrato_aluguel_id")
    private ContratoAluguel contratoAluguel;
    
    @ManyToOne
    @JoinColumn(name = "banco_id")
    private Agente banco;
    
    private BigDecimal valorFinanciado;
    private Integer parcelas;
    private BigDecimal taxaJuros;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public ContratoAluguel getContratoAluguel() {
        return contratoAluguel;
    }
    public void setContratoAluguel(ContratoAluguel contratoAluguel) {
        this.contratoAluguel = contratoAluguel;
    }
    public Agente getBanco() {
        return banco;
    }
    public void setBanco(Agente banco) {
        this.banco = banco;
    }
    public BigDecimal getValorFinanciado() {
        return valorFinanciado;
    }
    public void setValorFinanciado(BigDecimal valorFinanciado) {
        this.valorFinanciado = valorFinanciado;
    }
    public Integer getParcelas() {
        return parcelas;
    }
    public void setParcelas(Integer parcelas) {
        this.parcelas = parcelas;
    }
    public BigDecimal getTaxaJuros() {
        return taxaJuros;
    }
    public void setTaxaJuros(BigDecimal taxaJuros) {
        this.taxaJuros = taxaJuros;
    }
    
    
}