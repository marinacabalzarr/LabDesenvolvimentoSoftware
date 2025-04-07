package br.lds.demo.dto;

import java.math.BigDecimal;

// dto/ContratoCreditoDTO.java
public class ContratoCreditoDTO {
    private Long bancoId;
    private BigDecimal valorFinanciado;
    private Integer parcelas;
    private BigDecimal taxaJuros;
    public Long getBancoId() {
        return bancoId;
    }
    public void setBancoId(Long bancoId) {
        this.bancoId = bancoId;
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

    // Getters e Setters
}
