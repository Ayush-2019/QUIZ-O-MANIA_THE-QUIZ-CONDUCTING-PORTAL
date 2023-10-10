package com.exam.exam_portal.services;

import com.exam.exam_portal.models.Exam.Questions;
import com.exam.exam_portal.models.Exam.Quiz;

import java.util.Set;

public interface QuestionService {

    public Questions addQuestion(Questions questions);

    public Questions updateQuestion(Questions questions);

    public Set<Questions> getQuestions();

    public Questions getQuestion(Long questionId);

    public Set<Questions> getQuestionsofQuiz(Quiz quiz);

    public void deleteQuestion(Long quesId);

    public Questions get(Long quesid);


}
