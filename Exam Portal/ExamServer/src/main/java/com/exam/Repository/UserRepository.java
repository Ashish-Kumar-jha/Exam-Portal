package com.exam.Repository;

import com.exam.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    public User findByUsername(String Username);
    public User findByEmail(String Username);
    public void deleteById(Long id);
}
