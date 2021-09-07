package com.kavya.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Article {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private String imgurl;
    private String medType1;
    private String medType2;
    private String medType3;
    private String medType4;
    private String owner;
    private String email;
    private String password;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImgurl() {
        return imgurl;
    }

    public void setImgurl(String imgurl) {
        this.imgurl = imgurl;
    }

    public String getMedType1() {
        return medType1;
    }

    public void setMedType1(String medType1) {
        this.medType1 = medType1;
    }

    public String getMedType2() {
        return medType2;
    }

    public void setMedType2(String medType2) {
        this.medType2 = medType2;
    }

    public String getMedType3() {
        return medType3;
    }

    public void setMedType3(String medType3) {
        this.medType3 = medType3;
    }

    public String getMedType4() {
        return medType4;
    }

    public void setMedType4(String medType4) {
        this.medType4 = medType4;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Article{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", imgurl='" + imgurl + '\'' +
                ", medType1='" + medType1 + '\'' +
                ", medType2='" + medType2 + '\'' +
                ", medType3='" + medType3 + '\'' +
                ", medType4='" + medType4 + '\'' +
                ", owner='" + owner + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

