package com.exam.exam_portal.services.impl;

import com.exam.exam_portal.models.Exam.Category;
import com.exam.exam_portal.models.Exam.Quiz;
import com.exam.exam_portal.repository.QuizRepository;
import com.exam.exam_portal.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepository quizRepository;
    @Override
    public Quiz addQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }

    @Override
    public Set<Quiz> getQuizzes() {
        return new HashSet<>(this.quizRepository.findAll());
    }

    @Override
    public Quiz getQuiz(Long quizid) {
        return this.quizRepository.findById(quizid).get();
    }

    @Override
    public void deleteQuiz(Long quizId) {

        Quiz quiz = new Quiz();
        quiz.setQid(quizId);
        this.quizRepository.delete(quiz);
    }

    @Override
    public List<Quiz> getquizofcategory(Category category) {
        return this.quizRepository.findByCategory(category);
    }

    @Override
    public List<Quiz> getActiveQuiz() {
        return this.quizRepository.findByActive(true);
    }

    @Override
    public List<Quiz> getActiveQuizofCategory(Category category) {
        return this.quizRepository.findByCategoryAndActive(category, true);
    }

    //get active quizzes

}
