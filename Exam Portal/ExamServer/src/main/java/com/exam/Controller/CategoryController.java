package com.exam.Controller;

import com.exam.Entity.exam.Category;
import com.exam.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {
 @Autowired
    CategoryService categoryService;

 //add category
    @PostMapping("/")
    public ResponseEntity<?> addCategory(@RequestBody Category category){
        Category category1=this.categoryService.addCategory(category);
        return ResponseEntity.ok(category1);
    }


    //get Category
    @GetMapping("/{categoryId}")
    public Category getCategory(@PathVariable Long categoryId){
        return this.categoryService.getCategory(categoryId);
    }

    //get all categories
    @GetMapping("/")
    public ResponseEntity<?> getCategories(){
        return ResponseEntity.ok(this.categoryService.getCategories());
    }

    //update
    @PutMapping("/")
    public Category updateCategory(@RequestBody Category category){
        return this.categoryService.updateCategory(category);
    }

    //delete
    @DeleteMapping("/{categoryId}")
    public void deleteCategory(@PathVariable Long categoryId){
         this.categoryService.deleteCategory(categoryId);
    }
}
