package com.exam.Service.Implementation;

import com.exam.Entity.exam.Quiz;
import com.exam.Repository.QuizRepository;
import com.exam.Service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.LinkedHashSet;
import java.util.Set;

public class QuizServiceImpl implements QuizService {
    @Autowired
    QuizRepository quizRepository;
    @Override
    public Quiz addQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }

    @Override
    public Set<Quiz> getQuizes() {
        return new LinkedHashSet<>(this .quizRepository.findAll());
    }

    @Override
    public Quiz getQuiz(Long quizId) {
        return this.quizRepository.getById(quizId);
    }

    @Override
    public void deleteQuiz(Long quizId) {
        Quiz quiz=new Quiz();
        quiz.setQid(quizId);
        this.quizRepository.delete(quiz);

    }
}
