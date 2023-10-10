package com.exam.exam_portal.services.impl;

import com.exam.exam_portal.models.Exam.Quiz;
import com.exam.exam_portal.models.Exam.Results;
import com.exam.exam_portal.repository.ResultsRepository;
import com.exam.exam_portal.services.ResultsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResultsServiceImpl implements ResultsService {

    @Autowired
    private ResultsRepository resultsRepository;

    @Override
    public Results addResult(Results results) {
        return this.resultsRepository.save(results);
    }

    @Override
    public List<Results> getResultsofQuiz(Long quizid) {
        return this.resultsRepository.findByQuizid(quizid);
    }
}
