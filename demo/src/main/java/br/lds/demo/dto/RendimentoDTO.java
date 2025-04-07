package br.lds.demo.dto;

import java.math.BigDecimal;

// dto/RendimentoDTO.java
public class RendimentoDTO {
    private String entidadeEmpregadora;
    private BigDecimal valor;
    public String getEntidadeEmpregadora() {
        return entidadeEmpregadora;
    }
    public void setEntidadeEmpregadora(String entidadeEmpregadora) {
        this.entidadeEmpregadora = entidadeEmpregadora;
    }
    public BigDecimal getValor() {
        return valor;
    }
    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    
}
