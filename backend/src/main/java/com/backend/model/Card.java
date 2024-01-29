package com.backend.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "TODO_LIST")
public class Card implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idcard;
    private String dstitulo;
    @Column(columnDefinition = "TEXT")
    private String dsdescricao;
    private LocalDateTime dtcriacao;
    private LocalDateTime dtconcluido;
    private String iestatus;

    public Card() {

    }

    public Card(Long idcard, String dstitulo, String dsdescricao, LocalDateTime dtcriacao, LocalDateTime dtconcluido, String iestatus) {
        this.idcard = idcard;
        this.dstitulo = dstitulo;
        this.dsdescricao = dsdescricao;
        this.dtcriacao = dtcriacao;
        this.dtconcluido = dtconcluido;
        this.iestatus = iestatus;
    }

    public Long getIdcard() {
        return idcard;
    }

    public void setIdcard(Long idcard) {
        this.idcard = idcard;
    }

    public String getDstitulo() {
        return dstitulo;
    }

    public void setDstitulo(String titulo) {
        this.dstitulo = titulo;
    }

    public String getDsdescricao() {
        return dsdescricao;
    }

    public void setDsdescricao(String descricao) {
        this.dsdescricao = descricao;
    }

    public LocalDateTime getDtcriacao() {
        return dtcriacao;
    }

    public void setDtcriacao(LocalDateTime dataCriacao) {
        this.dtcriacao = dataCriacao;
    }

    public LocalDateTime getDtconcluido() {
        return dtconcluido;
    }

    public void setDtconcluido(LocalDateTime dataConclusao) {
        this.dtconcluido = dataConclusao;
    }

    public String getIestatus() {
        return iestatus;
    }

    public void setIestatus(String status) {
        this.iestatus = status;
    }

}
