package com.exam.Service;

import com.exam.Entity.User;
import com.exam.Entity.UserRole;

import java.util.Set;

public interface UserService {
//Register User
    public User createUser(User user, Set<UserRole> userRoleSet) throws Exception;
//Find user by username
    public User findUser(String username);
}
