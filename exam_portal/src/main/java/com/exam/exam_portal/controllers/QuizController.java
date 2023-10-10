package com.exam.exam_portal.controllers;

import com.exam.exam_portal.models.Exam.Category;
import com.exam.exam_portal.models.Exam.Quiz;
import com.exam.exam_portal.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

    //add quiz

    @PostMapping("/")
    public ResponseEntity<Quiz> add(@RequestBody Quiz quiz){

        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    //update quiz
    @PutMapping("/")
    public ResponseEntity<Quiz> update(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }

    //get all quiz
    @GetMapping("/")
    public ResponseEntity<?> getquizzes(){
        return ResponseEntity.ok(this.quizService.getQuizzes());
    }

    //get a quiz
    @GetMapping("/{qid}")
    public Quiz getquiz(@PathVariable("qid") Long qid){

        return this.quizService.getQuiz(qid);
    }

    //delete quiz

    @DeleteMapping("/{qid}")
    public void deletequiz(@PathVariable("qid") Long qid){
        this.quizService.deleteQuiz(qid);
    }

    @GetMapping("/category/{cid}")
    public List<Quiz> getQuizofCategory(@PathVariable("cid") Long cid){

        Category category = new Category();
        category.setCid(cid);

        return this.quizService.getquizofcategory(category);
    }

    //get active quiz
    @GetMapping("/active")
    public List<Quiz> getActiveQuiz(){
        return this.quizService.getActiveQuiz();
    }

    @GetMapping("/category/active/{cid}")
    public List<Quiz> getActiveQuizofCategory(@PathVariable("cid") Long cid){
        Category category = new Category();
        category.setCid(cid);

        return this.quizService.getActiveQuizofCategory(category);
    }

}
