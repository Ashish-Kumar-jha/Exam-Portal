package com.exam.Controller;

import com.exam.Entity.Role;
import com.exam.Entity.User;
import com.exam.Entity.UserRole;
import com.exam.Repository.UserRepository;
import com.exam.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/ExamPortal")
@CrossOrigin("*")
public class UserController {
    @Autowired
    UserService userService;

    //for registring new user in exam portal
    @PostMapping("/create-user")
    public User createUser(@RequestBody User user) throws Exception {
        Set<UserRole> userRoleSet=new HashSet<>();
        Role role=new Role(10L,"NORMAL");
        UserRole userRole=new UserRole(user,role);
        userRoleSet.add(userRole);

        return this.userService.createUser(user,userRoleSet);
    }

    //for finding a user in exam portal
    @GetMapping("find-user/{username}")
    public User findUser(@PathVariable String username){
        return  this.userService.findUser(username);
    }

}
