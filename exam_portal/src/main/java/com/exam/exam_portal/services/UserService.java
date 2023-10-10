package com.exam.exam_portal.services;

import com.exam.exam_portal.models.User;
import com.exam.exam_portal.models.UserRole;

import java.util.Optional;
import java.util.Set;

public interface UserService {

    //create user
    public User createUser(User user, Set<UserRole> userRoles) throws Exception;

    //get user
    public User getUser(String username);

    //delete user

    public void deleteUser(Long userid);

    public Optional<User> getUserById(Long id);
}
