package com.exam.exam_portal.services.impl;

import com.exam.exam_portal.models.Exam.Questions;
import com.exam.exam_portal.models.Exam.Quiz;
import com.exam.exam_portal.repository.QuestionRepository;
import com.exam.exam_portal.services.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    QuestionRepository questionRepository;
    @Override
    public Questions addQuestion(Questions questions) {
        return this.questionRepository.save(questions);
    }

    @Override
    public Questions updateQuestion(Questions questions) {
        return this.questionRepository.save(questions);
    }

    @Override
    public Set<Questions> getQuestions() {
        return new HashSet<>(this.questionRepository.findAll());
    }

    @Override
    public Questions getQuestion(Long questionId) {
        return this.questionRepository.findById(questionId).get();
    }

    @Override
    public Set<Questions> getQuestionsofQuiz(Quiz quiz) {
        return this.questionRepository.findByQuiz(quiz);
    }

    @Override
    public void deleteQuestion(Long quesId) {
        Questions questions = new Questions();
        questions.setQuesid(quesId);

        this.questionRepository.delete(questions);
    }

    @Override
    public Questions get(Long quesid) {
        return this.questionRepository.getOne(quesid);
    }
}
