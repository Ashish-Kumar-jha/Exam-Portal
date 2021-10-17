package com.exam.Service.Implementation;

import com.exam.Entity.exam.Question;
import com.exam.Entity.exam.Quiz;
import com.exam.Repository.QuestionRepository;
import com.exam.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;
@Service
public class QuestionServiceImpl implements QuestionService {
    @Autowired
    QuestionRepository questionRepository;

    @Override
    public Question addQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public Question updateQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public Set<Question> getQuestion() {
        return new LinkedHashSet<>(this.questionRepository.findAll());
    }

    @Override
    public Question getQuestion(Long quesId) {
        return this.questionRepository.getById(quesId);
    }

    @Override
    public void deleteQuestion(Long quesId) {
        Question question=new Question();
        question.setQuesId(quesId);
        this.questionRepository.delete(question);
    }

    @Override
    public Set<Question> getQuestionsOfQuiz(Quiz quiz) {
        return this.questionRepository.findByQuiz(quiz);
    }
}
