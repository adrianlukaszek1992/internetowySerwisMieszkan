package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.model.Administrator;
import com.example.demo.repo.AdministratorRepository;
import com.example.demo.repo.UserRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/administrator")
public class AdministratorController {

    @Autowired
    AdministratorRepository administratorRepository;


    @GetMapping(value = "/editAdministrator")
    void editAdministrator(@RequestBody Administrator administrator) {
        administratorRepository.editAdministrator(administrator);
    }

    @GetMapping(value = "/getAllUsers")
    List<User> getAllUsers(){
      return  administratorRepository.getAllUsers();
    };
}
