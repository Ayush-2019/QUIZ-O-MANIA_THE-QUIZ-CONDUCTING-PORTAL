package com.exam.exam_portal.controllers;

import com.exam.exam_portal.models.Exam.Questions;
import com.exam.exam_portal.models.Exam.Quiz;
import com.exam.exam_portal.services.QuestionService;
import com.exam.exam_portal.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @Autowired
    private QuizService quizService;

    //add ques
    @PostMapping("/")
    public ResponseEntity<Questions> add(@RequestBody Questions questions){
        return ResponseEntity.ok(this.questionService.addQuestion(questions));
    }

    //update ques
    @PutMapping("/")
    public ResponseEntity<Questions> update(@RequestBody Questions questions){

        return ResponseEntity.ok(this.questionService.updateQuestion(questions));
    }

    //get all ques of any quiz

    @GetMapping("/quiz/{qid}")
    public ResponseEntity<?> getQuestionsofQuiz(@PathVariable("qid") Long qid){

//        Quiz quiz = new Quiz();
//        quiz.setQid(qid);
//
//        Set<Questions> quesofQuiz = this.questionService.getQuestionsofQuiz(quiz);
//
//        return ResponseEntity.ok(quesofQuiz);

        Quiz quiz = this.quizService.getQuiz(qid);
        Set<Questions> questions = quiz.getQuestionsSet();

        List<Questions> list = new ArrayList(questions);

        if(list.size() > Integer.parseInt(quiz.getTotalquestions())){
            list = list.subList(0, Integer.parseInt(quiz.getTotalquestions())+1);
        }

        list.forEach(q->{
            q.setAnswer("");
        });
        Collections.shuffle(list);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/quiz/all/{qid}")
    public ResponseEntity<?> getQuestionsofQuizAdmin(@PathVariable("qid") Long qid){

        Quiz quiz = new Quiz();
        quiz.setQid(qid);

        Set<Questions> quesofQuiz = this.questionService.getQuestionsofQuiz(quiz);

        return ResponseEntity.ok(quesofQuiz);
    }

    //get a ques
    @GetMapping("/{quesId}")
    public Questions getaQues(@PathVariable("quesId") Long quesId){

        return this.questionService.getQuestion(quesId);
    }

    //delete ques
    @DeleteMapping("/{quesId}")
    public void delete(@PathVariable("quesId") Long quesId){
        this.questionService.deleteQuestion(quesId);
    }

    //evaluate quiz
    @PostMapping("/eval-quiz")
    public ResponseEntity<?> evalQuiz(@RequestBody List<Questions> questions){
        System.out.println(questions);

        double marksGot = 0;
        double correctAnswers = 0;
        Integer attempted = 0;

        for(Questions q:questions){
            Questions questions1 = this.questionService.get(q.getQuesid());

            if(questions1.getAnswer().equals(q.getChosenAnswer())){
                correctAnswers++;
                marksGot += Double.parseDouble(q.getQuesmarks());
            }

            if(q.getChosenAnswer() != null){
                           attempted++;
                         }
        };

        Map<String, Object>map = Map.of("marksGot",marksGot,"correctAnswers",correctAnswers,"attempted",attempted);

        return ResponseEntity.ok(map);
    }
}
