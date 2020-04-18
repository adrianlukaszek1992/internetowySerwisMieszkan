package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repo.UserRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/login")
    User login(@RequestParam String login, String password) {
        return userRepository.getUserByLoginAndPassword(login, password);
    }


    @GetMapping(value = "/deleteUser")
    void deleteUser(@RequestParam int userId) {
        userRepository.deleteUser(userId);
    }


    @PostMapping(value = "/upsertUser")
    void upsertUser(@RequestBody User user, boolean isAdd) {
        if (isAdd) {
            userRepository.addUser(user);
        } else {
            userRepository.editUser(user);
        }
    }

}
