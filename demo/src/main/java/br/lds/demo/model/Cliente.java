package br.lds.demo.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

@Entity
public class Cliente extends Usuario {
    private String rg;
    private String cpf;
    private String nome;
    private String endereco;
    private String profissao;
    
    @OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL)
    private List<Rendimento> rendimentos = new ArrayList<>();
    
    @OneToMany(mappedBy = "cliente")
    private List<PedidoAluguel> pedidos = new ArrayList<>();

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getProfissao() {
        return profissao;
    }

    public void setProfissao(String profissao) {
        this.profissao = profissao;
    }

    public List<Rendimento> getRendimentos() {
        return rendimentos;
    }

    public void setRendimentos(List<Rendimento> rendimentos) {
        this.rendimentos = rendimentos;
    }

    public List<PedidoAluguel> getPedidos() {
        return pedidos;
    }

    public void setPedidos(List<PedidoAluguel> pedidos) {
        this.pedidos = pedidos;
    }
    
    
}
