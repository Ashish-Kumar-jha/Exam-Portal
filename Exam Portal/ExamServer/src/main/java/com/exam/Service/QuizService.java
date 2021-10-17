package com.exam.Service;

import com.exam.Entity.exam.Quiz;

import java.util.Set;

public interface QuizService {

    public Quiz addQuiz(Quiz quiz);
    public Quiz updateQuiz(Quiz quiz);
    public Set<Quiz> getQuizes();
    public Quiz getQuiz(Long quizId);
    public void deleteQuiz(Long quizId);
}
