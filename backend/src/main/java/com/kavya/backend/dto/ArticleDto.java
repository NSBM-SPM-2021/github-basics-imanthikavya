package com.kavya.backend.dto;

import com.kavya.backend.model.Article;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArticleDto {

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

    public ArticleDto setModel(Article article){

        if(article == null) return null;

        this.id = article.getId();
        this.name = article.getName();
        this.description = article.getDescription();
        this.imgurl = article.getImgurl();
        this.medType1 = article.getMedType1();
        this.medType2 = article.getMedType2();
        this.medType3 = article.getMedType3();
        this.medType4 = article.getMedType4();
        this.owner = article.getOwner();
        this.email = article.getEmail();

        return this;
    }

}
