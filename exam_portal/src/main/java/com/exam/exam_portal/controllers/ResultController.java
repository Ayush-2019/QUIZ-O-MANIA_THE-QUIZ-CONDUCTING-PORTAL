package com.exam.exam_portal.controllers;

import com.exam.exam_portal.models.Exam.Results;
import com.exam.exam_portal.services.ResultsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/results")
public class ResultController {

    @Autowired
    private ResultsService resultsService;

    //adding new result
    @PostMapping("/")
    public ResponseEntity<Results> addResult(@RequestBody Results results){
        return ResponseEntity.ok(this.resultsService.addResult(results));
    }

    //get results of any quiz using quizid
    @GetMapping("/quiz_result/{quizid}")
    public List<Results> getResultsofQuiz(@PathVariable("quizid") Long quizid){

        return this.resultsService.getResultsofQuiz(quizid);
    }
}
