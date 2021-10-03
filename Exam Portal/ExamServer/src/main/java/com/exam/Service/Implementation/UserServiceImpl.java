package com.exam.Service.Implementation;

import com.exam.Entity.User;
import com.exam.Entity.UserRole;
import com.exam.Repository.RoleRepository;
import com.exam.Repository.UserRepository;
import com.exam.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {
   @Autowired
    UserRepository userRepository;
  @Autowired
    RoleRepository roleRepository;
    @Override
    public User createUser(User user, Set<UserRole> userRoleSet) throws Exception {
        if(userRepository.findByUsername(user.getUsername())==null || userRepository.findByEmail(user.getEmail())==null){
            user.setUserRoleSet(userRoleSet);
            for(UserRole ur: userRoleSet) {
                roleRepository.save(ur.getRole());
            }
        }else{
            throw new Exception("USER ALREADY EXIST");
        }
       return  userRepository.save(user);
    }

    @Override
    public User findUser(String username) {
        return userRepository.findByUsername(username);
    }
}
