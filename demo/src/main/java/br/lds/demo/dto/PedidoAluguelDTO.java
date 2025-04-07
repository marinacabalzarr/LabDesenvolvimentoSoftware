package br.lds.demo.dto;

import java.time.LocalDate;

// dto/PedidoAluguelDTO.java
public class PedidoAluguelDTO {
    private Long automovelId;
    private LocalDate dataInicio;
    private LocalDate dataFim;
    public Long getAutomovelId() {
        return automovelId;
    }
    public void setAutomovelId(Long automovelId) {
        this.automovelId = automovelId;
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

    // Getters e Setters
}