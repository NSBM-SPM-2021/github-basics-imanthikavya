package com.kavya.backend.controller;

import com.kavya.backend.dto.ArticleDto;
import com.kavya.backend.model.Article;
import com.kavya.backend.repository.ArticleRepository;
import com.kavya.backend.service.ArticleService;
import jdk.swing.interop.SwingInterOpUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("article")
@Slf4j
public class ArticleController {

    private ArticleService articleService;

    public ArticleController(ArticleService articleService) {

        this.articleService = articleService;
    }


}
