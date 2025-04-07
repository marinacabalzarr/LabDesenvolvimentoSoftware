package br.lds.demo.dto;

import java.util.List;

// dto/ClienteDTO.java
public class ClienteDTO {
    private String email;
    private String senha;
    private String rg;
    private String cpf;
    private String nome;
    private String endereco;
    private String profissao;
    private List<RendimentoDTO> rendimentos;
    
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }
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
    public List<RendimentoDTO> getRendimentos() {
        return rendimentos;
    }
    public void setRendimentos(List<RendimentoDTO> rendimentos) {
        this.rendimentos = rendimentos;
    }

    
}
