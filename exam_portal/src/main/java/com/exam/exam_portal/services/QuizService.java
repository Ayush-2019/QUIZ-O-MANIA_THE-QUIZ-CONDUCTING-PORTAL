package com.exam.exam_portal.services;

import com.exam.exam_portal.models.Exam.Category;
import com.exam.exam_portal.models.Exam.Quiz;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Set;

public interface QuizService {

    public Quiz addQuiz(Quiz quiz);

    public Quiz updateQuiz(Quiz quiz);

    public Set<Quiz> getQuizzes();

    public Quiz getQuiz(Long quizid);

    public void deleteQuiz(Long quizId);


    public List<Quiz> getquizofcategory(Category category);

    public List<Quiz> getActiveQuiz();

    public List<Quiz> getActiveQuizofCategory(Category category);
}
