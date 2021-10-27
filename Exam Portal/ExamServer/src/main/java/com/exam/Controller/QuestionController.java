package com.exam.Controller;

import com.exam.Entity.exam.Question;
import com.exam.Entity.exam.Quiz;
import com.exam.Service.QuestionService;
import com.exam.Service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {
@Autowired
    private QuestionService questionService;
@Autowired
private QuizService quizService;
//add Question
    @PostMapping("/")
    public ResponseEntity<?> add(@RequestBody Question question){
        return ResponseEntity.ok(this.questionService.addQuestion(question));
    }
    //update
    @PutMapping("/")
    public ResponseEntity<Question> update (@RequestBody Question question){
        return ResponseEntity.ok(this.questionService.updateQuestion(question));
    }
    //Get all quiz from quid
    @GetMapping("/quiz/{qid}")
    public ResponseEntity<?> getQuestionOfQuiz(@PathVariable Long qid){
       Quiz quiz= this.quizService.getQuiz(qid);
        Set<Question> questions=quiz.getQuestions();
        List list=new ArrayList(questions);
        list=list.subList(0,Integer.parseInt(quiz.getNumberOfQuestion()+1));
        Collections.shuffle(list);
        return ResponseEntity.ok(list);
    }
    //get single Question
    @GetMapping("/{qusid}")
    public Question get(@PathVariable Long qusid){
        return this.questionService.getQuestion(qusid);
    }

    //delete question
    @DeleteMapping("/{qusid}")
    public void delete(@PathVariable Long qusid){
        this.questionService.deleteQuestion(qusid);
    }

}
