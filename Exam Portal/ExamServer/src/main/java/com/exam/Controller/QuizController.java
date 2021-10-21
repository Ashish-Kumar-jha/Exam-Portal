package com.exam.Controller;

import com.exam.Entity.exam.Quiz;
import com.exam.Service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {
    @Autowired
    private QuizService quizService;

    //add quiz
    @PostMapping("/")
    public ResponseEntity<?> add(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    //update quiz
    @PutMapping("/")
    public ResponseEntity<Quiz> update(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }

    //get quiz
    @GetMapping("/")
    public ResponseEntity<?> quizes(){
        return ResponseEntity.ok(this.quizService.getQuizes());
    }

    //get single Quiz
    @GetMapping("/{qid}")
        public Quiz quiz(@PathVariable Long qid){
            return this.quizService.getQuiz(qid);
    }


    //delete quiz by id
    @DeleteMapping("/{qid}")
    public void delete(@PathVariable Long qid){
        this.quizService.deleteQuiz(qid);
    }
}
