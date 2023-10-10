package com.exam.exam_portal.repository;

import com.exam.exam_portal.models.Exam.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
