package com.exam.exam_portal.controllers;

import com.exam.exam_portal.models.Exam.Category;
import com.exam.exam_portal.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {

    //add category

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/")
    public ResponseEntity<Category> addCategory(@RequestBody Category category) {
        Category category1 = this.categoryService.addCategory(category);
        return ResponseEntity.ok(category1);

    }

        //get category
        @GetMapping("/{categoryId}")
                public Category getCategory(@PathVariable("categoryId") Long categoryId){

                return this.categoryService.getCategory(categoryId);
        }

        //get all categories

        @GetMapping("/")
        public ResponseEntity<?> getCategories(){
        return ResponseEntity.ok(this.categoryService.getCategories());
        }

        //update
        @PutMapping("/")
        public Category updateCategory(@RequestBody Category category){
        return this.categoryService.updateCategory(category);
        }

        //delete

        @DeleteMapping("/{categoryId}")
        public void deleteCategory(@PathVariable("categoryId") Long categoryId){

            this.categoryService.deleteCategory(categoryId);
        }
    }
