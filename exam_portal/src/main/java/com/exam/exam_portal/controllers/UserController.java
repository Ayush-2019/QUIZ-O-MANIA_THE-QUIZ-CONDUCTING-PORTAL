package com.exam.exam_portal.controllers;

import com.exam.exam_portal.models.Role;
import com.exam.exam_portal.models.User;
import com.exam.exam_portal.models.UserRole;
import com.exam.exam_portal.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    //creating user

    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {

        user.setProfile("default.png");

        //encoding pswd

        user.setPassword(this.bCryptPasswordEncoder.encode((user.getPassword())));

        Set<UserRole> roles = new HashSet<>();

        Role r1 = new Role();
        r1.setRoleid(16L);
        r1.setRoletype("student");

        UserRole ur =new UserRole();
        ur.setUser(user);
        ur.setRole(r1);

        roles.add(ur);

        return this.userService.createUser(user,roles);
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username){

        return this.userService.getUser(username);
    }

    //get user by id
    @GetMapping("/user_id/{id}")
    public Optional<User> getUserById(@PathVariable("id") Long id){

        return this.userService.getUserById(id);
    }

    @DeleteMapping("/{userid}")
    public void deleteUser(@PathVariable("userid") Long userid){
        this.userService.deleteUser(userid);
    }

//    @ExceptionHandler(UserFoundException.class)
//    public ResponseEntity<?> exceptionHandler(UserFoundException ex){
//        return ex;
//    }

}
