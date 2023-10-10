package com.exam.exam_portal.services;

import com.exam.exam_portal.models.Exam.Quiz;
import com.exam.exam_portal.models.Exam.Results;

import java.util.List;

public interface ResultsService {

    public Results addResult(Results results);

    public List<Results> getResultsofQuiz(Long quizid);
}
