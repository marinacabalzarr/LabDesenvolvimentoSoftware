package br.lds.demo.model;

import jakarta.persistence.*;
// model/Agente.java
@Entity
public class Agente extends Usuario {
    private String nome;
    private String cnpj;
    
    @Enumerated(EnumType.STRING)
    private TipoAgente tipo;
    
    public enum TipoAgente {
        EMPRESA, BANCO
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public void setTipo(TipoAgente tipo) {
        this.tipo = tipo;
    }
    
    
}
