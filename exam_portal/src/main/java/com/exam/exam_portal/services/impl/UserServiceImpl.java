package com.exam.exam_portal.services.impl;

import com.exam.exam_portal.helper.UserFoundException;
import com.exam.exam_portal.models.User;
import com.exam.exam_portal.models.UserRole;
import com.exam.exam_portal.repository.RoleRepository;
import com.exam.exam_portal.repository.UserRepository;
import com.exam.exam_portal.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {

        User local = this.userRepository.findByUsername(user.getUsername());

        if(local!=null){
            System.out.println("User already exists");
            throw new UserFoundException();
        }

        else{
            //create user
            for(UserRole ur:userRoles){
                roleRepository.save(ur.getRole());
            }

            user.getUserRoles().addAll(userRoles);
            local = this.userRepository.save(user);

        }
        return local;


    }

    //get user
    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername((username));
    }

    @Override
    public void deleteUser(Long userid) {

        this.userRepository.deleteById(userid);
    }

    @Override
    public Optional<User> getUserById(Long id) {
        return this.userRepository.findById(id);
    }
}
