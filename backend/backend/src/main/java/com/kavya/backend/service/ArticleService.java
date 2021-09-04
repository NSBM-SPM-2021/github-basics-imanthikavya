package com.kavya.backend.service;

import com.kavya.backend.dto.ArticleDto;
import com.kavya.backend.model.Article;
import com.kavya.backend.repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ArticleService {

    private ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public ArticleDto saveArticle(Article article){

        article = articleRepository.save(article);

        return new ArticleDto().setModel(article);
    }


}
