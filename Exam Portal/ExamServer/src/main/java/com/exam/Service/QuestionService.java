package com.exam.Service;

import com.exam.Entity.exam.Question;
import com.exam.Entity.exam.Quiz;

import java.util.Set;

public interface QuestionService {

    public Question addQuestion(Question question);
    public Question updateQuestion(Question question);
    public Set<Question> getQuestion();
    public Question getQuestion(Long quesId);
    public void deleteQuestion(Long quesId);
    public Set<Question> getQuestionsOfQuiz(Quiz quiz);

}
