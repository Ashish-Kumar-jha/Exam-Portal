package com.exam.Repository;

import com.exam.Entity.exam.Question;
import com.exam.Entity.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface QuestionRepository extends JpaRepository<Question,Long>
{
    Set<Question> findByQuiz(Quiz quiz);
}
