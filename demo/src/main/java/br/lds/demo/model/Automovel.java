package br.lds.demo.model;

import jakarta.persistence.*;
import lombok.Data;

// model/Automovel.java
@Entity
public class Automovel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String matricula;
    private Integer ano;
    private String marca;
    private String modelo;
    private String placa;
    
    @Enumerated(EnumType.STRING)
    private TipoProprietario proprietario;

    public enum TipoProprietario {
        CLIENTE, EMPRESA, BANCO
    }

    @ManyToOne
    @JoinColumn(name = "dono_id")
    private Usuario dono;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public Integer getAno() {
        return ano;
    }

    public void setAno(Integer ano) {
        this.ano = ano;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public TipoProprietario getProprietario() {
        return proprietario;
    }

    public void setProprietario(TipoProprietario proprietario) {
        this.proprietario = proprietario;
    }

    public Usuario getDono() {
        return dono;
    }

    public void setDono(Usuario dono) {
        this.dono = dono;
    }
    
    
}