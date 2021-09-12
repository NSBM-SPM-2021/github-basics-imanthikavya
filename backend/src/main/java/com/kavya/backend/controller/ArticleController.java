package com.kavya.backend.controller;

import com.kavya.backend.dto.ArticleDto;
import com.kavya.backend.model.Article;
import com.kavya.backend.service.ArticleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("article")
@Slf4j
public class ArticleController {

    private ArticleService articleService;

    public ArticleController(ArticleService articleService) {

        this.articleService = articleService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArticleDto> getArticle(@PathVariable("id") Long id) {

        ArticleDto article = this.articleService.getArticle(id);

        if(article == null){
            return ResponseEntity.notFound().build();
        }else{
            return ResponseEntity.ok(article);
        }

    }

    @GetMapping("/")
    public ResponseEntity<List<ArticleDto>> getAllArticles(){
        return ResponseEntity.ok(this.articleService.getAllArticles());
    }

    @PostMapping("/")
    public ResponseEntity<ArticleDto> postArticle(@RequestBody Article article){

        ArticleDto a = articleService.saveArticle(article);
        URI location = URI.create(String.format("/article/%s", a.getId().toString()));
        return ResponseEntity.created(location).body(a);
    }

    @DeleteMapping("/{id}/{password}")
    public ResponseEntity<ArticleDto> deleteArticle(@PathVariable("id") Long id,@PathVariable("password") String password){

        ArticleDto a = articleService.deleteArticle(id,password);

        if(a == null){
            return ResponseEntity.status(403).body(a);
        }
        return ResponseEntity.status(202).body(a);


    }


}
