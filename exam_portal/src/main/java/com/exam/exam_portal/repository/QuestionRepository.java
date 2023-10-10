package com.exam.exam_portal.repository;

import com.exam.exam_portal.models.Exam.Questions;
import com.exam.exam_portal.models.Exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface QuestionRepository extends JpaRepository<Questions, Long> {
    Set<Questions> findByQuiz(Quiz quiz);
}
