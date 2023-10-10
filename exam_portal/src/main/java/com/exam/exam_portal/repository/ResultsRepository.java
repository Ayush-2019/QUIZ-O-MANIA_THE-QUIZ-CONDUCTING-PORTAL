package com.exam.exam_portal.repository;

import com.exam.exam_portal.models.Exam.Results;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResultsRepository extends JpaRepository<Results, Long> {
    List<Results> findByQuizid(Long quizid);
}
