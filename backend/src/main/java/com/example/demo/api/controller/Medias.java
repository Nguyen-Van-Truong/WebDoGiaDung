package com.example.demo.api.controller;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "medias")
public class Medias {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int media_id;
    @Column(name = "file_url")
    private String file_url;

    @Column(name = "file_type")
    private  String file_type;
    @Column (name = "file_size")
    private int file_size;

@Column(name = "uploaded_at")
private Timestamp uploaded_at;


    public int getMedia_id() {
        return media_id;
    }

    public void setMedia_id(int media_id) {
        this.media_id = media_id;
    }

    public String getFile_url() {
        return file_url;
    }

    public void setFile_url(String file_url) {
        this.file_url = file_url;
    }

    public String getFile_type() {
        return file_type;
    }

    public void setFile_type(String file_type) {
        this.file_type = file_type;
    }

    public int getFile_size() {
        return file_size;
    }

    public void setFile_size(int file_size) {
        this.file_size = file_size;
    }

    public Timestamp getUploaded_at() {
        return uploaded_at;
    }

    public void setUploaded_at(Timestamp uploaded_at) {
        this.uploaded_at = uploaded_at;
    }

    public Products getProducts() {
        return products;
    }

    public void setProducts(Products products) {
        this.products = products;
    }



    @ManyToOne
    @JoinColumn(name = "product_id" , nullable = false ,referencedColumnName = "product_id")
    @JsonBackReference
    private Products products;

}
