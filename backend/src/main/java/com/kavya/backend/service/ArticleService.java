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

    public ArticleDto getArticle(Long id){

        return new ArticleDto()
                .setModel(this.articleRepository.findById(id).orElse(null));
    }

    public List<ArticleDto> getAllArticles(){

        List<ArticleDto> articles = new ArrayList<>();

        for(Article article : this.articleRepository.findAll()){
            articles.add(new ArticleDto().setModel(article));
        }

        return articles;
    }

    public ArticleDto deleteArticle(Long id,String password){

        System.out.println(password);

        Optional<Article> article = articleRepository.findById(id);

        if(article.isPresent()) {
            if(article.get().getPassword().equals(password.toString())){
                System.out.println("Deleted");
                this.articleRepository.deleteById(id);
                return new ArticleDto()
                        .setModel(article.get());
            }
        }

        return new ArticleDto().setModel(null);


    }

}
